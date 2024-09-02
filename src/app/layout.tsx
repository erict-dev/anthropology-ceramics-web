import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Script from 'next/script'
import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olomana Studios",
  description: "Welcome to Olomana Studios, a Southern California art studio dedicated to bringing people and cultures together through the timeless art of pottery. Nestled in the heart of SoCal, our studio celebrates the ubiquitous feeling of human creative expression, fostering a community where creativity knows no bounds.",
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
        {/** Cloudflare Web Analytics **/}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e88aa00478e742b0a0427e91f9f56633"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
