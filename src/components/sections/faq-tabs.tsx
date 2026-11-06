"use client";

import { Fragment } from "react";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FaqCategory } from "@/content/faq-categories";

const triggerClass =
  "inline-block h-auto flex-none rounded-none border-0 px-5 py-2 text-left text-base leading-[30px] font-normal text-body hover:text-body after:hidden data-active:bg-primary data-active:font-medium data-active:text-white data-active:hover:text-white group-data-[variant=default]/tabs-list:data-active:shadow-none max-[767px]:block max-[767px]:w-full";

/** Tab kategori FAQ (padanan .de-tab); isi tiap tab berupa accordion. */
export function FaqTabs({ categories }: { categories: readonly FaqCategory[] }) {
  return (
    <Tabs defaultValue="0" className="gap-0">
      <TabsList className="mb-6 block h-auto w-full rounded-none bg-transparent p-0 text-left text-body group-data-horizontal/tabs:h-auto">
        {categories.map((category, i) => (
          <Fragment key={category.label}>
            {i > 0 && " "}
            <TabsTrigger value={String(i)} className={triggerClass}>
              {category.label}
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {categories.map((category, i) => (
        <TabsContent
          key={category.label}
          value={String(i)}
          className="animate-in text-base duration-[400ms] fade-in"
        >
          <FaqAccordion items={category.items} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
