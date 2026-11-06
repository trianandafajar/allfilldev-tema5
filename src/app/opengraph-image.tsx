import { siteConfig } from "@/config/site";
import { homeHero } from "@/content/home";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: siteConfig.tagline,
    eyebrow: siteConfig.name,
    image: homeHero.slides[0],
  });
}
