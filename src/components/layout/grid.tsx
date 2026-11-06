import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const width: Record<string, Record<Span, string>> = {
  base: {
    1: "w-[8.33333333%]",
    2: "w-[16.66666667%]",
    3: "w-[25%]",
    4: "w-[33.33333333%]",
    5: "w-[41.66666667%]",
    6: "w-[50%]",
    7: "w-[58.33333333%]",
    8: "w-[66.66666667%]",
    9: "w-[75%]",
    10: "w-[83.33333333%]",
    11: "w-[91.66666667%]",
    12: "w-[100%]",
  },
  sm: {
    1: "sm:w-[8.33333333%]",
    2: "sm:w-[16.66666667%]",
    3: "sm:w-[25%]",
    4: "sm:w-[33.33333333%]",
    5: "sm:w-[41.66666667%]",
    6: "sm:w-[50%]",
    7: "sm:w-[58.33333333%]",
    8: "sm:w-[66.66666667%]",
    9: "sm:w-[75%]",
    10: "sm:w-[83.33333333%]",
    11: "sm:w-[91.66666667%]",
    12: "sm:w-[100%]",
  },
  md: {
    1: "md:w-[8.33333333%]",
    2: "md:w-[16.66666667%]",
    3: "md:w-[25%]",
    4: "md:w-[33.33333333%]",
    5: "md:w-[41.66666667%]",
    6: "md:w-[50%]",
    7: "md:w-[58.33333333%]",
    8: "md:w-[66.66666667%]",
    9: "md:w-[75%]",
    10: "md:w-[83.33333333%]",
    11: "md:w-[91.66666667%]",
    12: "md:w-[100%]",
  },
  lg: {
    1: "lg:w-[8.33333333%]",
    2: "lg:w-[16.66666667%]",
    3: "lg:w-[25%]",
    4: "lg:w-[33.33333333%]",
    5: "lg:w-[41.66666667%]",
    6: "lg:w-[50%]",
    7: "lg:w-[58.33333333%]",
    8: "lg:w-[66.66666667%]",
    9: "lg:w-[75%]",
    10: "lg:w-[83.33333333%]",
    11: "lg:w-[91.66666667%]",
    12: "lg:w-[100%]",
  },
  xl: {
    1: "xl:w-[8.33333333%]",
    2: "xl:w-[16.66666667%]",
    3: "xl:w-[25%]",
    4: "xl:w-[33.33333333%]",
    5: "xl:w-[41.66666667%]",
    6: "xl:w-[50%]",
    7: "xl:w-[58.33333333%]",
    8: "xl:w-[66.66666667%]",
    9: "xl:w-[75%]",
    10: "xl:w-[83.33333333%]",
    11: "xl:w-[91.66666667%]",
    12: "xl:w-[100%]",
  },
};

const offsetMap: Record<string, Record<Span, string>> = {
  base: {
    1: "ml-[8.33333333%]",
    2: "ml-[16.66666667%]",
    3: "ml-[25%]",
    4: "ml-[33.33333333%]",
    5: "ml-[41.66666667%]",
    6: "ml-[50%]",
    7: "ml-[58.33333333%]",
    8: "ml-[66.66666667%]",
    9: "ml-[75%]",
    10: "ml-[83.33333333%]",
    11: "ml-[91.66666667%]",
    12: "ml-[100%]",
  },
  sm: {
    1: "sm:ml-[8.33333333%]",
    2: "sm:ml-[16.66666667%]",
    3: "sm:ml-[25%]",
    4: "sm:ml-[33.33333333%]",
    5: "sm:ml-[41.66666667%]",
    6: "sm:ml-[50%]",
    7: "sm:ml-[58.33333333%]",
    8: "sm:ml-[66.66666667%]",
    9: "sm:ml-[75%]",
    10: "sm:ml-[83.33333333%]",
    11: "sm:ml-[91.66666667%]",
    12: "sm:ml-[100%]",
  },
  md: {
    1: "md:ml-[8.33333333%]",
    2: "md:ml-[16.66666667%]",
    3: "md:ml-[25%]",
    4: "md:ml-[33.33333333%]",
    5: "md:ml-[41.66666667%]",
    6: "md:ml-[50%]",
    7: "md:ml-[58.33333333%]",
    8: "md:ml-[66.66666667%]",
    9: "md:ml-[75%]",
    10: "md:ml-[83.33333333%]",
    11: "md:ml-[91.66666667%]",
    12: "md:ml-[100%]",
  },
  lg: {
    1: "lg:ml-[8.33333333%]",
    2: "lg:ml-[16.66666667%]",
    3: "lg:ml-[25%]",
    4: "lg:ml-[33.33333333%]",
    5: "lg:ml-[41.66666667%]",
    6: "lg:ml-[50%]",
    7: "lg:ml-[58.33333333%]",
    8: "lg:ml-[66.66666667%]",
    9: "lg:ml-[75%]",
    10: "lg:ml-[83.33333333%]",
    11: "lg:ml-[91.66666667%]",
    12: "lg:ml-[100%]",
  },
  xl: {
    1: "xl:ml-[8.33333333%]",
    2: "xl:ml-[16.66666667%]",
    3: "xl:ml-[25%]",
    4: "xl:ml-[33.33333333%]",
    5: "xl:ml-[41.66666667%]",
    6: "xl:ml-[50%]",
    7: "xl:ml-[58.33333333%]",
    8: "xl:ml-[66.66666667%]",
    9: "xl:ml-[75%]",
    10: "xl:ml-[83.33333333%]",
    11: "xl:ml-[91.66666667%]",
    12: "xl:ml-[100%]",
  },
};

/** Skala gutter Bootstrap (g-0 .. g-5) dalam px. */
/** `base` = `.row` polos tanpa kelas g-* (1.5rem). */
const gutter = { 0: 0, 1: 4, 2: 8, 3: 16, 4: 28.8, 5: 48, base: 24 } as const;
type Gutter = keyof typeof gutter;

type RowProps = {
  /** gutter horizontal (g-*), default 4 = 1.8rem (nilai bootstrap template) */
  gx?: Gutter;
  /** gutter vertikal */
  gy?: Gutter;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  className?: string;
  children: ReactNode;
  as?: ElementType;
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;
const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
} as const;

/** Padanan .row Bootstrap: flex-wrap dengan margin negatif dan gutter lewat CSS variable. */
export function Row({
  gx = 4,
  gy = 0,
  align,
  justify,
  className,
  children,
  as: Tag = "div",
}: RowProps) {
  return (
    <Tag
      className={cn(
        "-mx-[calc(var(--gx)/2)] -mt-[var(--gy)] flex flex-wrap",
        align && alignMap[align],
        justify && justifyMap[justify],
        className,
      )}
      style={{ "--gx": `${gutter[gx]}px`, "--gy": `${gutter[gy]}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type ColProps = {
  /** lebar kolom (1-12) per breakpoint; tanpa nilai = lebar penuh */
  span?: Span;
  sm?: Span;
  md?: Span;
  lg?: Span;
  xl?: Span;
  /** offset (margin-left) per breakpoint */
  offset?: Span;
  offsetSm?: Span;
  offsetMd?: Span;
  offsetLg?: Span;
  offsetXl?: Span;
  className?: string;
  children?: ReactNode;
  as?: ElementType;
};

/** Padanan .col-* / .col-md-* / .offset-* Bootstrap. */
export function Col({
  span,
  sm,
  md,
  lg,
  xl,
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  className,
  children,
  as: Tag = "div",
}: ColProps) {
  return (
    <Tag
      className={cn(
        "mt-[var(--gy)] w-full max-w-full shrink-0 px-[calc(var(--gx)/2)]",
        span && width.base[span],
        sm && width.sm[sm],
        md && width.md[md],
        lg && width.lg[lg],
        xl && width.xl[xl],
        offset && offsetMap.base[offset],
        offsetSm && offsetMap.sm[offsetSm],
        offsetMd && offsetMap.md[offsetMd],
        offsetLg && offsetMap.lg[offsetLg],
        offsetXl && offsetMap.xl[offsetXl],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
