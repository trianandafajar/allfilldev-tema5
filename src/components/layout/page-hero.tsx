import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Col, Row } from "@/components/layout/grid";
import { GradientEdge } from "@/components/shared/gradient-edge";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  /** teks singkat di kolom kanan (opsional) */
  description?: string;
  /** ukuran judul lebih kecil untuk judul panjang (mis. detail blog); tetap `h1` demi SEO */
  compact?: boolean;
  /** teks item breadcrumb terakhir; default sama dengan title */
  crumb?: string;
  /** halaman induk di breadcrumb, mis. Blog untuk detail artikel */
  parent?: { label: string; href: string };
  /** path gambar latar di /public */
  image?: string;
  className?: string;
};

/** Padanan subheader halaman dalam: judul + breadcrumb di atas gambar parallax gelap. */
export function PageHero({
  title,
  description,
  compact = false,
  crumb,
  parent,
  image = "/images/background/2.webp",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("on-dark relative overflow-hidden bg-dark-1", className)}>
      <Parallax>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="container relative z-[2]">
        <Row gx={5} gy={4} align="center">
          <Col md={8}>
            <div className="block h-[60px] w-full max-[992px]:hidden" />
            <Reveal
              as="h1"
              delay={0.2}
              className={cn(
                "mb-4 max-[767px]:mb-[15px]",
                compact && "text-[48px] leading-none tracking-[-0.96px] max-[992px]:text-[40px] max-[767px]:text-[36px]",
              )}
            >
              {title}
            </Reveal>
            <Reveal
              as="ul"
              className="m-0 mb-[-50px] inline-block list-none pt-2.5 pl-0 text-base leading-[21px] max-[992px]:mb-0 max-[767px]:mb-1 font-semibold tracking-normal text-white"
            >
              <li className="inline">
                <Link href="/" className="opacity-60 transition-opacity hover:opacity-100">
                  Beranda
                </Link>
                <ChevronRight
                  aria-hidden="true"
                  strokeWidth={3.5}
                  className="mx-2.5 inline size-[10px] align-baseline"
                />
              </li>
              {parent && (
                <li className="inline">
                  <Link href={parent.href} className="opacity-60 transition-opacity hover:opacity-100">
                    {parent.label}
                  </Link>
                  <ChevronRight
                    aria-hidden="true"
                    strokeWidth={3.5}
                    className="mx-2.5 inline size-[10px] align-baseline"
                  />
                </li>
              )}
              <li className="inline">{crumb ?? title}</li>
            </Reveal>
          </Col>
          {description && (
            <Col md={4}>
              <Reveal as="p" animation="fade-in-right" delay={0.2} className="mb-0">
                {description}
              </Reveal>
            </Col>
          )}
        </Row>
      </div>
      <GradientEdge edge="bottom" height={50} opacity={0.6} />
      <div className="absolute inset-0 bg-dark-1/80 opacity-50" />
    </section>
  );
}
