import type { NextConfig } from "next";

// Configuration spécifique pour Vercel
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // Utiliser standalone uniquement pour les déploiements non-Vercel (Docker, etc.)
  output: isVercel ? undefined : "standalone",

  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Optimisations pour Vercel
  ...(isVercel && {
    compress: true,
    poweredByHeader: false,
  }),
};

export default nextConfig;
