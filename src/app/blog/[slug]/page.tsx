import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { BlogDetail } from "@/components/sections/blog-detail";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { blogSlugs, getBlogArticle } from "@/content/blog";
import { blogPath } from "@/lib/paths";
import { blogPostingSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  const path = blogPath(slug);
  return pageMetadata(path, {
    title: article.title,
    description: article.description,
    image: `${path}/opengraph-image`,
    type: "article",
    publishedTime: article.publishedAt,
    authors: [article.author],
    noindex: article.placeholder,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const path = blogPath(slug);

  return (
    <>
      <PageJsonLd
        path={path}
        name={article.title}
        description={article.description}
        image={article.image}
        datePublished={article.publishedAt}
        nodes={[
          blogPostingSchema({
            url: absoluteUrl(path),
            headline: article.title,
            description: article.description,
            image: article.image,
            author: article.author,
            datePublished: article.publishedAt,
          }),
        ]}
      />
      <PageHero title={article.title} compact parent={{ label: "Blog", href: "/blog" }} />
      <BlogDetail article={article} comments={article.comments} />
    </>
  );
}
