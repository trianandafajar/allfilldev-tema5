import type { LucideIcon } from "lucide-react";
import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { Subtitle } from "@/components/shared/subtitle";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureCardsProps = {
  subtitle: string;
  heading: string;
  features: readonly Feature[];
};

/** Section terang: judul tengah + kartu fitur tiga kolom (ikon di kotak gelap, nomor, judul, deskripsi). */
export function FeatureCards({ subtitle, heading, features }: FeatureCardsProps) {
  return (
    <section className="bg-surface-light">
      <div className="container">
        <Row gy={4} justify="center">
          <Col lg={6}>
            <div className="mb-12 text-center">
              <Reveal delay={0}>
                <Subtitle>{subtitle}</Subtitle>
              </Reveal>
              <Reveal as="h2" delay={0.2}>
                {heading}
              </Reveal>
            </div>
          </Col>
        </Row>
        <Row gy={4}>
          {features.map(({ icon: Icon, title, description }, i) => (
            <Col key={title} md={4}>
              <Reveal delay={i * 0.2} className="h-full">
                <div className="relative h-full overflow-hidden bg-primary/10 p-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="size-[70px] bg-dark-1 pt-4 text-center text-body-on-dark">
                      <Icon aria-hidden="true" className="mx-auto block size-8" />
                    </div>
                    <span className="text-[14px] font-semibold text-heading">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[24px]">{title}</h3>
                  <p className="mb-0">{description}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
