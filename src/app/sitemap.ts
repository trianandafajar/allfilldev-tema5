import type { MetadataRoute } from "next";
import { sitePages, type SitePath } from "@/config/site";
import { blogArticles } from "@/content/blog";
import { homeHero } from "@/content/home";
import { privacyPolicy, termsOfService } from "@/content/legal";
import { projectDetails } from "@/content/projects";
import { serviceDetails } from "@/content/service-detail";
import { blogPath, projectPath, servicePath } from "@/lib/paths";
import { absoluteUrl } from "@/lib/seo";

/** Hanya tanggal nyata dari data; `new Date()` membuat build gagal dengan `cacheComponents`. */
const lastModified: Partial<Record<SitePath, string>> = {
  "/kebijakan-privasi": privacyPolicy.effectiveDate,
  "/syarat-ketentuan": termsOfService.effectiveDate,
};

const images: Partial<Record<SitePath, string[]>> = {
  "/": [homeHero.slides[0]],
};

/**
 * Halaman detail masuk sitemap hanya bila konten aslinya sudah ditulis (ada di Record
 * `blogArticles` / `projectDetails` / `serviceDetails`). Halaman placeholder bersifat `noindex`.
 */
function detailEntries(): MetadataRoute.Sitemap {
  const articles = Object.values(blogArticles).map((article) => ({
    url: absoluteUrl(blogPath(article.slug)),
    lastModified: article.publishedAt,
    images: [absoluteUrl(article.image)],
  }));
  const projects = Object.values(projectDetails).map((project) => ({
    url: absoluteUrl(projectPath(project.slug)),
    images: [project.heroImage, ...project.gallery].map(absoluteUrl),
  }));
  const services = Object.values(serviceDetails).map((service) => ({
    url: absoluteUrl(servicePath(service.slug)),
    images: [absoluteUrl(service.whyChoose.image)],
  }));
  return [...services, ...projects, ...articles];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: lastModified[page.path],
    images: images[page.path]?.map(absoluteUrl),
  }));
  return [...pages, ...detailEntries()];
}
