import { Col, Row } from "@/components/layout/grid";
import { HeroSlider } from "@/components/motion/hero-slider";
import { Reveal } from "@/components/motion/reveal";
import { ScrollScale } from "@/components/motion/scroll-scale";

type HomeHeroProps = {
  titleTop: string;
  titleBottom: string;
  description: string;
  /** tiga label di sisi bawah (disembunyikan di <= 992px) */
  highlights: string[];
  /** path gambar slide di /public */
  slides: string[];
};

/** Hero beranda: slider latar crossfade, judul dua baris, deskripsi dan label bawah. */
export function HomeHero({
  titleTop,
  titleBottom,
  description,
  highlights,
  slides,
}: HomeHeroProps) {
  return (
    <section className="on-dark relative z-[1000] overflow-hidden p-0">
      <div className="relative min-h-[800px]">
        <div className="absolute top-1/2 z-[2] w-full -translate-y-1/2">
          <div className="container">
            <Row>
              <Col lg={12}>
                <h1 className="mb-6">
                  <Reveal
                    as="span"
                    animation="fade-in-left"
                    className="block max-[992px]:text-[10vw]"
                  >
                    {titleTop}
                  </Reveal>
                  <Reveal
                    as="span"
                    animation="fade-in-right"
                    delay={0.2}
                    className="block max-[992px]:text-[10vw] lg:text-end"
                  >
                    {titleBottom}
                  </Reveal>
                </h1>
              </Col>
              <Col lg={4} offsetLg={1}>
                <Reveal as="p" animation="fade-in-left" delay={0.4}>
                  {description}
                </Reveal>
              </Col>
            </Row>
          </div>
        </div>

        <div className="absolute bottom-0 z-[2] w-full pb-6 max-[992px]:hidden">
          <div className="container">
            <Row>
              <Col lg={12}>
                <div className="flex justify-between">
                  {highlights.map((label, i) => (
                    <Reveal key={label} animation="fade-in-right" delay={0.8 + i * 0.2}>
                      {label}
                    </Reveal>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <ScrollScale from={1} to={1.5} range={[0, 800]} className="absolute inset-0 z-[1]">
          <HeroSlider images={slides} />
        </ScrollScale>
      </div>
    </section>
  );
}
