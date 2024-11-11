"use client";
import imageAccueil from "../images/imageAccueil.webp";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const baseHoverTop = useTransform(scrollYProgress, [0, 0.1], [-1000, 0]);
  const newHoverTop = useSpring(baseHoverTop, { stiffness: 100, damping: 20 });

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <motion.div
        className="absolute w-full h-screen bg-black opacity-60 z-20"
        style={{ y: newHoverTop }}
      />
      <motion.div
        className="absolute w-full h-full flex items-center justify-center text-white text-center text-xl z-30"
        style={{ y: newHoverTop }}
      >
        <p>
          Je m’appelle Axel Bard et je suis paysagiste depuis plus de 6 ans.
          <br />
          Passionné par la nature et l’aménagement des espaces extérieurs, j’ai
          fait de mon métier une véritable vocation.
        </p>
      </motion.div>
      <Image
        src={imageAccueil}
        alt="image d'accueil"
        className="w-full h-full object-cover object-center"
        priority={true}
      />
    </div>
  );
};
