import { getProjectDetail, projectSlugs } from "@/content/projects";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return new Response(null, { status: 404 });
  return createOgImage({ title: project.title, eyebrow: "Project", image: project.heroImage });
}
