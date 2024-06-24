import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthropology Ceramics",
  description: "Welcome to Anthropology Ceramics, a Southern California art studio dedicated to bringing people and cultures together through the timeless art of pottery. Nestled in the heart of SoCal, our studio celebrates the ubiquitous feeling of human creative expression, fostering a community where creativity knows no bounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
