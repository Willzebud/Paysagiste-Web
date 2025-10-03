import { Section } from "./Section";
import Image from "next/image";
import EclaircieTeam from "../../public/images/imageTeam/EclaircieTeam.webp";

export const Team = () => {
  return (
    <div id="Team" className="bg-white pb-20">
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-black pt-20 mb-10">
        Qui nous sommes
      </h2>
      <Section>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
          {/* Texte */}
          <div className="backdrop-blur-sm bg-[#2FA87A]/10 ring-1 ring-inset ring-[#2FA87A]/25 p-8 rounded-lg shadow-xl w-full md:w-[400px]">
            {/* filets lumineux émeraude */}
  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
            <p className="text-black text-1xl mt-1 text-justify hyphens-auto">
              Chez Éclaircie notre équipe de paysagistes met tout son dynamisme
              et sa créativité au service de vos projets. <br />
              <br /> Animés par une véritable passion pour la nature et le
              design extérieur nous nous engageons à vous offrir des
              réalisations sur mesure, alliant esthétique, fonctionnalité et
              respect de l’environnement. <br />
              <br /> Faites confiance à une équipe motivée qui place votre
              satisfaction au cœur de ses priorités. Créons ensemble le jardin
              de vos rêves.
            </p>
          </div>

          {/* Image */}
          <div className="backdrop-blur-sm bg-[#2FA87A]/10 ring-1 ring-inset ring-[#2FA87A]/25 p-1 rounded-lg w-full md:w-[400px]">
          {/* filets lumineux émeraude */}
  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
            <Image
              src={EclaircieTeam}
              alt="Photo de l'équipe de l'entreprise Eclaircie avec deux hommes"
              className="w-full h-full object-cover object-center rounded-lg"
              loading="lazy" // Lazy loading
              width={400} // Largeur explicite
              height={400}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
