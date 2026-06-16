import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/blog/rooster-fighter-pollo-fritto-o-super-saiyan",
        destination: "/recensioni/rooster-fighter-pollo-fritto-o-super-saiyan",
        permanent: true,
      },
      {
        source: "/blog/nippon-sangoku-recensione-strategia-non-mazzate",
        destination: "/recensioni/nippon-sangoku-recensione-strategia-non-mazzate",
        permanent: true,
      },
      {
        source: "/blog/ichi-the-witch-recensione-primo-volume",
        destination: "/recensioni/ichi-the-witch-recensione-primo-volume",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
