# sharp

Dipakai oleh `src/components/shared/site-image.tsx` (`SiteImage`) untuk membaca ukuran asli gambar di `public/` saat render server.

- Alasan: template memakai `<img>` tanpa width/height; `next/image` butuh dimensi. Dengan membaca file langsung, mengganti aset placeholder menjadi aset asli tidak perlu mengubah kode (cukup timpa file di path yang sama di `public/images/`).
- `SiteImage` adalah async Server Component. Tidak bisa dipakai di dalam Client Component; di sana pakai `next/image` dengan `fill` atau dimensi eksplisit, atau oper slide server sebagai `children`.
- `sharp` juga dipakai Next untuk optimasi gambar, jadi sudah ada di `trustedDependencies` di `package.json`.

## Skrip ikon

`scripts/generate-icons.ts` (`bun run icons`) memakai `sharp` untuk merender SVG tanda logo (`src/config/brand-mark.ts`, warna dari `siteConfig.brand`) menjadi `src/app/icon.svg`, `src/app/favicon.ico` (PNG tertanam 16/32/48, ICO ditulis manual), `src/app/apple-icon.png`, dan `public/icons/icon-*.png`. Jalankan ulang setiap logo atau warna merek berubah. Detail ikon dan gambar share ada di `docs/seo.md`.
