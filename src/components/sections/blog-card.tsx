import Link from "next/link";
import { Calendar } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SiteImage } from "@/components/shared/site-image";
import { formatDate } from "@/lib/format-date";
import type { BlogPost } from "@/content/blog";

/** Kartu artikel: gambar zoom saat hover, judul, kutipan, penulis dan tanggal. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group flex h-full flex-col">
      <div className="relative overflow-hidden">
        <Reveal animation="scale-in">
          <SiteImage
            src={post.image}
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />
        </Reveal>
        <Link
          href={post.href}
          aria-label={post.title}
          className="absolute top-0 left-0 block size-full"
        />
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <h3>
          <Link href={post.href} className="text-heading">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1">{post.excerpt}</p>
        <div className="relative">
          <SiteImage
            src={post.authorImage}
            className="mr-2 inline w-5 rounded-full"
          />
          <div className="mr-12 inline text-[14px]">{post.author}</div>
          <div className="inline text-[14px]">
            <Calendar
              aria-hidden="true"
              className="mr-2 inline size-[14px] align-[-2px] text-primary"
            />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
