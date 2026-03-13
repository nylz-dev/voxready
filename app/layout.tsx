import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoxReady — Simulateur d'entretien téléphonique IA",
  description:
    "Entraînez-vous à l'entretien téléphonique avec Sophie, votre IA recruteur. Progressez. Décrochez le poste.",
  keywords: ["entretien téléphonique", "IA", "recrutement", "préparation", "VoxScore"],
  openGraph: {
    title: "VoxReady — Êtes-vous VoxReady ?",
    description:
      "Simulez un vrai entretien téléphonique avec une IA recruteur. Entraînez-vous. Progressez. Décrochez le poste.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
