export type NavLink = { label: string; href: string };

export const mainMenu: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Project", href: "/project" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];

/** Menu kolom "Perusahaan" di footer: menu utama ditambah halaman daftar layanan. */
export const companyMenu: NavLink[] = [
  ...mainMenu.slice(0, 2),
  { label: "Layanan", href: "/layanan" },
  ...mainMenu.slice(2),
];
