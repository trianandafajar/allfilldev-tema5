import { SiteImage } from "@/components/shared/site-image";
import type { BlogComment } from "@/content/blog";

/** Daftar komentar: avatar di kiri, nama, waktu, tautan Reply, lalu isi komentar. */
export function CommentList({ comments }: { comments: BlogComment[] }) {
  return (
    <ol className="mb-4 pl-8">
      {comments.map((comment) => (
        <li
          key={`${comment.name}-${comment.time}`}
          className="mb-5 -ml-10 min-h-[70px] border-b border-line pb-5 text-[15px] leading-[1.6em]"
        >
          <div className="absolute mt-[5px]">
            <SiteImage src={comment.avatar} className="w-[70px]" />
          </div>
          <div className="mb-[5px] ml-[85px]">
            <span className="block font-bold text-menu">{comment.name}</span>
            <span className="text-[12px] text-primary">{comment.time}</span>{" "}
            <span className="ml-5 border-l border-soft pl-5 text-[12px]">
              <a href="#">Balas</a>
            </span>
          </div>
          <div className="ml-[85px]">{comment.text}</div>
        </li>
      ))}
    </ol>
  );
}
