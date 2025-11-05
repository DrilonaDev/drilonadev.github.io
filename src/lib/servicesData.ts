export type ServiceItem = {
  title: string;
  slug: "landingpage" | "website" | "online-shop" | (string & {});
  excerpt: string;
  why: string[];
  imageSrc: string;
};

export const servicesData: ServiceItem[] = [
  {
    title: "Landingpage",
    slug: "landingpage",
    excerpt:
      "Ein fokussierter One‑Pager, der Besucher gezielt zu einer Handlung führt – perfekt für Kampagnen, Events oder Produkte.",
    why: [
      "Schnell online und konversionsstark",
      "Klarer Fokus ohne Ablenkung",
      "Ideal für Ads und Kampagnen",
    ],
    imageSrc: "/services/landingpage.jpg",
  },
  {
    title: "Website",
    slug: "website",
    excerpt:
      "Eine moderne, performante Unternehmensseite mit klarer Struktur, ansprechendem Design und guter Auffindbarkeit.",
    why: [
      "Verbessert Vertrauen und Sichtbarkeit",
      "Individuelles Design für deine Marke",
      "Responsiv und wartungsfreundlich",
    ],
    imageSrc: "/services/website.jpg",
  },
  {
    title: "Online-Shop",
    slug: "online-shop",
    excerpt:
      "Ein einfach bedienbarer, sicherer Shop, der deine Produkte überzeugend präsentiert und Verkäufe erleichtert.",
    why: [
      "Einfache Verwaltung von Produkten",
      "Sichere Zahlungen und Skalierbarkeit",
      "Optimiert für Conversion",
    ],
    imageSrc: "/services/online-shop.jpg",
  },
];

