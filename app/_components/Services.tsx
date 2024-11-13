// Services.tsx
"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";
import EclairciePhoto1 from "../../public/images/imagesServices/EclairciePhoto1.webp";
import EclairciePhoto2 from "../../public/images/imagesServices/EclairciePhoto2.webp";
import EclairciePhoto3 from "../../public/images/imagesServices/EclairciePhoto3.webp";
import EclairciePhoto4 from "../../public/images/imagesServices/EclairciePhoto4.webp";
import EclairciePhoto5 from "../../public/images/imagesServices/EclairciePhoto5.webp";

const content = [
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold"></div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full flex items-center justify-center"></div>
    ),
  },
  {
    title: "Aménagement paysager",
    description:
      "Mise en place de l’infrastructure extérieure (terrasses, allées, murs...) et installation des plantes pour transformer l’espace en un jardin harmonieux.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white text-lg font-semibold">
        <Image
          src={EclairciePhoto1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Éclairage paysager",
    description:
      "Mise en place de lumières extérieures pour accentuer les éléments du jardin, créer une ambiance en soirée et améliorer la sécurité du site.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold">
        <Image
          src={EclairciePhoto2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Conception de jardin",
    description:
      "Élaboration de plans personnalisés pour créer des espaces extérieurs esthétiques et fonctionnels.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold">
        <Image
          src={EclairciePhoto3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Installation de systèmes d'irrigation",
    description:
      "Conception et mise en place de systèmes d’arrosage automatisés pour garantir une hydratation adéquate et efficace des plantes.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold">
        <Image
          src={EclairciePhoto4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Entretien de jardin",
    description:
      "Services réguliers de tonte, taille, désherbage et fertilisation pour garder le jardin en parfait état.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-lg font-semibold">
        <Image
          src={EclairciePhoto5}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function Services() {
  return (
    <div id="Services" className="p-10 bg-tertiary">
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-white mt-20">
        Services
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
