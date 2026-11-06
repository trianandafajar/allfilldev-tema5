import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

const icons = {
  facebook: { label: "Facebook", Icon: FacebookIcon },
  x: { label: "X", Icon: XIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  youtube: { label: "YouTube", Icon: YoutubeIcon },
  whatsapp: { label: "WhatsApp", Icon: WhatsappIcon },
} as const;

type SocialLinksProps = {
  networks?: ReadonlyArray<keyof typeof icons>;
  className?: string;
  /** efek hover: `light` = kotak putih (default), `primary` = kotak primary + teks putih (bg-hover-2) */
  hover?: "light" | "primary";
};

/** Padanan .social-icons: kotak 36px, radius 6, hover putih. */
export function SocialLinks({
  networks = ["facebook", "x", "instagram", "youtube", "whatsapp"],
  className,
  hover = "light",
}: SocialLinksProps) {
  return (
    <div className={cn("inline-block", className)}>
      {networks.map((network) => {
        const { label, Icon } = icons[network];
        return (
          <a
            key={network}
            href="#"
            aria-label={label}
            className={cn(
              "mr-[6.5px] ml-[3px] inline-flex size-9 items-center justify-center rounded-md align-middle text-base transition-all duration-300",
              hover === "primary" ? "hover:bg-primary hover:text-white" : "hover:bg-white hover:text-ink",
            )}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
