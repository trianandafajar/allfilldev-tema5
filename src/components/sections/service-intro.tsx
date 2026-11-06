import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { CheckList } from "@/components/shared/check-list";
import { Subtitle } from "@/components/shared/subtitle";

type ServiceIntroProps = {
  subtitle: string;
  heading: string;
  description: string;
  highlightsTitle: string;
  highlights: readonly string[];
};

/** Pembuka halaman layanan: judul + deskripsi di kiri, kotak gelap berisi daftar sorotan di kanan. */
export function ServiceIntro({
  subtitle,
  heading,
  description,
  highlightsTitle,
  highlights,
}: ServiceIntroProps) {
  return (
    <section>
      <div className="container">
        <Row gy={4} justify="between">
          <Col lg={6}>
            <Reveal delay={0.2}>
              <Subtitle>{subtitle}</Subtitle>
            </Reveal>
            <Reveal as="h2" delay={0.4}>
              {heading}
            </Reveal>
            <Reveal as="p" delay={0.6}>
              {description}
            </Reveal>
          </Col>
          <Col lg={5}>
            <Reveal delay={0.8} className="on-dark bg-dark-1 p-10">
              <h3>{highlightsTitle}</h3>
              <CheckList items={highlights} />
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
}
