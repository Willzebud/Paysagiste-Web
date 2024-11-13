// Inspiration.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image1 from "../../public/images/imagesInspiration/Eclaircie1.webp";
import Image2 from "../../public/images/imagesInspiration/Eclaircie2.webp";
import Image3 from "../../public/images/imagesInspiration/Eclaircie3.webp";
import Image4 from "../../public/images/imagesInspiration/Eclaircie4.webp";
import Image5 from "../../public/images/imagesInspiration/Eclaircie5.webp";
import Image6 from "../../public/images/imagesInspiration/Eclaircie6.webp";
import Image7 from "../../public/images/imagesInspiration/Eclaircie7.webp";

export function Inspiration() {
  return (
    <div id="Inspirez-vous">
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-tertiary mt-20">
        Inspirez-vous
      </h2>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: "1",
    image: Image1,
  },
  {
    id: "2",
    image: Image2,
  },
  {
    id: "3",
    image: Image3,
  },
  {
    id: "4",
    image: Image4,
  },
  {
    id: "5",
    image: Image5,
  },
  {
    id: "6",
    image: Image6,
  },
  {
    id: "7",
    image: Image7,
  },
];
