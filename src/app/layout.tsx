import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JBI - Johor Bahru Integrated Sdn. Bhd.",
  description: "Premier Johor-based integrated maritime and logistics company delivering sustainable impact across seas, borders, and communities.",
  keywords: ["JBI", "Johor Bahru Integrated", "maritime", "logistics", "ferry terminal", "barter trade", "ship-to-ship", "telecommunications"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
