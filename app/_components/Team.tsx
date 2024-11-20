import { Section } from "./Section";
import Image from "next/image";
import EclaircieTeam from "../../public/images/imageTeam/EclaircieTeam.webp";

export const Team = () => {
  return (
    <div id="Team" className="bg-white pb-20">
      <h2 className="font-caption font-bold pt-10 text-5xl max-w-3xl px-4 m-auto text-black pt-20 mb-10">
        Team
      </h2>
      <Section>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
          {/* Texte */}
          <div className="bg-tertiary p-8 rounded-lg shadow-lg w-full md:w-[400px]">
            <p className="text-black text-center text-1xl mt-1 text-justify">
              Je m’appelle Axel Bard, paysagiste depuis plus de 6 ans. Passionné
              par la nature, je transforme chaque espace en un lieu harmonieux
              et esthétique où le végétal est à l’honneur. <br />
              <br />
              De la conception à la réalisation, je crée des jardins uniques,
              adaptés à vos envies et à votre environnement, qu’il s’agisse de
              petits jardins urbains ou de grands espaces verts. <br />
              <br />
              Si vous cherchez un paysagiste attentif et créatif pour donner vie
              à vos idées, contactez-moi.
            </p>
          </div>

          {/* Image */}
          <div className="bg-quinary p-2 rounded-lg w-full md:w-[400px]">
            <Image
              src={EclaircieTeam}
              alt="Photo de l'équipe d'Eclaircie"
              className="w-full h-full object-cover object-center rounded-lg"
              priority={true}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
