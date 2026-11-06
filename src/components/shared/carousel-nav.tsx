"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type CarouselNavContextValue = {
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi | undefined) => void;
};

const CarouselNavContext = createContext<CarouselNavContextValue | null>(null);

/** Dipakai ItemCarousel untuk mendaftarkan api-nya ke CarouselNav (padanan data-target="#id"). */
export function useCarouselNavRegister() {
  return useContext(CarouselNavContext)?.setApi;
}

/**
 * Menghubungkan satu ItemCarousel dengan CarouselNav yang letaknya di tempat lain
 * dalam markup (padanan .de-custom-nav data-target="#carousel").
 */
export function CarouselNavProvider({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const value = useMemo(() => ({ api, setApi }), [api]);
  return <CarouselNavContext.Provider value={value}>{children}</CarouselNavContext.Provider>;
}

const buttonClass =
  "m-[3px] flex size-10 cursor-pointer items-center justify-center border-0 bg-primary p-0 pt-[3px] text-white transition-opacity duration-500 hover:opacity-80";

/** Padanan .de-custom-nav: tombol prev/next 40px bulat, rata kanan. */
export function CarouselNav({
  circle = true,
  className,
}: {
  circle?: boolean;
  className?: string;
}) {
  const api = useContext(CarouselNavContext)?.api;
  const shape = circle ? "rounded-full" : "";
  return (
    <div className={cn("flex justify-end", className)}>
      <button
        type="button"
        aria-label="Slide sebelumnya"
        onClick={() => api?.scrollPrev()}
        className={cn(buttonClass, shape)}
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Slide berikutnya"
        onClick={() => api?.scrollNext()}
        className={cn(buttonClass, shape)}
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
