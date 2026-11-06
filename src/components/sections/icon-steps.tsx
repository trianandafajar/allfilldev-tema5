import type { LucideIcon } from "lucide-react";
import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { Subtitle } from "@/components/shared/subtitle";

type IconStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** judul dirender h2 tipis (hs-4) alih-alih h4 tebal, seperti langkah pertama di template */
  plainTitle?: boolean;
};

type IconStepsProps = {
  subtitle: string;
  heading: string;
  steps: readonly IconStep[];
};

/** Section gelap: judul tengah + langkah proses berikon dengan panah di antara langkah. */
export function IconSteps({ subtitle, heading, steps }: IconStepsProps) {
  return (
    <section className="on-dark bg-dark-1">
      <div className="container">
        <Row gy={4}>
          <Col lg={6} offsetLg={3} className="text-center">
            <div className="text-center">
              <Reveal delay={0}>
                <Subtitle>{subtitle}</Subtitle>
              </Reveal>
              <Reveal as="h2" delay={0.2}>
                {heading}
              </Reveal>
            </div>
          </Col>
        </Row>
        <Row gx="base" justify="center">
          {steps.map(({ icon: Icon, title, description, plainTitle }, i) => (
            <Reveal
              key={title}
              animation="fade-in-right"
              delay={0.4 + i * 0.2}
              className="relative w-[50%] max-w-full shrink-0 p-5 text-center after:absolute after:top-1/2 after:-right-[25px] after:-translate-y-1/2 after:text-[24px] after:text-white after:content-['→'] last:after:hidden max-[767px]:after:hidden md:w-[25%]"
            >
              <div className="mb-[21px]">
                <Icon aria-hidden="true" className="mx-auto block size-10 text-primary" />
              </div>
              {plainTitle ? (
                <h2 className="hs-4">{title}</h2>
              ) : (
                <h4 className="font-bold">{title}</h4>
              )}
              <p>{description}</p>
            </Reveal>
          ))}
        </Row>
      </div>
    </section>
  );
}
