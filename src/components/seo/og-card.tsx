import { brandMark } from "@/config/brand-mark";
import { siteConfig } from "@/config/site";

type OgCardProps = {
  title: string;
  /** label kecil di atas judul, mis. "Blog" */
  eyebrow?: string;
  /** foto latar sebagai data URL JPEG; tanpa foto, latar polos warna merek */
  photo?: string;
};

const { dark, mark, light } = siteConfig.brand;

/**
 * Kartu gambar share 1200x630 untuk `ImageResponse` (satori): hanya flexbox dan style
 * inline, dan warna dari `siteConfig.brand` karena CSS variable tidak tersedia di sini.
 */
export function OgCard({ title, eyebrow, photo }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: dark,
        color: light,
      }}
    >
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element -- satori tidak mendukung next/image
        <img
          src={photo}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundImage: `linear-gradient(180deg, ${dark}66 0%, ${dark}f2 100%)`,
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            width={Math.round(brandMark.width * 0.9)}
            height={Math.round(brandMark.height * 0.9)}
            viewBox={`0 0 ${brandMark.width} ${brandMark.height}`}
          >
            {brandMark.paths.map((d) => (
              <path key={d} d={d} fill={mark} />
            ))}
          </svg>
          <div
            style={{
              marginLeft: 20,
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div
              style={{
                fontSize: 28,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: mark,
                marginBottom: 16,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              fontSize: title.length > 60 ? 54 : 72,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
