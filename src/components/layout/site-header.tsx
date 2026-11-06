"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { ExtraPanel } from "@/components/layout/extra-panel";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MainButton } from "@/components/shared/main-button";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

/**
 * Header transparan di atas hero. Desktop (>= 993px): berubah jadi fixed + gelap saat
 * scroll. Mobile: selalu fixed dengan menu bertingkat.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "absolute top-0 left-0 z-[1001] w-full bg-transparent",
        "min-[993px]:data-[scrolled=true]:fixed min-[993px]:data-[scrolled=true]:bg-dark-1 min-[993px]:data-[scrolled=true]:backdrop-blur-[10px]",
        "max-[992px]:fixed max-[992px]:bg-heading max-[992px]:pb-2.5",
      )}
    >
      <div className="container max-[992px]:!max-w-full max-[992px]:px-5">
        <div className="flex justify-between max-[767px]:pt-2.5">
          <div className="flex items-center justify-center">
            <Link href="/" className="block max-w-[130px]">
              <Image
                src="/images/logo-white.webp"
                alt={company.name}
                width={130}
                height={40}
                priority
                style={{ width: 130, height: "auto" }}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <DesktopNav />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <MainButton
                href="/konsultasi"
                className="max-[992px]:hidden"
              >
                Konsultasi Gratis
              </MainButton>
              <button
                type="button"
                aria-label="Buka/tutup menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="ml-5 hidden size-8 cursor-pointer items-center justify-center p-1 text-white max-[992px]:flex"
              >
                {menuOpen ? <Minus className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
            <ExtraPanel />
          </div>
        </div>

        {menuOpen && (
          <div className="pt-[38px]">
            <MobileNav onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
