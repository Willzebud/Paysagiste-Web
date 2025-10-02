"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { cubicBezier, type Variants } from "motion";
import React, { useCallback, useEffect, useState } from "react";

export type ImagesSliderProps = {
  images?: string[];
  children?: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
};

export const ImagesSlider = ({
  images = [],
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: ImagesSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Handlers stabilisés
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Pré-chargement des images
  useEffect(() => {
    if (images.length === 0) {
      setLoadedImages([]);
      return;
    }
    setLoading(true);
    const loadPromises = images.map(
      (url) =>
        new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url);
          img.onerror = reject;
        })
    );

    Promise.all(loadPromises)
      .then((arr) => {
        setLoadedImages(arr);
        setCurrentIndex(0);
      })
      .catch((e) => console.error("Failed to load images", e))
      .finally(() => setLoading(false));
  }, [images]);

  // Clavier + autoplay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", onKey);

    let interval: number | undefined;
    if (autoplay && images.length > 1) {
      interval = window.setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      if (interval) window.clearInterval(interval);
    };
  }, [autoplay, images.length, handleNext, handlePrevious]);

  const slideVariants: Variants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: cubicBezier(0.645, 0.045, 0.355, 1) },
    },
    upExit: { opacity: 1, y: "-150%", transition: { duration: 1 } },
    downExit: { opacity: 1, y: "150%", transition: { duration: 1 } },
  };

  const ready = loadedImages.length > 0 && !loading;

  if (images.length === 0) {
    return <div className={cn("h-full w-full relative", className)} />;
  }

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center bg-black isolate",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {ready && children}

      {ready && overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />
      )}

      {ready && (
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="h-full w-full absolute inset-0 object-cover object-center"
            style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
