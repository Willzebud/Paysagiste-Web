// app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Éclaircie Paysages",
  description:
    "Mentions légales et informations relatives à l'éditeur du site eclairciepaysages.fr, à l'hébergement, et aux contacts.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Mentions légales</h1>
        <p className="text-sm text-muted-foreground">
          Dernière mise à jour : <time dateTime="2025-10-02">02/10/2025</time>
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Édition du site</h2>
        <p>
          Le présent site, accessible à l’URL{" "}
          <a href="https://www.eclairciepaysages.fr" className="underline underline-offset-4">
            https://www.eclairciepaysages.fr
          </a>{" "}
          (le « Site »), est édité par :
        </p>
        <p>
          <strong>Axel Bard</strong>, résidant 2 chemin de la Ribassière, 13013
          Marseille, de nationalité française, inscrit au R.C.S. de MARSEILLE
          sous le numéro <strong>929&nbsp;498&nbsp;780</strong>.
          <br />
          N° de TVA intracommunautaire : <strong>FR&nbsp;07&nbsp;929&nbsp;498&nbsp;780</strong>.
        </p>
        {/* Note: par prudence, éviter d'afficher la date de naissance publiquement, elle n'est pas nécessaire aux mentions légales. */}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>
          Le Site est hébergé par <strong>OVH SAS</strong>, 2 rue Kellermann —
          BP 80157 — 59053 Roubaix Cedex 1, France. <br />
          Contact : <a href="tel:1007" className="underline underline-offset-4">1007</a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Directeur de publication</h2>
        <p>
          <strong>Axel Bard</strong>, en qualité d’éditeur du Site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Nous contacter</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Téléphone :{" "}
            <a href="tel:+33625268589" className="underline underline-offset-4">
              +33&nbsp;6&nbsp;34&nbsp;90&nbsp;22&nbsp;84
            </a>
          </li>
          <li>
            Email :{" "}
            <a href="mailto:paysages@eclaircie-pro.com" className="underline underline-offset-4">
              paysages@eclaircie-pro.com
            </a>
          </li>
          <li>Adresse : 2 chemin de la Ribassière, 13013 Marseille, France</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Données personnelles</h2>
        <p>
          Le traitement de vos données à caractère personnel est régi par notre{" "}
          <a href="/politique-de-confidentialite" className="underline underline-offset-4">
            Charte de protection des données personnelles
          </a>
          , conforme au Règlement (UE) 2016/679 (RGPD).
        </p>
      </section>

      <footer className="pt-6 border-t">
        <p className="text-sm text-muted-foreground">
          Génération des mentions légales par Legalstart.
        </p>
      </footer>
    </main>
  );
}
