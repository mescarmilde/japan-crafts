import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Japanese Traditional Crafts | Japan Crafts",
  description: "Explore traditional crafts from across Japan and discover the history, materials, regions, and people behind them.",
  path: "/en/crafts",
  article: false,
});

import Link from "next/link";

export default function CraftsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
        Explore
      </p>

      <h1 className="text-4xl font-semibold">Japanese Crafts</h1>

      <p className="mt-5 max-w-2xl leading-7 text-stone-600">
        Discover traditional crafts from across Japan and the history,
        geography, materials, and people behind them.
      </p>

      <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/en/crafts/kutani-ware"
          className="rounded-lg border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-stone-500">Ishikawa Prefecture</p>

          <h2 className="mt-2 text-2xl font-semibold">Kutani Ware</h2>

          <p className="mt-4 leading-7 text-stone-600">
            Bold colors, intricate painting, and more than three centuries of
            ceramic history.
          </p>

          <p className="mt-6 text-sm font-medium">Explore Kutani Ware →</p>
        </Link>
        <Link
          href="/en/crafts/arita-ware"
          className="rounded-lg border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]"
        >
          <p className="text-sm text-stone-500">Saga Prefecture</p>
          <h2 className="mt-2 text-2xl font-semibold">Arita Ware</h2>
          <p className="mt-4 leading-7 text-stone-600">
            One of Japan’s foundational porcelain traditions, shaped by local
            resources, skilled potters, regional industry, and global trade.
          </p>
          <p className="mt-6 text-sm font-medium">Explore Arita Ware →</p>
        </Link>
        <Link
          href="/en/crafts/shigaraki-ware"
          className="rounded-lg border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]"
        >
          <p className="text-sm text-stone-500">Shiga Prefecture</p>
          <h2 className="mt-2 text-2xl font-semibold">Shigaraki Ware</h2>
          <p className="mt-4 leading-7 text-stone-600">
            Clay, fire, and changing everyday needs: a pottery region reaching
            from tea vessels to garden ceramics and contemporary design.
          </p>
          <p className="mt-6 text-sm font-medium">Explore Shigaraki Ware →</p>
        </Link>
        <Link href="/en/crafts/hasami-ware" className="rounded-lg border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">
          <p className="text-sm text-stone-500">Nagasaki Prefecture</p>
          <h2 className="mt-2 text-2xl font-semibold">Hasami Ware</h2>
          <p className="mt-4 leading-7 text-stone-600">Everyday tableware shaped by a network of specialists, changing markets, and contemporary design.</p>
          <p className="mt-6 text-sm font-medium">Explore Hasami Ware →</p>
        </Link>
      </section>
      <aside className="mt-12 border-t border-stone-200 pt-8">
        <h2 className="text-2xl font-semibold">Not sure where to start?</h2>
        <Link href="/en/crafts/kutani-vs-arita-vs-shigaraki" className="mt-4 inline-block py-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">Kutani vs Arita vs Shigaraki: compare the three traditions →</Link>
        <div>
          <Link href="/en/crafts/arita-vs-hasami" className="mt-4 inline-block py-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">Arita vs Hasami Ware: differences, connections, and how to choose →</Link>
        </div>
      </aside>
    </main>
  );
}


