"use client";

import Image from "next/image";
import React from "react";

const IMAGES = [
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249228/1_y9wwdg.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249510/1.1_gv02d9.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249540/2_rcjb9e.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249712/2.2_avltno.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249735/3_i2s2dq.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249755/3.3_y2xtnr.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249781/4_lmse0b.webp",
  "https://res.cloudinary.com/diik10xnk/image/upload/f_auto,q_auto:good,w_1600,c_fill,g_auto,dpr_auto/v1762249799/4.4_yphytr.webp",
];

export const Realisations = () => {
  const [idx, setIdx] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const prev = () => {
    setIdx((n) => (n - 1 + IMAGES.length) % IMAGES.length);
    setLoaded(false);
  };
  const next = () => {
    setIdx((n) => (n + 1) % IMAGES.length);
    setLoaded(false);
  };

  const onKey: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const src = IMAGES[idx];
  const isAfter = idx % 2 === 1; // Avant (pair index 0), Après (impair index 1)
  const badge = isAfter ? "Après" : "Avant";

  return (
    <section id="Realisations" className="overflow-x-hidden">
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-black pt-20">
        Réalisations
      </h2>
      <p className="text-center text-sm text-black/70 mb-6 px-4">
        Cliquez pour passer à la photo suivante (avant → après).
      </p>

      <div className="relative max-w-5xl mx-auto px-4 select-none">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-md bg-black/10
                     aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/9]"
          role="button"
          tabIndex={0}
          onClick={next}
          onKeyDown={onKey}
          title="Cliquez pour passer à la photo suivante"
        >
          {/* Badge Avant/Après */}
          <span
            className="absolute left-3 top-3 md:left-4 md:top-4 z-10
             rounded-full bg-black/55 backdrop-blur-sm text-white
             font-semibold shadow-md
             px-2.5 py-1 md:px-3 md:py-1.5
             text-xs sm:text-sm md:text-base"
            aria-live="polite"
          >
            {badge}
          </span>

          <Image
            key={src}
            src={src}
            alt={`Réalisation ${idx + 1} — ${badge}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
            className={`object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            loading={idx === 0 ? "eager" : "lazy"}
            onLoad={() => setLoaded(true)}  // ← remplace onLoadingComplete
            priority={idx === 0}
          />

          {/* Flèche précédente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Projet précédent"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center
             w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14
             rounded-full bg-black/45 hover:bg-black/60
             text-white text-lg sm:text-xl md:text-2xl
             shadow-md ring-0 hover:ring-2 hover:ring-white/40
             transition"
          >
            ‹
          </button>

          {/* Flèche suivante */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Projet suivant"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center
             w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14
             rounded-full bg-black/45 hover:bg-black/60
             text-white text-lg sm:text-xl md:text-2xl
             shadow-md ring-0 hover:ring-2 hover:ring-white/40
             transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à la photo ${i + 1}`}
              onClick={() => {
                setIdx(i);
                setLoaded(false);
              }}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-black/80" : "w-2.5 bg-black/30 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
