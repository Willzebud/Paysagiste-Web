"use client";

import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../_components/FlipWords";
import imagesRealisations from "../Data/fichiersJSON/imagesRealisations.json";

export const Realisations = () => {
  return (
    <div id="Realisations" className="overflow-x-hidden">
      <FlipWordsDemo />
      <div className="overflow-x-auto flex space-x-4 py-4 max-w-6xl m-auto">
        <div className="flex flex-row gap-4">
          {imagesRealisations.map((image, index) => (
            <div
              key={index}
              className="relative group w-[380px] h-[500px] md:w-[500px] lg:w-[500px] ml-4 mr-4"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw"
                className="relative z-10 rounded-3xl object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
