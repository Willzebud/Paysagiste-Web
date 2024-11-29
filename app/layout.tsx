import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

// Définir la police Anek Telugu avec une variable CSS personnalisée
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption", // Utilisée pour la légende (caption)
});

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Site Web Paysagiste de l'entreprise Éclaircie",
  description: "Site web paysagiste de l'entreprise Éclaircie",
};

// Composant RootLayout, layout principal pour l'application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Représente les enfants passés au layout
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* Ajout de la balise preconnect */}
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body
        className={cn(
          GeistSans.variable, // Applique la police GeistSans
          GeistMono.variable, // Applique la police GeistMono
          AnekTelugu.variable, // Applique la police AnekTelugu
          "font-sans h-full bg-background text-foreground" // Styles globaux pour le layout
        )}
      >
        {children}
      </body>
    </html>
  );
}
