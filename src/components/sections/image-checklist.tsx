import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { CheckList } from "@/components/shared/check-list";
import { SiteImage } from "@/components/shared/site-image";
import { Subtitle } from "@/components/shared/subtitle";

type ImageChecklistProps = {
  image: string;
  subtitle: string;
  heading: string;
  points: readonly string[];
};

/** Section dua kolom: gambar di kiri, subtitle + judul + daftar centang di kanan. */
export function ImageChecklist({ image, subtitle, heading, points }: ImageChecklistProps) {
  return (
    <section>
      <div className="container">
        <Row gx={5} gy={4} align="center">
          <Col lg={6}>
            <Reveal delay={0}>
              <SiteImage src={image} className="h-auto max-w-full" />
            </Reveal>
          </Col>
          <Col lg={6}>
            <Reveal delay={0.2}>
              <Subtitle>{subtitle}</Subtitle>
            </Reveal>
            <Reveal as="h2" delay={0.4}>
              {heading}
            </Reveal>
            <Reveal delay={0.6}>
              <CheckList items={points} />
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
}
