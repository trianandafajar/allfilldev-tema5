import Link from "next/link";
import { Col, Row } from "@/components/layout/grid";
import { SidebarWidget } from "@/components/shared/sidebar-widget";
import { SiteImage } from "@/components/shared/site-image";
import { formatDate } from "@/lib/format-date";
import type { RelatedPost } from "@/content/blog";

/** Widget sidebar: thumbnail kecil + judul + tanggal. */
export function RelatedPostsWidget({
  title = "Artikel Terkait",
  posts,
}: {
  title?: string;
  posts: RelatedPost[];
}) {
  return (
    <SidebarWidget title={title}>
      {posts.map((post) => (
        <Row key={post.title} gx={4} gy={4} className="mb-6">
          <Col span={4}>
            <Link href={post.href}>
              <SiteImage src={post.image} className="w-full rounded-[0.25rem]" />
            </Link>
          </Col>
          <Col span={8}>
            <Link href={post.href}>
              <h4 className="mb-0">{post.title}</h4>
            </Link>
            <span className="text-[14px]">{formatDate(post.publishedAt)}</span>
          </Col>
        </Row>
      ))}
    </SidebarWidget>
  );
}
