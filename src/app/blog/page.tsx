import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { BlogGrid } from "@/components/sections/blog-grid";
import { blogArchivePosts } from "@/content/blog";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { itemListSchema } from "@/lib/schema";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/blog");

export default function BlogPage() {
  return (
    <>
      <PageJsonLd
        path="/blog"
        name="Blog"
        type="CollectionPage"
        nodes={[
          itemListSchema(
            "Artikel desain interior",
            blogArchivePosts.map((post) => ({
              name: post.title,
              description: post.excerpt,
              url: absoluteUrl(post.href),
              image: post.image,
              type: "BlogPosting",
            })),
          ),
        ]}
      />
      <PageHero title="Blog" description={description} />
      <BlogGrid posts={blogArchivePosts} />
    </>
  );
}
