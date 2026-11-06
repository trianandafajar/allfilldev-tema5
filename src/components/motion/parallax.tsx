"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  /** 0 = gambar diam, 1 = ikut scroll penuh; default jarallax 0.5 */
  speed?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Padanan jarallax: bungkus gambar latar. Parent harus `relative overflow-hidden`.
 * Gambar dibuat lebih tinggi sebesar jarak geser, lalu bergeser relatif terhadap
 * parent selama parent melintasi viewport.
 */
export function Parallax({ speed = 0.5, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = parent.getBoundingClientRect();
      const viewport = window.innerHeight;
      const extra = (viewport + rect.height) * speed;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      node.style.height = `${rect.height + extra}px`;
      node.style.transform = `translate3d(0, ${clamped * extra - extra}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-x-0 top-0 h-full will-change-transform", className)}
    >
      {children}
    </div>
  );
}
