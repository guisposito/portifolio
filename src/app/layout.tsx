import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Header , Footer} from "../components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Sposito",
  description: "Meu Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
