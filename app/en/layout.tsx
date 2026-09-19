import Link from "next/link";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900">
      <header className="border-b border-stone-200 bg-[#faf9f6]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center">
          <Link
            href="/en"
            className="text-lg font-semibold tracking-[0.15em]"
          >
            JAPAN CRAFTS
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-6 text-sm">
            <Link href="/en/crafts" className="inline-flex min-h-11 items-center hover:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-4">
              Crafts
            </Link>

            <Link href="/en/regions" className="inline-flex min-h-11 items-center hover:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-4">Regions</Link>
            <Link href="/en/about" className="inline-flex min-h-11 items-center hover:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-4">About</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="mt-20 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-stone-500">
          © 2026 Japan Crafts
        </div>
      </footer>
    </div>
  );
}
