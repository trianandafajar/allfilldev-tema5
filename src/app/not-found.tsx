import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { MainButton } from "@/components/shared/main-button";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero title="Halaman Tidak Ditemukan" crumb="404" />
      <section>
        <div className="container text-center">
          <p>
            Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke beranda atau
            hubungi kami bila Anda butuh bantuan.
          </p>
          <MainButton href="/">Kembali ke Beranda</MainButton>
        </div>
      </section>
    </>
  );
}
