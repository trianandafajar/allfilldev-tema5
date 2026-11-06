import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/sections/project-details";
import { ProjectSingleHero } from "@/components/sections/project-single-hero";
import { RelatedProjects } from "@/components/sections/related-projects";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { getProjectDetail, projectSlugs, projects } from "@/content/projects";
import { projectPath } from "@/lib/paths";
import { creativeWorkSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  const path = projectPath(slug);
  return pageMetadata(path, {
    title: project.title,
    description: project.description,
    image: `${path}/opengraph-image`,
    noindex: project.placeholder,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) notFound();
  const path = projectPath(slug);

  return (
    <>
      <PageJsonLd
        path={path}
        name={project.title}
        description={project.description}
        image={project.heroImage}
        nodes={[
          creativeWorkSchema({
            name: project.title,
            description: project.description,
            url: absoluteUrl(path),
            image: project.heroImage,
          }),
        ]}
      />
      <ProjectSingleHero title={project.title} intro={project.intro} image={project.heroImage} />
      <ProjectDetails detail={project} />
      <RelatedProjects projects={projects.filter((item) => item.slug !== slug)} />
    </>
  );
}
