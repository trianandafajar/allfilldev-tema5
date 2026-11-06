import { siteConfig, sitePages } from "@/config/site";
import { blogArchivePosts, blogArticle, blogArticles } from "@/content/blog";
import { company } from "@/content/company";
import { faqCategories } from "@/content/faq-categories";
import { privacyPolicy, termsOfService } from "@/content/legal";
import { offices } from "@/content/offices";
import { projectDetail, projects } from "@/content/projects";
import { serviceDetail, serviceDetails } from "@/content/service-detail";
import { serviceSummaries } from "@/content/services";
import { blogPath } from "@/lib/paths";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/format-date";

const faqItems = faqCategories.flatMap((category) => category.items);

function link(title: string, path: string, note?: string) {
  return `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;
}

/** Tautan hanya untuk halaman dengan konten asli; halaman placeholder (noindex) ditulis tanpa tautan. */
function entry(title: string, path: string, hasContent: boolean, note: string) {
  return hasContent ? link(title, path, note) : `- ${title}: ${note}`;
}

function contactBlock() {
  const branches = offices.map(
    (office) => `- ${office.city}: ${office.address}. Telepon ${office.phone}, email ${office.email}.`,
  );
  return [
    `- Nama: ${company.name}`,
    `- Alamat kantor pusat: ${company.address}`,
    `- Telepon: ${company.phone}`,
    `- Email: ${company.email}`,
    `- Jam operasional: ${company.hours}`,
    "",
    "Kantor:",
    ...branches,
  ].join("\n");
}

/** Ringkasan situs untuk AI (format llms.txt): tautan penting dengan deskripsi singkat. */
export function llmsSummary() {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    company.about,
    "",
    "## Layanan",
    "",
    ...serviceSummaries.map((service) =>
      entry(service.title, service.href, service.slug in serviceDetails, service.description),
    ),
    "",
    "## Halaman utama",
    "",
    ...sitePages.map((page) => link(page.title, page.path, page.description)),
    "",
    "## Artikel",
    "",
    ...blogArchivePosts.map((post) =>
      entry(
        post.title,
        post.href,
        post.slug in blogArticles,
        `${post.excerpt} (${post.author}, ${formatDate(post.publishedAt)})`,
      ),
    ),
    "",
    "## Pertanyaan umum",
    "",
    ...faqItems.map((item) => `- ${item.question}`),
    `Jawaban lengkap: ${absoluteUrl("/faq")}`,
    "",
    "## Kontak",
    "",
    contactBlock(),
    "",
    "## Kebijakan",
    "",
    link(privacyPolicy.title, "/kebijakan-privasi"),
    link(termsOfService.title, "/syarat-ketentuan"),
    "",
    "## Opsional",
    "",
    link("Versi lengkap untuk AI", "/llms-full.txt", "seluruh layanan, FAQ, artikel, dan kontak dalam satu berkas"),
    "",
  ].join("\n");
}

/** Versi lengkap: isi layanan, project, artikel, FAQ, dan kontak dalam satu dokumen Markdown. */
export function llmsFull() {
  const article = [
    `### ${blogArticle.title}`,
    "",
    `Penulis: ${blogArticle.author}. Terbit: ${formatDate(blogArticle.publishedAt)}. URL: ${absoluteUrl(blogPath(blogArticle.slug))}`,
    "",
    blogArticle.intro,
    "",
    ...blogArticle.steps.flatMap((step, index) => [`${index + 1}. **${step.title}**: ${step.text}`, ""]),
    blogArticle.outro,
  ];

  return [
    `# ${siteConfig.name}: ${siteConfig.tagline}`,
    "",
    `> ${siteConfig.description}`,
    "",
    company.about,
    "",
    "## Layanan",
    "",
    ...serviceSummaries.flatMap((service) => [`### ${service.title}`, "", service.description, ""]),
    `### ${serviceDetail.title}`,
    "",
    serviceDetail.intro.description,
    "",
    "Keunggulan:",
    ...serviceDetail.intro.highlights.map((item) => `- ${item}`),
    "",
    "## Project",
    "",
    ...projects.flatMap((project) => [
      `### ${project.title}`,
      "",
      `${project.description} (${project.tags.join(", ")})`,
      "",
    ]),
    `### Studi kasus: ${projectDetail.title}`,
    "",
    projectDetail.summary,
    "",
    ...projectDetail.facts.map((fact) => `- ${fact.label}: ${fact.value}`),
    "",
    "## Pertanyaan umum",
    "",
    ...faqCategories.flatMap((category) => [
      `### ${category.label}`,
      "",
      ...category.items.flatMap((item) => [`**${item.question}**`, "", item.answer, ""]),
    ]),
    "## Artikel",
    "",
    ...article,
    "",
    "## Artikel lain",
    "",
    ...blogArchivePosts.map((post) => `- ${post.title} (${post.author}, ${formatDate(post.publishedAt)}): ${post.excerpt}`),
    "",
    "## Kontak",
    "",
    contactBlock(),
    "",
    "## Kebijakan",
    "",
    link(privacyPolicy.title, "/kebijakan-privasi", `berlaku sejak ${formatDate(privacyPolicy.effectiveDate)}`),
    link(termsOfService.title, "/syarat-ketentuan", `berlaku sejak ${formatDate(termsOfService.effectiveDate)}`),
    "",
  ].join("\n");
}
