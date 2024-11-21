"use client";
import { useState } from "react";
import { IconeOffre } from "@/public/images/iconeOffre/iconeOffre";
import Link from "next/link";

export const Offre = () => {
  // État pour gérer l'affichage du paragraphe masqué
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="Offre" className="bg-quaternary pb-20">
      <h2 className="font-caption font-bold pt-20 text-5xl max-w-3xl px-4 m-auto text-black pt-20 mb-10">
        Offre immédiate
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-auto md:w-[800px] lg:w-[1000px] mx-2 md:mx-10 lg:mx-10 h-auto lg:h-auto shadow-xl flex flex-col items-center justify-center">
          <div className="w-28 h-28 mb-6 mt-10">
            <IconeOffre className="w-full h-full" />
          </div>
          <p className="text-black font-bold text-center text-2xl mt-1">
            Bénéficiez de 50% de crédit d’impôt immédiat
          </p>
          <p className="text-black text-justify mt-3 mb-5 mx-5 md:px-[20px] lg:px-[20px]">
            L’avance immédiate du crédit d’impôt permet aux particuliers de
            bénéficier instantanément de 50 % de réduction sur leurs dépenses
            éligibles pour des services à domicile (ménage, jardinage...). Plus
            besoin d’attendre l’année suivante : ces services deviennent plus
            abordables dès le paiement. <br />
            <br />
            Comment en bénéficier ?
          </p>

          {/* Paragraphe masqué */}
          {showMore && (
            <p className="text-black text-justify mb-10 mx-5 md:px-[20px] lg:px-[20px]">
              Il vous suffit de vous inscrire à l’Urssaf via la plateforme
              “Avance immédiate” ou de vérifier si votre prestataire de services
              est partenaire de ce dispositif. Une fois inscrit, l’avance de 50
              % du crédit d’impôt est automatiquement appliquée sur chaque
              facture : vous ne payez donc que la moitié du montant éligible.
              L’Urssaf prend en charge le reste.
            </p>
          )}

          <button
            onClick={() => setShowMore((prev) => !prev)} // Change l'état à chaque clic
            className="shadow-lg bg-tertiary w-[150px] md:w-[150px] lg:w-[150px] h-[40px] rounded-lg mb-5"
          >
            <p className="font-bold text-black">
              {showMore ? "Voir moins" : "En Savoir plus"}
            </p>
          </button>
          <Link
            href="#Contact"
            className=" shadow-lg bg-quaternary w-[150px] md:w-[150px] lg:w-[150px] h-[40px] rounded-lg mb-10 flex flex-col items-center justify-center"
          >
            <p className="font-bold text-black">Contactez-Nous</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
