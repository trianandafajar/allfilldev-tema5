import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  count?: number;
  /** kelas untuk wadah (warna, jarak antar bintang lewat gap) */
  className?: string;
  /** kelas untuk tiap ikon bintang (ukuran) */
  iconClassName?: string;
};

/** Padanan .d-stars: deretan bintang penuh; warna mengikuti `currentColor`. */
export function StarRating({
  count = 5,
  className,
  iconClassName = "size-4",
}: StarRatingProps) {
  return (
    <span className={cn("inline-flex align-middle", className)} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className={cn("fill-current stroke-0", iconClassName)} />
      ))}
    </span>
  );
}
