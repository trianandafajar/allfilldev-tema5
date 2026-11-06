"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-5 z-[1020] flex size-10 items-center justify-center rounded-full bg-primary text-white transition-[opacity,transform,bottom] duration-200 ease-out hover:scale-110 max-[992px]:hidden",
        show ? "bottom-5 opacity-100" : "-bottom-10 opacity-0",
      )}
    >
      <ChevronUp className="size-[18px]" />
    </button>
  );
}
