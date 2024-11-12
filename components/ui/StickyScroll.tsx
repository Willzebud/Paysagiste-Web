// components/ui/StickyScroll.tsx
"use client";
import React from "react";
import StickyItem from "./StickyItem";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
}

export function StickyScroll({ content }: StickyScrollProps) {
  return (
    <div
      className="relative w-full"
      style={{ height: `${content.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {content.map((item, index) => {
          // Calcul précis de start et end en fonction de la hauteur de l'écran
          const start = index * window.innerHeight;
          const end = (index + 1) * window.innerHeight;

          return (
            <StickyItem
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              start={start}
              end={end}
            />
          );
        })}
      </div>
    </div>
  );
}
