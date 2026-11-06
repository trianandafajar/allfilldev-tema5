import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import type { FaqItem } from "@/content/faq";

type FaqSectionProps = {
  title?: string;
  items: readonly FaqItem[];
};

/** Section FAQ dua kolom: judul di kiri, accordion di kanan, dengan jarak pembuka di atas. */
export function FaqSection({ title = "FAQ", items }: FaqSectionProps) {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="mb-12 pb-12" />
        <Row gy={4}>
          <Col lg={4}>
            <Reveal as="h2" animation="fade-in-right">
              {title}
            </Reveal>
          </Col>
          <Col lg={8}>
            <Reveal animation="fade-in-right" delay={0.2}>
              <FaqAccordion items={items} variant="lined" />
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
}
