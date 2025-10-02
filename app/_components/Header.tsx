"use client";
import { Section } from "./Section";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconeWatering1 } from "@/public/images/iconeHeader/iconeWatering1";
import { IconeWatering2 } from "@/public/images/iconeHeader/iconeWatering2";
import { InstaOutline } from "./icons/Insta";
//import logo from "../../public/logo.webp";
import Image from "next/image";
import { Phone } from "lucide-react";

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
        <div className="flex items-center gap-6">
          {/* Tel */}
          <a
            href="tel:0634902284"
            aria-label="Appeler"
            className="flex items-center justify-center w-14 h-14"
          >
            <Phone className="text-primary-foreground" strokeWidth={1.5} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/__eclaircie_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-14 h-14"
          >
            <InstaOutline
              size={50}
              strokeWidth={0.7}
              className="text-primary-foreground"
            />
          </a>

          {/* Menu (arrosoir) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex items-center justify-center w-14 h-14 focus:outline-none"
          >
            {isOpen ? (
              <IconeWatering2 className="text-primary-foreground" size={44} />
            ) : (
              <IconeWatering1 className="text-primary-foreground" size={36} />
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
