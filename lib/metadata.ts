import type { Metadata } from "next";

export const siteUrl = "https://japan-crafts.vercel.app";
export const siteTitle = "Japan Crafts | Stories Behind Japanese Craftsmanship";
export const siteDescription = "Explore Japanese traditional crafts through their history, geography, materials, makers, and places of origin.";

export function pageMetadata({ title, description, path, article = false }: {
  title: string; description: string; path: string; article?: boolean;
}): Metadata {
  const url = new URL(path, siteUrl).href;
  const images = [{ url: new URL("/images/brand/japan-crafts-share.png", siteUrl).href, width: 1200, height: 630, alt: "Japan Crafts — Stories behind Japanese craftsmanship" }];
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Japan Crafts", locale: "en_US", type: article ? "article" : "website", images },
    twitter: { card: "summary_large_image", title, description, images: images.map(image => ({ url: image.url, alt: image.alt })) },
  };
}
