import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://olomanastudios.com';

  return [
    // Main pages
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/classes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/workshops`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/calendar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/gift-cards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/events`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/open-studio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/open-studio/availability`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },

    // Class detail pages
    { url: `${base}/classes/beginner-pottery-class-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/classes/intermediate-pottery-class-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/classes/adult-pottery-group-class-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/classes/kids-and-family-pottery-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/classes/4-week-pottery-course-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/classes/private-pottery-event-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Workshop detail pages
    { url: `${base}/workshops/matcha-bowl-pottery-workshop-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/workshops/teapot-pottery-workshop-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/workshops/ikebana-flower-arrangement-workshop-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Library pages
    { url: `${base}/library/celadon`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/library/kurinuki`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/library/hakeme`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/library/ikebana`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },

    // Resource pages
    { url: `${base}/resources/date-night-ideas-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/family-activities-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/team-building-activities-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/things-to-do-in-irvine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/pottery-classes-orange-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/beginner-pottery-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
