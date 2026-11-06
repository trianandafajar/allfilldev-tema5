"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const animations = {
  "fade-in": "animate-fade-in",
  "fade-in-up": "animate-fade-in-up",
  "fade-in-down": "animate-fade-in-down",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "zoom-in": "animate-zoom-in",
  "scale-in": "animate-scale-in",
} as const;

export type RevealAnimation = keyof typeof animations;

type RevealProps = {
  as?: ElementType;
  animation?: RevealAnimation;
  /** detik, padanan data-wow-delay */
  delay?: number;
  /** detik, padanan data-wow-duration */
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/** Padanan WOW.js: elemen tersembunyi sampai masuk viewport, lalu animasi sekali. */
export function Reveal({
  as: Tag = "div",
  animation = "fade-in-up",
  delay,
  duration,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(shown ? animations[animation] : "invisible", className)}
      style={{
        ...style,
        ...(shown && delay !== undefined ? { animationDelay: `${delay}s` } : {}),
        ...(shown && duration !== undefined
          ? { animationDuration: `${duration}s` }
          : {}),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
