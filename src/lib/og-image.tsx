import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { OgCard } from "@/components/seo/og-card";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/jpeg";

/** Foto di /public -> data URL JPEG 1200x630 (satori tidak membaca WebP). */
async function loadPhoto(publicPath: string) {
  const file = await readFile(join(process.cwd(), "public", publicPath));
  const jpeg = await sharp(file)
    .resize(ogSize.width, ogSize.height, { fit: "cover" })
    .jpeg({ quality: 80 })
    .toBuffer();
  return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
}

type OgImageOptions = {
  title: string;
  eyebrow?: string;
  /** path foto latar di /public, mis. "/images/blog/1.webp" */
  image?: string;
};

/**
 * Render sekali lalu di-cache (route tetap statis). ImageResponse hanya menghasilkan PNG
 * (~700 KB untuk foto), jadi hasilnya dikonversi ke JPEG (~50 KB) agar di bawah batas
 * ukuran pratinjau WhatsApp dan platform lain.
 */
async function renderJpeg({ title, eyebrow, image }: OgImageOptions) {
  "use cache";
  cacheLife("max");
  const photo = image ? await loadPhoto(image) : undefined;
  const png = await new ImageResponse(
    <OgCard title={title} eyebrow={eyebrow} photo={photo} />,
    ogSize,
  ).arrayBuffer();
  const jpeg = await sharp(Buffer.from(png)).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return new Uint8Array(jpeg);
}

/** Dipanggil dari file `opengraph-image.tsx` tiap segmen route. */
export async function createOgImage(options: OgImageOptions) {
  return new Response(await renderJpeg(options), { headers: { "Content-Type": ogContentType } });
}
