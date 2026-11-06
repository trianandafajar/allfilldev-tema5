import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tone = {
  success:
    "border-success bg-success/10 text-success",
  error:
    "border-error bg-error/10 text-error",
} as const;

type FormMessageProps = {
  variant: keyof typeof tone;
  /** true = gaya `.alert` Bootstrap (form kontak), false = kotak `.success` / `.error` */
  alert?: boolean;
  children: ReactNode;
  className?: string;
};

/** Pesan hasil kirim form: sukses atau gagal. */
export function FormMessage({ variant, alert = false, children, className }: FormMessageProps) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={cn(
        "animate-in border fade-in duration-500",
        tone[variant],
        alert ? "mt-4 rounded-[6px] p-4" : "mt-[30px] p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
