import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

/** URL lama `/detail-*` (satu halaman per jenis) -> halaman slug yang kini memuat konten aslinya. */
const legacyRedirects = [
  {
    source: "/detail-blog",
    destination: "/blog/perencanaan-tata-letak-cerdas-ruang-lebih-lega-nyaman",
    permanent: true,
  },
  { source: "/detail-layanan", destination: "/layanan/pemilihan-furnitur-dekorasi", permanent: true },
  { source: "/detail-project", destination: "/project/ruang-tamu-modern-minimalis", permanent: true },
];

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
