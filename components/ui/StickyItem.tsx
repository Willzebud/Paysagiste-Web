// StickyItem.tsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyItemProps {
  title: string;
  description: string;
  content: React.ReactNode;
  start: number;
  end: number;
}

const StickyItem = ({
  title,
  description,
  content,
  start,
  end,
}: StickyItemProps) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [start - 100, start, end, end + 200],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute top-0 w-full h-screen flex flex-col items-center justify-center"
      style={{ opacity }}
    >
      <div className="text-center mb-4">
        <h3 className="text-3xl font-bold mb-2 text-white">{title}</h3>
        <p className="max-w-md text-lg text-justify text-white">
          {description}
        </p>
      </div>
      <div className="w-[300px] h-[300px] rounded-lg overflow-hidden">
        {content}
      </div>
    </motion.div>
  );
};

export default StickyItem;
