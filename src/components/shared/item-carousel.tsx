"use client";

import Autoplay from "embla-carousel-autoplay";
import { Children, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCarouselNavRegister } from "@/components/shared/carousel-nav";
import { cn } from "@/lib/utils";

/** basis per jumlah kolom desktop (>= 1000px), seperti breakpoint responsive Owl */
const desktopBasis = {
  1: "min-[1000px]:basis-full",
  2: "min-[1000px]:basis-1/2",
  3: "min-[1000px]:basis-1/3",
  4: "min-[1000px]:basis-1/4",
} as const;

type ItemCarouselProps = {
  /** kolom di >= 1000px; 600-999px = 2 kolom (jika cols > 1), di bawahnya 1 */
  cols?: 1 | 2 | 3 | 4;
  /** jarak antar item dalam px (Owl margin), default 30 */
  gap?: number;
  loop?: boolean;
  dots?: boolean;
  /** ms; kosong = tanpa autoplay */
  autoplay?: number;
  center?: boolean;
  className?: string;
  /** tiap child menjadi satu slide */
  children: ReactNode;
};

/**
 * Padanan .owl-carousel pada template, dibangun di atas shadcn Carousel (Embla).
 * Preset: owl-2-cols / owl-3-cols / owl-4-cols (+ -center) / owl-single / *-dots.
 */
export function ItemCarousel({
  cols = 1,
  gap = 30,
  loop = true,
  dots = false,
  autoplay,
  center = false,
  className,
  children,
}: ItemCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const slides = Children.toArray(children);

  const plugins = useMemo(
    () =>
      autoplay
        ? [Autoplay({ delay: autoplay, stopOnInteraction: false, stopOnMouseEnter: true })]
        : [],
    [autoplay],
  );

  const registerApi = useCarouselNavRegister();
  useEffect(() => {
    registerApi?.(api);
  }, [api, registerApi]);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const mid = cols > 1 ? "min-[600px]:basis-1/2" : "";

  return (
    <div className={className}>
      <Carousel
        setApi={setApi}
        plugins={plugins}
        opts={{ loop, align: center ? "center" : "start" }}
      >
        <CarouselContent style={{ marginLeft: -gap }}>
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
              style={{ paddingLeft: gap }}
              className={cn("basis-full", mid, desktopBasis[cols])}
            >
              {slide}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {dots && (
        <div className="mt-5 flex justify-center">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Buka slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "mx-[5px] size-2 rounded-full border-0 p-0 transition-colors in-[.on-dark]:bg-white/20",
                i === selected
                  ? "bg-black/50 in-[.on-dark]:bg-white"
                  : "bg-black/15",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
