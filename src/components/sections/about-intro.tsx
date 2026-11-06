import { Col, Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import { SiteImage } from "@/components/shared/site-image";
import { Subtitle } from "@/components/shared/subtitle";

type AboutIntroProps = {
  subtitle: string;
  title: string;
  text: string;
  /** path gambar di /public */
  image: string;
  /** path gambar tanda tangan di /public */
  signature: string;
  signatureName: string;
  /** true: dua kolom (foto | judul + teks + tanda tangan) seperti halaman About; default tiga kolom */
  split?: boolean;
};

/** Foto, judul, lalu teks dengan tanda tangan; tiga kolom atau dua kolom (`split`). */
export function AboutIntro({
  subtitle,
  title,
  text,
  image,
  signature,
  signatureName,
  split = false,
}: AboutIntroProps) {
  const heading = (
    <>
      <Subtitle>{subtitle}</Subtitle>
      <Reveal as="h2" animation="fade-in-right" delay={0.2}>
        {title}
      </Reveal>
    </>
  );
  const body = (
    <>
      <Reveal as="p" animation="fade-in-right" delay={0.4}>
        {text}
      </Reveal>
      <Reveal animation="fade-in-right" delay={0.6} className="text-end">
        <SiteImage src={signature} className="ml-auto w-[150px]" />
        <h3 className="hs-5">{signatureName}</h3>
      </Reveal>
    </>
  );

  return (
    <Row gx={5} gy={4} justify="end" align="center">
      <Col md={split ? 6 : 4}>
        <Reveal animation="zoom-in" className="relative overflow-hidden">
          <Reveal animation="scale-in">
            <SiteImage src={image} className="w-full" />
          </Reveal>
        </Reveal>
      </Col>
      {split ? (
        <Col md={6}>
          {heading}
          {body}
        </Col>
      ) : (
        <>
          <Col md={4}>{heading}</Col>
          <Col md={4}>{body}</Col>
        </>
      )}
    </Row>
  );
}
