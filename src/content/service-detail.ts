import {
  Lightbulb,
  MessagesSquare,
  Palette,
  Ruler,
  Sofa,
  Star,
  Store,
  House,
  type LucideIcon,
} from "lucide-react";
import { serviceSummaries } from "@/content/services";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceStep = {
  /** judul h2 tipis, seperti langkah pertama di template */
  plainTitle?: boolean;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  /** deskripsi meta (120-160 karakter) */
  description: string;
  intro: {
    subtitle: string;
    heading: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
  };
  included: { subtitle: string; heading: string; features: ServiceFeature[] };
  process: { subtitle: string; heading: string; steps: ServiceStep[] };
  whyChoose: { image: string; subtitle: string; heading: string; points: string[] };
};

/** Konten asli layanan Pemilihan Furnitur & Dekorasi; juga template untuk layanan yang belum ditulis. */
export const serviceDetail: ServiceDetail = {
  slug: "pemilihan-furnitur-dekorasi",
  title: "Pemilihan Furnitur & Dekorasi",
  description:
    "Layanan pemilihan furnitur dan dekorasi: kurasi perabot, warna, material, pencahayaan, dan aksesori yang selaras dengan gaya hidup dan anggaran Anda.",
  intro: {
    subtitle: "Yang Kami Kerjakan",
    heading: "Wujudkan Ruang yang Indah dengan Furnitur & Dekorasi Pilihan",
    description:
      "Memilih furnitur dan elemen dekoratif bisa terasa membingungkan. Layanan Pemilihan Furnitur & Dekorasi kami menyederhanakan prosesnya dengan membantu Anda memilih perabot yang selaras dengan gaya hidup, gaya arsitektur, dan kebutuhan fungsional Anda. Mulai dari furnitur utama dan lampu hingga karya seni, karpet, dan aksesori, kami kurasi setiap detail agar ruang Anda terasa utuh, elegan, dan benar-benar milik Anda.",
    highlightsTitle: "Keunggulan Layanan",
    highlights: [
      "Pencarian furnitur yang personal",
      "Penataan & kurasi dekorasi",
      "Pemilihan warna dan material",
      "Konsultasi perencanaan ruang",
      "Rekomendasi sesuai anggaran",
      "Koordinasi dengan vendor",
    ],
  },
  included: {
    subtitle: "Yang Termasuk",
    heading: "Solusi Furnitur & Dekorasi yang Lengkap",
    features: [
      {
        icon: Sofa,
        title: "Pemilihan Furnitur",
        description:
          "Furnitur pilihan yang memadukan kenyamanan, fungsi, dan desain yang abadi.",
      },
      {
        icon: Palette,
        title: "Kurasi Warna & Material",
        description:
          "Kombinasi warna, kain, tekstur, dan finishing yang harmonis untuk mempercantik interior Anda.",
      },
      {
        icon: Lightbulb,
        title: "Pencahayaan & Aksesori",
        description:
          "Lampu, karya seni, karpet, dan aksen dekoratif yang dipilih dengan cermat untuk melengkapi ruang.",
      },
      {
        icon: Ruler,
        title: "Perencanaan Ruang",
        description:
          "Tata letak furnitur yang strategis untuk memaksimalkan alur, kenyamanan, dan fungsi di seluruh ruangan.",
      },
      {
        icon: Store,
        title: "Pencarian Vendor",
        description:
          "Akses ke pemasok tepercaya dan merek premium demi kualitas, nilai, dan keandalan.",
      },
      {
        icon: Star,
        title: "Penataan Akhir",
        description:
          "Penataan profesional dan sentuhan akhir yang menghadirkan suasana rapi, utuh, dan mengundang.",
      },
    ] satisfies ServiceFeature[],
  },
  process: {
    subtitle: "Proses Kami",
    heading: "Dari Visi hingga Ruang yang Tertata Indah",
    steps: [
      {
        icon: MessagesSquare,
        title: "Konsultasi",
        plainTitle: true,
        description:
          "Kami membahas preferensi gaya, kebutuhan fungsional, gaya hidup, dan anggaran Anda.",
      },
      {
        icon: Palette,
        title: "Kurasi Desain",
        description:
          "Desainer kami menyusun konsep furnitur, warna, material, dan dekorasi yang selaras untuk ruang Anda.",
      },
      {
        icon: Sofa,
        title: "Pemilihan & Pengadaan",
        description:
          "Kami mencari furnitur, lampu, karya seni, tekstil, dan aksesori dari pemasok tepercaya dengan teliti.",
      },
      {
        icon: House,
        title: "Penataan & Penyelesaian",
        description:
          "Penempatan dan penataan akhir menyatukan setiap elemen menjadi interior yang rapi.",
      },
    ] satisfies ServiceStep[],
  },
  whyChoose: {
    image: "/images/misc/l2.webp",
    subtitle: "Mengapa Memilih Kami",
    heading: "Keahlian Desain yang Berpadu dengan Hunian Praktis",
    points: [
      "Hemat waktu dan hindari kesalahan pembelian yang mahal",
      "Akses ke pemasok furnitur dan dekorasi tepercaya",
      "Tampilan yang utuh dan dirancang secara profesional",
      "Kenyamanan dan fungsi yang optimal",
      "Interior yang abadi dan personal",
    ],
  },
};

/**
 * Layanan dengan konten asli, dikunci per slug. Tambah entri di sini saat layanan lain
 * selesai ditulis; slug tanpa entri memakai template placeholder (noindex).
 */
export const serviceDetails: Record<string, ServiceDetail> = { [serviceDetail.slug]: serviceDetail };

export type ResolvedServiceDetail = ServiceDetail & {
  /** true bila isi panjang masih template; halaman diberi noindex */
  placeholder: boolean;
};

export function getServiceDetail(slug: string): ResolvedServiceDetail | undefined {
  const real = serviceDetails[slug];
  if (real) return { ...real, placeholder: false };

  const summary = serviceSummaries.find((item) => item.slug === slug);
  if (!summary) return undefined;
  return {
    ...serviceDetail,
    slug,
    title: summary.title,
    description: summary.description,
    intro: { ...serviceDetail.intro, description: summary.description },
    whyChoose: { ...serviceDetail.whyChoose, image: summary.landscapeImage },
    placeholder: true,
  };
}
