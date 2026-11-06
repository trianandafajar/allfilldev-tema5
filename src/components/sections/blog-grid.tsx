import { Col, Row } from "@/components/layout/grid";
import { BlogCard } from "@/components/sections/blog-card";
import type { BlogPost } from "@/content/blog";

/** Section daftar artikel tiga kolom (dua di tablet). */
export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section>
      <div className="container">
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
