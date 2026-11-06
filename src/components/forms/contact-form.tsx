"use client";

import { useState, type FormEvent } from "react";
import { FieldInput } from "@/components/forms/field-input";
import { FieldTextarea } from "@/components/forms/field-textarea";
import { FormMessage } from "@/components/forms/form-message";
import { sendForm } from "@/components/forms/send-form";
import { Button } from "@/components/ui/button";

type FieldName = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<FieldName, boolean>>;

/** Form kontak: validasi sisi klien sama dengan js/validation-contact.js. */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "failed">("idle");

  const clearError = (field: FieldName) => () =>
    setErrors((current) => ({ ...current, [field]: false }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const email = value("Email");
    const next: Errors = {
      name: value("Name").length === 0,
      email: email.length === 0 || !email.includes("@"),
      phone: value("phone").length === 0,
      message: value("message").length === 0,
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setSending(true);
    const ok = await sendForm();
    setSending(false);
    setStatus(ok ? "sent" : "failed");
  }

  if (status === "sent") {
    return (
      <FormMessage variant="success" alert>
        Pesan Anda berhasil terkirim!
      </FormMessage>
    );
  }

  return (
    <>
      <form name="contactForm" id="contact_form" noValidate onSubmit={handleSubmit}>
        <div className="mb-[16px]">
          <FieldInput
            type="text"
            name="Name"
            id="name"
            placeholder="Nama Anda"
            aria-required="true"
            invalid={errors.name}
            onChange={clearError("name")}
          />
        </div>
        <div className="mb-[16px]">
          <FieldInput
            type="text"
            name="Email"
            id="email"
            placeholder="Email Anda"
            aria-required="true"
            invalid={errors.email}
            onChange={clearError("email")}
          />
        </div>
        <div className="mb-[16px]">
          <FieldInput
            type="text"
            name="phone"
            id="phone"
            placeholder="Telepon Anda"
            aria-required="true"
            invalid={errors.phone}
            onChange={clearError("phone")}
          />
        </div>
        <div className="mb-[16px]">
          <FieldTextarea
            name="message"
            id="message"
            placeholder="Pesan Anda"
            aria-required="true"
            className="h-[100px]"
            invalid={errors.message}
            onChange={clearError("message")}
          />
        </div>
        <div id="submit">
          <Button
            type="submit"
            id="send_message"
            variant="main"
            size="main"
            className="w-full"
            disabled={sending}
          >
            {sending ? "Mengirim..." : "Kirim Pesan"}
          </Button>
        </div>
      </form>
      {status === "failed" && (
        <FormMessage variant="error" alert>
          Pesan gagal terkirim. Silakan coba lagi.
        </FormMessage>
      )}
    </>
  );
}
