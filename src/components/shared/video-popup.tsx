"use client";

import { useState, type ReactNode } from "react";
import { XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type VideoPopupProps = {
  /** URL video YouTube (watch?v=...) */
  url: string;
  /** judul untuk pembaca layar */
  title?: string;
  className?: string;
  /** isi tautan pembuka */
  children: ReactNode;
};

function toEmbedUrl(url: string) {
  const id = new URL(url).searchParams.get("v");
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
}

/**
 * Padanan Magnific Popup `.popup-youtube`: tautan yang membuka video dalam dialog.
 * Di bawah 700px tautan dibuka biasa (disableOn: 700).
 */
export function VideoPopup({ url, title = "Video", className, children }: VideoPopupProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={url}
        className={cn("group block", className)}
        onClick={(event) => {
          if (window.innerWidth < 700) return;
          event.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-0 left-0 grid h-full max-w-none translate-x-0 translate-y-0 place-items-center gap-0 rounded-none bg-black/90 p-4 ring-0 sm:max-w-none"
          onClick={() => setOpen(false)}
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div
            className="aspect-video w-full max-w-[900px] bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            {open && (
              <iframe
                src={toEmbedUrl(url)}
                title={title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="size-full border-0"
              />
            )}
          </div>
          <DialogClose
            aria-label="Tutup"
            className="absolute top-4 right-4 cursor-pointer text-white/70 transition-opacity hover:text-white"
          >
            <XIcon className="size-8" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
