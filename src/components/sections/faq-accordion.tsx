import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/utils";

const iconClass =
  "**:data-[slot=accordion-trigger-icon]:absolute **:data-[slot=accordion-trigger-icon]:top-[22.5px] **:data-[slot=accordion-trigger-icon]:size-[15px] **:data-[slot=accordion-trigger-icon]:text-dark-1";

type FaqAccordionProps = {
  items: readonly FaqItem[];
  /** boxed: tiap item dalam kotak ber-border (.accordion-s1); lined: hanya garis bawah per judul (.accordion) */
  variant?: "boxed" | "lined";
};

/** Daftar tanya-jawab: satu item terbuka pada satu waktu. */
export function FaqAccordion({ items, variant = "boxed" }: FaqAccordionProps) {
  const boxed = variant === "boxed";
  return (
    <Accordion type="single" collapsible>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          value={`item-${i}`}
          className={cn("[&>h3]:mb-0", boxed ? "mb-5 border border-soft" : "border-0 not-last:border-b-0")}
        >
          <AccordionTrigger
            className={cn(
              "block rounded-none border-0 py-[15px] tracking-[-0.01em] text-base leading-[30px] font-semibold text-heading hover:no-underline",
              boxed
                ? "px-[25px] **:data-[slot=accordion-trigger-icon]:right-[32.5px]"
                : "border-b border-soft px-0 **:data-[slot=accordion-trigger-icon]:right-[7.5px]",
              iconClass,
            )}
          >
            <span aria-hidden="true" className="float-right h-[30px] w-[30px]" />
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={cn("text-base", boxed ? "px-[25px] pb-[15px]" : "pt-[15px] pb-[15px]")}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
