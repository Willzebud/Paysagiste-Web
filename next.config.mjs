// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.eclairciepaysages.fr" },
      { protocol: "https", hostname: "res.cloudinary.com" }, // ✅ ajoute Cloudinary
    ],
    formats: ["image/avif", "image/webp"], // optionnel
  },
};

export default nextConfig;
