"use client";

import { useRef, useState } from "react";
import { services, site } from "@/lib/site";

type Field = "namn" | "epost" | "telefon" | "tjanst" | "meddelande";
type Errors = Partial<Record<Field, string>>;

const initial = {
  namn: "",
  epost: "",
  telefon: "",
  tjanst: "",
  meddelande: "",
};

function validate(values: typeof initial): Errors {
  const errors: Errors = {};

  if (!values.namn.trim()) {
    errors.namn = "Fyll i ditt namn så vi vet vem vi svarar.";
  }

  if (!values.epost.trim()) {
    errors.epost = "Vi behöver en e-postadress för att kunna svara.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.epost.trim())) {
    errors.epost = "Kontrollera e-postadressen — den saknar @ eller domän.";
  }

  if (!values.meddelande.trim()) {
    errors.meddelande = "Beskriv jobbet kort så kan vi ge ett bättre svar.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }));
    }
  }

  function blur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({
      namn: true,
      epost: true,
      telefon: true,
      tjanst: true,
      meddelande: true,
    });

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    const body = [
      `Namn: ${values.namn}`,
      `E-post: ${values.epost}`,
      values.telefon && `Telefon: ${values.telefon}`,
      values.tjanst && `Tjänst: ${values.tjanst}`,
      "",
      values.meddelande,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Förfrågan från ${values.namn}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="border border-[var(--color-border)] bg-[var(--color-paper-2)] p-7 sm:p-9"
    >
      <h2 className="display text-[clamp(1.7rem,4vw,2.4rem)]">
        Skicka en förfrågan
      </h2>
      <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
        Fält märkta med <Req /> behövs för att vi ska kunna svara.
      </p>

      <div className="mt-8 space-y-6">
        <TextField
          name="namn"
          label="Namn"
          required
          value={values.namn}
          error={touched.namn ? errors.namn : undefined}
          onChange={(v) => update("namn", v)}
          onBlur={() => blur("namn")}
          autoComplete="name"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            name="epost"
            label="E-post"
            type="email"
            required
            value={values.epost}
            error={touched.epost ? errors.epost : undefined}
            onChange={(v) => update("epost", v)}
            onBlur={() => blur("epost")}
            autoComplete="email"
          />
          <TextField
            name="telefon"
            label="Telefon"
            type="tel"
            value={values.telefon}
            error={touched.telefon ? errors.telefon : undefined}
            onChange={(v) => update("telefon", v)}
            onBlur={() => blur("telefon")}
            autoComplete="tel"
            hint="Snabbast om vi kan ringa upp."
          />
        </div>

        <div>
          <label
            htmlFor="tjanst"
            className="display text-sm tracking-[0.14em]"
          >
            Tjänst
          </label>
          <select
            id="tjanst"
            name="tjanst"
            value={values.tjanst}
            onChange={(e) => update("tjanst", e.target.value)}
            className="mt-2 min-h-[52px] w-full cursor-pointer border-2 border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-base focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <option value="">Vet inte / annat</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="meddelande"
            className="display text-sm tracking-[0.14em]"
          >
            Meddelande <Req />
          </label>
          <p
            id="meddelande-hint"
            className="mt-1 text-sm text-[var(--color-text-muted)]"
          >
            Var ligger jobbet, vad ska göras och när?
          </p>
          <textarea
            id="meddelande"
            name="meddelande"
            rows={6}
            value={values.meddelande}
            onChange={(e) => update("meddelande", e.target.value)}
            onBlur={() => blur("meddelande")}
            aria-describedby="meddelande-hint"
            aria-invalid={touched.meddelande && !!errors.meddelande}
            aria-errormessage={
              touched.meddelande && errors.meddelande
                ? "meddelande-error"
                : undefined
            }
            className={`mt-2 w-full resize-y border-2 bg-[var(--color-paper)] p-4 text-base focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
              touched.meddelande && errors.meddelande
                ? "border-[#b3261e]"
                : "border-[var(--color-border)]"
            }`}
          />
          {touched.meddelande && errors.meddelande && (
            <FieldError id="meddelande-error">{errors.meddelande}</FieldError>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="display mt-8 flex min-h-[54px] w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-accent)] px-9 text-xl tracking-[0.04em] text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-accent-bright)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-brand)] sm:w-auto"
      >
        Skicka förfrågan
      </button>

      <p aria-live="polite" className="mt-4 min-h-6 text-[var(--color-text-muted)]">
        {sent
          ? "Din e-postklient öppnas med förfrågan ifylld. Gick något fel? Ring oss på " +
            site.phone +
            "."
          : ""}
      </p>
    </form>
  );
}

function Req() {
  return (
    <span className="text-[var(--color-accent-text)]" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-2 text-sm font-semibold text-[#b3261e]"
    >
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
      {children}
    </p>
  );
}

function TextField({
  name,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  required = false,
  autoComplete,
  hint,
}: {
  name: Field;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
}) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={name}
        className="display text-sm tracking-[0.14em]"
      >
        {label} {required && <Req />}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-errormessage={errorId}
        aria-describedby={hintId}
        className={`mt-2 min-h-[52px] w-full border-2 bg-[var(--color-paper)] px-4 text-base focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
          error ? "border-[#b3261e]" : "border-[var(--color-border)]"
        }`}
      />
      {hint && (
        <p id={hintId} className="mt-2 text-sm text-[var(--color-text-muted)]">
          {hint}
        </p>
      )}
      {error && errorId && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}
