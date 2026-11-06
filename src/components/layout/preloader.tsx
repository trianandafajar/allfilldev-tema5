"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const dots = [
  [63, 63],
  [68, 56],
  [71, 48],
  [72, 40],
  [71, 32],
  [68, 24],
  [63, 17],
  [56, 12],
] as const;

/** Padanan #de-loader: overlay putih + roller, fade out setelah halaman load. */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => setGone(true), 500);
    return () => clearTimeout(id);
  }, [done]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[20000] flex items-center justify-center bg-white transition-opacity duration-500",
        done && "pointer-events-none opacity-0",
      )}
    >
      <div className="relative inline-block size-20">
        {dots.map(([left, top], i) => (
          <div
            key={i}
            className="absolute inset-0 origin-[40px_40px] animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite]"
            style={{ animationDelay: `${-0.036 * (i + 1)}s` }}
          >
            <span
              className="absolute block size-[5px] rounded-full bg-primary"
              style={{ left: left - 2, top: top - 2 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
