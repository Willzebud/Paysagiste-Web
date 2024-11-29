"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  src: string;
  alt: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const rotations = [-3, -7, 4, -5, 6];

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 gap-20">
        <div>
          <div className="flex items-center h-80 w-full md:h-[500px] md:w-[500px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index % rotations.length],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index)
                      ? 0
                      : rotations[index % rotations.length],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index % rotations.length],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt} // Utilisation des alt depuis JSON
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable={false}
                    className="relative h-full w-full rounded-3xl object-cover object-center"
                    priority={index === 0} // L'attribut priority est uniquement pour la première image
                    loading={index === 0 ? "eager" : "lazy"} // Seule la première image est eager
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-black dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowLeft className="h-6 w-6 text-white dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-black dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowRight className="h-6 w-6 text-white dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
