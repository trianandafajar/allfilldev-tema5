import { ConsultationForm } from "@/components/forms/consultation-form";
import { Col, Row } from "@/components/layout/grid";
import { OfficeInfo } from "@/components/sections/office-info";
import { offices } from "@/content/offices";

/** Section konsultasi: form di kiri (kartu terang), daftar kantor di kanan. */
export function ConsultationSection() {
  return (
    <section>
      <div className="container">
        <Row gx={5} gy={5} align="start">
          <Col lg={8}>
            <div className="bg-surface-light p-10">
              <ConsultationForm />
            </div>
          </Col>
          <Col lg={4}>
            {offices.map((office) => (
              <div key={office.city} className="mb-6">
                <OfficeInfo office={office} />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}
