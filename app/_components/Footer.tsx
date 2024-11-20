import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Section className="py-8 flex items-center justify-center">
        <p className="test-muted-foreground text-sm text-black font-bold">
          @Copywrite 2024 Éclaircie
        </p>
      </Section>
    </footer>
  );
};
