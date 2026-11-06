"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { Row } from "@/components/layout/grid";

type MasonryGridProps = {
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
  gy?: 0 | 1 | 2 | 3 | 4 | 5;
  /** anak langsung berupa `Col` dengan lebar yang sama */
  children: ReactNode;
};

/**
 * Padanan `#gallery` + Isotope (layoutMode masonry): tiap item ditaruh di kolom
 * terpendek. Sebelum hidrasi tampil sebagai Row biasa.
 */
export function MasonryGrid({ gx = 4, gy = 4, children }: MasonryGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = ref.current;
    const row = wrapper?.firstElementChild as HTMLElement | null;
    if (!wrapper || !row) return;

    const layout = () => {
      const items = Array.from(row.children) as HTMLElement[];
      if (!items.length) return;
      items.forEach((item) => {
        item.style.position = "";
        item.style.transform = "";
      });
      const colWidth = items[0].offsetWidth;
      if (!colWidth) return;
      const cols = Math.max(1, Math.round(row.clientWidth / colWidth));
      // lepas dari flex (align stretch) sebelum mengukur tinggi: tiap item setinggi isinya
      items.forEach((item) => {
        item.style.position = "absolute";
        item.style.left = "0";
        item.style.top = "0";
      });
      const heights = new Array<number>(cols).fill(0);
      const placements = items.map((item) => {
        const margin = parseFloat(getComputedStyle(item).marginTop) || 0;
        const height = item.offsetHeight + margin;
        const col = heights.indexOf(Math.min(...heights));
        const y = heights[col];
        heights[col] += height;
        return { item, x: col * colWidth, y };
      });
      placements.forEach(({ item, x, y }) => {
        item.style.position = "absolute";
        item.style.left = "0";
        item.style.top = "0";
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
      row.style.height = `${Math.max(...heights)}px`;
    };

    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(wrapper);
    // tinggi item berubah saat gambar selesai dimuat (Isotope memakai imagesLoaded)
    let last = (Array.from(row.children) as HTMLElement[]).map((i) => i.offsetHeight);
    const heightObserver = new ResizeObserver(() => {
      const now = (Array.from(row.children) as HTMLElement[]).map((i) => i.offsetHeight);
      if (now.some((h, i) => Math.abs(h - (last[i] ?? 0)) > 2)) {
        layout();
        last = (Array.from(row.children) as HTMLElement[]).map((i) => i.offsetHeight);
      }
    });
    Array.from(row.children).forEach((item) => heightObserver.observe(item));
    return () => {
      observer.disconnect();
      heightObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <Row gx={gx} gy={gy} className="relative">
        {children}
      </Row>
    </div>
  );
}
