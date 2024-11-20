import { Header } from "../app/_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Realisations } from "./_components/Realisations";
import { Inspiration } from "./_components/Inspiration";
import { Services } from "./_components/Services";
import { Offre } from "./_components/Offre";

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
      <Spacing />
    </main>
  );
}
