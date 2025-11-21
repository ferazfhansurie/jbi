import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JBI - Johor Bahru Integrated Sdn. Bhd.",
  description: "Syarikat infrastruktur strategik, logistik, maritim, dan fasilitasi ekonomi berpangkalan di Johor, Malaysia",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#002B5C',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'JBI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
