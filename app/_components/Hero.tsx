"use client";
import imageAccueil from "../../public/images/imageAccueil.webp";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const baseHoverTop = useTransform(scrollYProgress, [0, 0.001], [-1000, 0]);
  const newHoverTop = useSpring(baseHoverTop, { stiffness: 100, damping: 20 });

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <motion.div
        className="absolute w-full h-screen bg-black opacity-70 z-20"
        style={{ y: newHoverTop }}
      />
      <motion.div
        className="absolute w-full h-full flex items-center justify-center text-white text-center text-xl z-30"
        style={{ y: newHoverTop }}
      >
        <div className="flex flex-col">
          <p className="max-w-3xl px-4 m-auto pb-10">
            Éclaircie est une société spécialisée dans la création et
            l’entretien d’espaces verts. PAYSAGISTE dans les Bouches-du-Rhône,
            le Vaucluse et le Var, faites confiance à notre expertise pour
            sublimer vos extérieurs !
          </p>
          <p className="max-w-3xl px-4 m-auto font-bold">
            Bénéficiez de 50 % de réduction sur vos factures grâce à l’avance
            immédiate.
          </p>
          <Link href="#Offre">
            <p className="font-bold text-white mt-5 underline">
              En savoir plus
            </p>
          </Link>
        </div>
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
