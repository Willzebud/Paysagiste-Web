"use client";
import Image from "next/image";

type Props = {
  /** Donne la taille via Tailwind (ex: w-28 h-20). Le composant s’adapte. */
  className?: string;
  /** Texte alternatif (SEO/accès) */
  alt?: string;
  /** Chemin du logo si tu veux changer de variante (noir, vertical, etc.) */
  src?: string;
};

/**
 * Affiche le bloc-marque "République française" en conservant ses proportions.
 * Le conteneur DOIT être `relative` et avoir une largeur/hauteur (via Tailwind).
 */
export function LogoEtat({
  className = "relative w-40 h-28 md:w-48 md:h-32",
  alt = "République française",
  src = "/images/RFL.png",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 40vw, 200px"
        className="object-contain"
        priority
      />
    </div>
  );
}
