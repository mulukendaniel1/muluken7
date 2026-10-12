export const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  messageMin: 10,
  message: 3000,
} as const;

export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export type ParseResult =
  | { ok: true; data: ContactInput }
  | { ok: false; errors: FieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function normalizeLine(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, "").replace(/\s+/g, " ").trim();
}

export function normalizeText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n?/g, "\n").replace(CONTROL_CHARS, "").trim();
}

export function parseContact(input: unknown): ParseResult {
  const source =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  const data: ContactInput = {
    name: normalizeLine(source.name),
    email: normalizeLine(source.email),
    subject: normalizeLine(source.subject),
    message: normalizeText(source.message),
  };

  const errors: FieldErrors = {};

  if (!data.name) errors.name = "Enter your name.";
  else if (data.name.length > LIMITS.name)
    errors.name = `Keep your name under ${LIMITS.name} characters.`;

  if (!data.email) errors.email = "Enter your email.";
  else if (data.email.length > LIMITS.email || !EMAIL_PATTERN.test(data.email))
    errors.email = "Enter a valid email address.";

  if (!data.subject) errors.subject = "Enter a subject.";
  else if (data.subject.length > LIMITS.subject)
    errors.subject = `Keep the subject under ${LIMITS.subject} characters.`;

  if (data.message.length < LIMITS.messageMin)
    errors.message = `Write at least ${LIMITS.messageMin} characters.`;
  else if (data.message.length > LIMITS.message)
    errors.message = `Keep your message under ${LIMITS.message} characters.`;

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data };
}
