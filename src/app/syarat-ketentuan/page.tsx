import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { LegalDocument } from "@/components/sections/legal-document";
import { termsOfService } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/syarat-ketentuan");

export default function TermsPage() {
  return (
    <>
      <PageJsonLd
        path="/syarat-ketentuan"
        name={termsOfService.title}
        dateModified={termsOfService.effectiveDate}
      />
      <PageHero title={termsOfService.title} />
      <LegalDocument document={termsOfService} />
    </>
  );
}
