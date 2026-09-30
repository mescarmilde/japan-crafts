import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://japan-crafts.vercel.app";
  return [
    "/en",
    "/en/crafts",
    "/en/crafts/kutani-ware",
    "/en/crafts/arita-ware",
    "/en/crafts/shigaraki-ware",
    "/en/regions",
    "/en/about",
    "/en/privacy",
  ].map((path) => ({ url: base + path }));
}

