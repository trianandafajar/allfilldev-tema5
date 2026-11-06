import path from "node:path";
import sharp from "sharp";

/**
 * Ukuran asli gambar di /public. Di-cache supaya pembacaan file tidak dianggap
 * data dinamis oleh cacheComponents; mengganti aset butuh build/restart baru.
 */
export async function getImageSize(src: string) {
  "use cache";
  const { width, height } = await sharp(
    path.join(process.cwd(), "public", src),
  ).metadata();
  return { width, height };
}
