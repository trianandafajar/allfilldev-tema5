import { cn } from "@/lib/utils";

type NumberedListProps = {
  items: { title: string; text: string }[];
  className?: string;
};

/** Padanan `ol.ol-style-1`: daftar bernomor dengan lingkaran angka di kiri. */
export function NumberedList({ items, className }: NumberedListProps) {
  return (
    <ol
      className={cn(
        "m-0 ml-[50px] list-none p-0 text-base font-bold [counter-reset:ordered]",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="mb-5 table text-[18px] leading-[30px] font-medium [counter-increment:ordered] before:absolute before:-ml-[50px] before:inline-block before:size-10 before:rounded-full before:bg-primary before:p-[5px] before:text-center before:font-normal before:text-white before:content-[counter(ordered)]"
        >
          <h4>{item.title}</h4>
          <p className="font-normal">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
