import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { CarouselNav, CarouselNavProvider } from "@/components/shared/carousel-nav";
import { ItemCarousel } from "@/components/shared/item-carousel";
import { Subtitle } from "@/components/shared/subtitle";
import { TeamCard } from "@/components/sections/team-card";
import type { TeamMember } from "@/content/team";

type TeamSectionProps = {
  subtitle: string;
  title: string;
  description: string;
  members: readonly TeamMember[];
};

/** Section tim: judul + deskripsi + tombol prev/next, lalu carousel 2 kolom. */
export function TeamSection({ subtitle, title, description, members }: TeamSectionProps) {
  return (
    <section>
      <CarouselNavProvider>
        <div className="container">
          <Row gx={5} gy={4} align="center" justify="between" className="mb-4">
            <Col lg={4}>
              <Reveal animation="fade-in" delay={0.2}>
                <Subtitle>{subtitle}</Subtitle>
                <Reveal as="h2" animation="fade-in-right">
                  {title}
                </Reveal>
              </Reveal>
            </Col>
            <Col lg={4}>
              <p>{description}</p>
            </Col>
            <Col lg={4}>
              <div className="relative">
                <CarouselNav />
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row gy={4}>
            <Col lg={12}>
              <Reveal animation="fade-in" delay={0.2}>
                <ItemCarousel cols={2}>
                  {members.map((member) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </ItemCarousel>
              </Reveal>
            </Col>
          </Row>
        </div>
      </CarouselNavProvider>
    </section>
  );
}
