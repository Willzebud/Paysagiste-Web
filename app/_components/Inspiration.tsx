"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import imagesInspirations from "../Data/fichiersJSON/imagesInspirations.json";

export function Inspiration() {
  return (
    <div id="Inspiration" className="backdrop-blur-sm bg-[#2FA87A]/10 ring-1 ring-inset ring-[#2FA87A]/25 overflow-x-hidden">
      {/* filets lumineux émeraude */}
  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-black pt-20">
        Inspirez-vous
      </h2>
      <AnimatedTestimonials testimonials={imagesInspirations} />
    </div>
  );
}
