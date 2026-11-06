import { ProjectOverlayCard } from "@/components/sections/project-card";
import { SectionHeader } from "@/components/sections/section-header";
import { CarouselNav, CarouselNavProvider } from "@/components/shared/carousel-nav";
import { ItemCarousel } from "@/components/shared/item-carousel";
import type { Project } from "@/content/projects";

type ProjectsSliderProps = {
  subtitle: string;
  title: string;
  description: string;
  projects: Project[];
};

/** Section proyek terbaru: header dengan tombol prev/next dan carousel dua kolom. */
export function ProjectsSlider({
  subtitle,
  title,
  description,
  projects,
}: ProjectsSliderProps) {
  return (
    <section>
      <div className="container">
        <CarouselNavProvider>
          <SectionHeader
            subtitle={subtitle}
            title={title}
            description={description}
            aside={<CarouselNav />}
            titleClassName="mb-2"
          >
            <ItemCarousel cols={2}>
              {projects.map((project) => (
                <ProjectOverlayCard key={project.title} project={project} />
              ))}
            </ItemCarousel>
          </SectionHeader>
        </CarouselNavProvider>
      </div>
    </section>
  );
}
