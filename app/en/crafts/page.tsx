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
      </section>
    </main>
  );
}
