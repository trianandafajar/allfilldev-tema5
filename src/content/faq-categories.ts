import type { FaqItem } from "@/content/faq";

export type FaqCategory = {
  label: string;
  items: readonly FaqItem[];
};

export const faqCategories: readonly FaqCategory[] = [
  {
    label: "Desain & Perencanaan",
    items: [
      {
        question: "Layanan desain interior apa saja yang Anda tawarkan?",
        answer:
          "Kami menyediakan desain interior residensial dan komersial, perencanaan ruang, pengembangan konsep, pemilihan material, serta penataan project secara menyeluruh.",
      },
      {
        question: "Bagaimana cara memulai project desain bersama Anda?",
        answer:
          "Cukup hubungi kami atau ajukan konsultasi. Kami akan membahas kebutuhan, preferensi gaya, dan cakupan project sebelum mulai bekerja.",
      },
      {
        question: "Apakah Anda menangani ruang residensial dan komersial?",
        answer:
          "Ya, kami merancang rumah, kantor, ruang ritel, dan interior perhotelan yang disesuaikan dengan tujuan klien dan identitas brand-nya.",
      },
      {
        question: "Apa saja yang termasuk dalam proses desain Anda?",
        answer:
          "Proses kami meliputi desain konsep, mood board, perencanaan tata letak, visualisasi 3D, pemilihan material, dan penataan akhir.",
      },
      {
        question: "Berapa lama sebuah project desain interior berlangsung?",
        answer:
          "Durasinya bergantung pada cakupan pekerjaan. Project kecil bisa selesai dalam hitungan minggu, sedangkan renovasi menyeluruh atau interior berskala besar dapat memakan waktu beberapa bulan.",
      },
      {
        question: "Apakah Anda membantu pengadaan furnitur dan dekorasi?",
        answer:
          "Ya, kami membantu memilih dan mencarikan furnitur, pencahayaan, material, dan dekorasi yang sesuai dengan visi desain Anda.",
      },
      {
        question: "Bisakah Anda bekerja dengan furnitur atau tata letak yang sudah ada?",
        answer:
          "Tentu. Kami dapat mendesain ulang ruang dengan tetap memanfaatkan elemen yang sudah ada, sambil memperbaiki tata letak dan estetika secara keseluruhan.",
      },
      {
        question: "Apakah Anda menyediakan layanan renovasi dan perencanaan ruang?",
        answer:
          "Ya, kami memberikan pendampingan renovasi, optimalisasi tata letak, dan perencanaan ruang untuk meningkatkan fungsi dan alur sirkulasi.",
      },
      {
        question: "Gaya desain apa yang menjadi keahlian Anda?",
        answer:
          "Kami berfokus pada interior bergaya modern, minimalis, kontemporer, dan mewah yang disesuaikan dengan selera pribadi Anda.",
      },
      {
        question: "Apakah Anda menyediakan render 3D atau pratinjau visual?",
        answer:
          "Ya, kami membuat visualisasi 3D yang detail sehingga Anda bisa melihat hasil akhirnya sebelum pengerjaan dimulai.",
      },
    ],
  },
  {
    label: "Proses & Dukungan",
    items: [
      {
        question: "Bagaimana saya memantau perkembangan project saya?",
        answer:
          "Kami memberikan pembaruan rutin, revisi desain, dan laporan progres di setiap tahap project.",
      },
      {
        question: "Apakah komunikasi tetap terjaga selama project berjalan?",
        answer:
          "Ya, kami menjaga komunikasi yang jelas melalui pertemuan, pesan, atau email agar semua pihak tetap sejalan di setiap tahap.",
      },
      {
        question: "Bagaimana jika saya ingin merevisi konsep desain?",
        answer:
          "Revisi adalah bagian dari proses kami. Kami menyempurnakan desain berdasarkan masukan Anda untuk mendapatkan hasil terbaik.",
      },
      {
        question: "Bisakah saya melakukan perubahan selama pengerjaan?",
        answer:
          "Bisa, penyesuaian dimungkinkan, meski sebagian perubahan dapat memengaruhi jadwal atau biaya, tergantung cakupannya.",
      },
      {
        question: "Apakah ada dukungan setelah project selesai?",
        answer:
          "Ya, kami menyediakan dukungan pascaproject, termasuk saran penataan dan penyesuaian kecil jika diperlukan.",
      },
      {
        question: "Bisakah saya menjadwalkan konsultasi sebelum memutuskan?",
        answer:
          "Bisa, kami menawarkan konsultasi awal untuk memahami kebutuhan Anda sebelum project dimulai.",
      },
      {
        question: "Apakah Anda bekerja sama dengan arsitek atau kontraktor?",
        answer:
          "Ya, kami bekerja erat dengan arsitek, pembangun, dan kontraktor agar pelaksanaan project berjalan lancar.",
      },
      {
        question: "Informasi apa yang Anda butuhkan untuk memulai?",
        answer:
          "Kami memerlukan detail ruang, preferensi Anda, kisaran anggaran, serta referensi inspirasi yang Anda miliki.",
      },
      {
        question: "Bisakah orang lain mewakili saya selama project?",
        answer:
          "Bisa, seorang perwakilan dapat berkoordinasi dengan kami, selama ia memahami tujuan desain dan persetujuan yang Anda inginkan.",
      },
      {
        question: "Bagaimana jika muncul kendala selama project?",
        answer:
          "Kami menangani tantangan secara proaktif dan mengoordinasikan solusi agar project Anda tetap sesuai jalur.",
      },
    ],
  },
  {
    label: "Harga & Detail Project",
    items: [
      {
        question: "Pilihan harga apa saja yang Anda tawarkan?",
        answer:
          "Kami menawarkan harga yang fleksibel sesuai cakupan project, baik berupa paket tetap maupun biaya desain yang disesuaikan.",
      },
      {
        question: "Apakah Anda menyediakan estimasi biaya yang terperinci?",
        answer:
          "Ya, kami menyajikan rincian biaya yang jelas untuk tahap desain, material, dan pelaksanaan.",
      },
      {
        question: "Bagaimana biaya material dan furnitur ditangani?",
        answer:
          "Biaya bergantung pada pilihan Anda. Kami membantu memilih opsi yang sesuai dengan anggaran dan gaya Anda.",
      },
      {
        question: "Bisakah saya meminta paket desain yang disesuaikan?",
        answer:
          "Tentu. Kami menyesuaikan layanan dengan kebutuhan Anda, baik penataan sebagian maupun desain interior menyeluruh.",
      },
      {
        question: "Apakah Anda bekerja dengan anggaran tertentu?",
        answer:
          "Ya, kami merancang solusi yang memberikan nilai maksimal tanpa melampaui anggaran yang Anda tetapkan.",
      },
      {
        question: "Apakah ada biaya tambahan atau biaya tersembunyi?",
        answer:
          "Tidak, kami menjunjung transparansi dan menguraikan seluruh biaya dengan jelas sebelum project dimulai.",
      },
      {
        question: "Apakah Anda menawarkan skema pembayaran bertahap?",
        answer:
          "Ya, pembayaran dapat disusun secara bertahap berdasarkan milestone project.",
      },
      {
        question: "Bisakah saya mengakses dokumen dan rencana project?",
        answer:
          "Bisa, semua berkas desain, tata letak, dan dokumen kami bagikan kepada Anda selama project berjalan.",
      },
      {
        question: "Apakah Anda mengelola kontraktor dan vendor?",
        answer:
          "Ya, kami berkoordinasi dengan vendor dan kontraktor demi menjaga ketepatan desain dan kualitas pelaksanaan.",
      },
      {
        question: "Apakah Anda menawarkan solusi interior turnkey?",
        answer:
          "Ya, kami menyediakan layanan menyeluruh dari konsep hingga pemasangan akhir untuk pengalaman yang mulus.",
      },
    ],
  },
];
