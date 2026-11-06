import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SidebarWidgetProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

/** Padanan `.widget`: blok sidebar dengan judul h3. */
export function SidebarWidget({ title, className, children }: SidebarWidgetProps) {
  return (
    <div className={cn("mb-[30px] pb-[30px]", className)}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
