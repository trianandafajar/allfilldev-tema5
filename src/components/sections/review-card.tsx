import { SiteImage } from "@/components/shared/site-image";
import { StarRating } from "@/components/shared/star-rating";
import type { Review } from "@/content/testimonials";

/** Kartu ulasan bergaya Google review: avatar, nama, tanggal, rating, dan kutipan. */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border border-soft p-[30px]">
      <div className="mb-4 flex justify-between">
        <div className="flex items-center">
          <SiteImage
            src={review.image}
            alt=""
            className="mr-4 w-10 rounded-full"
          />
          <div className="mt-2">
            <div className="leading-none font-bold text-heading">{review.name}</div>
            <small className="text-[.875em]">{review.date}</small>
          </div>
        </div>
        <SiteImage src="/images/misc/google-icon.svg" alt="" className="w-[30px]" />
      </div>
      <div className="mb-2 text-[14px] leading-[30px]">
        <StarRating
          className="gap-[1.5px] text-star"
          iconClassName="size-[14px]"
        />
        <span className="ml-2 text-heading">{review.rating}</span>
      </div>
      <p>{review.text}</p>
    </div>
  );
}
