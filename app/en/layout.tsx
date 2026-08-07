import Link from "next/link";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900">
      <header className="border-b border-stone-200 bg-[#faf9f6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/en"
            className="text-lg font-semibold tracking-[0.15em]"
          >
            JAPAN CRAFTS
          </Link>

          <nav className="flex gap-6 text-sm">
            <Link href="/en/crafts" className="hover:text-stone-500">
              Crafts
            </Link>

            <span>Regions</span>
            <span>About</span>
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
