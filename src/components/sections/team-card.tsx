import { Col, Row } from "@/components/layout/grid";
import { SiteImage } from "@/components/shared/site-image";
import { SocialLinks } from "@/components/shared/social-links";
import type { TeamMember } from "@/content/team";

/** Kartu anggota tim: foto di kiri, nama, jabatan, dan ikon sosial di kanan. */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden bg-surface-light">
      <Row gx={0} align="center">
        <Col sm={6}>
          <SiteImage src={member.image} alt="" className="w-full" />
        </Col>
        <Col sm={6}>
          <div className="p-4 text-center">
            <h3 className="mb-0">{member.name}</h3>
            <p className="mb-2">{member.role}</p>
            <SocialLinks networks={["facebook", "x", "instagram"]} hover="primary" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
