import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/konsultasi");

export default function ConsultationPage() {
  return (
    <>
      <PageJsonLd path="/konsultasi" name="Konsultasi Gratis" />
      <PageHero title="Konsultasi Gratis" description={description} />
      <ConsultationSection />
    </>
  );
}
