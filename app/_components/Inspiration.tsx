"use client";

import React from "react";
import Eclaircie15 from "../../public/images/imagesInspiration/Eclaircie15.webp";
import Eclaircie16 from "../../public/images/imagesInspiration/Eclaircie16.webp";
import Eclaircie17 from "../../public/images/imagesInspiration/Eclaircie17.webp";
import Eclaircie18 from "../../public/images/imagesInspiration/Eclaircie18.webp";
import Eclaircie19 from "../../public/images/imagesInspiration/Eclaircie19.webp";
import Eclaircie20 from "../../public/images/imagesInspiration/Eclaircie20.webp";
import Eclaircie21 from "../../public/images/imagesInspiration/Eclaircie21.webp";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Inspiration() {
  const testimonials = [
    { src: Eclaircie15.src },
    { src: Eclaircie16.src },
    { src: Eclaircie17.src },
    { src: Eclaircie18.src },
    { src: Eclaircie19.src },
    { src: Eclaircie20.src },
    { src: Eclaircie21.src },
  ];

  return (
    <div id="Inspiration" className="bg-quaternary">
      <h2 className="font-caption font-bold text-5xl max-w-3xl pt-20 px-4 m-auto text-black pt-20">
        Inspirez-vous
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
