import type { Metadata } from "next";
import { Col, Row } from "@/components/layout/grid";
import { PageHero } from "@/components/layout/page-hero";
import { FaqTabs } from "@/components/sections/faq-tabs";
import { faqCategories } from "@/content/faq-categories";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { faqSchema } from "@/lib/schema";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/faq");

export default function FaqPage() {
  return (
    <>
      <PageJsonLd
        path="/faq"
        name="FAQ"
        nodes={[faqSchema(faqCategories.flatMap((category) => category.items))]}
      />
      <PageHero title="FAQ" description={description} />
      <section>
        <div className="container">
          <Row gy={4}>
            <Col lg={12}>
              <FaqTabs categories={faqCategories} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
