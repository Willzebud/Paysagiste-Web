"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    id: string;
    image: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // Configurer la direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // Configurer la vitesse
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <div
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 md:w-[450px] aspect-[16/10]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`Image for item ${item.id}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
