import { getServiceDetail } from "@/content/service-detail";
import { serviceSlugs } from "@/content/services";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return new Response(null, { status: 404 });
  return createOgImage({
    title: service.title,
    eyebrow: "Layanan",
    image: service.whyChoose.image,
  });
}
