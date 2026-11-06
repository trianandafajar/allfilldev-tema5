import { CommentForm } from "@/components/forms/comment-form";
import { CommentList } from "@/components/sections/comment-list";
import type { BlogComment } from "@/content/blog";

/** Blok komentar artikel: jumlah, daftar, dan form "Leave a Comment". */
export function BlogComments({ comments }: { comments: BlogComment[] }) {
  return (
    <div className="mt-10">
      <h4>Comments ({comments.length})</h4>
      <div className="h-[15px]" />
      <CommentList comments={comments} />
      <div className="h-[30px]" />
      <div>
        <h4>Tinggalkan Komentar</h4>
        <CommentForm />
      </div>
    </div>
  );
}
