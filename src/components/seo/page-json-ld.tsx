import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

type PageJsonLdProps = {
  path: string;
  /** judul tampil halaman (juga item terakhir breadcrumb) */
  name: string;
  /** subtipe WebPage, mis. `ContactPage`, `AboutPage`, `CollectionPage` */
  type?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  /** node schema tambahan (Service, FAQPage, BlogPosting, ItemList, ...) */
  nodes?: Record<string, unknown>[];
};

/** JSON-LD satu halaman: WebPage + BreadcrumbList + node khusus halaman, satu `@graph`. */
export function PageJsonLd({ path, name, nodes = [], ...page }: PageJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          webPageSchema(path, { name, ...page }),
          breadcrumbSchema(path, name),
          ...nodes,
        ],
      }}
    />
  );
}
