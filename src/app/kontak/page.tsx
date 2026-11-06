import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/kontak");

export default function ContactPage() {
  return (
    <>
      <PageJsonLd path="/kontak" name="Kontak" type="ContactPage" />
      <PageHero title="Kontak" description={description} />
      <ContactSection />
    </>
  );
}
