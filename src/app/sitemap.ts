import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/services/painting",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/plaster-ceiling",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/plumbing",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/electrical",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/aircond-installation",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    { path: "/projects", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  const currentDate = new Date();

  return pages.flatMap(({ path, priority, changeFrequency }) =>
    ["en", "ms"].map((lang) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          ms: `${baseUrl}/ms${path}`,
        },
      },
    }))
  );
}
