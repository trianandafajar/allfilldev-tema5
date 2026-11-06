import { Col, Row } from "@/components/layout/grid";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import type { Stat } from "@/content/stats";

type CounterRowProps = {
  stats: Stat[];
  /** durasi hitung dalam ms */
  duration?: number;
};

/** Deretan angka statistik yang menghitung naik saat terlihat. */
export function CounterRow({ stats, duration = 3000 }: CounterRowProps) {
  return (
    <Row gy={4}>
      {stats.map((stat, i) => (
        <Col key={stat.label} md={3} sm={6}>
          <Reveal animation="fade-in-right" delay={i * 0.2}>
            <h3 className="mb-0 text-[40px]">
              <CountUp to={stat.value} duration={duration} />+
            </h3>
            {stat.label}
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}
