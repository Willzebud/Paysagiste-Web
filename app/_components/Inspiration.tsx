// Inspiration.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image15 from "../../public/images/imagesInspiration/Eclaircie15.webp";
import Image16 from "../../public/images/imagesInspiration/Eclaircie16.webp";
import Image17 from "../../public/images/imagesInspiration/Eclaircie17.webp";
import Image18 from "../../public/images/imagesInspiration/Eclaircie18.webp";
import Image19 from "../../public/images/imagesInspiration/Eclaircie19.webp";
import Image20 from "../../public/images/imagesInspiration/Eclaircie20.webp";
import Image21 from "../../public/images/imagesInspiration/Eclaircie21.webp";

export function Inspiration() {
  return (
    <div id="Inspirez-vous">
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-tertiary">
        Inspirez-vous
      </h2>
      <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: "1",
    image: Image15,
  },
  {
    id: "2",
    image: Image16,
  },
  {
    id: "3",
    image: Image17,
  },
  {
    id: "4",
    image: Image18,
  },
  {
    id: "5",
    image: Image19,
  },
  {
    id: "6",
    image: Image20,
  },
  {
    id: "7",
    image: Image21,
  },
];
