import { servicePath } from "@/lib/paths";

export type Service = {
  slug: string;
  title: string;
  /** path di /public */
  image: string;
  /** dibangun dari `slug` lewat servicePath */
  href: string;
};

const serviceData: Omit<Service, "href">[] = [
  {
    title: "Pemilihan Furnitur & Dekorasi",
    image: "/images/services/3.webp",
    slug: "pemilihan-furnitur-dekorasi",
  },
  {
    title: "Pengembangan Konsep",
    image: "/images/services/4.webp",
    slug: "pengembangan-konsep",
  },
  {
    title: "Renovasi & Perencanaan Ruang",
    image: "/images/services/5.webp",
    slug: "renovasi-perencanaan-ruang",
  },
  {
    title: "Render Visual Desain",
    image: "/images/services/6.webp",
    slug: "render-visual-desain",
  },
  {
    title: "Desain Interior Hunian",
    image: "/images/services/1.webp",
    slug: "desain-interior-hunian",
  },
  {
    title: "Desain Interior Komersial",
    image: "/images/services/2.webp",
    slug: "desain-interior-komersial",
  },
];

export const services: Service[] = serviceData.map((service) => ({
  ...service,
  href: servicePath(service.slug),
}));

export type ServiceSummary = {
  slug: string;
  title: string;
  description: string;
  /** gambar potret (kartu galeri) */
  image: string;
  /** gambar lanskap (daftar bergaya baris / grid bernomor) */
  landscapeImage: string;
  /** dibangun dari `slug` lewat servicePath */
  href: string;
};

/** Urutan dan teks halaman /services, /services-style-2, /services-style-3. */
const serviceSummaryData: Omit<ServiceSummary, "href">[] = [
  {
    title: "Pemilihan Furnitur & Dekorasi",
    description:
      "Furnitur dan dekorasi pilihan yang mempercantik ruang Anda tanpa mengorbankan keselarasan dan keseimbangan. Kami membantu memilih material, tekstur, dan aksen yang mencerminkan kepribadian Anda serta menambah kenyamanan dan daya tarik visual.",
    image: "/images/services/3.webp",
    landscapeImage: "/images/services-landscape/1.webp",
    slug: "pemilihan-furnitur-dekorasi",
  },
  {
    title: "Pengembangan Konsep",
    description:
      "Mengubah ide menjadi konsep desain yang utuh, sesuai visi dan gaya hidup Anda. Kami menentukan arah kreatif, suasana, dan identitas ruang agar fondasinya kuat sebelum masuk ke tahap pelaksanaan yang detail.",
    image: "/images/services/4.webp",
    landscapeImage: "/images/services-landscape/2.webp",
    slug: "pengembangan-konsep",
  },
  {
    title: "Renovasi & Perencanaan Ruang",
    description:
      "Memaksimalkan fungsi lewat perencanaan ruang yang cerdas dan strategi renovasi yang efisien. Kami menata ulang tata letak untuk memperbaiki alur, kegunaan, dan estetika, sehingga setiap meter persegi punya peran.",
    image: "/images/services/5.webp",
    landscapeImage: "/images/services-landscape/3.webp",
    slug: "renovasi-perencanaan-ruang",
  },
  {
    title: "Desain Interior Hunian",
    description:
      "Menciptakan ruang tinggal personal yang memadukan kenyamanan, gaya, dan fungsi. Dari desain modern hingga yang abadi, setiap detail kami sesuaikan dengan gaya hidup Anda agar rumah terasa lebih hangat.",
    image: "/images/services/1.webp",
    landscapeImage: "/images/services-landscape/4.webp",
    slug: "desain-interior-hunian",
  },
  {
    title: "Render Visual Desain",
    description:
      "Menghidupkan ide Anda lewat visual 3D realistis yang memperlihatkan material, pencahayaan, dan komposisi ruang. Anda bisa melihat hasil akhirnya lebih dulu dan mengambil keputusan desain dengan percaya diri sebelum pelaksanaan.",
    image: "/images/services/6.webp",
    landscapeImage: "/images/services-landscape/5.webp",
    slug: "render-visual-desain",
  },
  {
    title: "Desain Interior Komersial",
    description:
      "Merancang ruang komersial yang berkesan, memperkuat identitas merek, dan meningkatkan pengalaman pelanggan. Kami berfokus pada fungsi, estetika, dan suasana untuk menciptakan lingkungan yang mendukung tujuan bisnis.",
    image: "/images/services/2.webp",
    landscapeImage: "/images/services-landscape/6.webp",
    slug: "desain-interior-komersial",
  },
];

export const serviceSummaries: ServiceSummary[] = serviceSummaryData.map((service) => ({
  ...service,
  href: servicePath(service.slug),
}));

/** Deskripsi singkat di kolom kanan hero halaman layanan. */
export const servicesHeroDescription =
  "Kami menciptakan interior yang menginspirasi, memadukan kenyamanan, fungsi, dan desain yang abadi. Setiap ruang dirancang dengan cermat agar sesuai dengan gaya hidup dan kebutuhan Anda.";

export const serviceSlugs = serviceSummaries.map((service) => service.slug);
