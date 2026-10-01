import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import BackToContents from "../_components/BackToContents";

export const metadata: Metadata = {
  title: "Arita vs Hasami Ware: Differences & How to Choose | Japan Crafts",
  description: "Understand the connections between Arita, Hasami, and Imari, compare materials and making, and choose ceramics or places to visit beyond regional stereotypes.",
};

const link = "underline underline-offset-4 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]";
const sections = [
  ["at-a-glance", "Arita and Hasami at a Glance"],
  ["names", "Why Are the Names Often Confused?"],
  ["appearance", "Can You Tell Them Apart by Appearance?"],
  ["making", "Materials and Making"],
  ["choosing", "Choosing for Everyday Use or a Gift"],
  ["visiting", "Which Place Should You Visit?"],
  ["faq", "FAQ"],
  ["sources", "Sources & Further Reading"],
] as const;
const sources = [
  { id: "imari", title: "Imari City — About Ko-Imari", url: "https://www.city.imari.lg.jp/21096.htm", note: "Historical production centers and the relationship between the name Imari and distribution through its port." },
  { id: "hasami-history", title: "Hasami Town — History of Hasami Ware", url: "https://www.town.hasami.lg.jp/rekishi/kiji0031891/index.html", note: "The development of production and markets, and the 1978 traditional craft designation." },
  { id: "arita-making", title: "Arita Tourism Association — How Arita Ware Is Made", url: "https://www.arita.jp/process/", note: "Material preparation, forming, decoration, and firing." },
  { id: "hasami-making", title: "Hasami Ware Promotion Association — How It Is Made", url: "https://hasamiyaki.com/process/", note: "The work of mold makers, body makers, kilns, glaze suppliers, and trading companies." },
  { id: "original", title: "HASAMI PORCELAIN — ORIGINAL", url: "https://hasami-porcelain.com/en/original/", note: "A specific brand and its semi-porcelain collection, rather than a definition of all Hasami Ware." },
  { id: "labeling", title: "Yusuke Inoue — Regional Identity and Rhetorical History (2026)", url: "https://doi.org/10.20627/jsim.45.1_43", note: "The history of regional identity and origin-labeling discussions, particularly pp. 55–56." },
  { id: "kihara", title: "KIHARA — Product Care", url: "https://store.e-kihara.co.jp/?mode=f6", note: "Maker guidance; product and decoration-specific restrictions should not be generalized to every regional product." },
  { id: "koransha", title: "Koransha — Product Handling", url: "https://online.koransha.co.jp/guide/shouhin.html", note: "Manufacturer instructions for use and cleaning." },
];
function Section({ id, children }: { id: (typeof sections)[number][0]; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-6"><h2 id={`${id}-heading`} className="text-3xl font-semibold text-stone-900">{sections.find(s => s[0] === id)?.[1]}</h2><div className="mt-5 space-y-6">{children}</div><BackToContents /></section>;
}
function Reading({ ids }: { ids: string[] }) {
  return <p className="text-sm leading-7 text-stone-600">Reading for this section: {ids.map((id, i) => <span key={id}>{i > 0 && "; "}<a className={link} href={`#source-${id}`}>{sources.find(s => s.id === id)?.title}</a></span>)}.</p>;
}
const faqs = [
  ["Is Hasami Ware the same as Arita Ware?", "They are neighboring production regions with connected trading histories. Hasami-made products have also circulated as Arita Ware, but the present-day names should not be treated as interchangeable. Ask about the origin of the particular piece."],
  ["Is Hasami Ware always cheaper than Arita Ware?", "No fixed price ranking follows from the regional name. Compare the size, material, decoration, maker, and intended use of the actual objects. Both regions offer varied products."],
  ["Is HASAMI PORCELAIN the name for all Hasami Ware?", "No. HASAMI PORCELAIN is a particular brand. Its ORIGINAL collection uses semi-porcelain, but that material description and the brand’s design approach do not define the whole region."],
  ["Can I visit Arita and Hasami on the same trip?", "They are neighboring towns in northwestern Kyushu, so a trip can include both. Plan around the individual places you want to see and check transport, opening days, and reservations. Do not assume every stop is within walking distance or that festival transport runs year-round."],
];

export default function AritaHasamiComparisonPage() {
  return <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
    <header>
      <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Japanese Ceramics · A Comparison Guide</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Arita vs Hasami Ware: Differences, Connections, and How to Choose</h1>
      <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-600">Two neighboring pottery towns, closely connected histories, and many ways to make an everyday bowl. Understand the names before choosing a piece—or a place to visit.</p>
      <p className="mt-6 leading-8 text-stone-700">Arita is in Saga Prefecture; Hasami is in Nagasaki Prefecture. Both are known for porcelain, and their production and trading networks have long overlapped. The difference is more useful as a question of place, history, and makers than a simple choice between expensive and inexpensive ceramics.</p>
    </header>
    <nav id="contents" aria-label="Article contents" className="mt-12 scroll-mt-6 border-y border-stone-200 py-6">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider">Contents</p>
      <ul className="grid gap-2 sm:grid-cols-2">{sections.map(([id, title]) => <li key={id}><a href={`#${id}`} className={`inline-flex min-h-11 items-center py-2 ${link}`}>{title}</a></li>)}</ul>
    </nav>
    <article className="space-y-20 pt-16 leading-8 text-stone-700">
      <Section id="at-a-glance">
        <p>These are starting points for exploring each region, not traits found only on one side of the prefectural boundary. Arita makes everyday tableware and contemporary designs; Hasami’s history also includes fine celadon and overseas trade.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { name: "Arita Ware", region: "Saga Prefecture · Northwestern Kyushu", route: "arita-ware", rows: [["Historical starting point", "Early Japanese porcelain, varied decoration, and connections with overseas markets."], ["Range today", "Everyday vessels, decorative works, and contemporary designs across many makers."], ["A way into the place", "Museum collections, the porcelain-stone quarry at Izumiyama, workshops, and shops."]] },
            { name: "Hasami Ware", region: "Nagasaki Prefecture · Northwestern Kyushu", route: "hasami-ware", rows: [["Historical starting point", "Changing markets, large kilns, and the spread of everyday porcelain."], ["Range today", "Tableware in varied shapes, colors, and finishes, made through regional production networks."], ["A way into the place", "Historical displays, the hillside pottery district of Nakaoyama, and reused factory buildings."]] },
          ].map(c => <div key={c.route} className="min-w-0 rounded-lg border border-stone-200 bg-white p-6"><p className="text-sm text-stone-500">{c.region}</p><h3 className="mt-2 text-xl font-semibold text-stone-900">{c.name}</h3><dl className="mt-5 space-y-4 text-sm leading-7">{c.rows.map(([label, value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd className="mt-1">{value}</dd></div>)}</dl><Link className={`mt-4 inline-block py-2 ${link}`} href={`/en/crafts/${c.route}`}>Explore {c.name} →</Link></div>)}
        </div>
        <p>For the historical detail behind these summaries, follow the <Link className={link} href="/en/crafts/arita-ware#history">Arita history</Link> and <Link className={link} href="/en/crafts/hasami-ware#history">Hasami history</Link> sections.</p>
      </Section>
      <Section id="names">
        <p>Arita and Hasami belong to the wider historical Hizen ceramic region, spanning parts of present-day Saga and Nagasaki. A place where an object was made and the name under which it reached a customer have not always been the same.</p>
        <p>Historically, Imari was a trade-related name associated with porcelain shipped through Imari port. It encompassed work from several Hizen production centers, including Arita and Hasami. In a museum, “Ko-Imari,” or Old Imari, therefore does not necessarily identify a piece as made in present-day Imari City—or exclusively in Arita.</p>
        <p>Arita and Hasami also shared commercial networks, and Hasami-made products circulated as Arita Ware. This history helps explain the confusion, but it does not make the names interchangeable for every object sold today. When buying, distinguish the production location from the selling brand or trading company.</p>
        <aside className="border-l-2 border-stone-300 pl-6"><h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">An older name, greater visibility</h3><p className="mt-3">Hasami Ware was not invented as a name in the 2000s: the town records a traditional craft designation in 1978. Later origin-labeling discussions and branding made the place of manufacture more visible. Greater consumer recognition is different from the beginning of a craft.</p></aside>
        <Reading ids={["imari", "hasami-history", "labeling"]} />
        <p>Read more about <Link className={link} href="/en/crafts/arita-ware#arita-and-imari">Arita, Imari, and Ko-Imari</Link> and <Link className={link} href="/en/crafts/hasami-ware#hasami-and-arita">Hasami’s relationship with Arita</Link>.</p>
      </Section>
      <Section id="appearance">
        <p>A colorful enamel-painted dish may bring Arita to mind, while a neatly stacking bowl in a quiet color may suggest contemporary Hasami. Neither impression is proof of origin. Blue-and-white decoration, undecorated surfaces, and modern forms cross regional boundaries.</p>
        <p>Comparing a historical export vase with a newly designed breakfast bowl also compares different periods and purposes. It tells you about those two objects, rather than demonstrating a permanent divide between their regions.</p>
        <p>Look at the maker’s information and ask the seller where a piece was formed, decorated, and fired. A mark or box may provide a useful clue, but it does not settle every question of origin or attribution, especially for older objects.</p>
        <p>One further distinction matters: <strong>HASAMI PORCELAIN is a particular brand</strong>, not the English name for all ceramics from Hasami. Its ORIGINAL collection emphasizes modular forms and semi-porcelain. Those choices belong to that collection; they should not be used to define the material or appearance of the entire region.</p>
        <Reading ids={["original"]} />
        <p>Explore the examples in <Link className={link} href="/en/crafts/arita-ware#styles">Arita’s major styles</Link> and <Link className={link} href="/en/crafts/hasami-ware#characteristics">Hasami’s characteristics</Link>.</p>
      </Section>
      <Section id="making">
        <p>Both regions are principally associated with porcelain, but an individual product’s material and working methods still need checking. The regional name is not a complete manufacturing specification.</p>
        <p>A finished vessel can bring together material preparation, mold making, forming, decoration, firing, and distribution. Hasami’s promotion association makes these specialist roles particularly visible in its account of production. Arita also depends on connections between specialist skills and businesses; collaboration is not unique to Hasami.</p>
        <p>“Handmade” can hide several different questions. A mold-shaped vessel may be painted by hand; a carefully made plaster mold can support repeated production. Forming and decoration are separate choices. Ask how each stage was carried out rather than assuming a repeatable shape means an absence of craft.</p>
        <Reading ids={["arita-making", "hasami-making"]} />
        <p>For the sequence of work, see <Link className={link} href="/en/crafts/arita-ware#production">how Arita Ware is made</Link> and <Link className={link} href="/en/crafts/hasami-ware#production">how Hasami Ware is made</Link>.</p>
      </Section>
      <Section id="choosing">
        <p>Start with the object’s job. For a breakfast bowl, handle its weight, examine the rim, and check its capacity. For plates, consider the food you serve, cupboard space, and how the pieces stack. If you want to build a set over time, ask whether replacements or additional sizes are available.</p>
        <p>For a gift, consider the recipient’s habits as well as the decoration. A maker’s story can make a present more personal, but a cup that feels comfortable in the hand may matter more than a famous regional label. Ask about protective packaging and shipping if the piece will travel overseas.</p>
        <p>There is no useful rule that Hasami is always cheaper or that Arita is always more elaborate. Compare specific objects: their size, forming and decorating methods, finish, maker, and intended use. A printed design and a hand-painted one are different approaches, not an automatic ranking of good and bad products.</p>
        <aside className="border-l-2 border-stone-300 pl-6"><h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">Check the individual product</h3><p className="mt-3">Microwave, dishwasher, and cleaning instructions depend on the item, including its material and decoration. Metallic details require particular attention to the maker’s guidance. Microwave approval does not imply suitability for an oven or direct flame.</p></aside>
        <Reading ids={["kihara", "koransha"]} />
      </Section>
      <Section id="visiting">
        <p>Choose the questions you want a visit to answer. Both places offer history, shopping, and contemporary work; the following pairings are suggestions for where to begin.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-stone-200 bg-white p-6"><h3 className="text-xl font-semibold text-stone-900">Arita: connect collections with materials</h3><p className="mt-4">The Kyushu Ceramic Museum provides a starting point for looking at historical porcelain. Izumiyama Quarry connects those objects with the extraction of raw material. Continue into the town’s shops or Arita Será to explore current work.</p><Link className={`mt-4 inline-block py-2 ${link}`} href="/en/crafts/arita-ware#visit">Plan an Arita visit →</Link></div>
          <div className="min-w-0 rounded-lg border border-stone-200 bg-white p-6"><h3 className="text-xl font-semibold text-stone-900">Hasami: read the working landscape</h3><p className="mt-4">Historical displays offer context before a walk in Nakaoyama, where hillsides, chimneys, and kiln sites reveal the setting of production. Nishinohara shows how former ceramics-factory buildings can accommodate new shops and creative activity.</p><Link className={`mt-4 inline-block py-2 ${link}`} href="/en/crafts/hasami-ware#visit">Plan a Hasami visit →</Link></div>
        </div>
        <p>A trip can include both neighboring towns, but plan around actual stops rather than assuming everything is walkable. Check transport and opening days, and reserve activities where required. A pottery festival’s shuttle service or special opening arrangements may not apply to an ordinary visit.</p>
        <p>The regional guides link to visitor information and official facility pages. A gallery or shop visit does not automatically include access to a working factory; ask before entering workshops or photographing production.</p>
      </Section>
      <Section id="faq"><div className="divide-y divide-stone-200 border-y border-stone-200">{faqs.map(([question, answer]) => <details key={question} className="py-4"><summary className="min-h-11 cursor-pointer py-2 font-semibold leading-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">{question}</summary><p className="mt-3 pb-2">{answer}</p></details>)}</div></Section>
      <Section id="sources">
        <p>This comparison draws on the research behind our Arita and Hasami guides, with direct sources for naming, production, and product care below. Suggestions about choosing and visiting are editorial guidance, not a ranking of the regions.</p>
        <ul className="space-y-6">{sources.map(s => <li id={`source-${s.id}`} key={s.id} className="scroll-mt-6 border-l-2 border-stone-200 pl-4"><a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.title} (opens in a new tab)`} className={`inline-block py-2 font-medium ${link}`}>{s.title} <span aria-hidden="true">↗</span></a><p className="mt-1 text-sm leading-7 text-stone-600">{s.note}</p></li>)}</ul>
        <p className="text-sm leading-7 text-stone-600">Reviewed October 2026. Most local sources are in Japanese. Confirm current visitor arrangements and the instructions for any product you buy.</p>
      </Section>
    </article>
    <aside aria-label="Related craft guides" className="mt-16 border-t border-stone-200 pt-8"><h2 className="text-xl font-semibold">Explore the Regions in More Detail</h2><div className="mt-4 flex flex-wrap gap-6"><Link className={`py-2 ${link}`} href="/en/crafts/arita-ware">Arita Ware →</Link><Link className={`py-2 ${link}`} href="/en/crafts/hasami-ware">Hasami Ware →</Link><Link className={`py-2 ${link}`} href="/en/crafts/kutani-vs-arita-vs-shigaraki">Compare Kutani, Arita, and Shigaraki →</Link><Link className={`py-2 ${link}`} href="/en/crafts">All crafts →</Link></div></aside>
  </main>;
}