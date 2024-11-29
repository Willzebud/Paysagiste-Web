"use client";
import { Section } from "./Section";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconeWatering1 } from "@/public/images/iconeHeader/iconeWatering1";
import { IconeWatering2 } from "@/public/images/iconeHeader/iconeWatering2";
import logo from "../../public/images/logo.webp";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 py-4 bg-background z-[1000]">
      <Section className="flex items-center justify-between">
        <Link href="#Accueil" className="w-10 h-10">
          <Image
            src={logo}
            alt="Logo de l'entreprise de paysagisme Éclaircie"
          />
        </Link>
        {/* Section Contact et Icône */}
        <div className="flex items-center space-x-4">
          <Link href="#Contact">
            <p className="text-black">Contactez-Nous</p>
          </Link>
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex items-center justify-center h-11 w-11">
              {isOpen ? (
                <IconeWatering2
                  className="text-primary-foreground origin-right"
                  size={44}
                />
              ) : (
                <IconeWatering1 className="text-primary-foreground" size={36} />
              )}
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden w-full bg-background absolute top-16 left-0 z-40"
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            <Link
              href="#Realisations"
              className="w-full text-center p-2 hover:text-quinary"
              onClick={() => setIsOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              href="#Services"
              className="w-full text-center p-2 hover:text-quinary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#Inspiration"
              className="w-full text-center p-2 hover:text-quinary"
              onClick={() => setIsOpen(false)}
            >
              Inspirez-vous
            </Link>
            <Link
              href="#Team"
              className="w-full text-center p-2 hover:text-quinary"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </ul>
        </motion.div>
      </Section>
    </header>
  );
};
