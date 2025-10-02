// components/Footer.tsx
"use client";
import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="overflow-x-hidden">
      <Section className="py-8 flex items-center justify-center">
        <Link
          href="/mentions-legales"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          aria-label="Mentions légales (ouvre un nouvel onglet)"
          title="Mentions légales (ouvre un nouvel onglet)"
        >
          Mentions légales
          <span className="sr-only"> (ouvre un nouvel onglet)</span>
        </Link>
      </Section>
    </footer>
  );
};
