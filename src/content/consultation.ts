export type SelectField = {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
};

export const consultationSelects = {
  projectType: {
    name: "project_type",
    label: "Jenis Project",
    placeholder: "Pilih Jenis Project",
    options: [
      "Desain Ruang Tamu",
      "Interior Kamar Tidur",
      "Desain Dapur",
      "Interior Kantor",
      "Renovasi Apartemen",
      "Interior Rumah Lengkap",
    ],
  },
  propertySize: {
    name: "property_size",
    label: "Luas Properti",
    placeholder: "Pilih Luas Properti",
    options: [
      "Kecil (Di bawah 50m²)",
      "Sedang (50m² - 120m²)",
      "Besar (120m² - 250m²)",
      "Hunian Mewah (250m²+)",
    ],
  },
  designStyle: {
    name: "design_style",
    label: "Gaya Desain",
    placeholder: "Pilih Gaya",
    options: [
      "Modern Minimalis",
      "Kontemporer",
      "Skandinavia",
      "Industrial",
      "Klasik Mewah",
      "Japandi",
    ],
  },
  timeline: {
    name: "timeline",
    label: "Jangka Waktu Project",
    placeholder: "Pilih Jangka Waktu",
    options: ["Fleksibel", "1-3 Bulan", "3-6 Bulan", "Project Mendesak"],
  },
  budgetRange: {
    name: "budget_range",
    label: "Perkiraan Kisaran Anggaran",
    placeholder: "Pilih Kisaran Anggaran",
    options: [
      "Rp 75 juta - Rp 300 juta",
      "Rp 300 juta - Rp 750 juta",
      "Rp 750 juta - Rp 1,5 miliar",
      "Di atas Rp 1,5 miliar",
    ],
  },
} satisfies Record<string, SelectField>;

/** Checkbox "Layanan Tambahan": id dipakai untuk label, value dikirim ke server. */
export const additionalServices = [
  { id: "furniture", value: "Pemilihan Furnitur" },
  { id: "lighting", value: "Desain Pencahayaan" },
  { id: "custom", value: "Kabinet Custom" },
  { id: "3d", value: "Visualisasi 3D" },
  { id: "decor", value: "Penataan Dekorasi" },
  { id: "supervision", value: "Pengawasan Project" },
] as const;
