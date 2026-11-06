import type { ReactNode } from "react";
import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  subtitle: string;
  title: string;
  description: string;
  /** konten kolom ketiga, mis. CarouselNav */
  aside?: ReactNode;
  /** lebar kolom judul pada >= 992px */
  titleSpan?: 4 | 5;
  className?: string;
  titleClassName?: string;
  /** konten selebar penuh di bawah header, dalam baris grid yang sama (mis. carousel) */
  children?: ReactNode;
};

/** Baris pembuka section: subtitle + judul, paragraf pengantar, dan slot opsional di kanan. */
export function SectionHeader({
  subtitle,
  title,
  description,
  aside,
  titleSpan = 4,
  className,
  titleClassName,
  children,
}: SectionHeaderProps) {
  return (
    <Row gy={4} align="center" justify="between" className={cn("mb-4", className)}>
      <Col lg={titleSpan}>
        <Reveal animation="fade-in" delay={0.2}>
          <Subtitle>{subtitle}</Subtitle>
          <Reveal as="h2" animation="fade-in-right" className={titleClassName}>
            {title}
          </Reveal>
        </Reveal>
      </Col>
      <Col lg={4}>
        <p>{description}</p>
      </Col>
      {aside && (
        <Col lg={4}>
          <div className="relative">{aside}</div>
        </Col>
      )}
      {children && <Col lg={12}>{children}</Col>}
    </Row>
  );
}
