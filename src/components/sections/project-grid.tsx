import { Col, Row } from "@/components/layout/grid";
import { ProjectOverlayCard } from "@/components/sections/project-card";
import type { Project } from "@/content/projects";

/** Section daftar project: 2 kolom, gambar besar dengan judul di atas gambar. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section>
      <div className="container">
        <Row gy={4} gx={4}>
          {projects.map((project) => (
            <Col key={project.title} lg={6}>
              <ProjectOverlayCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
