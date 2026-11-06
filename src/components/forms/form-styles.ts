/**
 * Gaya kolom form template di atas komponen shadcn.
 * - control: `.form-control` (contact, consultation)
 * - bordered: `.form-border` (form komentar)
 * Status error memakai aria-invalid: hanya border bawah yang merah, seperti `.error_input`.
 */
export const fieldStyles = {
  control:
    "block h-auto w-full min-w-0 tracking-normal rounded-[6px] border border-black/5 bg-black/[.025] p-[10px] text-base leading-normal text-ink transition-none placeholder:text-menu focus:bg-white focus:border-primary focus-visible:border-primary focus-visible:ring-0 md:text-base aria-invalid:border-black/5 aria-invalid:border-b-destructive! aria-invalid:ring-0",
  bordered:
    "mb-[10px] block h-auto w-full min-w-0 tracking-normal rounded-[2px] border-2 border-grey bg-black/[.025] p-2 text-base leading-normal text-ink shadow-none transition-none focus:bg-primary/10 focus-visible:border-grey focus-visible:ring-0 md:text-base",
} as const;

export type FieldVariant = keyof typeof fieldStyles;
