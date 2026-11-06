export const company = {
  name: "Intrio",
  email: "contact@intrio.com",
  phone: "+62 812 3456 7890",
  address: "Jl. Jenderal Sudirman No. 100, Jakarta",
  addressShort: "Jl. Jenderal Sudirman No. 100,",
  /** alamat terstruktur untuk schema.org PostalAddress (samakan dengan `address`) */
  streetAddress: "Jl. Jenderal Sudirman No. 100",
  city: "Jakarta",
  region: "DKI Jakarta",
  country: "ID",
  hours: "Senin - Sabtu 08.00 - 18.00",
  /** jam buka terstruktur untuk schema.org; samakan dengan `hours` */
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  about:
    "Ubah rumah, kantor, atau ruang komersial Anda lewat layanan desain interior profesional yang disesuaikan dengan visi dan gaya hidup Anda. Para desainer berpengalaman kami menciptakan interior khusus yang memadukan fungsi, kenyamanan, dan gaya yang abadi.",
  social: ["facebook", "x", "instagram", "youtube", "whatsapp"] as const,
  /**
   * URL profil sosial resmi untuk `sameAs` JSON-LD. Kosong sampai akun asli ada; jangan
   * isi dengan URL karangan. Contoh: `{ instagram: "https://instagram.com/namaakun" }`.
   */
  socialUrls: {} as Partial<Record<"facebook" | "x" | "instagram" | "youtube" | "whatsapp", string>>,
  copyright: "© 2026 allfilldev. Hak dilindungi.",
} as const;

export const serviceLinks = [
  "Pemilihan Furnitur & Dekorasi",
  "Pengembangan Konsep",
  "Renovasi & Perencanaan Ruang",
  "Render Visual Desain",
  "Desain Interior Hunian",
  "Desain Interior Komersial",
] as const;
