import Image from "next/image";
import { Col, Row } from "@/components/layout/grid";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";

type ProjectSingleHeroProps = {
  title: string;
  intro: string;
  image: string;
};

/** Hero tinggi (min 800px) untuk halaman detail: gambar parallax, paragraf intro, judul besar di bawah. */
export function ProjectSingleHero({ title, intro, image }: ProjectSingleHeroProps) {
  return (
    <section
      id="section-intro"
      className="on-dark relative z-[4] overflow-hidden bg-dark-1 py-0"
    >
      <Parallax>
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </Parallax>
      {/* template punya karakter "\" liar setelah tag <section> yang menambah satu baris 30px */}
      <div className="h-[30px]" />
      <div className="relative z-[4] min-h-[800px]">
        <div className="h-[60px]" />
        <div className="h-[60px]" />
        <div className="h-[30px] max-[992px]:hidden" />
        <div className="container relative z-[2]">
          <Row gy={4}>
            <Col md={4}>
              <p>{intro}</p>
            </Col>
          </Row>
        </div>
        <div className="absolute bottom-[10%] left-1/2 z-[2] w-full -translate-x-1/2">
          <div className="container">
            <Row>
              <Col lg={10}>
                <Reveal as="h1" animation="fade-in-left" className="mb-0 max-[992px]:text-[10vw]">
                  {title}
                </Reveal>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-dark-1/80 opacity-40" />
    </section>
  );
}
