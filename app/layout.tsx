import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import Script from "next/script"; // 👈 ajout
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Entreprise Éclaircie Paysagiste",
  description: "Site web paysagiste de l'entreprise Éclaircie",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="canonical" href="https://www.eclairciepaysages.fr/" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="image_src" href="https://www.eclairciepaysages.fr/logo.png" />

        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Éclaircie Paysagiste",
              url: "https://www.eclairciepaysages.fr",
              logo: "https://www.eclairciepaysages.fr/logo.webp",
            }),
          }}
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}

        {/* Axeptio settings */}
        <Script id="axeptio-settings" strategy="afterInteractive">
          {`
            window.axeptioSettings = {
              clientId: "68dafa10a63a2c7e7b0ca2c4",
              cookiesVersion: "eclairciepaysages-fr-EU",
            };
          `}
        </Script>

        {/* Axeptio SDK */}
        <Script
          id="axeptio-sdk"
          strategy="afterInteractive"
          src="https://static.axept.io/sdk.js"
        />

        {/* (optionnel) callbacks post-consentement pour activer des tags */}
        {/*
        <Script id="axeptio-callbacks" strategy="afterInteractive">
          {`
            window._axcb = window._axcb || [];
            window._axcb.push(function(axeptio) {
              axeptio.on("cookies:complete", function(choices) {
                // Exemple: activer Google Analytics si "analytics" accepté
                const okAnalytics = choices.enabledCookies?.includes('analytics');
                if (okAnalytics && !window.__ga_loaded) {
                  const s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
                  document.head.appendChild(s);
                  window.__ga_loaded = true;
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
                }
              });
            });
          `}
        </Script>
        */}
      </body>
    </html>
  );
}
