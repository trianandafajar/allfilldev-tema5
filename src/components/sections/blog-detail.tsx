import { Col, Row } from "@/components/layout/grid";
import { BlogArticle } from "@/components/sections/blog-article";
import { BlogComments } from "@/components/sections/blog-comments";
import { BlogSidebar } from "@/components/sections/blog-sidebar";
import type { BlogArticle as BlogArticleContent, BlogComment } from "@/content/blog";

type BlogDetailProps = {
  article: BlogArticleContent;
  comments: BlogComment[];
};

/** Section detail artikel: isi + komentar (bila ada) di kiri, sidebar di kanan. */
export function BlogDetail({ article, comments }: BlogDetailProps) {
  return (
    <section>
      <div className="container">
        <Row gx={5}>
          <Col lg={8}>
            <BlogArticle article={article} />
            {comments.length > 0 && (
              <>
                <div className="h-[30px]" />
                <BlogComments comments={comments} />
              </>
            )}
          </Col>
          <Col lg={4}>
            <BlogSidebar currentSlug={article.slug} />
          </Col>
        </Row>
      </div>
    </section>
  );
}
