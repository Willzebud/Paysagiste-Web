"use client";
import { Section } from "./Section";
import Image from "next/image";
import React from "react";
import Eclaircie1 from "../images/imagesRealisations/Eclaircie1.webp";
import Eclaircie2 from "../images/imagesRealisations/Eclaircie2.webp";
import Eclaircie3 from "../images/imagesRealisations/Eclaircie3.webp";
import Eclaircie4 from "../images/imagesRealisations/Eclaircie4.webp";
import Eclaircie5 from "../images/imagesRealisations/Eclaircie5.webp";
import Eclaircie6 from "../images/imagesRealisations/Eclaircie6.webp";
import Eclaircie7 from "../images/imagesRealisations/Eclaircie7.webp";
import Eclaircie8 from "../images/imagesRealisations/Eclaircie8.webp";
import Eclaircie9 from "../images/imagesRealisations/Eclaircie9.webp";

export const Realisations = () => {
  return (
    <div id="Realisations">
      <Section>
        <h2 className="font-caption font-bold text-5xl text-tertiary">
          Réalisations
        </h2>
        <div className="overflow-x-auto flex space-x-4 py-4">
          <div className="flex flex-row gap-4">
            {[
              Eclaircie1,
              Eclaircie2,
              Eclaircie3,
              Eclaircie4,
              Eclaircie5,
              Eclaircie6,
              Eclaircie7,
              Eclaircie8,
              Eclaircie9,
            ].map((imageSrc, index) => (
              <div key={index} className="relative group w-[320px] h-[500px]">
                <div className="absolute inset-0 -m-2 bg-tertiary opacity-0 group-hover:opacity-80 transition-opacity duration-30 rounded-[30px]"></div>
                <Image
                  src={imageSrc}
                  alt={`Image ${index + 1}`}
                  width="0"
                  height="0"
                  className="relative z-10 rounded-3xl object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
