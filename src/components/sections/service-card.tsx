import Link from "next/link";
import { GradientEdge } from "@/components/shared/gradient-edge";
import { SiteImage } from "@/components/shared/site-image";
import { Reveal } from "@/components/motion/reveal";
import type { Service } from "@/content/services";

/** Kartu layanan: gambar penuh, judul di bawah, panah dan zoom saat hover. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative overflow-hidden">
      <Link href={service.href} className="on-dark group relative block">
        <SiteImage
          src="/images/misc/up-right-arrow.webp"
          className="absolute top-0 right-0 z-[2] w-20 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 z-[4] mb-0 p-6 pb-0">
          <h2 className="text-[40px]">{service.title}</h2>
        </div>
        <Reveal animation="scale-in" duration={1.5} className="relative overflow-hidden">
          <SiteImage
            src={service.image}
            className="w-full transition-transform duration-500 group-hover:scale-[1.2]"
          />
        </Reveal>
        <GradientEdge edge="bottom" height={70} />
      </Link>
    </div>
  );
}
