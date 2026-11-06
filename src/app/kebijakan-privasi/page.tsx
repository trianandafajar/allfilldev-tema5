import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { LegalDocument } from "@/components/sections/legal-document";
import { privacyPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/kebijakan-privasi");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageJsonLd
        path="/kebijakan-privasi"
        name={privacyPolicy.title}
        dateModified={privacyPolicy.effectiveDate}
      />
      <PageHero title={privacyPolicy.title} />
      <LegalDocument document={privacyPolicy} />
    </>
  );
}
