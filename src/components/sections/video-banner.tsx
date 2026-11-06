import { Col, Row } from "@/components/layout/grid";
import { ScrollScale } from "@/components/motion/scroll-scale";
import { Reveal } from "@/components/motion/reveal";
import { SiteImage } from "@/components/shared/site-image";
import { VideoPopup } from "@/components/shared/video-popup";

type VideoBannerProps = {
  /** path gambar sampul di /public */
  image: string;
  /** URL video YouTube */
  url: string;
};

/** Banner selebar layar dengan tombol play; membuka video dalam dialog dan mengecil saat di-scroll. */
export function VideoBanner({ image, url }: VideoBannerProps) {
  return (
    <section className="relative overflow-hidden p-0">
      <Row>
        <Col lg={12}>
          <ScrollScale from={1.5} to={1}>
            <VideoPopup url={url} title="Putar video">
              <div className="relative overflow-hidden">
                <div className="absolute top-1/2 left-0 z-[2] w-full -translate-y-1/2 text-center text-[36px] text-white">
                  <Reveal
                    animation="scale-in"
                    className="relative mx-auto size-[120px] rounded-full bg-dark-1 hover:[&>span]:scale-[1.2]"
                  >
                    <span className="absolute top-[37.5%] left-[45%] size-0 border-y-[15px] border-l-[20px] border-y-transparent border-l-white transition-transform duration-500" />
                  </Reveal>
                </div>
                <div className="absolute top-0 h-full w-full bg-dark-1 opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
                <SiteImage src={image} className="w-full" />
              </div>
            </VideoPopup>
          </ScrollScale>
        </Col>
      </Row>
    </section>
  );
}
