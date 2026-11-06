import { blogSlugs, getBlogArticle } from "@/content/blog";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return new Response(null, { status: 404 });
  return createOgImage({ title: article.title, eyebrow: "Blog", image: article.image });
}
