/**
 * Tanda logo (chevron di dalam bingkai terbuka) sebagai path SVG dalam kotak 83 x 73.
 * Satu sumber untuk skrip ikon (`scripts/generate-icons.ts`) dan gambar share (`og-card`).
 */
export const brandMark = {
  width: 83,
  height: 73,
  paths: [
    "M0 0H83V73H78V5H5V73H0Z",
    "M5 43.5L41.5 12L78 43.5V51L41.5 20L5 51Z",
    "M5 60.5L41.5 29.5L78 60.5V68L41.5 37L5 68Z",
  ],
} as const;
