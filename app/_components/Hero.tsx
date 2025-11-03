"use client";
import { motion } from "motion/react"; // si ça te met une erreur TS, remplace par: import { motion } from "framer-motion";
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
    <ImagesSlider
      className="h-[40rem]"
      images={images}
      overlay
      overlayClassName="bg-black/60"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
          Éclaircie Paysages
        </motion.p>
        <p className="font-story text-4xl text-white">Artisans Paysagistes Français 🇫🇷</p>
        <Link
          href="#Offre"
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 inline-flex items-center justify-center"
        >
          Bénéficiez du crédit d&apos;impôt
          <div className="pointer-events-none absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
