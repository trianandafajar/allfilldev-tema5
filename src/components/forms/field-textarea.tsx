import type { ComponentProps } from "react";
import { fieldStyles, type FieldVariant } from "@/components/forms/form-styles";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FieldTextareaProps = ComponentProps<typeof Textarea> & {
  variant?: FieldVariant;
  /** padanan kelas `error_input` */
  invalid?: boolean;
};

/** Textarea bergaya template; tinggi mengikuti `rows` atau kelas tinggi, bukan konten. */
export function FieldTextarea({
  variant = "control",
  invalid,
  className,
  ...props
}: FieldTextareaProps) {
  return (
    <Textarea
      aria-invalid={invalid || undefined}
      className={cn(fieldStyles[variant], "field-sizing-fixed min-h-0", className)}
      {...props}
    />
  );
}
