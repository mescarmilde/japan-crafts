import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Craft Regions of Japan | Japan Crafts",
  description: "Explore Japanese crafts through the places that shaped them, starting with Kutani ware in Ishikawa Prefecture.",
};

export default function RegionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">Explore by place</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">Craft Regions of Japan</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
        Every craft has a home. Explore the connections between local materials,
        communities, and the objects they make. Our regional collection begins in Ishikawa.
      </p>

      <section aria-labelledby="ishikawa-title" className="mt-12 rounded-lg border border-stone-200 bg-white p-6 sm:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Hokuriku · 石川県</p>
        <h2 id="ishikawa-title" className="mt-3 text-3xl font-semibold">Ishikawa Prefecture</h2>
        <p className="mt-5 max-w-2xl leading-8 text-stone-600">
          Begin with Kutani ware: colorful porcelain connected to Kaga, Komatsu,
          and Nomi. Follow its history, discover its painting styles, and find
          museums and workshops to explore.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/en/crafts/kutani-ware" className="rounded-lg border border-stone-200 p-6 transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700">
            <p className="text-sm text-stone-500">Porcelain · 九谷焼</p>
            <h3 className="mt-2 text-2xl font-semibold">Kutani Ware</h3>
            <p className="mt-3 leading-7 text-stone-600">Bold colors, fine painting, and the stories behind a varied ceramic tradition.</p>
            <p className="mt-5 font-medium">Read the craft guide →</p>
          </Link>
          <div className="rounded-lg bg-[#faf9f6] p-6">
            <h3 className="text-xl font-semibold">Find your bearings</h3>
            <p className="mt-3 leading-7 text-stone-600">See how the places in the Kutani story connect, then explore places to visit.</p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <Link href="/en/crafts/kutani-ware#why-here" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">View the Kutani region map →</Link>
              <Link href="/en/crafts/kutani-ware#visit" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Explore museums and workshops →</Link>
            </div>
          </div>
        </div>
      </section>
      <p className="mt-8 max-w-2xl leading-7 text-stone-500">This collection is growing. The regions shown here reflect the craft guides currently available on Japan Crafts.</p>
    </main>
  );
}
