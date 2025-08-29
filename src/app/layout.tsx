import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import EmailRibbon from "@/components/EmailRibbon";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://olomanastudios.com"), // <-- important
  title: "Olomana Studios",
  description:
    "We are a community focused pottery and art studio with workshops, classes and exhibition located in Irvine CA.",
  alternates: {
    canonical: "https://olomanastudios.com",
  },
  openGraph: {
    type: "website",
    url: "https://olomanastudios.com",
    siteName: "Olomana Studios",
    title: "Olomana Studios",
    description:
      "Pottery classes, workshops, and exhibitions in Irvine, CA. Cozy, community-focused studio.",
    images: [
      {
        url: "/og/olomana-og.jpg", // resolves to absolute via metadataBase
        width: 1200,
        height: 630,
        alt: "Warm, cozy scene inside Olomana Studios pottery space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olomana Studios",
    description:
      "Pottery classes, workshops, and exhibitions in Irvine, CA.",
    images: ["/og/olomana-og.jpg"], // relative is fine with metadataBase
    // creator: "@your_handle", // optional
  },
  // optional but nice to have:
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#f0efea" }}>
        <Navbar />
        <EmailRibbon />
        {children}
        <Footer />
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e88aa00478e742b0a0427e91f9f56633"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

