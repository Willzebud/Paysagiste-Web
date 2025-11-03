"use client";
import { Section } from "./Section";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InstaOutline } from "./icons/Insta";
import { X } from "lucide-react";
//import logo from "../../public/logo.webp";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 py-4 bg-background z-[1000]">
      <Section className="flex items-center justify-between">
        <Link href="#Accueil">
          <Image
            src="https://www.eclairciepaysages.fr/logo.webp"
            alt="Logo entreprise paysagisme Éclaircie"
            width={40}
            height={40}
            className="w-auto h-auto"
          />
        </Link>

        {/* Section Contact et Icône */}
        <div className="flex items-center gap-4 md:gap-12">
          {/* Devis */}
          <Link
            href="#Contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-quinary"
          >
            Devis
          </Link>

          {/* Tel */}
          <a
            href="tel:0634902284"
            aria-label="Appeler"
            className="flex items-center justify-center h-14 hover:text-quinary"
          >
            Appelez-nous
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/__eclaircie_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center"
          >
            <InstaOutline
              size={50}
              strokeWidth={0.7}
              className="text-primary-foreground hover:text-quinary"
            />
          </a>

          {/* Menu (texte / X) */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center h-10 min-w-[48px] focus:outline-none"
          >
            {isOpen ? (
              <X
                className="hover:text-quinary"
                size={28}
                strokeWidth={1.5}
              />
            ) : (
              <span className="hover:text-quinary leading-none">Menu</span>
            )}
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
              href="#Offre"
              className="w-full text-center p-2 text-quinary font-bold"
              onClick={() => setIsOpen(false)}
            >
              Crédit d&apos;impôt -50%
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
              Qui nous sommes
            </Link>
          </ul>
        </motion.div>
      </Section>
    </header>
  );
};
