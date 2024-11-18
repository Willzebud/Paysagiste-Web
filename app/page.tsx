import { Header } from "../app/_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Realisations } from "./_components/Realisations";
import { Services } from "./_components/Services";
import { Inspiration } from "./_components/Inspiration";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Spacing />
      <Realisations />
      <Spacing />
      <Services />
      <Spacing />
      <Inspiration />
      <Spacing />
    </main>
  );
}
