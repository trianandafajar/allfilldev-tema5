import type { ComponentProps } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/** Label kolom form template (`.field-set label`): teks abu, satu baris sendiri. */
export function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn("inline-block text-base leading-[30px] font-normal text-menu", className)}
      {...props}
    />
  );
}
