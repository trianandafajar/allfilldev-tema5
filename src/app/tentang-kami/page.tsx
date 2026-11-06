import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { CounterRow } from "@/components/sections/counter-row";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { stats } from "@/content/stats";
import { teamMembers } from "@/content/team";
import { testimonialQuotes } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { personSchema } from "@/lib/schema";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/tentang-kami");

export default function AboutPage() {
  return (
    <>
      <PageJsonLd path="/tentang-kami" name="Tentang Kami" type="AboutPage" nodes={teamMembers.map(personSchema)} />
      <PageHero title="Tentang Kami" description={description} />
      <section>
        <div className="container">
          <AboutIntro
            split
            subtitle="Tentang Kami"
            title="Kami berkomitmen mewujudkan visi Anda menjadi kenyataan"
            text="Kami menciptakan ruang yang tidak hanya memukau secara visual, tetapi juga dirancang dengan cermat agar sangat fungsional, personal, dan benar-benar mencerminkan jati diri Anda. Setiap project kami kerjakan dengan keseimbangan antara kreativitas dan kepraktisan, sehingga setiap elemen tidak hanya tampak indah, tetapi juga berguna dalam keseharian Anda."
            image="/images/misc/s1.webp"
            signature="/images/misc/signature.webp"
            signatureName="John Smith"
          />
          <div className="h-[60px]" />
          <CounterRow stats={stats} />
        </div>
      </section>
      <TestimonialSlider
        subtitle="Testimoni"
        quotes={testimonialQuotes}
        image="/images/background/1.webp"
      />
      <TeamSection
        subtitle="Tim Kami"
        title="Kenali Para Ahli di Balik Karya Kami"
        description="Tim kami terdiri dari para profesional yang berdedikasi dan menghadirkan hasil yang luar biasa. Dengan keahlian yang beragam dan visi yang sama, kami mewujudkan ide-ide inovatif dan melampaui harapan Anda."
        members={teamMembers}
      />
    </>
  );
}
