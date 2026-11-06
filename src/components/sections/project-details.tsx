import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { GalleryImage } from "@/components/shared/gallery-image";
import { SiteImage } from "@/components/shared/site-image";
import { Subtitle } from "@/components/shared/subtitle";
import type { ProjectDetail } from "@/content/projects";

/** Ringkasan proyek (tabel fakta + gambar) dan galeri thumbnail dengan lightbox. */
export function ProjectDetails({ detail }: { detail: ProjectDetail }) {
  return (
    <section>
      <div className="container">
        <Row gx={5} gy={4} justify="end">
          <Col md={6}>
            <div className="relative h-full">
              <Subtitle>Detail Project</Subtitle>
              <Reveal as="h2" animation="fade-in-right" delay={0.2} className="text-[36px]">
                {detail.summary}
              </Reveal>
              <div className="absolute bottom-0 w-full max-[992px]:!relative">
                {detail.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between border-b border-soft p-2"
                  >
                    <div>{fact.label}</div>
                    <div>{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Reveal animation="zoom-in" className="relative overflow-hidden">
              <Reveal animation="scale-in">
                <SiteImage src={detail.image} className="w-full" />
              </Reveal>
            </Reveal>
          </Col>
        </Row>

        <div className="h-[30px]" />

        <Row gy={4}>
          {detail.gallery.map((src) => (
            <Col key={src} lg={4}>
              <GalleryImage src={src} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
