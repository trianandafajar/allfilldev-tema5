# SEO, GEO, sitemap

Catatan setup. Dokumen ini diperbarui seiring fitur ditambah; bagian "Belum dikerjakan" adalah daftar kerja berikutnya.

"GEO" di sini berarti Generative Engine Optimization (agar muncul/terkutip di jawaban AI). SEO lokal (area layanan, alamat) tercakup di JSON-LD `Organization` (lihat bagian JSON-LD).

## Yang sudah ada

| Fitur | File | Keterangan |
| --- | --- | --- |
| Identitas situs | `src/config/site.ts` | `siteConfig` (nama, tagline, deskripsi, bahasa, locale, url, warna merek) dan `sitePages` (semua halaman publik + judul + deskripsi) |
| Metadata per halaman | `src/lib/seo.ts` (`pageMetadata`) | title, description, canonical, hreflang, Open Graph, Twitter, gambar share |
| Metadata global | `src/app/layout.tsx` | `metadataBase`, title template, `robots` (max-snippet/max-image-preview), verifikasi Search Console/Bing, `viewport.themeColor`, `appleWebApp` |
| JSON-LD | `src/lib/schema.ts`, `src/components/seo/page-json-ld.tsx` | Builder schema.org dan komponen `PageJsonLd` |
| robots.txt | `src/app/robots.ts` | Izinkan semua, crawler AI diizinkan eksplisit |
| sitemap.xml | `src/app/sitemap.ts` | Dari `sitePages`, plus `lastmod` dan gambar dari data nyata |
| llms.txt / llms-full.txt | `src/app/llms.txt/route.ts`, `src/app/llms-full.txt/route.ts`, `src/lib/llms.ts` | Ringkasan dan versi lengkap konten untuk AI, dibuat dari data di `src/content` |
| Gambar share | `src/app/opengraph-image.tsx` + `opengraph-image.tsx` di tiap `[slug]` | Kartu 1200x630 JPEG, dibuat saat build |
| Ikon | `src/app/{favicon.ico,icon.svg,apple-icon.png}`, `public/icons/*` | Dibuat skrip `bun run icons` |
| Manifest | `src/app/manifest.ts` | PWA dasar (nama, warna, ikon termasuk maskable) |
| Halaman legal | `/kebijakan-privasi`, `/syarat-ketentuan` | Teks di `src/content/legal.ts` |
| 404 | `src/app/not-found.tsx` | Bermerek, `noindex` |
| Header keamanan | `next.config.ts` | `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS |

Tidak ada package tambahan; semua memakai fitur bawaan Next dan `sharp` yang sudah terpasang.

## Environment

`NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) menentukan domain di canonical, sitemap, robots, llms.txt, gambar share, dan JSON-LD. Jika kosong, jatuh ke `http://localhost:3000`, jadi **wajib diisi di production**. Nilainya ikut tertanam saat build, bukan saat runtime.

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` dan `NEXT_PUBLIC_BING_SITE_VERIFICATION` opsional: isi dengan kode verifikasi (hanya isinya, bukan seluruh tag) setelah domain final.

## Menambah halaman publik baru

1. Buat route di `src/app/...`.
2. Daftarkan di `sitePages` (`src/config/site.ts`) dengan `title` dan `description` 120-160 karakter. Otomatis masuk sitemap dan llms.txt.
3. Di `page.tsx`: `export const metadata: Metadata = pageMetadata("/path")`. Judul dinamis: `pageMetadata("/path", { title })`. Jangan menulis `title`, `description`, atau `openGraph` manual: `openGraph` di page **menggantikan** milik layout, dan helper sudah mengisi `siteName`, `locale`, dan gambar share.
4. Tambahkan `<PageJsonLd path="/path" name="Judul" type="..." nodes={[...]} />` sebagai elemen pertama. `nodes` diisi builder dari `src/lib/schema.ts` sesuai isi halaman (`faqSchema`, `serviceSchema`, `itemListSchema`, `blogPostingSchema`, ...).
5. Halaman yang tidak boleh diindeks (login, dashboard): jangan masukkan ke `sitePages`, dan set `robots: { index: false }` pada metadata-nya.
6. Gambar share khusus halaman: tambahkan `opengraph-image.tsx` di foldernya (contoh: `src/app/blog/[slug]/opengraph-image.tsx`, memanggil `createOgImage` dari `src/lib/og-image.tsx`), lalu beri `image: "/path/opengraph-image"` ke `pageMetadata`. Tanpa itu halaman memakai kartu umum `/opengraph-image`.

## JSON-LD

- Layout memuat `HomeAndConstructionBusiness` (bisnis lokal, subtipe `LocalBusiness`) + `WebSite`. Isinya dari `src/content/company.ts` dan `src/content/offices.ts`: alamat, telepon, jam buka, area layanan, kantor cabang (`department`). Nama, alamat, dan telepon harus sama persis dengan footer dan halaman kontak.
- Tiap halaman: `WebPage` (atau subtipe `AboutPage`, `ContactPage`, `CollectionPage`) + `BreadcrumbList`, ditambah node khusus: `ItemList` (layanan, project, blog), `Service`, `CreativeWork`, `BlogPosting`, `FAQPage`, `Person`. Semua terhubung lewat `@id` ke Organization dan WebSite.
- Sengaja **tidak** dibuat: `AggregateRating`/`Review` dari testimoni milik sendiri (melanggar pedoman Google untuk review self-serving), dan `SearchAction` (tidak ada fitur pencarian). `FAQPage` tetap dipasang karena membantu mesin AI, walau Google membatasi rich result FAQ.
- `sameAs` dan geo: `company.socialUrls` masih kosong dan `sameAs` baru muncul bila diisi dengan URL akun asli. Koordinat (`geo`) belum ada; tambahkan di `organizationSchema()` bila ada.

## Ikon dan gambar share

- Tanda logo ada di `src/config/brand-mark.ts` (path SVG), warna di `siteConfig.brand`. `bun run icons` (`scripts/generate-icons.ts`, memakai `sharp`) membuat ulang: `icon.svg`, `favicon.ico` (16/32/48), `apple-icon.png` (180, tanpa transparansi), `public/icons/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`. Ganti logo: ubah `brand-mark.ts` dan/atau `brand`, lalu jalankan ulang.
- Gambar share dirender `next/og` (`ImageResponse`) dari `src/components/seo/og-card.tsx`, lalu dikonversi ke JPEG (hasil PNG ~700 KB, JPEG ~50 KB, aman untuk batas pratinjau WhatsApp). Render dibungkus `"use cache"` agar route tetap statis. Foto latar dibaca dari `public/` dan dikonversi lewat `sharp` karena satori tidak membaca WebP.
- Hex di `siteConfig.brand` harus dicerminkan manual dari token `src/app/globals.css` (manifest, `themeColor`, ikon, dan gambar share tidak bisa membaca CSS variable).

## GEO (mesin AI)

- `robots.ts` menyebut crawler AI satu per satu (OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended) dengan `allow: "/"`. Untuk membatasi satu bot, keluarkan dari daftar itu dan beri `disallow: "/"`.
- `llms.txt` (ringkasan + tautan) dan `llms-full.txt` (layanan, project, seluruh FAQ, artikel, kantor) dibuat dari data di `src/content`, jadi ikut berubah saat konten diubah. Keduanya usulan standar komunitas; belum ada bukti kuat mesin AI utama membacanya. Biayanya kecil, tapi bukan pengganti konten yang jelas, JSON-LD, dan halaman yang bisa di-crawl.
- Konten ditulis ramah GEO lewat data: jawaban FAQ lugas di kalimat pertama, artikel membawa penulis dan tanggal terbit (`publishedAt` ISO), entitas konsisten.

## Halaman legal

`src/content/legal.ts` berisi Kebijakan Privasi dan Syarat & Ketentuan (mengacu UU PDP dan UU ITE), dirender `LegalDocument`. Ini **template umum, bukan nasihat hukum**: tinjau dengan konsultan hukum, sesuaikan dengan proses bisnis nyata (cookie/analitik yang dipakai, pihak ketiga, termin pembayaran), dan perbarui `effectiveDate` setiap revisi (dipakai juga sebagai `lastmod` sitemap dan `dateModified` JSON-LD).

## Keputusan dan batasan

- **Sitemap tanpa `new Date()`.** Dengan `cacheComponents: true`, `new Date()` saat prerender membuat build gagal. `lastmod` hanya dari data nyata (`publishedAt`, `effectiveDate`). Tanggal tampil memakai `formatDate()` (`src/lib/format-date.ts`) dari string ISO, yang aman karena inputnya tetap.
- **Canonical diset per halaman (lewat `pageMetadata`), bukan di layout.** Canonical di layout akan menunjuk semua halaman ke `/`.
- **Judul beranda** memakai `title.absolute` karena template layout tidak berlaku untuk page di segmen yang sama.
- **Satu `h1` per halaman.** `PageHero` selalu `h1` (prop `compact` untuk judul panjang); hero beranda membungkus kedua baris judul dalam satu `h1`.
- **`priority` dan `changeFrequency` di sitemap tidak diisi**: Google mengabaikannya.
- **JSON-LD** disisipkan lewat `<script>` biasa, dengan `<` di-escape (`<`) sesuai panduan Next.
- **HSTS** diset `max-age=31536000` tanpa `includeSubDomains` dan `preload` (keduanya sulit dibatalkan); tambahkan setelah semua subdomain dipastikan HTTPS. Tidak ada CSP agar font dan skrip tidak rusak.
- **Slug tak dikenal mengembalikan status 200, bukan 404.** Dengan `cacheComponents`, shell halaman sudah terkirim sebelum `notFound()` dijalankan, jadi yang tampil adalah halaman 404 bermerek dengan `<meta name="robots" content="noindex">` (perilaku terdokumentasi Next). Untuk status 404 sungguhan, cek slug di `src/proxy.ts` sebelum render.

## Halaman detail (`/blog/[slug]`, `/layanan/[slug]`, `/project/[slug]`)

- Slug ditulis eksplisit di `src/content/{blog,services,projects}.ts` (bukan diturunkan dari judul, agar URL tidak berubah saat judul diedit). `href` dibangun dari slug lewat `src/lib/paths.ts`; **slug adalah URL publik**, jangan diubah setelah live tanpa menambah redirect.
- Setiap item daftar punya halaman. Konten asli ada di Record per slug: `blogArticles`, `serviceDetails`, `projectDetails`. Slug tanpa entri memakai template (judul, gambar, ringkasan dari daftar + isi panjang dari konten contoh) dan ditandai `placeholder`: `noindex`, tidak masuk `sitemap.xml`, dan tidak ditautkan di `llms.txt`.
- **Mengisi konten asli**: tambahkan satu entri di Record yang sesuai (kuncinya slug). Flag `placeholder` otomatis jadi `false`, halaman masuk sitemap dan bisa diindeks.
- `/detail-blog`, `/detail-layanan`, `/detail-project` (URL lama) diarahkan permanen (308) ke halaman asli lewat `redirects()` di `next.config.ts`.

## Belum dikerjakan

- [ ] Isi `NEXT_PUBLIC_SITE_URL` dengan domain final di environment production.
- [ ] Ganti data placeholder (nama, alamat, telepon, email, jam buka, kantor) dengan data bisnis asli, dan samakan dengan Google Business Profile.
- [ ] Isi `company.socialUrls` dengan URL akun resmi (untuk `sameAs`).
- [ ] Tinjau hukum untuk teks Kebijakan Privasi dan Syarat & Ketentuan.
- [ ] Search Console / Bing Webmaster: verifikasi domain (isi variabel verifikasi) dan submit `sitemap.xml`.
- [ ] Validasi dengan Rich Results Test, Schema Markup Validator, dan debugger kartu share (Facebook Sharing Debugger, X/LinkedIn Post Inspector) setelah ada URL publik.
- [ ] Multi-bahasa (`alternates.languages` lebih dari satu bahasa) bila situs lebih dari satu bahasa. Lihat guide `internationalization.md` di docs Next.
- [ ] Ukur Core Web Vitals (Lighthouse/PageSpeed) setelah deploy.
