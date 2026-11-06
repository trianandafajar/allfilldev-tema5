import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { CarouselNav, CarouselNavProvider } from "@/components/shared/carousel-nav";
import { ItemCarousel } from "@/components/shared/item-carousel";
import { Subtitle } from "@/components/shared/subtitle";
import { ProjectOverlayCard } from "@/components/sections/project-card";
import type { Project } from "@/content/projects";

type RelatedProjectsProps = {
  projects: Project[];
  title?: string;
  subtitle?: string;
};

/** Section carousel 2 kolom dengan tombol prev/next di kanan judul. */
export function RelatedProjects({
  projects,
  title = "Project Terkait",
  subtitle = "Detail Project",
}: RelatedProjectsProps) {
  return (
    <section className="bg-primary/10">
      <div className="container">
        <CarouselNavProvider>
          <Row gx={5} gy={4} justify="between" align="center">
            <Col md={6}>
              <div className="relative h-full">
                <Subtitle>{subtitle}</Subtitle>
                <Reveal as="h2" animation="fade-in-right" delay={0.2}>
                  {title}
                </Reveal>
              </div>
            </Col>
            <Col lg={4}>
              <div className="relative">
                <CarouselNav />
              </div>
            </Col>
          </Row>
          <Row gy={4}>
            <Col lg={12}>
              <ItemCarousel cols={2}>
                {projects.map((project) => (
                  <ProjectOverlayCard key={project.title} project={project} />
                ))}
              </ItemCarousel>
            </Col>
          </Row>
        </CarouselNavProvider>
      </div>
    </section>
  );
}
