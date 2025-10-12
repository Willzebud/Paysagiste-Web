import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import Script from "next/script";
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
        <link
          rel="image_src"
          href="https://www.eclairciepaysages.fr/logo.png"
        />

        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Données structurées */}
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

        {/* ========= Consent Mode v2 : défaut = denied (CRITIQUE, avant tout) ========= */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>

        {/* ========= Axeptio : config + SDK (doit charger avant GTM) ========= */}
        <Script id="axeptio-settings" strategy="beforeInteractive">
          {`
    window.axeptioSettings = {
      clientId: "68dafa10a63a2c7e7b0ca2c4",
      cookiesVersion: "eclairciepaysages-fr-EU",
      googleConsentMode: {
        default: {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          wait_for_update: 500
        }
      }
    };
  `}
        </Script>
        <Script
          id="axeptio-sdk"
          strategy="beforeInteractive"
          src="https://static.axept.io/sdk.js"
        />

        {/* ========= Google Tag Manager (se charge après que le défaut denied soit posé) ========= */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSN5QTBF');
          `}
        </Script>

        {/* ========= Bridge Axeptio -> Consent Mode v2 (mise à jour après choix) =========
            Adapte les clés 'ga4' / 'google-ads' si tes services Axeptio ont d'autres noms.
        */}
        <Script id="axeptio-consent-bridge" strategy="afterInteractive">
          {`
            window._axcb = window._axcb || [];
            window._axcb.push(function (sdk) {
              sdk.on('cookies:complete', function (choices) {
                // Exemple de mapping :
                const analyticsOn = !!(choices['ga4'] || choices['google-analytics']);
                const adsOn       = !!(choices['google-ads'] || choices['ads']);

                gtag('consent', 'update', {
                  analytics_storage:  analyticsOn ? 'granted' : 'denied',
                  ad_storage:         adsOn       ? 'granted' : 'denied',
                  ad_user_data:       adsOn       ? 'granted' : 'denied',
                  ad_personalization: adsOn       ? 'granted' : 'denied'
                });
              });
            });
          `}
        </Script>
      </head>

      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {/* GTM noscript (juste après l'ouverture du body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSN5QTBF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
