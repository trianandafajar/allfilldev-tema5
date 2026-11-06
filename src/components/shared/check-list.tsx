import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: readonly string[];
  className?: string;
};

/** Padanan `ul.ul-check`: daftar dengan tanda centang berwarna primer di kiri. */
export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("mb-4 list-none p-0", className)}>
      {items.map((item) => (
        <li key={item} className="relative mb-[5px] block pl-[30px] leading-[1.6em]">
          <Check
            aria-hidden="true"
            strokeWidth={3}
            className="absolute top-1 left-[2.5px] size-[15px] text-primary"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
