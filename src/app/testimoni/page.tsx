import type { Metadata } from "next";
import { Col } from "@/components/layout/grid";
import { PageHero } from "@/components/layout/page-hero";
import { ReviewCard } from "@/components/sections/review-card";
import { MasonryGrid } from "@/components/shared/masonry-grid";
import { reviews } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";

const description =
  "Kami menciptakan interior inspiratif yang memadukan kenyamanan, fungsi, dan desain yang tak lekang oleh waktu. Setiap ruang dirancang dengan cermat agar mencerminkan gaya hidup dan kebutuhan Anda.";

export const metadata: Metadata = pageMetadata("/testimoni");

export default function TestimonialsPage() {
  return (
    <>
      <PageJsonLd path="/testimoni" name="Testimoni" />
      <PageHero title="Testimoni" description={description} />
      <section>
        <div className="container">
          <MasonryGrid>
            {reviews.map((review) => (
              <Col key={review.name} lg={4}>
                <ReviewCard review={review} />
              </Col>
            ))}
          </MasonryGrid>
        </div>
      </section>
    </>
  );
}
