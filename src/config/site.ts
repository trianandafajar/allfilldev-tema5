export const siteConfig = {
  name: "Intrio",
  tagline: "Studio desain interior untuk hunian dan ruang komersial",
  description:
    "Intrio adalah studio desain interior untuk hunian dan ruang komersial: konsep, perencanaan ruang, renovasi, visual 3D, dan penataan furnitur.",
  language: "id",
  locale: "id_ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * Hex literal karena manifest, `themeColor`, ikon, dan gambar share tidak bisa membaca
   * CSS variable. Samakan dengan token `--background`, `--bg-dark-1`, `--primary` di
   * `src/app/globals.css` saat tema diganti.
   */
  brand: {
    light: "#f0ebe5",
    dark: "#34241c",
    primary: "#805231",
    mark: "#d19b6c",
  },
} as const;

export const sitePages = [
  {
    path: "/",
    title: "Beranda",
    description:
      "Intrio, studio desain interior untuk hunian dan ruang komersial. Dari konsep hingga penataan akhir, kami wujudkan ruang yang nyaman dan fungsional.",
  },
  {
    path: "/tentang-kami",
    title: "Tentang Kami",
    description:
      "Kenali tim, nilai, dan cara kerja studio desain interior Intrio: merancang ruang yang indah, fungsional, dan mencerminkan gaya hidup Anda.",
  },
  {
    path: "/layanan",
    title: "Layanan",
    description:
      "Layanan desain interior Intrio: interior hunian dan komersial, pengembangan konsep, perencanaan renovasi, visual 3D, serta pemilihan furnitur dan dekorasi.",
  },
  {
    path: "/project",
    title: "Project",
    description:
      "Portofolio project desain interior Intrio: ruang tamu, kamar tidur, dapur, dan ruang komersial yang dirancang dengan detail matang dan tak lekang waktu.",
  },
  {
    path: "/blog",
    title: "Blog",
    description:
      "Artikel dan tips desain interior dari tim Intrio: tata letak, pencahayaan, palet warna, material, dan penyimpanan untuk rumah dan kantor Anda.",
  },
  {
    path: "/faq",
    title: "FAQ",
    description:
      "Jawaban atas pertanyaan yang sering diajukan tentang layanan, proses, biaya, durasi, dan renovasi desain interior bersama Intrio.",
  },
  {
    path: "/testimoni",
    title: "Testimoni",
    description:
      "Cerita dan ulasan klien tentang pengalaman bekerja sama dengan Intrio, dari konsep awal sampai ruang yang siap ditempati.",
  },
  {
    path: "/kontak",
    title: "Kontak",
    description:
      "Hubungi studio Intrio untuk bertanya, berkonsultasi, atau berkunjung. Temukan alamat kantor, telepon, email, dan jam operasional kami.",
  },
  {
    path: "/konsultasi",
    title: "Konsultasi Gratis",
    description:
      "Ajukan konsultasi desain interior dan estimasi gratis. Ceritakan kebutuhan, gaya, anggaran, dan jadwal Anda, tim kami akan menghubungi Anda.",
  },
  {
    path: "/kebijakan-privasi",
    title: "Kebijakan Privasi",
    description:
      "Kebijakan Privasi Intrio menjelaskan data pribadi yang kami kumpulkan, tujuan penggunaan, penyimpanan, dan hak Anda sebagai pemilik data.",
  },
  {
    path: "/syarat-ketentuan",
    title: "Syarat & Ketentuan",
    description:
      "Syarat & Ketentuan layanan Intrio: lingkup layanan, konsultasi, pembayaran, hak cipta desain, batas tanggung jawab, dan hukum yang berlaku.",
  },
] as const;

export type SitePath = (typeof sitePages)[number]["path"];

/** Halaman legal yang ditautkan di footer. */
export const legalPaths = ["/kebijakan-privasi", "/syarat-ketentuan"] as const satisfies readonly SitePath[];
