import { Col, Row } from "@/components/layout/grid";
import { BlogCard } from "@/components/sections/blog-card";
import { SectionHeader } from "@/components/sections/section-header";
import type { BlogPost } from "@/content/blog";

type BlogPreviewProps = {
  subtitle: string;
  title: string;
  description: string;
  posts: BlogPost[];
};

/** Section artikel terbaru: header lalu tiga kartu, di atas latar tipis warna primer. */
export function BlogPreview({ subtitle, title, description, posts }: BlogPreviewProps) {
  return (
    <section className="bg-primary/10">
      <div className="container">
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          titleSpan={5}
        />
        <Row gx={4} gy={5}>
          {posts.map((post) => (
            <Col key={post.title} lg={4} md={6}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
