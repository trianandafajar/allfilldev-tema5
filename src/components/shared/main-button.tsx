import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MainButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "main" | "main-dark" | "main-light";
  size?: "main" | "main-sm";
  /** efek fx-slide: teks meluncur ke bawah saat hover */
  slide?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

/** Padanan a.btn-main (+ .fx-slide) pada template. */
export function MainButton({
  href,
  children,
  variant = "main",
  size = "main",
  slide = true,
  className,
  ...props
}: MainButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href} {...props}>
        <span
          className={cn(
            "relative block",
            slide &&
              "transition-all duration-300 ease-in-out group-hover/button:translate-y-10 group-hover/button:opacity-0",
          )}
        >
          {children}
        </span>
      </Link>
    </Button>
  );
}
