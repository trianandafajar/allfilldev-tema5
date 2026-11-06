import { company } from "@/content/company";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  /** poin-poin opsional setelah paragraf */
  items?: string[];
};

export type LegalDocument = {
  title: string;
  /** paragraf pembuka sebelum daftar bagian */
  intro: string;
  /** tanggal berlaku/pembaruan terakhir, format ISO (YYYY-MM-DD) */
  effectiveDate: string;
  sections: LegalSection[];
};

const contactLine = `${company.name}, ${company.address}. Email ${company.email}, telepon ${company.phone}.`;

/**
 * Template Kebijakan Privasi. Teks umum yang mengacu pada UU No. 27 Tahun 2022 tentang
 * Pelindungan Data Pribadi dan UU ITE. Tinjau dengan konsultan hukum sebelum dipakai di produksi.
 */
export const privacyPolicy: LegalDocument = {
  title: "Kebijakan Privasi",
  intro: `Kebijakan Privasi ini menjelaskan bagaimana ${company.name} ("kami") mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda ketika Anda mengunjungi situs ini, mengirim formulir kontak atau konsultasi, maupun menggunakan layanan desain interior kami. Dengan menggunakan situs ini, Anda menyetujui praktik yang dijelaskan di sini.`,
  effectiveDate: "2026-11-01",
  sections: [
    {
      heading: "Data yang kami kumpulkan",
      paragraphs: [
        "Kami hanya mengumpulkan data yang Anda berikan atau yang diperlukan agar situs berfungsi dengan baik.",
      ],
      items: [
        "Data identitas dan kontak: nama, alamat email, nomor telepon, dan alamat lokasi project yang Anda isi di formulir kontak atau konsultasi.",
        "Informasi project: jenis ruang, gaya, anggaran, jadwal, dan pesan yang Anda tulis.",
        "Data teknis: alamat IP, jenis perangkat dan peramban, halaman yang dikunjungi, serta waktu kunjungan, yang dikumpulkan otomatis lewat log server dan cookie.",
      ],
    },
    {
      heading: "Tujuan penggunaan data",
      paragraphs: ["Kami memakai data Anda untuk keperluan berikut:"],
      items: [
        "Menanggapi pertanyaan dan permintaan konsultasi Anda.",
        "Menyusun penawaran, jadwal, dan mengerjakan project desain interior yang Anda minta.",
        "Menjalankan, mengamankan, dan meningkatkan kinerja serta isi situs.",
        "Memenuhi kewajiban hukum dan menyelesaikan sengketa bila diperlukan.",
      ],
    },
    {
      heading: "Dasar pemrosesan",
      paragraphs: [
        "Kami memproses data pribadi berdasarkan persetujuan Anda (misalnya saat mengirim formulir), kebutuhan untuk melaksanakan perjanjian layanan, kepentingan sah kami dalam menjaga keamanan dan kualitas situs, serta kewajiban hukum yang berlaku.",
      ],
    },
    {
      heading: "Cookie dan analitik",
      paragraphs: [
        "Situs ini dapat memakai cookie dan teknologi serupa untuk mengingat preferensi, mengukur lalu lintas, dan memahami bagaimana pengunjung memakai situs. Anda dapat menonaktifkan atau menghapus cookie lewat pengaturan peramban; sebagian fitur mungkin tidak berjalan optimal tanpa cookie.",
      ],
    },
    {
      heading: "Berbagi data dengan pihak ketiga",
      paragraphs: [
        "Kami tidak menjual data pribadi Anda. Data hanya dibagikan seperlunya kepada penyedia layanan yang membantu operasional kami (misalnya hosting, email, dan analitik), kontraktor atau pemasok yang terlibat langsung dalam project Anda dengan persetujuan Anda, serta pihak berwenang jika diwajibkan oleh hukum. Pihak-pihak tersebut wajib menjaga kerahasiaan dan keamanan data.",
      ],
    },
    {
      heading: "Penyimpanan dan keamanan",
      paragraphs: [
        "Kami menyimpan data selama diperlukan untuk tujuan di atas atau selama diwajibkan oleh hukum, lalu menghapus atau menganonimkannya. Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi data dari akses, perubahan, atau pengungkapan tanpa izin. Namun tidak ada metode transmisi atau penyimpanan data yang sepenuhnya bebas risiko.",
      ],
    },
    {
      heading: "Hak Anda sebagai pemilik data",
      paragraphs: ["Sesuai peraturan yang berlaku, Anda berhak untuk:"],
      items: [
        "Mengakses dan memperoleh salinan data pribadi Anda.",
        "Memperbaiki data yang tidak akurat atau tidak lengkap.",
        "Meminta penghapusan atau pembatasan pemrosesan data Anda.",
        "Menarik persetujuan yang pernah diberikan.",
        "Mengajukan keberatan atau pengaduan atas pemrosesan data Anda.",
      ],
    },
    {
      heading: "Anak di bawah umur",
      paragraphs: [
        "Situs dan layanan kami ditujukan bagi orang dewasa. Kami tidak sengaja mengumpulkan data pribadi anak tanpa persetujuan orang tua atau wali. Jika Anda mengetahui hal itu terjadi, hubungi kami agar data tersebut dapat dihapus.",
      ],
    },
    {
      heading: "Tautan ke situs lain",
      paragraphs: [
        "Situs kami dapat memuat tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas kebijakan privasi maupun isi situs tersebut, sehingga kami menyarankan Anda membaca kebijakan masing-masing situs.",
      ],
    },
    {
      heading: "Perubahan kebijakan",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru selalu ditampilkan di halaman ini beserta tanggal berlakunya. Penggunaan situs setelah perubahan berarti Anda menerima kebijakan yang diperbarui.",
      ],
    },
    {
      heading: "Hubungi kami",
      paragraphs: [
        `Untuk pertanyaan, permintaan akses, atau penggunaan hak data pribadi Anda, hubungi penanggung jawab data kami: ${contactLine}`,
      ],
    },
  ],
};

/**
 * Template Syarat & Ketentuan. Teks umum untuk jasa desain interior; sesuaikan dengan
 * perjanjian kerja sebenarnya dan tinjau dengan konsultan hukum sebelum dipakai di produksi.
 */
export const termsOfService: LegalDocument = {
  title: "Syarat & Ketentuan",
  intro: `Syarat & Ketentuan ini mengatur penggunaan situs dan layanan desain interior ${company.name}. Dengan mengakses situs atau memakai layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui ketentuan berikut. Ketentuan khusus project dituangkan dalam perjanjian kerja tertulis dan didahulukan jika berbeda.`,
  effectiveDate: "2026-11-01",
  sections: [
    {
      heading: "Lingkup layanan",
      paragraphs: [
        `${company.name} menyediakan jasa desain interior untuk hunian dan ruang komersial, mencakup pengembangan konsep, perencanaan ruang dan renovasi, visualisasi desain, serta pemilihan furnitur dan dekorasi. Rincian lingkup, jadwal, dan hasil kerja tiap project ditetapkan dalam penawaran atau perjanjian kerja.`,
      ],
    },
    {
      heading: "Konsultasi dan penawaran",
      paragraphs: [
        "Konsultasi awal dan estimasi yang kami tawarkan bersifat indikatif dan tidak mengikat. Harga final berlaku setelah penawaran tertulis disetujui kedua pihak. Penawaran memiliki masa berlaku yang tercantum di dokumen penawaran.",
      ],
    },
    {
      heading: "Kewajiban klien",
      paragraphs: ["Agar project berjalan lancar, klien setuju untuk:"],
      items: [
        "Memberikan informasi, data ruang, dan akses lokasi yang akurat dan tepat waktu.",
        "Memberi persetujuan atau masukan pada tahap desain sesuai jadwal yang disepakati.",
        "Melakukan pembayaran sesuai termin yang tercantum dalam perjanjian.",
      ],
    },
    {
      heading: "Pembayaran dan pembatalan",
      paragraphs: [
        "Pembayaran dilakukan bertahap sesuai termin pada penawaran, termasuk uang muka sebelum pekerjaan dimulai. Uang muka dan pekerjaan yang sudah berjalan tidak dapat dikembalikan, kecuali disepakati lain secara tertulis. Pembatalan oleh klien dikenakan biaya sebesar pekerjaan yang telah diselesaikan hingga saat pembatalan.",
      ],
    },
    {
      heading: "Perubahan lingkup dan revisi",
      paragraphs: [
        "Jumlah putaran revisi mengikuti paket yang disepakati. Perubahan lingkup di luar penawaran dapat memengaruhi biaya dan jadwal, dan akan dikomunikasikan serta disetujui lebih dulu sebelum dikerjakan.",
      ],
    },
    {
      heading: "Hak kekayaan intelektual",
      paragraphs: [
        "Seluruh gambar, konsep, visual 3D, dan dokumen desain tetap menjadi hak cipta kami sampai pembayaran lunas. Setelah lunas, klien memperoleh hak menggunakan hasil desain untuk project yang disepakati. Konten di situs (teks, foto, logo, dan desain) dilindungi hak cipta dan tidak boleh disalin atau dipakai ulang tanpa izin tertulis.",
      ],
    },
    {
      heading: "Penggunaan portofolio",
      paragraphs: [
        "Kecuali klien menyatakan keberatan secara tertulis, kami dapat menampilkan foto dan deskripsi project yang telah selesai dalam portofolio, situs, dan materi pemasaran kami, tanpa membuka data pribadi klien.",
      ],
    },
    {
      heading: "Pihak ketiga dan kontraktor",
      paragraphs: [
        "Pekerjaan konstruksi, pasokan material, dan furnitur dapat dilakukan oleh kontraktor atau pemasok pihak ketiga. Kami membantu koordinasi dan pengawasan sesuai lingkup yang disepakati, tetapi tiap pihak ketiga bertanggung jawab atas pekerjaannya sendiri sesuai perjanjian masing-masing.",
      ],
    },
    {
      heading: "Batas tanggung jawab",
      paragraphs: [
        "Informasi di situs disediakan apa adanya untuk tujuan umum. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau keterlambatan yang disebabkan faktor di luar kendali kami (misalnya keadaan kahar, keterlambatan pasokan material, atau izin dari pihak berwenang). Tanggung jawab kami atas suatu project dibatasi sebesar nilai yang telah dibayarkan untuk layanan terkait.",
      ],
    },
    {
      heading: "Hukum yang berlaku dan penyelesaian sengketa",
      paragraphs: [
        "Syarat & Ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa diupayakan diselesaikan lebih dulu melalui musyawarah. Bila tidak tercapai, sengketa diselesaikan melalui pengadilan negeri yang berwenang di wilayah domisili kami.",
      ],
    },
    {
      heading: "Perubahan ketentuan",
      paragraphs: [
        "Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi terbaru ditampilkan di halaman ini beserta tanggal berlakunya, dan berlaku sejak dipublikasikan.",
      ],
    },
    {
      heading: "Hubungi kami",
      paragraphs: [`Pertanyaan tentang ketentuan ini dapat disampaikan ke ${contactLine}`],
    },
  ],
};
