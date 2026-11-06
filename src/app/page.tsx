import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/about-intro";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CounterRow } from "@/components/sections/counter-row";
import { FaqSection } from "@/components/sections/faq-section";
import { HomeHero } from "@/components/sections/home-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectsSlider } from "@/components/sections/projects-slider";
import { ServicesSlider } from "@/components/sections/services-slider";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { VideoBanner } from "@/components/sections/video-banner";
import { blogPosts } from "@/content/blog";
import { faqs } from "@/content/faq";
import {
  homeAbout,
  homeBlog,
  homeHero,
  homeMeta,
  homeProjects,
  homeServices,
  homeTestimonialsBackground,
  homeVideo,
} from "@/content/home";
import { processSteps } from "@/content/process-steps";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { stats } from "@/content/stats";
import { homeTestimonialQuotes } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("/", { title: homeMeta.title });

export default function Home() {
  return (
    <>
      <PageJsonLd path="/" name="Beranda" nodes={[faqSchema(faqs)]} />
      <HomeHero {...homeHero} />
      <section>
        <div className="container">
          <AboutIntro {...homeAbout} />
          <div className="h-[60px]" />
          <CounterRow stats={stats} />
        </div>
      </section>
      <ServicesSlider {...homeServices} services={services} />
      <TestimonialSlider quotes={homeTestimonialQuotes} image={homeTestimonialsBackground} />
      <ProjectsSlider {...homeProjects} projects={projects} />
      <section className="pt-0">
        <div className="container">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
      <VideoBanner {...homeVideo} />
      <FaqSection items={faqs} />
      <BlogPreview {...homeBlog} posts={blogPosts} />
    </>
  );
}
