"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollScaleProps = {
  from: number;
  to: number;
  /**
   * Rentang scroll absolut dalam px (padanan skrollr data-0 / data-800).
   * Tanpa nilai, skala mengikuti posisi elemen di viewport: `from` saat elemen
   * baru masuk dari bawah, `to` saat elemen keluar di atas
   * (padanan data-top-bottom / data-bottom-top).
   */
  range?: [number, number];
  /** kelas untuk pembungkus luar (ukuran dan posisi) */
  className?: string;
  children: ReactNode;
};

/** Padanan skrollr: menskalakan isi secara linear mengikuti scroll halaman. */
export function ScrollScale({ from, to, range, className, children }: ScrollScaleProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outerNode = outer.current;
    const innerNode = inner.current;
    if (!outerNode || !innerNode) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      let progress: number;
      if (range) {
        progress = (window.scrollY - range[0]) / (range[1] - range[0]);
      } else {
        const rect = outerNode.getBoundingClientRect();
        progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      }
      const clamped = Math.min(Math.max(progress, 0), 1);
      innerNode.style.transform = `scale(${from + (to - from) * clamped})`;
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
  }, [from, to, range]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className="relative h-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
