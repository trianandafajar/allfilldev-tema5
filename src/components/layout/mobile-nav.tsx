"use client";

import Link from "next/link";
import { mainMenu } from "@/content/navigation";

/** Padanan menu mobile (<= 992px): daftar tautan yang dibuka lewat tombol hamburger. */
export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <ul className="m-0 w-full list-none p-0 min-[993px]:hidden">
      {mainMenu.map((item) => (
        <li key={item.href} className="w-full border-b border-white/20">
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block w-full py-2.5 text-left text-[15px] uppercase leading-[30px] tracking-normal text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
