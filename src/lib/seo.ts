import type { Metadata } from "next";
import { siteConfig, sitePages } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\u003c");
}

type PageMetadataOverrides = {
  /** judul halaman; default dari `sitePages` */
  title?: string;
  description?: string;
  /** wajib untuk path yang tidak ada di `sitePages` (halaman detail `/jenis/slug`) */
  /** route gambar share; default kartu umum `/opengraph-image` */
  image?: string;
  /** `article` untuk detail blog (menambah author dan waktu terbit) */
  type?: "website" | "article";
  /** halaman placeholder: jangan diindeks (tetap boleh diikuti linknya) */
  noindex?: boolean;
  publishedTime?: string;
  authors?: string[];
};

/**
 * Metadata lengkap satu halaman publik: title, description, canonical, hreflang,
 * Open Graph, dan Twitter. `openGraph` di sebuah page menggantikan milik layout
 * (shallow merge), jadi `siteName` dan `locale` harus diulang di sini.
 * Gambar share harus diisi eksplisit: `openGraph` di page juga menggantikan gambar dari
 * file `opengraph-image` milik layout.
 */
export function pageMetadata(path: string, overrides: PageMetadataOverrides = {}): Metadata {
  const page = sitePages.find((p) => p.path === path);
  const title = overrides.title ?? page?.title;
  const description = overrides.description ?? page?.description;
  if (!title || !description) {
    throw new Error(`Halaman ${path} belum terdaftar di sitePages; isi title dan description`);
  }
  const url = absoluteUrl(path);
  const socialTitle = `${title} | ${siteConfig.name}`;
  const image = overrides.image ?? "/opengraph-image";

  return {
    // template judul layout tidak berlaku untuk page di segmen yang sama (beranda)
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    ...(overrides.noindex && { robots: { index: false, follow: true } }),
    alternates: {
      canonical: path,
      languages: { [siteConfig.language]: url, "x-default": url },
    },
    openGraph: {
      type: overrides.type ?? "website",
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: socialTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(overrides.type === "article" && {
        publishedTime: overrides.publishedTime,
        authors: overrides.authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt: title }],
    },
  };
}
