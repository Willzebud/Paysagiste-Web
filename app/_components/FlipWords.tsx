import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Sublimez",
    "Transformez",
    "Révélez",
    "Modernisez",
    "Embellissez",
  ];

  return (
    <div>
      <div className="font-caption font-bold text-5xl">
        <FlipWords words={words} className="text-tertiary" /> <br />
        <p className="pl-3 text-3xl">votre espace extérieur avec Éclaircie</p>
      </div>
    </div>
  );
}
