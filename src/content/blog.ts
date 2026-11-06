import { company } from "@/content/company";
import { blogPath } from "@/lib/paths";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** path di /public */
  image: string;
  /** dibangun dari `slug` lewat blogPath */
  href: string;
  author: string;
  /** path avatar penulis di /public */
  authorImage: string;
  /** tanggal terbit format ISO (YYYY-MM-DD); ditampilkan lewat formatDate() */
  publishedAt: string;
};

type BlogPostData = Omit<BlogPost, "href">;
const withHref = <T extends { slug: string }>(item: T) => ({ ...item, href: blogPath(item.slug) });

/** Tiga artikel di beranda (juga tiga pertama di arsip). */
const homePosts: BlogPostData[] = [
  {
    title: "Perencanaan tata letak cerdas untuk ruang yang lebih lega dan nyaman",
    excerpt:
      "Temukan bagaimana tata letak interior yang dirancang dengan matang dapat mengubah ruang kecil maupun besar menjadi hunian yang fungsional, bergaya, dan nyaman...",
    image: "/images/blog/1.webp",
    slug: "perencanaan-tata-letak-cerdas-ruang-lebih-lega-nyaman",
    author: "Amelia Bright",
    authorImage: "/images/testimonial/1.webp",
    publishedAt: "2025-01-10",
  },
  {
    title: "Memilih material yang mengangkat kesan interior modern",
    excerpt:
      "Pelajari bagaimana pemilihan material yang tepat dapat meningkatkan estetika, daya tahan, dan nilai keseluruhan dalam project desain interior kontemporer...",
    image: "/images/blog/2.webp",
    slug: "memilih-material-yang-mengangkat-kesan-interior-modern",
    author: "Daniel Yuen",
    authorImage: "/images/testimonial/2.webp",
    publishedAt: "2025-02-22",
  },
  {
    title: "Kesalahan umum yang perlu dihindari dalam desain interior rumah",
    excerpt:
      "Kenali kesalahan desain interior yang sering terjadi dan cara menghindarinya, mulai dari pilihan pencahayaan yang kurang tepat hingga furnitur dan skema warna yang tidak serasi...",
    image: "/images/blog/3.webp",
    slug: "kesalahan-umum-desain-interior-rumah",
    author: "Leona Hart",
    authorImage: "/images/testimonial/3.webp",
    publishedAt: "2025-03-05",
  },
];

export const blogPosts: BlogPost[] = homePosts.map(withHref);

/** Daftar lengkap di halaman /blog: tiga artikel beranda + tiga artikel lain. */
const morePosts: BlogPostData[] = [
  {
    title: "Teknik pencahayaan yang membentuk suasana dan nuansa ruang",
    excerpt:
      "Jelajahi bagaimana strategi pencahayaan berlapis dapat memengaruhi atmosfer secara dramatis, menambah kedalaman, dan mengangkat pengalaman interior secara keseluruhan...",
    image: "/images/blog/4.webp",
    slug: "teknik-pencahayaan-yang-membentuk-suasana-ruang",
    author: "Sophia Turner",
    authorImage: "/images/testimonial/4.webp",
    publishedAt: "2025-03-18",
  },
  {
    title: "Palet warna yang menciptakan keharmonisan di setiap ruangan",
    excerpt:
      "Pahami cara memadukan warna, tekstur, dan aksen untuk menghasilkan interior yang seimbang, menyatu, mengundang, dan tampak tertata dengan baik...",
    image: "/images/blog/5.webp",
    slug: "palet-warna-yang-menciptakan-keharmonisan-ruangan",
    author: "Marcus Lee",
    authorImage: "/images/testimonial/5.webp",
    publishedAt: "2025-04-02",
  },
  {
    title: "Memaksimalkan penyimpanan tanpa mengorbankan gaya desain",
    excerpt:
      "Lihat bagaimana solusi penyimpanan yang cerdas dapat menjaga interior tetap rapi dan teratur sambil mempertahankan keanggunan, fungsi, dan alur desain yang mulus...",
    image: "/images/blog/6.webp",
    slug: "memaksimalkan-penyimpanan-tanpa-mengorbankan-gaya",
    author: "Isabella Cruz",
    authorImage: "/images/testimonial/6.webp",
    publishedAt: "2025-04-15",
  },
];

export const blogArchivePosts: BlogPost[] = [...blogPosts, ...morePosts.map(withHref)];

export type BlogArticle = {
  slug: string;
  title: string;
  /** deskripsi meta (120-160 karakter) */
  description: string;
  intro: string;
  image: string;
  author: string;
  /** tanggal terbit ISO (YYYY-MM-DD) */
  publishedAt: string;
  steps: { title: string; text: string }[];
  outro: string;
};

/** Isi halaman /blog-single. */
export const blogArticle: BlogArticle = {
  slug: "perencanaan-tata-letak-cerdas-ruang-lebih-lega-nyaman",
  description:
    "Enam prinsip perencanaan tata letak cerdas: alur gerak, zonasi, skala, furnitur fleksibel, cahaya alami, dan penyimpanan agar ruang terasa lega dan nyaman.",
  title: "Perencanaan tata letak cerdas untuk ruang yang lebih lega dan nyaman",
  intro:
    "Perencanaan tata letak yang cerdas adalah fondasi untuk menciptakan ruang yang nyaman sekaligus sangat fungsional. Baik merancang rumah maupun kantor, perencanaan yang efektif memaksimalkan alur sirkulasi, mengurangi kekacauan, dan meningkatkan kualitas hidup secara keseluruhan. Berikut prinsip-prinsip utama desain tata letak cerdas yang akan mengubah ruang Anda menjadi tempat yang nyaman dan efisien:",
  image: "/images/blog/1.webp",
  author: blogPosts[0].author,
  publishedAt: blogPosts[0].publishedAt,
  steps: [
    {
      title: "Utamakan Alur & Pergerakan",
      text: "Tata letak yang dirancang dengan baik membuat pergerakan di dalam ruang terasa alami dan tidak terhalang. Fokuslah pada jalur yang jelas, tempatkan furnitur agar tidak menimbulkan penyempitan, dan pastikan area yang sering dipakai mudah dijangkau.",
    },
    {
      title: "Bagi Ruang ke dalam Zona",
      text: "Bagi area menjadi zona-zona fungsional, seperti memasak, bekerja, bersantai, atau bersosialisasi. Dengan begitu ruang terasa intuitif dipakai dan setiap zona menjalankan perannya tanpa tumpang tindih atau membingungkan.",
    },
    {
      title: "Skala & Proporsi",
      text: "Pilih furnitur yang selaras dengan ukuran ruangan. Perabot berukuran besar di ruang kecil bisa terasa sesak, sedangkan barang kecil di ruang luas bisa terasa hilang. Menjaga keseimbangan antara furnitur dan dimensi ruangan adalah kuncinya.",
    },
    {
      title: "Elemen Fleksibel & Serbaguna",
      text: "Hadirkan furnitur atau fitur yang dapat berfungsi ganda. Meja lipat, tempat duduk modular, atau penyimpanan konversi membantu Anda menyesuaikan ruang dengan berbagai kebutuhan sekaligus memaksimalkan fungsinya.",
    },
    {
      title: "Cahaya Alami & Keterlihatan",
      text: "Tata letak yang cerdas mengutamakan cahaya alami dengan menjaga jendela tetap tidak terhalang dan memakai cermin untuk memantulkan cahaya lebih dalam ke ruangan. Pencahayaan yang baik meningkatkan kenyamanan dan membuat ruang terasa lebih luas serta mengundang.",
    },
    {
      title: "Penyimpanan & Merapikan",
      text: "Padukan solusi penyimpanan yang menjaga ruang tetap tertata dan bebas dari barang berserakan. Rak built-in, kompartemen tersembunyi, dan penempatan penyimpanan yang tepat mencegah ruangan terasa sesak dan membantu menjaga suasana yang bersih dan tenang.",
    },
  ],
  outro:
    "Pada akhirnya, perencanaan tata letak yang cerdas memadukan estetika dengan kepraktisan. Dengan menata elemen secara cermat dan memikirkan bagaimana ruang akan digunakan sehari-hari, Anda bisa menciptakan lingkungan yang harmonis, nyaman, dan fungsional. Meluangkan waktu untuk merencanakan tata letak memastikan ruang Anda berkembang sesuai kebutuhan dan tetap menyenangkan untuk bertahun-tahun ke depan.",
};

export type BlogComment = {
  name: string;
  avatar: string;
  /** waktu relatif siap tampil */
  time: string;
  text: string;
};

export const blogComments: BlogComment[] = [
  {
    name: "Ryan Clarke",
    avatar: "/images/testimonial/1.webp",
    time: "2 hari lalu",
    text: "Tips pembagian zona benar-benar membantu saya memikirkan ulang ruang tamu. Sekarang setiap area punya fungsi yang jelas!",
  },
  {
    name: "Sophia Lee",
    avatar: "/images/testimonial/2.webp",
    time: "1 hari lalu",
    text: "Saya tidak pernah menyadari betapa besar pengaruh cahaya alami terhadap kenyamanan sebuah ruangan. Saran yang bagus!",
  },
  {
    name: "Daniel Hart",
    avatar: "/images/testimonial/3.webp",
    time: "1 hari lalu",
    text: "Ide furnitur fleksibel ini sangat mengubah keadaan untuk apartemen kecil seperti milik saya!",
  },
];

export type RelatedPost = {
  slug: string;
  title: string;
  /** thumbnail di /public */
  image: string;
  /** dibangun dari `slug` lewat blogPath */
  href: string;
  publishedAt: string;
};

const relatedPostData: Omit<RelatedPost, "href">[] = [
  {
    title: "Ruang Kecil, Dampak Besar: Tips Desain yang Cerdas",
    image: "/images/blog-thumbnail/2.webp",
    slug: "ruang-kecil-dampak-besar-tips-desain-cerdas",
    publishedAt: "2026-02-05",
  },
  {
    title: "Kekuatan Interior Minimalis",
    image: "/images/blog-thumbnail/3.webp",
    slug: "kekuatan-interior-minimalis",
    publishedAt: "2026-03-18",
  },
  {
    title: "Memilih Furnitur yang Tepat demi Kenyamanan",
    image: "/images/blog-thumbnail/4.webp",
    slug: "memilih-furnitur-yang-tepat-demi-kenyamanan",
    publishedAt: "2026-04-09",
  },
];

export const relatedPosts: RelatedPost[] = relatedPostData.map(withHref);

export const popularTags = [
  "Desain Interior",
  "Perencanaan Ruang",
  "Kenyamanan",
  "Desain Fungsional",
  "Tata Letak Rumah",
  "Pencahayaan",
  "Solusi Penyimpanan",
  "Ruang Cerdas",
] as const;

/**
 * Artikel dengan konten asli, dikunci per slug. Tambah entri di sini saat artikel lain
 * selesai ditulis; slug tanpa entri memakai template placeholder (noindex).
 */
export const blogArticles: Record<string, BlogArticle> = { [blogArticle.slug]: blogArticle };

export type ResolvedBlogArticle = BlogArticle & {
  /** true bila isi panjang masih template; halaman diberi noindex */
  placeholder: boolean;
  comments: BlogComment[];
};

export const blogSlugs = [...blogArchivePosts, ...relatedPosts].map((post) => post.slug);

export function getBlogArticle(slug: string): ResolvedBlogArticle | undefined {
  const real = blogArticles[slug];
  if (real) return { ...real, placeholder: false, comments: blogComments };

  const post = blogArchivePosts.find((item) => item.slug === slug);
  const item = post ?? relatedPosts.find((related) => related.slug === slug);
  if (!item) return undefined;

  const intro = post ? post.excerpt.replace(/.{3}$/, ".") : blogArticle.intro;
  return {
    ...blogArticle,
    slug,
    title: item.title,
    description: post ? intro : blogArticle.description,
    image: item.image,
    publishedAt: item.publishedAt,
    author: post?.author ?? `Tim ${company.name}`,
    intro,
    placeholder: true,
    comments: [],
  };
}
