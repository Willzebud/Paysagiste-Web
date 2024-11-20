import { Icone1 } from "../../public/images/iconeServices/iconeService1";
import { Icone2 } from "../../public/images/iconeServices/iconeService2";
import { Icone3 } from "../../public/images/iconeServices/iconeService3";
import { Icone4 } from "../../public/images/iconeServices/iconeService4";

export const Services = () => {
  const services = [
    {
      title: "Création de jardin",
      description:
        "Nous concevons des jardins sur mesure, en sélectionnant des plantes adaptées et des matériaux durables. Moderne, zen ou luxuriant, votre jardin est réalisé avec soin, du design à la mise en œuvre.",
      icon: Icone1,
    },
    {
      title: "Un accompagnement sur mesure",
      description:
        "Nous travaillons main dans la main avec vous pour donner vie à vos projets d’aménagement extérieur. À chaque étape, du design à la réalisation, nous vous conseillons et vous accompagnons.",
      icon: Icone2,
    },
    {
      title: "Arrosage automatique",
      description:
        "Nos systèmes d’arrosage automatique sont discrets et intelligents. Avec des programmateurs, ajustez les cycles d’arrosage selon les saisons et les besoins de vos plantes. Nos solutions sont personnalisées, fiables et économiques.",
      icon: Icone3,
    },
    {
      title: "Entretien des espaces verts",
      description:
        "Un jardin bien entretenu, c’est le secret pour profiter d’un espace vert accueillant toute l’année ! Tailler, arroser et nourrir les plantes, c’est garantir la bonne santé de votre jardin.",
      icon: Icone4,
    },
  ];

  return (
    <div id="Services" className="bg-white pb-20">
      <h2 className="font-caption font-bold pt-15 text-5xl max-w-3xl px-4 m-auto text-black mt-20 mb-10">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-items-center bg-quaternary p-6 rounded-lg shadow-lg"
          >
            <div className="w-24 h-24 mb-6">
              <service.icon className="w-full h-full text-primary" />
            </div>
            <h3 className="font-bold text-center">{service.title}</h3>
            <p className="text-center text-black text-sm text-1xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
