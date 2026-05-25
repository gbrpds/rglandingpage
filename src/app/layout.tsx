import type { Metadata } from "next";
import { Sora, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RG Performance — Assessoria de Crescimento para Médicos",
  description:
    "Estruturamos a operação comercial de médicos com clínica própria para gerar um fluxo previsível de consultas particulares. Crescimento com método.",
  keywords:
    "marketing médico, assessoria médica, crescimento clínica, consultas particulares, marketing para médicos, Porto Alegre",
  openGraph: {
    title: "RG Performance — Assessoria de Crescimento para Médicos",
    description:
      "Menos achismo. Mais estrutura, método e previsibilidade. Diagnóstico gratuito.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${manrope.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <ScrollAnimator />
      </body>
    </html>
  );
}
