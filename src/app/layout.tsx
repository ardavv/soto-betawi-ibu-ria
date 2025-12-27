import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — Menu & Order GoFood/GrabFood`,
  description: `${site.brand}. Kuah lebih gurih. Lihat menu, harga, lokasi, dan order cepat via GoFood/GrabFood.`,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${site.brand} — Menu & Order`,
    description: `${site.brand}. Kuah lebih gurih. Order cepat via GoFood/GrabFood.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${plusJakarta.className} min-h-screen bg-[#fafafa] text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
