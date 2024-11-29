"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import imagesInspirations from "../Data/fichiersJSON/imagesInspirations.json";

export function Inspiration() {
  return (
    <div id="Inspiration" className="bg-quaternary overflow-x-hidden">
      <h2 className="font-caption font-bold text-5xl max-w-3xl pt-20 px-4 m-auto text-black pt-20">
        Inspirez-vous
      </h2>
      <AnimatedTestimonials testimonials={imagesInspirations} />
    </div>
  );
}
