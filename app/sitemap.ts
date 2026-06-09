import type { MetadataRoute } from "next";
import { articles, reviews } from "@/lib/content";

const baseUrl = "https://destinazionememe.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/chi-sono",
    "/blog",
    "/recensioni",
    "/eventi",
    "/contatti",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
  }));

  const reviewRoutes = reviews.map((review) => ({
    url: `${baseUrl}/recensioni/${review.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes, ...reviewRoutes];
}
