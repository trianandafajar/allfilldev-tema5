"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type HeroSliderProps = {
  /** path gambar di /public */
  images: string[];
  /** jeda antar slide dalam ms (Swiper autoplay delay) */
  delay?: number;
  /** durasi transisi dalam ms (Swiper speed) */
  speed?: number;
  className?: string;
};

/**
 * Padanan Swiper effect "creative" pada hero: slide lama membesar sedikit sambil
 * memudar, slide baru masuk dari skala lebih besar ke normal. Mengisi parent (absolute).
 */
export function HeroSlider({
  images,
  delay = 4000,
  speed = 1500,
  className,
}: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setTimeout(() => {
      setLeaving(active);
      setActive((active + 1) % images.length);
    }, delay + speed);
    return () => clearTimeout(timer);
  }, [active, images.length, delay, speed]);

  useEffect(() => {
    if (leaving === null) return;
    const timer = setTimeout(() => setLeaving(null), speed);
    return () => clearTimeout(timer);
  }, [leaving, speed]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-dark-1", className)}>
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== active}
          style={{ transitionDuration: `${speed}ms` }}
          className={cn(
            "absolute inset-0 bg-dark-1 transition-[opacity,transform] ease-in-out",
            i === active && "scale-100 opacity-100",
            i === leaving && "scale-110 opacity-0",
            i !== active && i !== leaving && "scale-[1.3] opacity-0",
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-left-top"
          />
          <div className="absolute inset-0 bg-dark-1/80 opacity-50" />
        </div>
      ))}
    </div>
  );
}
