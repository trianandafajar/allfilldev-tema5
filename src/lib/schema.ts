import { siteConfig, sitePages } from "@/config/site";
import { company, serviceLinks } from "@/content/company";
import { offices } from "@/content/offices";
import { absoluteUrl } from "@/lib/seo";

type Schema = Record<string, unknown>;

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

/** Halaman detail `/jenis/slug` -> halaman daftar induknya `/jenis` (untuk BreadcrumbList). */
function parentPath(path: string) {
  const [section, slug] = path.split("/").filter(Boolean);
  return slug ? `/${section}` : undefined;
}

function pageTitle(path: string) {
  return sitePages.find((p) => p.path === path)?.title ?? siteConfig.name;
}

function postalAddress(streetAddress: string, locality: string, region?: string): Schema {
  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality: locality,
    ...(region && { addressRegion: region }),
    addressCountry: company.country,
  };
}

/** Bisnis lokal (kantor pusat + cabang). Data harus sama persis dengan footer dan halaman kontak. */
export function organizationSchema(): Schema {
  const sameAs = Object.values(company.socialUrls);
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: `${siteConfig.name} Studio`,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icons/icon-512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/opengraph-image"),
    telephone: company.phone,
    email: company.email,
    address: postalAddress(company.streetAddress, company.city, company.region),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: company.openingHours.days,
      opens: company.openingHours.opens,
      closes: company.openingHours.closes,
    },
    areaServed: offices.map((office) => ({ "@type": "City", name: office.city })),
    knowsAbout: [...serviceLinks],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: company.phone,
        email: company.email,
        areaServed: company.country,
        availableLanguage: siteConfig.language,
      },
    ],
    department: offices
      .filter((office) => office.city !== company.city)
      .map((office) => ({
        "@type": "HomeAndConstructionBusiness",
        name: `${siteConfig.name} ${office.city}`,
        telephone: office.phone,
        email: office.email,
        address: postalAddress(office.address, office.city),
        parentOrganization: { "@id": organizationId },
      })),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteSchema(): Schema {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
  };
}

type WebPageOptions = {
  /** subtipe schema.org, mis. `ContactPage`, `AboutPage`, `CollectionPage` */
  type?: string;
  name: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

export function webPageSchema(path: string, options: WebPageOptions): Schema {
  const url = absoluteUrl(path);
  const description =
    options.description ?? sitePages.find((p) => p.path === path)?.description;
  return {
    "@type": options.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.name,
    ...(description && { description }),
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    ...(options.image && {
      primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(options.image) },
    }),
    ...(options.datePublished && { datePublished: options.datePublished }),
    ...(options.dateModified && { dateModified: options.dateModified }),
  };
}

/** Beranda > (induk) > halaman ini. `name` = judul tampil halaman saat ini. */
export function breadcrumbSchema(path: string, name: string): Schema {
  const trail: { name: string; url: string }[] = [
    { name: pageTitle("/"), url: absoluteUrl("/") },
  ];
  const parent = parentPath(path);
  if (parent) trail.push({ name: pageTitle(parent), url: absoluteUrl(parent) });
  if (path !== "/") trail.push({ name, url: absoluteUrl(path) });

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string; image?: string; type?: string; description?: string }[],
): Schema {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      item: {
        "@type": item.type ?? "Thing",
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: absoluteUrl(item.image) }),
      },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): Schema {
  return {
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    serviceType: "Desain interior",
    provider: { "@id": organizationId },
    areaServed: offices.map((office) => ({ "@type": "City", name: office.city })),
    ...(service.image && { image: absoluteUrl(service.image) }),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]): Schema {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogPostingSchema(post: {
  url: string;
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
}): Schema {
  return {
    "@type": "BlogPosting",
    "@id": `${post.url}#article`,
    mainEntityOfPage: { "@id": `${post.url}#webpage` },
    headline: post.headline,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: siteConfig.language,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": organizationId },
  };
}

export function personSchema(person: { name: string; role: string; image: string }): Schema {
  return {
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    image: absoluteUrl(person.image),
    worksFor: { "@id": organizationId },
  };
}

export function creativeWorkSchema(work: {
  name: string;
  description: string;
  url: string;
  image: string;
}): Schema {
  return {
    "@type": "CreativeWork",
    name: work.name,
    description: work.description,
    url: work.url,
    image: absoluteUrl(work.image),
    inLanguage: siteConfig.language,
    creator: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };
}
