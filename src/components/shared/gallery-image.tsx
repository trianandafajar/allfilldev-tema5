import { ImageLightbox } from "@/components/shared/image-lightbox";
import { SiteImage } from "@/components/shared/site-image";
import { getImageSize } from "@/lib/image-size";

/** Thumbnail galeri: hover menampilkan overlay "View", klik membuka lightbox. */
export async function GalleryImage({ src, alt = "" }: { src: string; alt?: string }) {
  const { width, height } = await getImageSize(src);

  return (
    <ImageLightbox
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="group block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
    >
      <div className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 z-[3] w-full -translate-y-1/2 p-12 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Lihat
        </div>
        <div className="absolute top-0 left-0 z-[2] h-full w-full bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <SiteImage
          src={src}
          alt={alt}
          className="w-full transition-transform duration-500 group-hover:scale-[1.2]"
        />
      </div>
    </ImageLightbox>
  );
}
