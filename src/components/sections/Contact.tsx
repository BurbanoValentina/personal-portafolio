import { useState, useCallback, useMemo, memo } from "react";
import type { ChangeEvent } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm: FormData = { name: "", email: "", phone: "", subject: "", message: "" };
const LIMITS = {
  name: 80,
  email: 254,
  phone: 15,
  subject: 120,
  message: 2000,
} as const;
const MIN_PHONE_DIGITS = 7;

const _ep = ["valentinaburbano1406", "gmail", "com"];
const getEmail = () => `${_ep[0]}@${_ep[1]}.${_ep[2]}`;
const getWhatsApp = () => `https://wa.me/${"5731477" + "18048"}`;

const saveMessageLocally = (payload: FormData): void => {
  const key = "contact_messages_fallback";
  const raw = window.localStorage.getItem(key);
  const current = raw ? JSON.parse(raw) as Array<FormData & { createdAt: string }> : [];

  current.push({
    ...payload,
    createdAt: new Date().toISOString(),
  });

  window.localStorage.setItem(key, JSON.stringify(current));
};

export const Contact = memo((): React.JSX.Element => {
  const { t } = useLang();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [status, setStatus] = useState<FormStatus>("idle");

  const validators = useMemo(() => ({
    name: (v: string): string | undefined => {
      if (!v.trim()) return t.contact.validation.nameRequired;
      if (v.trim().length < 2) return t.contact.validation.nameMin;
      if (v.trim().length > LIMITS.name) return t.contact.validation.nameMax;
      if (!/^[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ\s'-]+$/.test(v.trim())) return t.contact.validation.nameInvalid;
      if (/(.)\1{3,}/.test(v.trim())) return t.contact.validation.nameRepeat;
      return undefined;
    },
    email: (v: string): string | undefined => {
      if (!v.trim()) return t.contact.validation.emailRequired;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return t.contact.validation.emailInvalid;
      if (v.trim().length > LIMITS.email) return t.contact.validation.emailTooLong;
      return undefined;
    },
    phone: (v: string): string | undefined => {
      if (!v.trim()) return undefined;
      if (!/^\d+$/.test(v.trim())) return t.contact.validation.phoneDigitsOnly;
      if (v.trim().length < MIN_PHONE_DIGITS || v.trim().length > LIMITS.phone) return t.contact.validation.phoneLength;
      if (/^(\d)\1+$/.test(v.trim())) return t.contact.validation.phoneRepeat;
      return undefined;
    },
    subject: (v: string): string | undefined => {
      if (!v.trim()) return t.contact.validation.subjectRequired;
      if (v.trim().length < 3) return t.contact.validation.subjectMin;
      if (v.trim().length > LIMITS.subject) return t.contact.validation.subjectMax;
      if (/(.)\1{4,}/.test(v.trim())) return t.contact.validation.subjectRepeat;
      return undefined;
    },
    message: (v: string): string | undefined => {
      if (!v.trim()) return t.contact.validation.messageRequired;
      if (v.trim().length < 10) return t.contact.validation.messageMin;
      if (v.trim().length > LIMITS.message) return t.contact.validation.messageMax;
      return undefined;
    },
  }), [t]);

  const handleChange = useCallback(
    (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let val = e.target.value;
      if (field === "phone") {
        val = val.replace(/\D/g, "");
      }
      setForm((prev) => ({ ...prev, [field]: val }));
      if (touched.has(field)) {
        setErrors((prev) => ({ ...prev, [field]: validators[field](val) }));
      }
    },
    [touched, validators]
  );

  const handleBlur = useCallback(
    (field: keyof FormData) => () => {
      setTouched((prev) => new Set(prev).add(field));
      setErrors((prev) => ({ ...prev, [field]: validators[field](form[field]) }));
    },
    [form, validators]
  );

  const handleSubmit = async () => {
    const allFields: (keyof FormData)[] = ["name", "email", "phone", "subject", "message"];
    setTouched(new Set(allFields));

    const errs: FormErrors = {};
    (Object.keys(validators) as (keyof FormData)[]).forEach((key) => {
      const err = validators[key](form[key]);
      if (err) errs[key] = err;
    });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const apiBase = import.meta.env.VITE_API_URL ?? "http://localhost:8787";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send contact message");
      }
    } catch {
      try {
        saveMessageLocally(form);
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
        return;
      }
    }

    setStatus("success");
    setForm(initialForm);
    setTouched(new Set());
    setErrors({});
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputBase =
    "w-full bg-secondary border border-border rounded-2xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";
  const inputErr = "border-red-400/60 focus:border-red-400/80 focus:ring-red-400/20";

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14 md:mb-18 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.contact.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            {t.contact.title1}
            <span className="italic font-normal font-serif text-primary">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* ── Form ── */}
        <div className="max-w-2xl mx-auto">

          {/* Status banners */}
          {status === "success" && (
            <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <CheckCircle size={18} className="text-primary shrink-0" />
              <p className="text-primary text-sm">{t.contact.successMsg}</p>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-red-400/10 border border-red-400/20">
              <AlertCircle size={18} className="text-red-400 shrink-0" />
              <p className="text-red-400 text-sm">{t.contact.errorMsg}</p>
            </div>
          )}

          <div className="space-y-4">
            {/* Name & Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  id="c-name"
                  type="text"
                  placeholder={t.contact.fields.namePlaceholder}
                  value={form.name}
                  maxLength={LIMITS.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  className={`${inputBase} ${touched.has("name") && errors.name ? inputErr : ""}`}
                />
                {touched.has("name") && errors.name && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1 px-1">
                    <AlertCircle size={11} /> {errors.name}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-muted-foreground px-1">{form.name.length}/{LIMITS.name}</p>
              </div>
              <div>
                <input
                  id="c-email"
                  type="email"
                  placeholder={t.contact.fields.emailPlaceholder}
                  value={form.email}
                  maxLength={LIMITS.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  className={`${inputBase} ${touched.has("email") && errors.email ? inputErr : ""}`}
                />
                {touched.has("email") && errors.email && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1 px-1">
                    <AlertCircle size={11} /> {errors.email}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-muted-foreground px-1">{form.email.length}/{LIMITS.email}</p>
              </div>
            </div>

            {/* Phone & Subject row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  id="c-phone"
                  type="tel"
                  placeholder={t.contact.fields.phonePlaceholder}
                  value={form.phone}
                  maxLength={LIMITS.phone}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  className={`${inputBase} ${touched.has("phone") && errors.phone ? inputErr : ""}`}
                />
                {touched.has("phone") && errors.phone && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1 px-1">
                    <AlertCircle size={11} /> {errors.phone}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-muted-foreground px-1">{form.phone.length}/{LIMITS.phone}</p>
              </div>
              <div>
                <input
                  id="c-subject"
                  type="text"
                  placeholder={t.contact.fields.subjectPlaceholder}
                  value={form.subject}
                  maxLength={LIMITS.subject}
                  onChange={handleChange("subject")}
                  onBlur={handleBlur("subject")}
                  className={`${inputBase} ${touched.has("subject") && errors.subject ? inputErr : ""}`}
                />
                {touched.has("subject") && errors.subject && (
                  <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1 px-1">
                    <AlertCircle size={11} /> {errors.subject}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-muted-foreground px-1">{form.subject.length}/{LIMITS.subject}</p>
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                id="c-message"
                rows={6}
                placeholder={t.contact.fields.messagePlaceholder}
                value={form.message}
                maxLength={LIMITS.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                className={`${inputBase} resize-none ${touched.has("message") && errors.message ? inputErr : ""}`}
              />
              <div className="flex justify-between items-center mt-1.5 px-1">
                {touched.has("message") && errors.message ? (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                ) : <span />}
                <span className={`text-xs ${form.message.length > LIMITS.message ? "text-red-400" : "text-muted-foreground"}`}>
                  {form.message.length}/{LIMITS.message}
                </span>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-primary hover:bg-primary/85 text-primary-foreground hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]"
            >
              {status === "sending" ? (
                <><Loader2 size={18} className="animate-spin" /> {t.contact.sending}</>
              ) : (
                <><Send size={16} /> {t.contact.send}</>
              )}
            </button>
          </div>

          {/* ── Quick contact buttons ── */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={`mailto:${getEmail()}`}
              className="group flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-secondary border border-border text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
            >
              <Mail size={16} className="transition-colors duration-300 group-hover:text-primary" />
              {t.contact.emailBtn}
            </a>
            <a
              href={getWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-secondary border border-border text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
            >
              <MessageCircle size={16} className="transition-colors duration-300 group-hover:text-primary" />
              {t.contact.whatsappBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
