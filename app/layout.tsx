import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Les Délices — Restaurant à Thiès, votre étape avant Saint-Louis",
  description:
    "Les Délices, 373 Av. Lamine Gueye, Thiès. Pâtes, pizzas, grillades, poissons du jour, spécialités orientales et asiatiques, sandwichs, burgers et pâtisseries maison. Une vraie pause chaleureuse sur la route de Saint-Louis.",
  metadataBase: new URL("https://lesdelices-thies.sn"),
  openGraph: {
    title: "Les Délices — Restaurant à Thiès",
    description:
      "Un large choix de plats généreux et une vraie pause chaleureuse avant de reprendre la route vers Saint-Louis.",
    locale: "fr_SN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-coffee">
        {children}
      </body>
    </html>
  );
}
