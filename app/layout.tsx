import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PokéGeo — Kanto Geography Quiz",
  description: "Test your Pokémon geography knowledge. Click the Kanto map to guess locations from lore questions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen">{children}</body>
    </html>
  );
}
