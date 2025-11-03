"use client";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export function Hero() {
  const images = [
    "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1800,c_fill,g_auto,dpr_auto/v1759676445/imageAccueil_copie_ehyikz.webp",
    "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1800,c_fill,g_auto,dpr_auto/v1759676157/hero2_c0csz3.webp",
    "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1800,c_fill,g_auto,dpr_auto/v1759676162/hero3_rnacyb.webp",
    "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1800,c_fill,g_auto,dpr_auto/v1759676166/hero4_wcesxd.webp",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images} overlay overlayClassName="bg-black/60">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col items-center text-center"
      >
        {/* Title — larger on mobile */}
        <motion.h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 leading-tight">
          Éclaircie Paysages
        </motion.h1>

        {/* Tagline — smaller on mobile, scales up later */}
        <p className="mt-2 font-story text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Artisans Paysagistes Français <span className="align-middle">🇫🇷</span>
        </p>

        <Link
          href="#Offre"
          className="mt-5 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative inline-flex items-center justify-center"
        >
          Bénéficiez du crédit d&apos;impôt
          <div className="pointer-events-none absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
