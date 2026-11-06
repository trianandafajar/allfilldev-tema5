import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { IconSteps } from "@/components/sections/icon-steps";
import { ImageChecklist } from "@/components/sections/image-checklist";
import { ServiceIntro } from "@/components/sections/service-intro";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { getServiceDetail } from "@/content/service-detail";
import { serviceSlugs, servicesHeroDescription } from "@/content/services";
import { servicePath } from "@/lib/paths";
import { serviceSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  const path = servicePath(slug);
  return pageMetadata(path, {
    title: service.title,
    description: service.description,
    image: `${path}/opengraph-image`,
    noindex: service.placeholder,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  const path = servicePath(slug);
  const { intro, included, process, whyChoose } = service;

  return (
    <>
      <PageJsonLd
        path={path}
        name={service.title}
        description={service.description}
        image={whyChoose.image}
        nodes={[
          serviceSchema({
            name: service.title,
            description: service.description,
            url: absoluteUrl(path),
            image: whyChoose.image,
          }),
        ]}
      />
      <PageHero
        title={service.title}
        parent={{ label: "Layanan", href: "/layanan" }}
        description={servicesHeroDescription}
      />
      <ServiceIntro
        subtitle={intro.subtitle}
        heading={intro.heading}
        description={intro.description}
        highlightsTitle={intro.highlightsTitle}
        highlights={intro.highlights}
      />
      <FeatureCards
        subtitle={included.subtitle}
        heading={included.heading}
        features={included.features}
      />
      <IconSteps subtitle={process.subtitle} heading={process.heading} steps={process.steps} />
      <ImageChecklist
        image={whyChoose.image}
        subtitle={whyChoose.subtitle}
        heading={whyChoose.heading}
        points={whyChoose.points}
      />
    </>
  );
}
