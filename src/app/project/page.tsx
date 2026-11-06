import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { projects } from "@/content/projects";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { itemListSchema } from "@/lib/schema";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/project");

export default function ProjectsPage() {
  return (
    <>
      <PageJsonLd
        path="/project"
        name="Project"
        type="CollectionPage"
        nodes={[
          itemListSchema(
            "Portofolio project desain interior",
            projects.map((project) => ({
              name: project.title,
              description: project.description,
              url: absoluteUrl(project.href),
              image: project.image,
              type: "CreativeWork",
            })),
          ),
        ]}
      />
      <PageHero title="Project" description={description} />
      <ProjectGrid projects={projects} />
    </>
  );
}
