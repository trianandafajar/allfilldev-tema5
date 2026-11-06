import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Padanan .subtitle: label kecil kapital di atas judul section. */
export function Subtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mb-5 inline-block text-lg font-medium uppercase leading-[1.5em] tracking-normal text-body in-[.on-dark]:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
