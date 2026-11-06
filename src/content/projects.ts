import { projectPath } from "@/lib/paths";

export type Project = {
  slug: string;
  title: string;
  /** label kecil (chip) di kartu */
  tags: string[];
  description: string;
  /** path di /public */
  image: string;
  /** dibangun dari `slug` lewat projectPath */
  href: string;
};

const projectData: Omit<Project, "href">[] = [
  {
    title: "Ruang Tamu Modern Minimalis",
    tags: ["Hunian Pribadi", "Ruang Terbuka", "Kontemporer"],
    description:
      "Desain ruang tamu kontemporer dengan garis bersih, tata letak terbuka, dan estetika minimalis yang abadi.",
    image: "/images/projects-wide/1.webp",
    slug: "ruang-tamu-modern-minimalis",
  },
  {
    title: "Suite Kamar Tidur Kontemporer Mewah",
    tags: ["Kamar Utama", "Mewah", "Pencahayaan Lembut"],
    description:
      "Suite kamar tidur elegan dengan finishing yang halus, pencahayaan lembut, dan elemen kenyamanan premium.",
    image: "/images/projects-wide/2.webp",
    slug: "suite-kamar-tidur-kontemporer-mewah",
  },
  {
    title: "Desain Dapur Bernuansa Skandinavia",
    tags: ["Dapur", "Gaya Nordik", "Minimalis"],
    description:
      "Desain dapur yang terang dan fungsional, terinspirasi kesederhanaan Skandinavia dan prinsip minimalis.",
    image: "/images/projects-wide/3.webp",
    slug: "desain-dapur-bernuansa-skandinavia",
  },
  {
    title: "Ruang Kerja Rumah yang Elegan",
    tags: ["Ruang Kerja", "Produktivitas", "Modern"],
    description:
      "Ruang kerja modern yang dirancang untuk meningkatkan fokus, produktivitas, dan kenyamanan para pekerja jarak jauh.",
    image: "/images/projects-wide/4.webp",
    slug: "ruang-kerja-rumah-yang-elegan",
  },
  {
    title: "Konsep Ruang Makan Rustic yang Hangat",
    tags: ["Ruang Makan", "Rustic", "Kayu Alami"],
    description:
      "Ruang makan yang hangat dan ramah dengan tekstur kayu alami serta pesona rustic yang abadi.",
    image: "/images/projects-wide/5.webp",
    slug: "konsep-ruang-makan-rustic-yang-hangat",
  },
  {
    title: "Kamar Mandi Mewah dengan Finishing Marmer",
    tags: ["Kamar Mandi", "Marmer", "Finishing Premium"],
    description:
      "Interior kamar mandi premium dengan permukaan marmer, perlengkapan yang elegan, dan detail yang mewah.",
    image: "/images/projects-wide/6.webp",
    slug: "kamar-mandi-mewah-finishing-marmer",
  },
];

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  href: projectPath(project.slug),
}));

export type ProjectDetail = {
  slug: string;
  title: string;
  /** deskripsi meta (120-160 karakter) */
  description: string;
  intro: string;
  heroImage: string;
  summary: string;
  facts: { label: string; value: string }[];
  image: string;
  gallery: string[];
};

export const projectDetail: ProjectDetail = {
  slug: "ruang-tamu-modern-minimalis",
  title: "Ruang Tamu Modern Minimalis",
  description:
    "Studi kasus project ruang tamu modern minimalis: tata letak terbuka, material alami, dan pencahayaan hangat yang menciptakan ruang lapang dan nyaman.",
  intro:
    "Kami merancang interior yang memadukan kenyamanan dan gaya, menghadirkan ruang yang hangat dan fungsional, mencerminkan kepribadian Anda lewat detail yang matang dan keanggunan yang abadi.",
  heroImage: "/images/slider/1.webp",
  summary:
    "Ruang tamu ini dirancang untuk terasa lapang dan nyaman, dengan perpaduan material alami, pencahayaan yang hangat, dan furnitur yang dipilih dengan cermat agar setiap sudut tetap fungsional.",
  facts: [
    { label: "Klien", value: "Envato Corps" },
    { label: "Anggaran", value: "Rp 750 juta - Rp 1,5 miliar" },
    { label: "Layanan", value: "Desain Interior Hunian" },
    { label: "Tahun", value: "2020" },
  ],
  image: "/images/misc/s1.webp",
  gallery: ["/images/misc/l1.webp", "/images/misc/l2.webp", "/images/misc/l3.webp"],
};

/**
 * Project dengan konten asli, dikunci per slug. Tambah entri di sini saat studi kasus lain
 * selesai ditulis; slug tanpa entri memakai template placeholder (noindex).
 */
export const projectDetails: Record<string, ProjectDetail> = { [projectDetail.slug]: projectDetail };

export type ResolvedProjectDetail = ProjectDetail & {
  /** true bila isi panjang masih template; halaman diberi noindex */
  placeholder: boolean;
};

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectDetail(slug: string): ResolvedProjectDetail | undefined {
  const real = projectDetails[slug];
  if (real) return { ...real, placeholder: false };

  const project = projects.find((item) => item.slug === slug);
  if (!project) return undefined;
  return {
    ...projectDetail,
    slug,
    title: project.title,
    description: project.description,
    intro: project.description,
    summary: project.description,
    heroImage: project.image,
    placeholder: true,
  };
}
