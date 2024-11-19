import { Icone1 } from "../../public/images/iconeServices/iconeService1";
import { Icone2 } from "../../public/images/iconeServices/iconeService2";
import { Icone3 } from "../../public/images/iconeServices/iconeService3";
import { Icone4 } from "../../public/images/iconeServices/iconeService4";

export const Services = () => {
  const services = [
    {
      title: "Aménagement paysager",
      description:
        "Mise en place de l’infrastructure extérieure (terrasses, allées, murs...) et installation des plantes pour transformer l’espace en un jardin harmonieux.",
      icon: Icone1,
    },
    {
      title: "Éclairage paysager",
      description:
        "Mise en place de lumières extérieures pour accentuer les éléments du jardin, créer une ambiance en soirée et améliorer la sécurité du site.",
      icon: Icone2,
    },
    {
      title: "Conception de jardin",
      description:
        "Élaboration de plans personnalisés pour créer des espaces extérieurs esthétiques et fonctionnels.",
      icon: Icone3,
    },
    {
      title: "Entretien de jardin",
      description:
        "Services réguliers de tonte, taille, désherbage et fertilisation pour garder le jardin en parfait état.",
      icon: Icone4,
    },
  ];

  return (
    <div id="Services" className="bg-tertiary pb-20">
      <h2 className="font-caption font-bold pt-20 text-5xl max-w-3xl px-4 m-auto text-black mt-20 mb-10">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-24 h-24 mb-6">
              <service.icon className="w-full h-full text-primary" />
            </div>
            <h3 className="font-bold text-center">{service.title}</h3>
            <p className="text-center text-gray-600 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
