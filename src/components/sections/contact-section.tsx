import { ContactForm } from "@/components/forms/contact-form";
import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { OfficeInfo } from "@/components/sections/office-info";
import { offices } from "@/content/offices";

/** Section kontak: daftar kantor di kiri, form pesan di kanan. */
export function ContactSection() {
  return (
    <section>
      <div className="container">
        <Row gx={4} gy={4}>
          <Col lg={6}>
            <Row gx={4} gy={4}>
              {offices.map((office, index) => (
                <Col key={office.city} md={6}>
                  <Reveal delay={index * 0.2}>
                    <OfficeInfo office={office} />
                  </Reveal>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6}>
            <Reveal as="p" className="lg:w-2/3">
              Punya pertanyaan, saran, atau sekadar ingin menyapa? Kami siap dan senang mendengar kabar dari Anda!
            </Reveal>
            <div className="h-[30px]" />
            <Reveal delay={0.6} className="relative">
              <ContactForm />
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
}
