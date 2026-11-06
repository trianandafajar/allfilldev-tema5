# shadcn/ui

Terpasang pada 2026-10-29 lewat `bunx shadcn@latest init -t next -b radix -d -y`.

## Konfigurasi

Sumber kebenaran ada di `components.json`.

| Item | Nilai |
| --- | --- |
| Style | `radix-nova` |
| Base library | Radix (paket `radix-ui`) |
| Base color | `neutral` |
| CSS variables | ya, di `src/app/globals.css` |
| Icon | `lucide-react` |
| RSC | ya |
| Tailwind config | kosong (Tailwind v4, token lewat CSS) |

Alias:

| Alias | Lokasi |
| --- | --- |
| `@/components` | `src/components/` |
| `@/components/ui` | `src/components/ui/` (komponen shadcn) |
| `@/lib/utils` | `src/lib/utils.ts` (`cn`) |
| `@/hooks` | `src/hooks/` |

## Menambah komponen

```bash
bunx shadcn@latest add card
bunx shadcn@latest add dialog input label
```

File masuk ke `src/components/ui/` dan **menjadi milik repo ini**: boleh diedit. Jangan menimpa komponen yang sudah dimodifikasi tanpa `git diff` dulu (`add` akan menanyakan sebelum menimpa; jangan pakai `--overwrite` sembarangan).

Jika sebuah komponen shadcn dimodifikasi dari aslinya, catat perubahannya di bagian "Keputusan dan hal yang perlu diketahui" di bawah.

## Mengubah tema

Seluruh warna dan radius ada di `src/app/globals.css`:

- `:root` untuk mode terang (palet Intrio, hex), `.dark` untuk mode gelap (masih bawaan shadcn, belum dipakai).
- `--radius` mengatur skala radius seluruh komponen. Template Intrio memakai `0px` (sudut tajam).
- `--primary` adalah warna brand utama (`#805231`, scheme-01 Intrio). Token tambahan khas template: `--bg-default`, `--bg-light`, `--bg-dark-1..3`, `--body-color`, `--heading-color`, `--border-soft`, `--menu-text`, `--ink`; semuanya tersedia sebagai utility (`bg-dark-1`, `text-heading`, `border-soft`, ...).

Komponen hanya memakai utility token (`bg-primary`, `text-muted-foreground`, `border-border`). Jangan menulis hex atau palet Tailwind mentah (`zinc-500`) di komponen.

## Keputusan dan hal yang perlu diketahui

- **Radix, bukan Base UI.** CLI menawarkan `radix`, `base`, `aria`. Dipilih Radix karena paling umum dan dokumentasinya paling banyak. Mengganti base di kemudian hari berarti meng-install ulang semua komponen.
- **`cn` dari paket `cn`**, bukan `clsx` + `tailwind-merge`. Ini bawaan CLI saat ini (`src/lib/utils.ts` hanya `export { cn } from "cn"`). Paket tersebut dari org `shadcn-ui` di GitHub. Impor tetap lewat `@/lib/utils`, jadi bisa diganti tanpa menyentuh komponen.
- **Dark mode berbasis class `.dark`.** Boilerplate Next sebelumnya memakai `prefers-color-scheme`; itu dihapus oleh CLI. Saat ini tidak ada toggle dan class `.dark` tidak dipasang di mana pun, jadi tampilan selalu terang. Untuk mengaktifkan, pasang provider tema (mis. `next-themes`) atau pasang class `dark` sendiri. Belum diputuskan.
- **Perbaikan font di `globals.css`.** CLI menulis `--font-sans: var(--font-sans)` (merujuk dirinya sendiri, font tidak akan termuat). Sudah diganti menjadi `var(--font-google-sans)` (Google Sans), sama dengan variabel yang didefinisikan di `src/app/layout.tsx`. Jika menjalankan `shadcn init` ulang atau `--reinstall`, periksa baris ini lagi.
- **Dependency yang ikut terpasang**: `radix-ui`, `class-variance-authority`, `cn`, `lucide-react`, `tw-animate-css`, dan `shadcn` (dipakai untuk `@import "shadcn/tailwind.css"`).
- **Verifikasi**: `tsc --noEmit`, `eslint`, dan `next build` lolos setelah setup. Tampilan di browser belum dicek.
- **Breakpoint dan container mengikuti Bootstrap 5 template Intrio.** `globals.css` mengatur `sm 576`, `md 768`, `lg 992`, `xl 1200`, `2xl 1400` dan utility `container` (1240 / 1200 / 1304, padding 12px; 20px di <= 767) supaya layout identik dengan template. Grid Bootstrap diganti `Row`/`Col` di `src/components/layout/grid.tsx`.
- **Varian `Button` tambahan**: `main`, `main-dark`, `main-light` (ukuran `main`, `main-sm`) untuk tombol `.btn-main` template. `MainButton` (`src/components/shared/main-button.tsx`) menambah efek `fx-slide`.
- **Komponen yang ditambah**: accordion, tabs, dialog, sheet, carousel, input, textarea, label, checkbox, select. Impor `cn` pada semuanya dialihkan ke `@/lib/utils`.
