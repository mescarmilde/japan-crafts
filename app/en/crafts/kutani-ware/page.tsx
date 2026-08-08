import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutani Ware (九谷焼): History, Styles, Making & Travel Guide",
  description:
    "Discover Kutani Ware (九谷焼), from its history and distinctive styles to how it is made, where to experience it in Ishikawa, and how to choose your first piece.",
};
const sections = [
  { id: "overview", label: "Overview" },
  { id: "history", label: "History" },
  { id: "why-here", label: "Why Here?" },
  { id: "characteristics", label: "Characteristics" },
  { id: "production", label: "How It Is Made" },
  { id: "styles", label: "Major Styles" },
  { id: "visit", label: "Where to Experience It" },
  { id: "today", label: "Kutani Ware Today" },
  { id: "buying", label: "Buying Guide" },
  { id: "faq", label: "FAQ" },
];

export default function KutaniWarePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Ishikawa · Ceramics
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Kutani Ware (九谷焼)
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-600">
          Discover the history, geography, techniques, and people behind one
          of Japan&apos;s most distinctive porcelain traditions.
        </p>
      </header>

      <nav className="mt-12 border-y border-stone-200 py-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
          Contents
        </p>

        <ul className="grid gap-2 sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-stone-600 hover:text-stone-900"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <article className="space-y-20 pt-16">
        <section id="overview">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="mt-5 leading-8 text-stone-700">
            Kutani Ware (九谷焼) is a celebrated tradition of Japanese porcelain
            associated with Ishikawa Prefecture. It is especially known for its vivid
            overglaze decoration, ranging from deep greens and yellows to intricate red
            and gold designs. Rather than representing a single visual style, Kutani
            Ware has developed through different kilns, artists, and periods over more
            than three centuries.
          </p>
        </section>

        <section id="history">
          <h2 className="text-3xl font-semibold">History</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm text-stone-500">c. 1655</p>
              <p className="mt-1 font-medium">Early Kutani production begins</p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm text-stone-500">Early 18th century</p>
              <p className="mt-1 font-medium">The early kilns cease production</p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm text-stone-500">19th century</p>
              <p className="mt-1 font-medium">Saiko Kutani (再興九谷) emerges</p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm text-stone-500">Meiji period</p>
              <p className="mt-1 font-medium">Kutani Ware expands into overseas markets</p>
            </div>
          </div>
          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              The story of Kutani Ware reaches back to the seventeenth century.
              According to the traditional account, porcelain stone was discovered
              during mining in Kutani village, then part of the Daishoji Domain
              (大聖寺藩). Under its first lord, Maeda Toshiharu (前田利治),
              porcelain production had begun by around 1655.
            </p>

            <p>
              According to the traditional account, the early Kutani kilns operated
              for only about fifty to sixty years before production stopped for
              reasons that remain uncertain. Works associated with this early period
              are now known as Ko-Kutani (古九谷), or “Old Kutani.” However, the
              production origin of some objects classified as Ko-Kutani remains the
              subject of scholarly debate, including possible connections with Arita.
            </p>

            <p>
              Roughly a century later, porcelain production revived across the wider
              Kaga region. New kilns developed different approaches to color and
              decoration, creating what is now called Saiko Kutani (再興九谷),
              or “Revived Kutani.”
            </p>

            <p>
              During the Meiji period, Kutani Ware found a new audience overseas.
              Elaborately decorated pieces were exported to Europe and the United
              States, transforming a regional craft into an internationally traded
              product.
            </p>
          </div>
        </section>

        <section id="why-here">
          <h2 className="text-3xl font-semibold">
            Why Did Kutani Ware Develop Here?
          </h2>
          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware did not emerge because of a single lucky discovery. Its
              development depended on several conditions coming together: local raw
              materials, political support, outside ceramic knowledge, private
              investment, and eventually better transportation and access to markets.
            </p>

            <p>
              The first important ingredient was geological. According to the
              traditional account, porcelain stone was discovered around Kutani village
              during mining activity. But raw material alone was not enough.
              According to the traditional account, the Daishoji Domain sent
              Goto Saijiro (後藤才次郎) to Arita, one of Japan&apos;s leading porcelain
              centers, to learn ceramic production techniques.
            </p>

            <p>
              When Kutani production was revived in the nineteenth century, its center
              was no longer limited to the original mountain village. Kilns appeared
              across areas such as Kanazawa, Komatsu, and Kaga, while craftsmen and
              knowledge arrived from other ceramic centers including Kyoto.
            </p>

            <p>
              Economics mattered too. The merchant Toyoda Den&apos;emon
              (豊田伝右衛門), known by the house name Yoshidaya (吉田屋),
              invested heavily in reviving Kutani Ware. His kiln was eventually moved
              from Kutani to Yamashiro because the latter offered better transportation.
              The history of Kutani therefore shows how a craft can begin with local
              resources but survive only by connecting resources, technology, capital,
              people, and markets.
            </p>
          </div>
        </section>

        
        <section id="characteristics">
          <h2 className="text-3xl font-semibold">
            What Makes Kutani Ware Distinctive?
          </h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware is often recognized by its powerful use of color, but there
              is no single “Kutani look.” Over the centuries, different kilns and
              artists developed strikingly different approaches to painting and
              decoration.
            </p>

            <p>
              One of its best-known traditions is Kutani Gosai (九谷五彩), the
              “five colors of Kutani”: green, yellow, purple, deep blue, and red.
              These colors are applied as overglaze decoration after the porcelain
              body has already been fired.
            </p>

            <p>
              Some Kutani pieces are dominated by rich greens and almost completely
              cover the surface with color. Others resemble miniature paintings, while
              another tradition uses extremely fine red lines combined with gold.
              The variety itself is one of the defining characteristics of Kutani Ware.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Aote · 青手
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Bold and Saturated
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Aote emphasizes green and other strong colors, often covering almost
                the entire surface of the vessel. Little unpainted white space remains,
                producing a dense and powerful visual effect.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Gosai-de · 五彩手
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Color as Painting
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Gosai-de uses the five traditional Kutani colors to create pictorial
                compositions. Landscapes, people, animals, and other subjects can turn
                the surface of a plate or bowl into something resembling a painting.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Akae · 赤絵
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Fine Red Lines and Gold
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Akae is known for extremely detailed decoration drawn primarily in
                red. Gold is often added for contrast and richness, and works combining
                red grounds with gold decoration are associated with the Kinrande
                (金襴手) tradition.
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              What to look for
            </p>

            <p className="mt-3 leading-8 text-stone-700">
              When looking at Kutani Ware, do not ask only, “What colors does it use?”
              Also look at how much of the porcelain is left visible, how densely the
              surface is painted, whether the decoration feels pictorial or patterned,
              and how fine the artist&apos;s brushwork is.
            </p>
          </div>
        </section>

        <section id="production">
          <h2 className="text-3xl font-semibold">How Kutani Ware Is Made</h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware begins long before the painting starts. In the Komatsu area,
              one important traditional raw material is Hanazaka porcelain stone
              (花坂陶石), which has been quarried for roughly two centuries.
              The stone is crushed, refined with water, and processed into porcelain
              clay before it can be shaped into a vessel.
            </p>

            <p>
              Making Kutani Ware can be understood as two closely connected crafts:
              creating the white porcelain body, and decorating that surface with
              color. The second stage, especially overglaze painting, is where much of
              Kutani Ware&apos;s visual identity emerges.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="text-sm font-medium text-stone-400">01</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Stone to Porcelain Clay
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  Porcelain stone is quarried, crushed into a fine powder, mixed with
                  water, and refined to remove unwanted material. Excess water is then
                  removed until the material reaches the right consistency for working.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="text-sm font-medium text-stone-400">02</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Shaping and Drying
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  The clay is kneaded to remove air and then shaped. Round vessels are
                  often formed on a potter&apos;s wheel, while other forms may require
                  hand-building or different forming techniques. The piece is then
                  dried and carefully finished.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="text-sm font-medium text-stone-400">03</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Bisque, Glaze, and High Firing
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  The dried piece is first bisque-fired at around 800°C. After glazing,
                  it is fired again at roughly 1,300°C, producing the hard white
                  porcelain surface that will become the canvas for Kutani decoration.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="text-sm font-medium text-stone-400">04</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Overglaze Painting
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  Artists paint over the already glazed porcelain. Fine outlines may
                  first define the composition, followed by layers of colored
                  overglaze enamels. At this stage, the pigments do not necessarily
                  show the brilliant colors they will have after firing.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
              <p className="text-sm font-medium text-stone-400">05</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Color Firing and Finishing
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  The decorated piece is fired again, generally between about
                  800°C and 1,000°C, allowing the overglaze colors to develop.
                  Pieces with gold or silver decoration may require an additional
                  lower-temperature firing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Why this matters
            </p>

            <p className="mt-3 leading-8 text-stone-700">
              A finished piece can therefore be the result of several separate
              processes and firings. Kutani Ware is not defined only by the person who
              shapes the vessel: clay producers, form makers, painters, kiln workers,
              and other specialists can all contribute to the finished object.
            </p>
          </div>
        </section>

        <section id="styles">
          <h2 className="text-3xl font-semibold">Major Styles of Kutani Ware</h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware has never had a single fixed style. Different kilns and
              artists repeatedly reinterpreted earlier traditions, producing new
              combinations of color, brushwork, and decoration.
            </p>

            <p>
              The styles below are useful landmarks rather than strict categories.
              They show how Kutani Ware changed as new artists, technologies, and
              markets entered the region.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Ko-Kutani · 古九谷
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Bold, Painterly, and Free
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Ko-Kutani is associated with the earliest period of Kutani Ware.
                It is known for powerful compositions, expressive brushwork, and rich
                use of the traditional Kutani colors. Some works use the full palette,
                while others follow the green-dominant Aote tradition.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Mokubei · 木米
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Chinese-Inspired Figures
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                The Mokubei style developed under the influence of Kyoto potter
                Aoki Mokubei (青木木米). Red often dominates the surface, while
                figures and Chinese-inspired subjects are painted using multiple
                colors.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Yoshidaya · 吉田屋
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Dense Color Without Red
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Yoshidaya revived the Aote tradition of Old Kutani. Green, yellow,
                purple, and deep blue are used without red, often covering almost the
                entire surface. The result is dense, dramatic, and immediately
                recognizable.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Iidaya · 飯田屋
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Extremely Fine Red Painting
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Iidaya is famous for Akae Saibyo, extremely detailed painting in red.
                Figures and patterns can be rendered with remarkably fine lines, with
                small touches of gold sometimes added to the composition.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Eiraku · 永楽
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Red and Gold Luxury
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                The Eiraku style introduced a refined Kinrande approach associated
                with Kyoto ceramics. Surfaces are often covered in red and decorated
                extensively with gold, creating an elegant and highly luxurious effect.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Shoza · 庄三
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                A Fusion Built for a New Era
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                The style associated with Kutani Shoza (九谷庄三) combined techniques
                from earlier Kutani traditions with newer pigments and detailed gold
                decoration. It became especially influential during the Meiji period
                and played an important role in Kutani Ware made for export.
              </p>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              A useful way to think about Kutani
            </p>

            <p className="mt-3 leading-8 text-stone-700">
              Instead of thinking of Kutani Ware as one style, it is more useful to
              think of it as a tradition of repeated reinvention. Each generation
              borrowed from older techniques while responding to new artists,
              materials, tastes, and markets.
            </p>
          </div>
        </section>

        <section id="visit">
          <h2 className="text-3xl font-semibold">
            Where to Experience Kutani Ware
          </h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware is not concentrated in a single town. Its history stretches
              across Kaga, Komatsu, Nomi, Kanazawa, and the surrounding region.
              Visiting several different places reveals different parts of the story:
              masterpieces in museums, historic kilns, porcelain clay production,
              working studios, and contemporary artists.
            </p>

            <p>
              If you have limited time, choose your destination according to what you
              want to understand most.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Kaga · 加賀
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Kutaniyaki Art Museum (石川県九谷焼美術館)
              </h3>

              <p className="mt-2 text-sm font-medium text-stone-500">
                Best for: History and masterpieces
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                This is one of the best places to understand Kutani Ware as art.
                Its collection presents major approaches such as Aote, colorful
                Gosai decoration, and detailed red-and-gold works, making it especially
                useful after learning the styles introduced earlier in this article.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Yamashiro Onsen · 山代温泉
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Kutani Pottery Kiln Exhibition Hall
              </h3>

              <p className="mt-2 text-sm font-medium text-stone-500">
                Best for: Seeing the history in its original setting
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                Here you can see the remains of the Yoshidaya kiln built during the
                nineteenth-century revival of Kutani Ware. The site also preserves
                a historic climbing kiln and a former kiln owner&apos;s house.
                Rather than seeing only finished ceramics, visitors can encounter
                the physical infrastructure behind their production.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Komatsu · 小松
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                CERABO KUTANI
              </h3>

              <p className="mt-2 text-sm font-medium text-stone-500">
                Best for: Materials and how Kutani Ware is made
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                CERABO KUTANI combines a working porcelain-clay factory, gallery,
                workshops, and spaces for contemporary artists. Visitors can see
                Hanazaka porcelain stone being processed into clay and can also try
                pottery forming or overglaze painting.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                If the “How It Is Made” section of this article interests you most,
                this may be the most revealing place to visit.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Nomi · 能美
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Kutani Pottery Village
              </h3>

              <p className="mt-2 text-sm font-medium text-stone-500">
                Best for: A full-day introduction to living Kutani culture
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                Kutani Pottery Village brings together museums, a hands-on experience
                center, working studios, and shops. The KAM Nomi Kutani Ware Museum
                introduces the history and artistic development of Kutani, while other
                facilities allow visitors to try painting or pottery and observe
                craftspeople at work.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                It is a useful choice for travelers who want to move from looking at
                historical works to making, meeting, and buying Kutani Ware in the
                same area.
              </p>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Which should you visit?
            </p>

            <div className="mt-4 space-y-2 leading-7 text-stone-700">
              <p>
                <strong>For art and history:</strong> Kutaniyaki Art Museum
              </p>

              <p>
                <strong>For historic kilns:</strong> Kutani Pottery Kiln Exhibition
                Hall
              </p>

              <p>
                <strong>For materials and production:</strong> CERABO KUTANI
              </p>

              <p>
                <strong>For museums, workshops, and shopping:</strong> Kutani Pottery
                Village
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-stone-500">
            Opening days, exhibitions, workshop availability, and reservation
            requirements can change. Check each facility&apos;s official information
            before visiting.
          </p>
        </section>

        <section id="today">
          <h2 className="text-3xl font-semibold">Kutani Ware Today</h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Kutani Ware today is not simply an old craft being preserved unchanged.
              It remains a living industry spread across a large part of Ishikawa,
              involving porcelain-clay producers, kiln operators, painters, individual
              artists, merchants, museums, and training institutions.
            </p>

            <p>
              That network gives Kutani Ware remarkable variety, but keeping the
              knowledge inside it alive is also one of the challenges facing the
              industry. Local institutions are now trying to connect a new generation
              of makers with the skills, workplaces, and businesses they need to build
              careers in Kutani.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Challenge
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Passing Skills to the Next Generation
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Traditional ceramic knowledge survives only when people have the
                opportunity to learn it and continue working in the industry.
                In Nomi, public programs support Kutani businesses that employ
                graduates of specialist craft-training institutions, while dedicated
                studios provide younger makers with places to work and develop their
                careers.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                New Generation
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Giving Young Artists Room to Experiment
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                CERABO KUTANI and other facilities provide working spaces for younger
                artists as well as opportunities to exhibit and sell contemporary
                pieces. The goal is not only to reproduce historic Kutani designs, but
                to give new makers room to create the next version of the tradition.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Technology
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Tradition Can Change Its Materials
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Technical change is also part of Kutani&apos;s modern history.
                Lead-free overglaze enamels were developed and commercialized in the
                early 2000s, with the industry federation&apos;s timeline marking 2004
                as the completion of Kutani&apos;s lead-free overglaze enamels.
                It is an example of how a traditional visual language can be maintained
                while materials and production methods respond to changing expectations.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                Industry
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                One Name, Many Specialists
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Kutani Ware is supported by a regional network rather than a single
                type of maker. Industry organizations bring together groups involved
                in porcelain bodies, overglaze painting, individual artistic practice,
                wholesale and retail, and production in different parts of Ishikawa.
                This division of skills has helped create the extraordinary variety
                found within Kutani Ware.
              </p>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              A living tradition
            </p>

            <p className="mt-3 leading-8 text-stone-700">
              Kutani Ware experienced a major break in production and was later
              revived. Since then, it has repeatedly absorbed new artists, techniques,
              pigments, business models, and foreign markets. Seen from that
              perspective, change is not necessarily the opposite of tradition.
              In Kutani, the ability to adapt may be one of the reasons the tradition
              has endured.
            </p>
          </div>
        </section>

        <section id="buying">
          <h2 className="text-3xl font-semibold">Buying Kutani Ware</h2>

          <div className="mt-5 space-y-6 leading-8 text-stone-700">
            <p>
              Buying Kutani Ware does not have to begin with identifying the most
              famous artist or the most expensive piece. For a first purchase, it is
              often more useful to begin with a simple question: do you want something
              to use, something to display, or something to collect?
            </p>

            <p>
              Kutani Ware ranges from everyday cups and small plates to highly detailed
              works by individual artists. Price, rarity, technique, authorship, and
              intended use can vary enormously, so two objects carrying the Kutani name
              may belong to very different parts of the craft.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                01 · Start with use
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Choose the Role Before the Reputation
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                If this is your first piece, a cup, bowl, or small plate that you can
                actually use may be a better introduction than an expensive decorative
                work. Kutani Ware was made to be seen, but much of it was also made to
                live alongside food, tea, and everyday rituals.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                02 · Look at the decoration
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Learn What You Personally Respond To
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Do you prefer the dense greens of Aote, fine red Akae brushwork,
                luxurious red-and-gold decoration, or a contemporary design that only
                loosely refers to older Kutani traditions? Understanding the major
                styles makes choosing a piece much easier.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                03 · Check who made it
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Artist, Kiln, or Workshop?
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Some pieces are closely associated with an individual artist, while
                others are produced by established kilns or workshops. Neither is
                automatically “better.” They simply represent different ways in which
                Kutani Ware is designed, produced, and sold.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">
                04 · Look at the technique
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Detail Takes Time
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Fine hand-painted lines, dense surface decoration, gold work, complex
                forms, and repeated firings can require considerable skill and labor.
                When comparing pieces, look beyond size and consider how the object was
                made and decorated.
              </p>
            </div>
          </div>

          <div className="mt-12 border-y border-stone-200 py-8">
            <h3 className="text-2xl font-semibold">
              A Simple First-Purchase Guide
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="font-medium">For everyday use</p>
                <p className="mt-1 leading-7 text-stone-600">
                  Start with a small plate, rice bowl, cup, or sake vessel from a
                  design you genuinely enjoy.
                </p>
              </div>

              <div>
                <p className="font-medium">For a souvenir from Ishikawa</p>
                <p className="mt-1 leading-7 text-stone-600">
                  Look for a piece whose maker, kiln, or shop can explain where and how
                  it was produced.
                </p>
              </div>

              <div>
                <p className="font-medium">For collecting</p>
                <p className="mt-1 leading-7 text-stone-600">
                  Research the artist, kiln, technique, period, and provenance rather
                  than relying on appearance or price alone.
                </p>
              </div>

              <div>
                <p className="font-medium">For a gift</p>
                <p className="mt-1 leading-7 text-stone-600">
                  Consider the recipient&apos;s lifestyle first. A beautiful piece
                  that is easy to use is often more meaningful than something chosen
                  only because it looks traditionally Japanese.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-stone-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              One useful rule
            </p>

            <p className="mt-3 leading-8 text-stone-700">
              Do not buy Kutani Ware simply because it looks “the most Japanese.”
              Look long enough to discover which colors, brushwork, shapes, and makers
              you actually like. The variety of Kutani Ware is large enough that your
              favorite piece may look very different from the image you first had of
              the tradition.
            </p>
          </div>
        </section>

        <section id="faq">
          <h2 className="text-3xl font-semibold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-stone-700">
            A few quick answers to common questions about Kutani Ware, from its
            materials and colors to its history, everyday use, and care.
          </p>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is Kutani Ware pottery or porcelain?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                Kutani Ware is primarily a tradition of Japanese porcelain. Its white,
                hard-fired body provides the surface for the colorful overglaze
                decoration for which Kutani is best known.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What are the five colors of Kutani Ware?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                The traditional Kutani Gosai (九谷五彩), or “five colors of Kutani,”
                are green, yellow, purple, deep blue, and red. Artists do not
                necessarily use all five colors on every piece, and some major Kutani
                styles deliberately emphasize only part of the palette.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is all Kutani Ware hand-painted?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                No. Kutani Ware includes a wide range of production methods, from
                highly detailed works painted by individual artists to pieces produced
                through workshops and specialized divisions of labor. When buying a
                piece, check how it was decorated rather than assuming that every
                object carrying the Kutani name was made in exactly the same way.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What is Ko-Kutani?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                Ko-Kutani (古九谷), meaning “Old Kutani,” is the name used for works
                associated with the earliest period of Kutani Ware in the seventeenth
                century. The production origin of some works classified as Ko-Kutani
                remains the subject of scholarly debate, including discussion of
                connections with Arita.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Where is Kutani Ware made today?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                Modern Kutani production is spread across several parts of Ishikawa
                Prefecture rather than being limited to the original Kutani village.
                Important areas include Nomi, Komatsu, Kaga, Kanazawa, and their
                surrounding communities, with different places contributing materials,
                porcelain bodies, painting, artistic production, and trade.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can Kutani Ware be used for everyday meals?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                Yes. Many Kutani cups, bowls, plates, and other vessels are designed
                for everyday use. However, care requirements vary depending on the
                decoration and the individual maker, so always check any instructions
                provided with the piece.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                How should I wash and care for Kutani Ware?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                Mild, neutral dishwashing detergent can generally be used. Dilute it
                as needed and wash the piece gently with a soft sponge or cloth. Avoid
                abrasive cleansers, stiff brushes, and rough scrubbing, as these may
                damage the overglaze decoration.
              </p>

              <p className="mt-4 leading-8 text-stone-600">
                Although some Kutani tableware may be dishwasher-safe, hand washing is
                the safer choice, especially for pieces with gold, silver, or delicate
                painted decoration. Rinse thoroughly and dry completely before storage.
              </p>

              <p className="mt-4 leading-8 text-stone-600">
                Pieces decorated with gold or silver should not be used in a microwave.
                Always follow the individual maker&apos;s care instructions when
                available.
              </p>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What should I buy as my first piece of Kutani Ware?
              </summary>

              <p className="mt-4 leading-8 text-stone-600">
                There is no single correct first piece. A small plate, cup, bowl, or
                sake vessel that you genuinely enjoy can be a good place to start.
                Look at the colors, brushwork, maker, technique, and intended use
                instead of choosing something only because it appears especially
                traditional or expensive.
              </p>
            </details>
          </div>
        </section>
        <section id="sources">
          <h2 className="text-3xl font-semibold">
            Sources & Further Reading
          </h2>

          <p className="mt-5 leading-8 text-stone-700">
            This article was researched using museums, industry organizations,
            cultural institutions, and specialist sources from the Kutani Ware
            producing region.
          </p>

          <ul className="mt-6 space-y-3 text-stone-600">
            <li>
              <a
                href="https://www.city.kaga.ishikawa.jp/kutani-mus/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Kutaniyaki Art Museum
              </a>
            </li>

            <li>
              <a
                href="https://www.kutaniyaki.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                KAM Nomi City Kutani Ware Museum
              </a>
            </li>

            <li>
              <a
                href="https://kutani.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Ishikawa Kutani Ceramic Industry Association
              </a>
            </li>

            <li>
              <a
                href="https://cerabo-kutani.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                CERABO KUTANI
              </a>
            </li>

            <li>
              <a
                href="https://kutanism.cerabo-kutani.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                KUTANism
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
