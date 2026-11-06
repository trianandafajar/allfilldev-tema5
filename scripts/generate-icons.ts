import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { brandMark as MARK } from "../src/config/brand-mark";
import { siteConfig } from "../src/config/site";

const root = join(import.meta.dirname, "..");
const { dark, mark } = siteConfig.brand;

function iconSvg({ markWidth, radius }: { markWidth: number; radius: number }) {
  const scale = markWidth / MARK.width;
  const x = (100 - MARK.width * scale) / 2;
  const y = (100 - MARK.height * scale) / 2;
  const d = MARK.paths.join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="${radius}" fill="${dark}"/><path transform="translate(${x} ${y}) scale(${scale})" d="${d}" fill="${mark}"/></svg>\n`;
}

const rounded = iconSvg({ markWidth: 62, radius: 22 });
const fullBleed = iconSvg({ markWidth: 62, radius: 0 });
const maskable = iconSvg({ markWidth: 50, radius: 0 });

async function png(svg: string, size: number) {
  return sharp(Buffer.from(svg), { density: (72 * size) / 100 * 2 })
    .resize(size, size)
    .png()
    .toBuffer();
}

/** ICO dengan gambar PNG tertanam (didukung semua peramban modern). */
function ico(images: { size: number; data: Buffer }[]) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // tipe: ikon
  header.writeUInt16LE(images.length, 4);

  let offset = header.length + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bit depth
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

function write(path: string, data: string | Buffer) {
  const target = join(root, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, data);
  console.log("tulis", path);
}

write("src/app/icon.svg", rounded);
write(
  "src/app/favicon.ico",
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(rounded, size) })))),
);
write("src/app/apple-icon.png", await png(fullBleed, 180));
write("public/icons/icon-192.png", await png(rounded, 192));
write("public/icons/icon-512.png", await png(rounded, 512));
write("public/icons/icon-maskable-512.png", await png(maskable, 512));
