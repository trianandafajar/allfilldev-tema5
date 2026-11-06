"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ImageLightboxProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  /** isi tombol pemicu (thumbnail) */
  children: ReactNode;
  className?: string;
};

/** Padanan Magnific Popup `.image-popup`: klik thumbnail membuka gambar penuh di dialog gelap. */
export function ImageLightbox({
  src,
  alt = "",
  width,
  height,
  children,
  className,
}: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/90 supports-backdrop-filter:backdrop-blur-none" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none"
        >
          <DialogTitle className="sr-only">{alt || "Pratinjau gambar"}</DialogTitle>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="100vw"
            className="block h-auto max-h-[calc(100vh-80px)] w-auto max-w-[calc(100vw-16px)] object-contain"
          />
          <DialogClose
            aria-label="Tutup"
            className="fixed top-2 right-2 size-11 cursor-pointer border-0 bg-transparent p-0 text-white opacity-65 transition-opacity hover:opacity-100"
          >
            <XIcon aria-hidden="true" className="mx-auto size-7" />
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
