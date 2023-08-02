import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex app with PokeAPI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          {/* TODO */}
          {/* <Navigation/> */}

          {/* TODO */}
          {/* <Search/> */}
          {children}

          {/* TODO */}
          {/* <Footer/> */}
        </Providers>
      </body>
    </html>
  );
}
