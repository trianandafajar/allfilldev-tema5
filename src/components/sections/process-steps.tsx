import { Row } from "@/components/layout/grid";
import { Reveal } from "@/components/motion/reveal";
import type { ProcessStep } from "@/content/process-steps";

/** Langkah proses: ikon bulat, judul, deskripsi, dengan panah di antara langkah. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <Row justify="center">
      {steps.map(({ icon: Icon, title, description }, i) => (
        <Reveal
          key={title}
          animation="fade-in-right"
          delay={0.3 * (i + 1)}
          className="relative w-[50%] max-w-full shrink-0 p-5 text-center after:absolute after:top-1/2 after:-right-[25px] after:-translate-y-1/2 after:text-[24px] after:text-black after:content-['→'] last:after:hidden max-[767px]:after:hidden md:w-[25%]"
        >
          <div className="mx-auto mb-[10px] flex size-20 items-center justify-center rounded-full bg-primary text-white">
            <Icon aria-hidden="true" className="size-8" />
          </div>
          <h2 className="hs-4">{title}</h2>
          <p>{description}</p>
        </Reveal>
      ))}
    </Row>
  );
}
