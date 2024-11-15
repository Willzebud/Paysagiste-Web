// components/ui/StickyScroll.tsx
"use client";
import React, { useEffect, useState } from "react";
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
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Définit la hauteur de l'écran côté client
    setScreenHeight(window.innerHeight);

    // Met à jour la hauteur si la fenêtre est redimensionnée
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!screenHeight) return null; // En attente de la définition de screenHeight

  return (
    <div
      className="relative w-full p-4"
      style={{ height: `${content.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {content.map((item, index) => {
          // Calcul précis de start et end en fonction de la hauteur de l'écran
          const start = index * screenHeight;
          const end = (index + 1) * screenHeight;

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
