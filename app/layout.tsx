import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fale em 21 dias — English by Zeu",
  description:
    "O desafio de 21 dias que vai destravar sua fala em inglês de uma vez por todas. Turma começa dia 2 de junho.",
  openGraph: {
    title: "Fale em 21 dias — English by Zeu",
    description:
      "O desafio de 21 dias que vai destravar sua fala em inglês de uma vez por todas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
