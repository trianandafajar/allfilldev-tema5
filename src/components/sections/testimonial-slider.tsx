import Image from "next/image";
import { Col, Row } from "@/components/layout/grid";
import { FadeCarousel } from "@/components/motion/fade-carousel";
import { Parallax } from "@/components/motion/parallax";
import { StarRating } from "@/components/shared/star-rating";
import { Subtitle } from "@/components/shared/subtitle";
import type { Quote } from "@/content/testimonials";

type TestimonialSliderProps = {
  subtitle?: string;
  quotes: readonly Quote[];
  /** path gambar latar di /public */
  image?: string;
};

/** Section testimoni gelap dengan latar parallax dan kutipan bergantian (fade + dots). */
export function TestimonialSlider({
  subtitle = "Testimoni",
  quotes,
  image = "/images/background/1.webp",
}: TestimonialSliderProps) {
  return (
    <section className="on-dark relative overflow-hidden">
      <Parallax>
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-dark-1/80 opacity-60" />
      <div className="container relative z-[2]">
        <Row gy={4} justify="center">
          <Col md={4}>
            <Subtitle>{subtitle}</Subtitle>
          </Col>
          <Col md={7}>
            <FadeCarousel>
              {quotes.map((quote) => (
                <div key={quote.author}>
                  <span className="mb-4 block">
                    <StarRating />
                  </span>
                  <h2 className="mb-6">{quote.text}</h2>
                  <span>{quote.author}</span>
                </div>
              ))}
            </FadeCarousel>
          </Col>
        </Row>
      </div>
    </section>
  );
}
