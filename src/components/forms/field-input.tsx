import type { ComponentProps } from "react";
import { fieldStyles, type FieldVariant } from "@/components/forms/form-styles";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FieldInputProps = ComponentProps<typeof Input> & {
  variant?: FieldVariant;
  /** padanan kelas `error_input` */
  invalid?: boolean;
};

/** Input teks bergaya template (`.form-control` / `.form-border`). */
export function FieldInput({
  variant = "control",
  invalid,
  className,
  ...props
}: FieldInputProps) {
  return (
    <Input
      aria-invalid={invalid || undefined}
      className={cn(fieldStyles[variant], className)}
      {...props}
    />
  );
}
