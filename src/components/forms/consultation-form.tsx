"use client";

import { useState, type FormEvent } from "react";
import { FieldCheckbox } from "@/components/forms/field-checkbox";
import { FieldLabel } from "@/components/forms/field-label";
import { FieldInput } from "@/components/forms/field-input";
import { FieldSelect } from "@/components/forms/field-select";
import { FieldTextarea } from "@/components/forms/field-textarea";
import { FormMessage } from "@/components/forms/form-message";
import { sendForm } from "@/components/forms/send-form";
import { Col, Row } from "@/components/layout/grid";
import { Button } from "@/components/ui/button";
import {
  additionalServices,
  consultationSelects,
  type SelectField,
} from "@/content/consultation";

type SelectKey = keyof typeof consultationSelects;
type FieldKey = "name" | "email" | SelectKey;
type Errors = Partial<Record<FieldKey, boolean>>;

const selectKeys = Object.keys(consultationSelects) as SelectKey[];
const emptySelects = Object.fromEntries(selectKeys.map((key) => [key, ""])) as Record<
  SelectKey,
  string
>;

/** Form konsultasi: validasi sisi klien sama dengan js/validation-consultation.js. */
export function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [selects, setSelects] = useState(emptySelects);
  const [services, setServices] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "failed">("idle");

  const clearError = (field: FieldKey) => () =>
    setErrors((current) => ({ ...current, [field]: false }));

  const toggleService = (value: string, checked: boolean) =>
    setServices((current) =>
      checked ? [...current, value] : current.filter((item) => item !== value),
    );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");

    const next: Errors = {
      name: name.length === 0,
      email: email.length === 0 || !email.includes("@"),
    };
    for (const key of selectKeys) next[key] = selects[key].length === 0;
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setSending(true);
    const ok = await sendForm();
    setSending(false);
    setStatus(ok ? "sent" : "failed");
    if (ok) {
      form.reset();
      setSelects(emptySelects);
      setServices([]);
    }
  }

  const renderSelect = (key: SelectKey, field: SelectField) => (
    <div className="field-set">
      <FieldLabel htmlFor={field.name}>
        {field.label}
      </FieldLabel>
      <FieldSelect
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        options={field.options}
        value={selects[key]}
        invalid={errors[key]}
        onClick={clearError(key)}
        onValueChange={(value) => {
          setSelects((current) => ({ ...current, [key]: value }));
          clearError(key)();
        }}
      />
    </div>
  );

  const { projectType, propertySize, designStyle, timeline, budgetRange } = consultationSelects;

  return (
    <form
      name="interior-estimator-form"
      id="interior-estimator-form"
      className="relative"
      noValidate
      onSubmit={handleSubmit}
    >
      <Row gx={4} gy={4}>
        <Col md={6}>
          <div className="field-set">
            <FieldLabel htmlFor="name">
              Nama Anda
            </FieldLabel>
            <FieldInput
              type="text"
              id="name"
              name="name"
              placeholder="Budi Santoso"
              invalid={errors.name}
              onClick={clearError("name")}
              onKeyUp={clearError("name")}
              onChange={clearError("name")}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="field-set">
            <FieldLabel htmlFor="email">
              Alamat Email
            </FieldLabel>
            <FieldInput
              type="email"
              id="email"
              name="email"
              placeholder="anda@contoh.com"
              invalid={errors.email}
              onClick={clearError("email")}
              onKeyUp={clearError("email")}
              onChange={clearError("email")}
            />
          </div>
        </Col>
        <Col md={6}>{renderSelect("projectType", projectType)}</Col>
        <Col md={6}>{renderSelect("propertySize", propertySize)}</Col>
        <Col md={6}>{renderSelect("designStyle", designStyle)}</Col>
        <Col md={6}>{renderSelect("timeline", timeline)}</Col>
        <Col md={12}>
          <FieldLabel className="mb-4 text-body">
            Layanan Tambahan
          </FieldLabel>
          <Row gx={3}>
            {additionalServices.map((service) => (
              <Col key={service.id} md={4}>
                <FieldCheckbox
                  id={service.id}
                  name="services[]"
                  value={service.value}
                  label={service.value}
                  checked={services.includes(service.value)}
                  onCheckedChange={(checked) => toggleService(service.value, checked)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={12}>{renderSelect("budgetRange", budgetRange)}</Col>
        <Col md={12}>
          <div className="field-set">
            <FieldLabel htmlFor="message">
              Detail Project
            </FieldLabel>
            <FieldTextarea
              id="message"
              name="message"
              placeholder="Ceritakan tentang project desain interior Anda: tujuan, gaya yang diinginkan, dan kebutuhan..."
            />
          </div>
        </Col>
        <Col md={12}>
          <Button type="submit" id="send_message" variant="main" size="main" disabled={sending}>
            {sending ? "Mengirim..." : "Dapatkan Estimasi Gratis"}
          </Button>
        </Col>
      </Row>
      {status === "sent" && (
        <FormMessage variant="success">
          Permintaan Anda berhasil dikirim. Tim desain kami akan segera menghubungi Anda.
        </FormMessage>
      )}
      {status === "failed" && (
        <FormMessage variant="error">Maaf, terjadi kesalahan saat mengirim formulir Anda.</FormMessage>
      )}
    </form>
  );
}
