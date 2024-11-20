import { Header } from "../app/_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Realisations } from "./_components/Realisations";
import { Inspiration } from "./_components/Inspiration";
import { Services } from "./_components/Services";
import { Offre } from "./_components/Offre";
import { Team } from "./_components/Team";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Spacing />
      <Realisations />
      <Offre />
      <Services />
      <Inspiration />
      <Team />
      <Contact />
    </main>
  );
}
