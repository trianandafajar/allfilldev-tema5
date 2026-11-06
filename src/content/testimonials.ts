export type Review = {
  name: string;
  date: string;
  image: string;
  rating: string;
  text: string;
};

export type Quote = {
  text: string;
  author: string;
};

/** Kutipan singkat untuk slider testimoni. */
export const testimonialQuotes: readonly Quote[] = [
  {
    text: "Kampanye mereka membuat brand kami bersinar di dunia online. Kreativitasnya luar biasa dan eksekusinya sempurna.",
    author: "Anna L., Paris",
  },
  {
    text: "Trafik kami tumbuh melampaui harapan. Kemitraan yang benar-benar berbasis data dan berdampak nyata.",
    author: "Michael H., Toronto",
  },
  {
    text: "Perhatian mereka terhadap tujuan kami luar biasa. Setiap iklan mencerminkan brand kami dengan tepat.",
    author: "Nadia R., Dubai",
  },
  {
    text: "Bekerja sama dengan mereka terasa mudah dan menginspirasi. Pengalaman terbaik dengan agensi digital.",
    author: "Tom S., Los Angeles",
  },
  {
    text: "Dari SEO hingga iklan, semuanya membuahkan hasil. Mitra yang benar-benar kami percaya.",
    author: "Elise K., Amsterdam",
  },
  {
    text: "Profesional, kreatif, dan berorientasi pada hasil. Jumlah leads kami berlipat ganda hanya dalam dua bulan.",
    author: "David M., Singapore",
  },
];

/** Kutipan singkat untuk slider testimoni di halaman utama. */
export const homeTestimonialQuotes: readonly Quote[] = [
  {
    text: "Mereka mengubah rumah kami menjadi ruang yang hangat dan elegan. Setiap detailnya terasa disengaja dan terkurasi dengan baik.",
    author: "Anna L., Paris",
  },
  {
    text: "Tata letak dan desainnya melampaui harapan. Ruang kami kini terasa lebih luas, lebih terang, dan lebih nyaman.",
    author: "Michael H., Toronto",
  },
  {
    text: "Mereka benar-benar memahami visi kami. Hasilnya mencerminkan gaya hidup kami dengan gaya dan kenyamanan.",
    author: "Nadia R., Dubai",
  },
  {
    text: "Seluruh prosesnya lancar dan menginspirasi. Tim desain yang sangat profesional dan kreatif.",
    author: "Tom S., Los Angeles",
  },
  {
    text: "Dari konsep hingga tahap akhir, semuanya sempurna. Rumah kami kini terasa fungsional sekaligus indah.",
    author: "Elise K., Amsterdam",
  },
  {
    text: "Ide kreatif dan eksekusi yang sangat baik. Mereka mengubah ruang kami menjadi sesuatu yang benar-benar istimewa.",
    author: "David M., Singapore",
  },
];

/** Ulasan lengkap bergaya Google review. */
export const reviews: readonly Review[] = [
  {
    name: "Olivia Carter",
    date: "12 Januari 2025",
    image: "/images/testimonial/1.webp",
    rating: "5.0",
    text: "\"Mereka mengubah ruang tinggal kami menjadi elegan dan fungsional. Setiap detailnya terasa disengaja dan dieksekusi dengan indah.\"",
  },
  {
    name: "Daniel Foster",
    date: "20 Januari 2025",
    image: "/images/testimonial/2.webp",
    rating: "5.0",
    text: "\"Dari konsep hingga penataan akhir, semuanya berjalan lancar dan terkelola dengan baik. Tim ini benar-benar memahami estetika interior modern.\"",
  },
  {
    name: "Sophia Nguyen",
    date: "02 Februari 2025",
    image: "/images/testimonial/3.webp",
    rating: "5.0",
    text: "\"Kantor kami kini terasa lebih produktif dan menginspirasi. Klien selalu memperhatikan desainnya.\"",
  },
  {
    name: "Marcus Lee",
    date: "10 Februari 2025",
    image: "/images/testimonial/4.webp",
    rating: "5.0",
    text: "\"Desain pencahayaannya saja sudah membuat perbedaan besar. Suasana seluruh rumah kami jadi berubah.\"",
  },
  {
    name: "Isabella Cruz",
    date: "18 Februari 2025",
    image: "/images/testimonial/5.webp",
    rating: "5.0",
    text: "\"Mereka mendesain ulang apartemen kecil kami menjadi ruang yang terasa lapang, bersih, dan tertata rapi.\"",
  },
  {
    name: "Ethan Walker",
    date: "25 Februari 2025",
    image: "/images/testimonial/6.webp",
    rating: "5.0",
    text: "\"Profesional, kreatif, dan teliti. Hasil akhirnya terasa seperti hotel mewah.\"",
  },
  {
    name: "Liam Johnson",
    date: "03 Maret 2025",
    image: "/images/testimonial/1.webp",
    rating: "5.0",
    text: "\"Mereka memandu kami memilih material dan finishing, dan hasilnya terasa padu serta berkelas.\"",
  },
  {
    name: "Emily Davis",
    date: "10 Maret 2025",
    image: "/images/testimonial/2.webp",
    rating: "5.0",
    text: "\"Ruangan kini terasa tenang, seimbang, dan sangat nyaman untuk ditinggali.\"",
  },
  {
    name: "Noah Wilson",
    date: "18 Maret 2025",
    image: "/images/testimonial/3.webp",
    rating: "5.0",
    text: "\"Mereka menyeimbangkan fungsi dan estetika dengan sempurna di ruang kerja kami.\"",
  },
  {
    name: "Ava Thompson",
    date: "25 Maret 2025",
    image: "/images/testimonial/4.webp",
    rating: "5.0",
    text: "\"Setiap sudut dirancang dengan penuh pertimbangan. Kualitasnya benar-benar terasa.\"",
  },
  {
    name: "James Miller",
    date: "02 April 2025",
    image: "/images/testimonial/5.webp",
    rating: "5.0",
    text: "\"Mereka mengubah interior kami yang ketinggalan zaman menjadi modern, tetapi tetap hangat dan mengundang.\"",
  },
  {
    name: "Mia Anderson",
    date: "10 April 2025",
    image: "/images/testimonial/6.webp",
    rating: "5.0",
    text: "\"Sangat direkomendasikan jika Anda menginginkan interior yang bersih, modern, dan dieksekusi dengan baik.\"",
  },
  {
    name: "William Brown",
    date: "18 April 2025",
    image: "/images/testimonial/1.webp",
    rating: "5.0",
    text: "\"Pengalaman yang menyenangkan dari awal hingga akhir. Tim ini mewujudkan persis seperti yang kami bayangkan.\"",
  },
  {
    name: "Charlotte White",
    date: "25 April 2025",
    image: "/images/testimonial/2.webp",
    rating: "5.0",
    text: "\"Proses desainnya jelas, efisien, dan menyenangkan. Hasilnya melampaui harapan dalam segala hal.\"",
  },
];
