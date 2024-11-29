"use client";
import imageAccueil from "../../public/images/imageAccueil.webp";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import logo from "../../public/images/logo.webp";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const baseHoverTop = useTransform(scrollYProgress, [0, 0.001], [-1000, 0]);
  const newHoverTop = useSpring(baseHoverTop, { stiffness: 100, damping: 20 });

  return (
    <div
      id="Accueil"
      className="w-full h-screen flex relative overflow-x-hidden"
    >
      <motion.div
        className="absolute w-full h-screen bg-quaternary opacity-80 z-20"
        style={{ y: newHoverTop }}
      />
      <motion.div
        className="absolute w-full h-full flex items-center justify-center text-black text-center text-xl z-30"
        style={{ y: newHoverTop }}
      >
        <div className="flex flex-col">
          <div className="w-36 h-36 m-auto">
            <Image src={logo} alt="Logo de l'entreprise Éclaircie" />
          </div>
          <h1 className="max-w-3xl px-4 m-auto font-bold pb-2 pt-8">
            Éclaircie Paysagiste
          </h1>
          <p className="max-w-3xl px-4 m-auto pb-10">
            Nous sommes une société spécialisée dans la création et l’entretien
            d’espaces verts. PAYSAGISTE dans les Bouches-du-Rhône, le Vaucluse
            et le Var, faites confiance à notre expertise pour sublimer vos
            extérieurs !
          </p>
          <p className="max-w-3xl px-4 m-auto font-bold">
            Bénéficiez de 50 % de réduction sur vos factures grâce à l’avance
            immédiate
          </p>
          <Link href="#Offre">
            <p className="font-bold text-black mt-5 underline">
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
