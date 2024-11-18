// Services.tsx
"use client";
import React from "react";
import EclairciePhoto10 from "../../public/images/imagesServices/EclairciePhoto10.webp";
import EclairciePhoto11 from "../../public/images/imagesServices/EclairciePhoto11.webp";
import EclairciePhoto12 from "../../public/images/imagesServices/EclairciePhoto12.webp";
import EclairciePhoto13 from "../../public/images/imagesServices/EclairciePhoto13.webp";
import EclairciePhoto14 from "../../public/images/imagesServices/EclairciePhoto14.webp";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Services() {
  const testimonials = [
    {
      quote:
        "Mise en place de l’infrastructure extérieure (terrasses, allées, murs...) et installation des plantes pour transformer l’espace en un jardin harmonieux.",
      name: "Aménagement paysager",
      designation: "",
      src: EclairciePhoto10.src,
    },
    {
      quote:
        "Mise en place de lumières extérieures pour accentuer les éléments du jardin, créer une ambiance en soirée et améliorer la sécurité du site.",
      name: "Éclairage paysager",
      designation: "",
      src: EclairciePhoto11.src,
    },
    {
      quote:
        "Élaboration de plans personnalisés pour créer des espaces extérieurs esthétiques et fonctionnels.",
      name: "Conception de jardin",
      designation: "",
      src: EclairciePhoto12.src,
    },
    {
      quote:
        "Conception et mise en place de systèmes d’arrosage automatisés pour garantir une hydratation adéquate et efficace des plantes.",
      name: "Installation de systèmes d'irrigation",
      designation: "",
      src: EclairciePhoto13.src,
    },
    {
      quote:
        "Services réguliers de tonte, taille, désherbage et fertilisation pour garder le jardin en parfait état.",
      name: "Entretien de jardin",
      designation: "",
      src: EclairciePhoto14.src,
    },
  ];

  return (
    <div id="Services" className="bg-tertiary">
      <h2 className="font-caption font-bold pt-20 text-5xl max-w-3xl px-4 m-auto text-white mt-20">
        Services
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
