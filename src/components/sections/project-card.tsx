import Link from "next/link";
import { GradientEdge } from "@/components/shared/gradient-edge";
import { SiteImage } from "@/components/shared/site-image";
import { Reveal } from "@/components/motion/reveal";
import type { Project } from "@/content/projects";

/** Kartu proyek lebar: gambar penuh, judul di atas, chip kategori di bawah, panah saat hover. */
export function ProjectOverlayCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden">
      <Link href={project.href} className="on-dark group relative block">
        <SiteImage
          src="/images/misc/up-right-arrow.webp"
          className="absolute top-0 right-0 z-[2] w-20 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute z-[4] mb-0 w-1/2 p-6">
          <h2 className="text-[36px]">{project.title}</h2>
        </div>
        <Reveal animation="scale-in" duration={1.5} className="relative overflow-hidden">
          <SiteImage
            src={project.image}
            className="w-full transition-transform duration-500 group-hover:scale-[1.2]"
          />
        </Reveal>
        <GradientEdge edge="top" height={70} opacity={0.5} />
        <div className="absolute bottom-0 z-[4] m-6 flex leading-none">
          {project.tags.map((tag) => (
            <div key={tag} className="mr-2 bg-black/15 p-2 backdrop-blur-[10px]">
              {tag}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
