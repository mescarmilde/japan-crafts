import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://japan-crafts.vercel.app";
  return [
    "/en",
    "/en/crafts",
    "/en/crafts/kutani-ware",
    "/en/crafts/arita-ware",
    "/en/crafts/shigaraki-ware",
    "/en/crafts/hasami-ware",
    "/en/crafts/yamanaka-lacquerware",
    "/en/crafts/arita-vs-hasami",
    "/en/crafts/kutani-vs-arita-vs-shigaraki",
    "/en/regions",
    "/en/about",
    "/en/privacy",
  ].map((path) => ({ url: base + path }));
}
