import { NumberedList } from "@/components/shared/numbered-list";
import { SiteImage } from "@/components/shared/site-image";
import type { BlogArticle as BlogArticleData } from "@/content/blog";

/** Isi artikel: paragraf pembuka, gambar, langkah bernomor, penutup. */
export function BlogArticle({ article }: { article: BlogArticleData }) {
  return (
    <div className="[&_h4]:text-[24px] [&_h4]:tracking-normal [&_h4]:text-ink [&_h4]:normal-case">
      <p>{article.intro}</p>
      <SiteImage src={article.image} className="mb-6 w-full" />
      <NumberedList items={article.steps} />
      <p>{article.outro}</p>
    </div>
  );
}
