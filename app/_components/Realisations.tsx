"use client";
import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../_components/FlipWords";
import Eclaircie1 from "../../public/images/imagesRealisations/Eclaircie1.webp";
import Eclaircie2 from "../../public/images/imagesRealisations/Eclaircie2.webp";
import Eclaircie3 from "../../public/images/imagesRealisations/Eclaircie3.webp";
import Eclaircie4 from "../../public/images/imagesRealisations/Eclaircie4.webp";
import Eclaircie5 from "../../public/images/imagesRealisations/Eclaircie5.webp";
import Eclaircie6 from "../../public/images/imagesRealisations/Eclaircie6.webp";
import Eclaircie7 from "../../public/images/imagesRealisations/Eclaircie7.webp";
import Eclaircie8 from "../../public/images/imagesRealisations/Eclaircie8.webp";
import Eclaircie9 from "../../public/images/imagesRealisations/Eclaircie9.webp";

export const Realisations = () => {
  return (
    <div id="Realisations">
      <FlipWordsDemo />
      <div className="overflow-x-auto flex space-x-4 py-4 max-w-6xl m-auto">
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
            <div
              key={index}
              className="relative group w-[320px] h-[500px] ml-4"
            >
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
    </div>
  );
};
