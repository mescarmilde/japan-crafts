import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Japan Crafts",
  description: "Learn about Japan Crafts, an English-language guide to the history, places, materials, and people behind Japanese crafts.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">Our approach</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">About Japan Crafts</h1>
      <p className="mt-6 text-xl leading-9 text-stone-600">A guide to the stories behind Japan&apos;s crafts—and the places, materials, and people that shape them.</p>
      <div className="mt-12 space-y-10 leading-8 text-stone-700">
        <section aria-labelledby="purpose">
          <h2 id="purpose" className="text-2xl font-semibold text-stone-900">Start with curiosity</h2>
          <p className="mt-4">Japan Crafts introduces Japanese crafts to English-speaking readers. Each guide brings together history, regional context, distinctive styles, and the making process, with practical starting points for visiting and choosing a piece.</p>
          <p className="mt-4">The collection begins with Kutani Ware from Ishikawa Prefecture. You do not need specialist knowledge to start exploring.</p>
        </section>
        <section aria-labelledby="sources">
          <h2 id="sources" className="text-2xl font-semibold text-stone-900">Sources and context</h2>
          <p className="mt-4">Our Kutani guide links to museums, craft organizations, and other references in its Sources &amp; Further Reading section. Historical traditions and questions of attribution are identified where they matter, so readers can follow the sources and explore further.</p>
          <Link href="/en/crafts/kutani-ware#sources" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Read the Kutani guide&apos;s sources →</Link>
        </section>
        <section aria-labelledby="images">
          <h2 id="images" className="text-2xl font-semibold text-stone-900">Photographs and illustrations</h2>
          <p className="mt-4">The Kutani photographs are sourced from Wikimedia Commons and published there under CC0. Credits and links to the original file pages appear with the images. Captions identify the style or example shown.</p>
          <p className="mt-4">The regional map and process illustrations are explanatory guides. The map is for orientation, and the production sequence is simplified; individual workshops may work differently.</p>
        </section>
        <section aria-labelledby="visiting">
          <h2 id="visiting" className="text-2xl font-semibold text-stone-900">Before you visit</h2>
          <p className="mt-4">Use the official venue links in each guide to check current opening hours, access, exhibitions, and workshop reservations before travelling.</p>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap gap-4 border-t border-stone-200 pt-8">
        <Link href="/en/crafts" className="inline-flex min-h-11 items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700">Explore the crafts →</Link>
        <Link href="/en/regions" className="inline-flex min-h-11 items-center rounded-md border border-stone-300 px-5 py-3 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-4">Browse by region →</Link>
      </div>
    </main>
  );
}
