"use client";
import { Section } from "./Section";
import { useState } from "react";
import Link from "next/link";
import { Sun, SunMoon } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 py-4 bg-background z-[1000]">
      <Section className="flex items-center justify-between">
        <h1 className="text-2xl text-primary-foreground">Wesh</h1>
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6">
            {isOpen ? (
              <SunMoon
                className="text-primary-foreground hover:text-quaternary"
                size={32}
              />
            ) : (
              <Sun
                className="text-primary-foreground animate-spin-slow hover:text-tertiary"
                size={32}
              />
            )}
          </div>
        </button>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className={`overflow-hidden w-full bg-background absolute top-16 left-0 z-40`}
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            <Link
              href="#Realisations"
              className="w-full text-center p-2 hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              href="#Services"
              className="w-full text-center p-2 hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#Inspirez-vous"
              className="w-full text-center p-2 hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              Inspirez-vous
            </Link>
            <Link
              href="À propos"
              className="w-full text-center p-2 hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="Contact"
              className="w-full text-center p-2 hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </ul>
        </motion.div>
      </Section>
    </header>
  );
};
