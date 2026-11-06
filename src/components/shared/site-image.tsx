import Image, { type ImageProps } from "next/image";
import { getImageSize } from "@/lib/image-size";
import { cn } from "@/lib/utils";

type SiteImageProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  /** path di /public, mis. "/images/misc/s1.webp" */
  src: string;
  alt?: string;
};

/**
 * Pengganti <img> template. Ukuran asli dibaca dari file di /public saat render,
 * jadi mengganti aset placeholder dengan aset asli tidak butuh perubahan kode.
 * Tanpa kelas lebar, gambar tampil pada ukuran aslinya seperti <img> biasa.
 */
export async function SiteImage({ src, alt = "", className, ...props }: SiteImageProps) {
  const { width, height } = await getImageSize(src);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto", className)}
      {...props}
    />
  );
}
