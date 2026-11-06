import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCard } from "@/components/sections/service-card";
import { CarouselNav, CarouselNavProvider } from "@/components/shared/carousel-nav";
import { ItemCarousel } from "@/components/shared/item-carousel";
import type { Service } from "@/content/services";

type ServicesSliderProps = {
  subtitle: string;
  title: string;
  description: string;
  services: Service[];
};

/** Section layanan: header dengan tombol prev/next dan carousel kartu selebar layar. */
export function ServicesSlider({
  subtitle,
  title,
  description,
  services,
}: ServicesSliderProps) {
  return (
    <section className="bg-primary/10">
      <CarouselNavProvider>
        <div className="container">
          <SectionHeader
            subtitle={subtitle}
            title={title}
            description={description}
            aside={<CarouselNav />}
          />
        </div>
        <Row gy={4}>
          <Col lg={12}>
            <Reveal animation="fade-in" delay={0.2}>
              <ItemCarousel cols={4} center>
                {services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </ItemCarousel>
            </Reveal>
          </Col>
        </Row>
      </CarouselNavProvider>
    </section>
  );
}
