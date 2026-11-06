"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Mail, MapPin } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SocialLinks } from "@/components/shared/social-links";
import { GradientEdge } from "@/components/shared/gradient-edge";
import { company, serviceLinks } from "@/content/company";
import { projects } from "@/content/projects";

const latestProjects = [1, 2, 3, 4] as const;

/** Padanan #btn-extra + #extra-wrap: ikon dua garis yang membuka panel kanan. */
export function ExtraPanel() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Buka panel info"
          className="group/extra relative ml-5 h-3 w-6 cursor-pointer max-[992px]:hidden"
        >
          <span className="absolute top-0 block w-full border-b-2 border-white transition-all duration-300 group-hover/extra:w-[70%]" />
          <span className="absolute right-0 bottom-0 block w-full border-b-2 border-white transition-all duration-300 group-hover/extra:w-[70%]" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="on-dark w-[500px] max-w-full gap-0 overflow-y-auto border-0 bg-dark-1/85 p-[50px] text-body-on-dark backdrop-blur-[10px] data-[side=right]:w-[500px] data-[side=right]:sm:max-w-[500px]"
      >
        <SheetTitle className="sr-only">Info</SheetTitle>
        <SheetDescription className="sr-only">
          Project terbaru, layanan, dan detail kontak
        </SheetDescription>
        <SheetClose asChild>
          <button
            type="button"
            aria-label="Tutup"
            className="absolute top-[50px] right-[50px] z-[1001] size-[26px] cursor-pointer"
          >
            <span className="absolute top-1/2 block h-0.5 w-full rotate-45 bg-white" />
            <span className="absolute top-1/2 block h-0.5 w-full -rotate-45 bg-white" />
          </button>
        </SheetClose>

        <Image
          src="/images/logo-white.webp"
          alt={company.name}
          width={150}
          height={40}
          className="h-auto w-[150px]"
        />
        <div className="my-[30px] border-b border-white/30" />

        <h4 className="mb-3">Project Terbaru</h4>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {latestProjects.map((n) => (
            <Link
              key={n}
              href={projects[n - 1].href}
              className="group relative block overflow-hidden"
            >
              <Image
                src="/images/misc/up-right-arrow.webp"
                alt=""
                width={64}
                height={64}
                className="absolute top-0 right-0 z-[2] w-2/5 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative overflow-hidden">
                <Image
                  src={`/images/projects-wide/${n}.webp`}
                  alt=""
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-300 group-hover:scale-[1.2]"
                />
              </div>
              <GradientEdge edge="top" height={70} opacity={0.5} />
            </Link>
          ))}
        </div>

        <div className="my-[30px] border-b border-white/30" />
        <h4 className="mb-3">Layanan Kami</h4>
        <ul className="m-0 list-none p-0">
          {serviceLinks.map((label) => (
            <li key={label} className="my-[5px] flex items-start">
              <Check className="mt-[7px] mr-[15px] size-[14px] shrink-0 text-primary" />
              <Link href="/layanan">{label}</Link>
            </li>
          ))}
        </ul>

        <div className="my-[30px] border-b border-white/30" />
        <h4>Hubungi Kami</h4>
        <ContactLines />

        <div className="my-[30px] border-b border-white/30" />
        <h4>Tentang Kami</h4>
        <p>{company.about}</p>
        <SocialLinks />
      </SheetContent>
    </Sheet>
  );
}

function ContactLines() {
  return (
    <>
      <div>
        <Clock className="mr-2 inline size-4 text-primary" />
        {company.hours}
      </div>
      <div>
        <MapPin className="mr-2 inline size-4 text-primary" />
        {company.addressShort}
      </div>
      <div>
        <Mail className="mr-2 inline size-4 text-primary" />
        {company.email}
      </div>
    </>
  );
}
