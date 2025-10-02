"use client";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export function Hero() {
  const images = [
    "/images/imageAccueil.webp",
    "/images/imagesRealisations/Eclaircie2.webp",
    "/images/imagesRealisations/Eclaircie9.webp",
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Éclaircie Paysages
        </motion.p>
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
