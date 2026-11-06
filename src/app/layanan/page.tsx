import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesGallery } from "@/components/sections/services-gallery";
import { serviceSummaries, servicesHeroDescription } from "@/content/services";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { itemListSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("/layanan");

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd
        path="/layanan"
        name="Layanan"
        type="CollectionPage"
        nodes={[
          itemListSchema(
            "Layanan desain interior",
            serviceSummaries.map((service) => ({
              name: service.title,
              description: service.description,
              url: absoluteUrl(service.href),
              image: service.image,
              type: "Service",
            })),
          ),
        ]}
      />
      <PageHero title="Layanan" description={servicesHeroDescription} />
      <ServicesGallery services={serviceSummaries} />
    </>
  );
}
