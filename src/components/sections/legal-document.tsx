import Link from "next/link";
import { Col, Row } from "@/components/layout/grid";
import { SidebarWidget } from "@/components/shared/sidebar-widget";
import type { LegalDocument as LegalContent } from "@/content/legal";
import { formatDate } from "@/lib/format-date";

const sectionId = (index: number) => `bagian-${index + 1}`;

/** Halaman legal (kebijakan privasi, syarat & ketentuan): daftar isi di kiri, isi bernomor di kanan. */
export function LegalDocument({ document }: { document: LegalContent }) {
  return (
    <section>
      <div className="container">
        <Row gx={5} gy={4}>
          <Col lg={4}>
            <div className="lg:sticky lg:top-28">
              <SidebarWidget title="Daftar Isi">
                <ol className="m-0 list-none p-0">
                  {document.sections.map((section, index) => (
                    <li key={section.heading} className="my-[6px]">
                      <Link href={`#${sectionId(index)}`}>
                        {index + 1}. {section.heading}
                      </Link>
                    </li>
                  ))}
                </ol>
              </SidebarWidget>
            </div>
          </Col>
          <Col lg={8}>
            <p className="text-[14px]">
              Berlaku sejak <time dateTime={document.effectiveDate}>{formatDate(document.effectiveDate)}</time>
            </p>
            <p>{document.intro}</p>
            {document.sections.map((section, index) => (
              <div key={section.heading} id={sectionId(index)} className="mt-10 scroll-mt-28">
                <h2 className="hs-3">
                  {index + 1}. {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="mb-5 list-disc pl-6">
                    {section.items.map((item) => (
                      <li key={item} className="my-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}
