import { RelatedPostsWidget } from "@/components/sections/related-posts-widget";
import { TagWidget } from "@/components/sections/tag-widget";
import { popularTags, relatedPosts } from "@/content/blog";

/** Sidebar detail blog: related posts (tanpa artikel yang sedang dibuka) dan popular tags. */
export function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <>
      <RelatedPostsWidget posts={relatedPosts.filter((post) => post.slug !== currentSlug)} />
      <TagWidget tags={popularTags} />
    </>
  );
}
