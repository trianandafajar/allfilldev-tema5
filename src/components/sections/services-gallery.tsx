import { Col } from "@/components/layout/grid";
import { MasonryGrid } from "@/components/shared/masonry-grid";
import { ServiceCard } from "@/components/sections/service-card";
import type { ServiceSummary } from "@/content/services";

/** Section galeri layanan: kartu gambar tiga kolom (dua di tablet), tata letak masonry seperti Isotope. */
export function ServicesGallery({ services }: { services: ServiceSummary[] }) {
  return (
    <section>
      <div className="container">
        <MasonryGrid gy={4}>
          {services.map((service) => (
            <Col key={service.title} lg={4} sm={6}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
