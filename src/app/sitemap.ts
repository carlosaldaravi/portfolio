import type { MetadataRoute } from "next";
import { localeUrl } from "@/lib/metadata";

interface Route {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const routes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/developer", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kitesurf", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/curriculum", priority: 0.6, changeFrequency: "monthly" },
  { path: "/legal-notice", priority: 0.1, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.1, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.1, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap(({ path, priority, changeFrequency }) => {
    const languages = {
      es: localeUrl("es", path),
      en: localeUrl("en", path),
      "x-default": localeUrl("es", path),
    };

    return [
      {
        url: localeUrl("es", path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      },
      {
        url: localeUrl("en", path),
        lastModified,
        changeFrequency,
        priority: Math.max(priority - 0.1, 0.1),
        alternates: { languages },
      },
    ];
  });
}
