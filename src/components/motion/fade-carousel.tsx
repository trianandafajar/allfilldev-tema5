"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeCarouselProps = {
  /** jeda antar slide dalam ms (Owl autoplayTimeout) */
  autoplay?: number;
  /** durasi fade dalam ms */
  speed?: number;
  dots?: boolean;
  className?: string;
  /** tiap child menjadi satu slide */
  children: ReactNode;
};

/** Padanan .owl-single-dots: satu slide per layar, pindah dengan fade, autoplay, berhenti saat hover. */
export function FadeCarousel({
  autoplay = 3000,
  speed = 800,
  dots = true,
  className,
  children,
}: FadeCarouselProps) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      autoplay + speed,
    );
    return () => clearInterval(timer);
  }, [paused, slides.length, autoplay, speed, active]);

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            style={{ transitionDuration: `${speed}ms` }}
            className={cn(
              "col-start-1 row-start-1 transition-opacity ease-in-out",
              i === active ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            {slide}
          </div>
        ))}
      </div>
      {dots && (
        <div className="mt-5 text-center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Buka slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "mx-[5px] size-2 rounded-full border-0 p-0 transition-colors",
                i === active
                  ? "bg-black/50 in-[.on-dark]:bg-white"
                  : "bg-black/15 in-[.on-dark]:bg-white/20",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
