/**
 * Ceramic Charm Workshop page (server component).
 * Exports SEO metadata and renders the client-side content component.
 */
import React from 'react';
import type { Metadata } from 'next';
import CharmWorkshopContent from './CharmWorkshopContent';

export const metadata: Metadata = {
  title: 'Charm Making Workshop in Irvine | Ceramic Jewelry Making Class | Olomana Studios',
  description:
    'Make 3 custom ceramic charms in our charm making workshop in Irvine, CA. Shape, paint, and fire your own pendants and figures in this ceramic jewelry making class. All materials included.',
  alternates: {
    canonical: 'https://olomanastudios.com/workshops/ceramic-charm-workshop-irvine',
  },
  openGraph: {
    type: 'website',
    url: 'https://olomanastudios.com/workshops/ceramic-charm-workshop-irvine',
    siteName: 'Olomana Studios',
    title: 'Charm Making Workshop in Irvine | Ceramic Jewelry Making Class',
    description:
      'Design and paint 3 handmade ceramic charms in this 1.5-hour ceramic jewelry making workshop in Irvine. Shape pendants, figures, and keychains from clay. All materials and kiln firing included.',
    images: [
      {
        url: '/og/olomana-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Handmade ceramic charms from a charm making workshop at Olomana Studios in Irvine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charm Making Workshop in Irvine | Olomana Studios',
    description:
      'Shape, paint, and fire 3 ceramic charms in our beginner-friendly ceramic jewelry making class in Irvine, CA.',
    images: ['/og/olomana-og.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function CeramicCharmWorkshopPage() {
  return <CharmWorkshopContent />;
}
