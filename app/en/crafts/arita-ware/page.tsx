import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import BackToContents from "../_components/BackToContents";
import VisitLinks from "../_components/VisitLinks";
import CraftPhoto from "../_components/CraftPhoto";
import AritaProcess from "./AritaProcess";
import { aritaPhotos } from "./aritaPhotos";

export const metadata: Metadata = {
  title: "Arita Ware (有田焼): History, Styles, Making & Travel Guide",
  description:
    "Explore Arita Ware: the origins of Japanese porcelain, Arita and Imari, major styles, global trade, how it is made, places to visit, and what to buy.",
};

// Editorial basis: content/research/arita.md. Source keys below retain its numbering.
const sections = [
  { id: "overview", label: "Overview" },
  { id: "history", label: "History" },
  { id: "why-here", label: "Why Did Porcelain Develop in Arita?" },
  { id: "arita-and-imari", label: "Arita, Imari, and Ko-Imari: What’s the Difference?" },
  { id: "characteristics", label: "Characteristics" },
  { id: "styles", label: "Major Styles" },
  { id: "production", label: "How Arita Ware Is Made" },
  { id: "world", label: "From Arita to the World" },
  { id: "visit", label: "Where to Experience Arita Ware" },
  { id: "today", label: "Arita Ware Today" },
  { id: "buying", label: "Buying Guide" },
  { id: "faq", label: "FAQ" },
  { id: "sources", label: "Sources & Further Reading" },
] as const;

const sources = {
  S01: { title: "Arita Tourism Association — About Arita Ware", url: "https://www.arita.jp/aritaware/", note: "An introduction to the production region and its changing decoration." },
  S02: { title: "Saga Prefecture — Imari and Arita Ware", url: "https://www.pref.saga.lg.jp/kiji00325421/index.html", note: "The traditional origin account, raw materials, and production processes." },
  S03: { title: "Saga Ceramics Industry Cooperative", url: "https://www.aritayaki.or.jp/", note: "Industry organization and training in specialist skills." },
  S05: { title: "Arita Town History and Folklore Museum — Ceramic History, 45", url: "https://www.town.arita.lg.jp/rekishi/kiji0031233/index.html", note: "Why the significance of 1616 needs careful interpretation." },
  S07: { title: "Arita Town History and Folklore Museum — Ceramic History, 182", url: "https://www.town.arita.lg.jp/rekishi/kiji0032090/index.html", note: "An archaeological interpretation separating early porcelain from Izumiyama-based expansion." },
  S09: { title: "Arita Town History and Folklore Museum — Ceramic History, 184", url: "https://www.town.arita.lg.jp/rekishi/kiji0032094/index.html", note: "Izumiyama’s geology and the movement of potters." },
  S10: { title: "Arita Town History and Folklore Museum — Ceramic History, 189", url: "https://www.town.arita.lg.jp/rekishi/kiji0032106/index.html", note: "Preparing porcelain stone and the role of water-powered equipment." },
  S11: { title: "Arita Town History and Folklore Museum — Ceramic History, 195", url: "https://www.town.arita.lg.jp/rekishi/kiji0032124/index.html", note: "The regulation of kilns, resources, and workers." },
  S13: { title: "Imari City — About Ko-Imari", url: "https://www.city.imari.lg.jp/21096.htm", note: "The wider production and trading context behind the name Imari." },
  S14: { title: "Arita Town Museum — Sarayama, issue 14 (PDF)", url: "https://www.town.arita.lg.jp/rekishi/kiji0031943/3_1943_14_sarayama-0014.pdf", note: "Checkpoints, occupational districts, and the organization of the town." },
  S16: { title: "Arita Town History and Folklore Museum — Ceramic History, 1", url: "https://www.town.arita.lg.jp/rekishi/kiji003920/index.html", note: "Overland transport and the relationship between Arita and Imari." },
  S18: { title: "Kyushu National Museum — Old Imari Porcelain in Paris", url: "https://www.kyuhaku.jp/exhibition/exhibition_s19.html", note: "The 1659 export milestone, European orders, and changing export wares." },
  S20: { title: "University Museum, University of Tokyo — Revisiting the Kaga Residence", url: "https://umdb.um.u-tokyo.ac.jp/DPastExh/Publish_db/2000Kaga/03/030300.html", note: "Changes in Chinese porcelain supply during the Ming–Qing transition." },
  S23: { title: "V&A — Japan’s Encounter with Europe, 1573–1853", url: "https://www.vam.ac.uk/articles/japans-encounter-with-europe-1573-1853", note: "Export shapes, decoration, and the European reception of Japanese porcelain." },
  S24: { title: "V&A — A–Z of Ceramics", url: "https://www.vam.ac.uk/articles/a-z-of-ceramics", note: "The Kakiemon entry discusses European interpretations and copies." },
  S26: { title: "Agency for Cultural Affairs — Kakiemon (Nigoshide)", url: "https://kunishitei.bunka.go.jp/heritage/detail/303/111", note: "The protected technique, its materials, and the traditional account of early enamelling." },
  S27: { title: "Saga Prefecture — Intangible Cultural Properties", url: "https://www.pref.saga.lg.jp/kiji0031638/index.html", note: "Kakiemon decoration, including combinations of underglaze and overglaze painting." },
  S29: { title: "Imari City — About Nabeshima Ware", url: "https://www.city.imari.lg.jp/21075.htm", note: "Domain kilns, presentation wares, and Okawachiyama." },
  S31: { title: "Arita Tourism Association — How Arita Ware Is Made", url: "https://www.arita.jp/process/", note: "The sequence of production and its specialized work." },
  S35: { title: "Arita Town — 2024 Statistical Yearbook (PDF)", url: "https://www.town.arita.lg.jp/kiji003485/3_485_3635_up_5zeuaxeo.pdf", note: "Page 9: historical ceramics-related trade figures. Survey definitions change over time." },
  S38: { title: "Saga Ceramics Research Laboratory", url: "https://www.scrl.gr.jp/main/", note: "Technical support, research, and training for the ceramics industry." },
  S39: { title: "Saga Prefecture — Introducing 2016/", url: "https://www.pref.saga.lg.jp/kiji003105266/", note: "Collaboration between designers and the production region." },
  S51: { title: "Creative Residency in Arita — About", url: "https://cri-arita.com/ja/about/", note: "Connecting visiting creative practitioners with local knowledge and manufacturing." },
  S52: { title: "KIHARA — GEN Sake Ware / Awagesho", url: "https://e-kihara.co.jp/project/gen-awa/", note: "A documented example of reusing discarded bisque-fired material in decoration." },
  S53: { title: "Kyushu Ceramic Museum — Shibata Collection", url: "https://saga-museum.jp/ceramic/exhibition/collection/shibata/", note: "A resource for comparing Arita porcelain across periods and forms." },
  S56: { title: "KIHARA — Product Care", url: "https://store.e-kihara.co.jp/?mode=f6", note: "Manufacturer-specific restrictions and care advice." },
  S57: { title: "Koransha — Product Handling", url: "https://online.koransha.co.jp/guide/shouhin.html", note: "Microwave labels, washing, metallic decoration, and storage." },
} as const;

const sourceGroups = [
  {
    "title": "History, Archaeology & Museums",
    "ids": [
      "S02",
      "S05",
      "S07",
      "S09",
      "S10",
      "S11",
      "S13",
      "S14",
      "S16",
      "S26",
      "S27",
      "S29",
      "S53"
    ]
  },
  {
    "title": "Global Trade & Collections",
    "ids": [
      "S18",
      "S20",
      "S23",
      "S24"
    ]
  },
  {
    "title": "Contemporary Industry & Making",
    "ids": [
      "S03",
      "S31",
      "S35",
      "S38",
      "S39",
      "S51",
      "S52"
    ]
  },
  {
    "title": "Visiting & Care",
    "ids": [
      "S01",
      "S56",
      "S57"
    ]
  }
] as const;

type SectionId = (typeof sections)[number]["id"];
type SourceId = keyof typeof sources;
const prose = "mt-5 space-y-6 leading-8 text-stone-700";
const card = "rounded-lg border border-stone-200 bg-white p-6";
const textLink = "underline underline-offset-4 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]";

// These small helpers are local to this article; the shared craft UI is unchanged.
function Section({ id, children }: { id: SectionId; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-6">
      <h2 id={`${id}-heading`} className="text-3xl font-semibold">{sections.find((section) => section.id === id)?.label}</h2>
      {children}
      <BackToContents />
    </section>
  );
}

function SourceNotes({ ids }: { ids: SourceId[] }) {
  return (
    <p className="mt-6 text-sm leading-7 text-stone-600">
      Reading for this section:{" "}
      {ids.map((id, index) => (
        <span key={id}>
          {index > 0 && "; "}
          <a className={textLink} href={`#source-${id}`}>{sources[id].title}</a>
        </span>
      ))}.
    </p>
  );
}

const styles = [
  { photo: aritaPhotos.earlyImari, name: "Early Imari (初期伊万里)", kind: "Period and style · 1610s to the mid-17th century", text: "A name used for early Japanese porcelain, much of it blue and white. Look at the outlines of bowls and dishes, then at landscapes and other motifs that reflect Chinese models. The term describes an early phase of production, not a single painting technique." },
  { photo: aritaPhotos.sometsuke, name: "Sometsuke (染付)", kind: "Technique · from early production to the present", text: "Blue-and-white decoration painted with cobalt-based pigment beneath a transparent glaze. Compare fine outlines with broader washes of blue. Because the painting sits under the glaze, it belongs to a different stage of making from overglaze enamelling." },
  { photo: aritaPhotos.kakiemon, name: "Kakiemon style (柿右衛門様式)", kind: "Style · developed in the later 17th century", text: "Fine enamel painting and carefully balanced areas of undecorated porcelain invite you to look at the space around a motif as well as the motif itself. Warm, milky-white nigoshide (濁手) is especially associated with the tradition, though the style also includes pieces combining underglaze blue and enamels." },
  { photo: aritaPhotos.iroe, name: "Iroe (色絵)", kind: "Technique · developed in the 1640s and still used today", text: "Colored enamels are applied over a previously fired glaze and fired again at a lower temperature. Look at how colored areas relate to the white surface or to underglaze blue. Iroe is a method shared by different styles, rather than one fixed set of patterns." },
  { photo: aritaPhotos.kinrande, name: "Kinrande (金襴手)", kind: "Decoration · late 17th- and early 18th-century export wares", text: "In export Imari, this often combines underglaze blue, colored enamels, and gold in richly organized patterns. Look for the way gold picks out borders and details. It is one important decorative approach within Ko-Imari, not another name for every old Imari piece." },
];

const steps = [
  ["Porcelain stone", "Material is selected for the intended body. Izumiyama is historically important, but Amakusa stone and other material combinations are also used."],
  ["Clay preparation", "The stone is crushed, refined with water, dewatered, and kneaded into a workable body. Preparing the material is a specialist job of its own."],
  ["Forming and drying", "A potter may use a wheel or a mold-based method, depending on the shape and production requirements. The formed piece must dry before firing."],
  ["Bisque firing", "An initial firing, often around 900°C in the examples described by Saga Prefecture, prepares the piece for the next stages."],
  ["Underglaze painting", "For sometsuke, the design is painted with gosu (呉須), a cobalt-based pigment, before the transparent glaze is applied."],
  ["Glazing", "Glaze covers the body and any underglaze decoration. Its appearance changes during the high firing."],
  ["High firing", "A firing around 1,300°C is a representative example. Blue-and-white decoration is developed beneath the glaze; a piece may be complete at this stage."],
  ["Optional overglaze decoration", "Enamels are applied to the fired glaze and fixed in a lower-temperature firing. Metallic decoration can involve further work. Temperatures depend on the materials and process."],
];

const places = [
  { name: "Kyushu Ceramic Museum", best: "Best for history", description: "Start with objects. The Shibata Collection offers a way to compare forms, decoration, and periods before you explore the town where they were made.", website: "https://saga-museum.jp/ceramic/", mapQuery: "Kyushu Ceramic Museum Arita Saga Japan", note: "Check current exhibitions and visitor information before visiting." },
  { name: "Arita History and Folklore Museum East", best: "Best for understanding production", description: "Near Izumiyama, this museum connects excavated material with the work of making porcelain. Water-powered crushing equipment and an enamel kiln help make that work tangible.", website: "https://www.town.arita.lg.jp/kiji003586/index.html", mapQuery: "有田町歴史民俗資料館 東館", note: "Check opening days and available language support with the museum." },
  { name: "Izumiyama Quarry (泉山磁石場)", best: "Best for understanding raw materials", description: "The excavated landscape gives a physical scale to the material behind the porcelain. Pair it with the nearby museum to connect the quarry with the processes that turned stone into clay.", website: "https://www.arita.jp/spot/post_16.html", mapQuery: "泉山磁石場 有田町", note: "Check the official visitor guidance and follow the site’s access rules." },
  { name: "Tozan Shrine (陶山神社)", best: "Best for seeing the town", description: "Include the shrine in a town walk to consider how Arita remembers its makers and its ceramic history. It adds a different perspective from museum displays and shops.", website: "https://arita-toso.net/", mapQuery: "陶山神社 有田町", note: "Check access information before planning your route." },
  { name: "Arita Será", best: "Best for shopping and contemporary Arita", description: "This concentration of porcelain shops makes it possible to compare everyday tableware and contemporary design. It also reveals the role of merchants in bringing a production region’s work to customers.", website: "https://www.arita.gr.jp/", mapQuery: "Arita Será Saga Japan", note: "Individual shops and facilities may keep different schedules." },
  { name: "Arita Porcelain Park — Arita Ware Workshop", best: "Best for trying a process", description: "Underglaze painting, hand-building, and wheel experiences offer an introduction to working with a ceramic object. A hands-on session can make the production sequence easier to understand.", website: "https://www.arita-touki.com/experience", mapQuery: "有田ポーセリンパーク 有田焼工房", note: "Confirm reservations, language support, firing time, and collection or overseas shipping before booking." },
];

const faqs = [
  { question: "Is Arita Ware pottery or porcelain?", answer: "Arita Ware is a porcelain tradition. Pottery production preceded it in the region, and some early kilns fired both, but the term used in this guide refers to porcelain." },
  { question: "What is the difference between Arita and Imari?", answer: "Arita names a production region. Historical Imari is a wider trade-related name associated with the port of Imari and includes porcelain made beyond Arita. Modern Imari Ware can also name porcelain produced in the Imari area. Context matters." },
  { question: "What is Ko-Imari?", answer: "Ko-Imari means old Imari. It is commonly used for Edo-period Hizen porcelain, although museums and collectors do not always draw its boundaries in exactly the same place. It is not restricted to red, blue, and gold decoration." },
  { question: "Who was Yi Sam-pyeong?", answer: "Yi Sam-pyeong, known in Japan as Kanagae Sanbee, is honored as a founder of Arita porcelain. A traditional account connects him with Izumiyama and 1616. Museum research distinguishes that commemorative narrative from the more gradual emergence of porcelain production and later expansion." },
  { question: "Is all Arita Ware hand-painted?", answer: "No. Decoration can be hand-painted, transferred, or made through a combination of methods. Some pieces have no painted decoration. Ask how a particular piece was made rather than judging the method from its price or regularity alone." },
  { question: "Can Arita Ware be used every day?", answer: "Many pieces are intended as everyday tableware. Check the maker’s intended use, the shape and weight, and the care instructions. An antique or an object made for display should not automatically be treated as a modern dinner plate." },
  { question: "Can I use it in a microwave?", answer: "Only when the product’s instructions allow it. Porcelain is not a guarantee of microwave suitability. Metallic decoration and other product details matter; Koransha, for example, requires a microwave-compatible label. Microwave suitability does not imply oven or direct-heat suitability." },
  { question: "Can I use a dishwasher?", answer: "Follow the instructions for the individual product. Enamels, transfer decoration, gold or silver details, and the shape can affect suitability. Some makers place restrictions on decorated pieces. When machine washing is not approved, wash gently by hand." },
  { question: "What detergent should I use?", answer: "A soft sponge and an ordinary kitchen dishwashing detergent are a useful starting point, subject to the maker’s instructions. Avoid abrasive cleaning tools. Do not assume that one bleach or stain-removal method is suitable for every enamel or metallic finish." },
  { question: "What should I buy as my first piece?", answer: "Choose something you will use: a small plate, bowl, or cup whose weight and shape feel right. Ask about decoration, care, and whether matching pieces can be bought later. Understanding one useful object is a good way into the wider tradition." },
];

export default function AritaWarePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Saga · Porcelain</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Arita Ware <span className="whitespace-nowrap">(有田焼)</span></h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-600">
          How stone, skilled hands, regional industry, and overseas demand connected a town in Kyushu to the world.
        </p>
      </header>

      <nav id="contents" aria-label="Article contents" className="mt-12 scroll-mt-6 border-y border-stone-200 py-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider">Contents</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="inline-flex min-h-11 items-center text-stone-600 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <article className="space-y-20 pt-16">
        <Section id="overview">
          <div className={prose}>
            <p>Arita Ware (有田焼) is a tradition of Japanese porcelain centered on Arita in Saga Prefecture, Kyushu. It includes a wide range of decoration, from blue-and-white underglaze painting to colorful overglaze enamels, elaborate gold decoration, and contemporary white porcelain.</p>
            <p>Rather than describing a single visual style, “Arita Ware” refers to a production tradition that developed around a town where raw materials, specialized skills, kilns, merchants, and distribution networks became closely connected.</p>
            <p>Historically, ceramics produced in and around Arita were also traded and known under names such as Imari (伊万里) and Hizen (肥前). Understanding Arita Ware therefore means looking not only at how the porcelain was made, but also at how it moved through Japan and eventually into overseas markets.</p>
          </div>
        </Section>

        <Section id="history">
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["1610s", "Porcelain production emerges in Arita"],
              ["17th century", "Production expands and becomes more organized"],
              ["1650s onward", "Arita porcelain enters overseas trade"],
              ["Edo period", "New styles and specialized production develop"],
            ].map(([date, event]) => (
              <li key={date} className="border-l-2 border-stone-300 pl-4"><p className="text-sm text-stone-500">{date}</p><p className="mt-1 font-medium">{event}</p></li>
            ))}
          </ol>
          <div className={prose}>
            <p>Porcelain production emerged in Arita during the early seventeenth century. Its beginnings were closely connected to potters from the Korean Peninsula who came to Japan in the aftermath of Toyotomi Hideyoshi&apos;s invasions of Korea. Their movement took place within the violent context of war, including the forced movement of craftspeople. It should not be described simply as voluntary cultural exchange, nor should every individual&apos;s circumstances be assumed to have been identical.</p>
            <p>One figure later celebrated as the founder of Arita porcelain is Yi Sam-pyeong (李参平), known in Japan as Kanagae Sanbee (金ヶ江三兵衛). According to a well-known traditional account, he discovered porcelain stone at Izumiyama and produced Japan&apos;s first porcelain in 1616. Historical and archaeological evidence, however, suggests a more gradual process.</p>
            <p>Porcelain was being developed in Arita during the 1610s, while the large-scale use of Izumiyama porcelain stone may have become important somewhat later. The Arita Town museum presents an interpretation placing its discovery and expansion in use around 1630, based on kiln chronology. That is a research interpretation, not a documented discovery date.</p>
            <p>1616 remains an important traditional founding year for the region. It is nevertheless more accurate to view the birth of Arita Ware as the result of several potters, existing kiln traditions, new materials, and changing production systems rather than the invention of a single person on a single date.</p>
            <p>During the seventeenth century, production expanded, kilns became more concentrated, and new forms of organization developed under the Saga Domain (佐賀藩). Arita porcelain then reached domestic and overseas markets, helping transform a local concentration of kilns into one of Japan&apos;s major porcelain-producing regions.</p>
          </div>
          <SourceNotes ids={["S02", "S05", "S07"]} />
        </Section>

        <Section id="why-here">
          <div className={prose}>
            <p>Arita did not become a major porcelain center simply because porcelain stone was found there. Its development depended on several conditions working together: raw materials, technical knowledge, water, fuel, political organization, skilled workers, transportation, and access to markets.</p>
            <h3 className="text-xl font-semibold text-stone-900">Stone needed knowledge</h3>
            <p>Geology provided an important foundation. Izumiyama porcelain stone (泉山陶石) formed from rhyolite, a volcanic rock altered by hot fluids. It became a major source of material for porcelain production. But stone alone could not become porcelain. It had to be quarried, crushed, refined with water, prepared as clay, shaped, glazed, and fired at high temperatures.</p>
            <p>The people who understood those processes were just as important as the material itself. Potters from the Korean Peninsula contributed to the development of ceramic technology in the region, while generations of local specialists gradually created a network of work involving clay preparation, forming, firing, painting, and trade.</p>
            <h3 className="text-xl font-semibold text-stone-900">Water, fuel, and the limits of a landscape</h3>
            <p>The natural environment also mattered. Water was used in processing porcelain stone and could power crushing equipment, while forests supplied large quantities of fuel for kilns. Sloping terrain could support climbing kilns. Yet water supply and fuel were not unlimited. As production increased, controlling fuel, kilns, workers, and raw materials became an important political problem.</p>
            <h3 className="text-xl font-semibold text-stone-900">An organized production town</h3>
            <p>The Saga Domain played a major role in organizing this growing industry. It regulated kilns, workers, resources, and movement in and out of the production area. Such policies both supported production and restricted the people working within it. They should not be understood only as helpful patronage.</p>
            <p>Specialization also shaped the town. Kiln producers made and fired bodies; enamel decorators worked on already-fired porcelain; merchants brought products to buyers. Arita&apos;s history is therefore about a regional industry as well as individual makers.</p>
            <h3 className="text-xl font-semibold text-stone-900">A way beyond the mountains</h3>
            <p>Finally, Arita was connected to markets beyond the mountains. Finished ceramics could be transported overland toward the port of Imari and, through wider trading networks including Nagasaki (長崎), reach customers across Japan and overseas. Arita itself was not a seaport, and river transport should not be assumed to explain the journey from kiln to harbor.</p>
          </div>
          <aside className="mt-8 border-l-2 border-[#355c49] bg-stone-100 p-6">
            <h3 className="font-semibold">Reading the connections</h3>
            <p className="mt-3 leading-8 text-stone-700">Taken together, these histories suggest a useful way to understand Arita: local resources became an industry when knowledge, people, political organization, transportation, and demand were connected. This is a way of interpreting the evidence, rather than a single recorded explanation of its success.</p>
          </aside>
        </Section>

        <Section id="arita-and-imari">
          <p className="mt-5 leading-8 text-stone-700">The names overlap because making, shipping, and collecting porcelain produce different kinds of labels.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className={card}><p className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-500">Production tradition</p><h3 className="text-xl font-semibold">Arita Ware</h3><p className="mt-4 leading-7 text-stone-700">A production tradition centered on Arita and its surroundings. It covers many forms and decorative approaches.</p></div>
            <div className={card}><p className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-500">Trade and historical name</p><h3 className="text-xl font-semibold">Imari Ware (伊万里焼)</h3><p className="mt-4 leading-7 text-stone-700">Historically, a wider trading name associated with the port of Imari. It included porcelain from Arita and other Hizen centers, such as Hasami and Mikawachi.</p></div>
            <div className={card}><p className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-500">Historical classification</p><h3 className="text-xl font-semibold">Ko-Imari (古伊万里)</h3><p className="mt-4 leading-7 text-stone-700">“Old Imari,” commonly used for Edo-period Hizen porcelain. Its boundaries vary with the museum or collecting context; it does not mean only gold-decorated export ware.</p></div>
          </div>
          <div className={prose}>
            <p>The familiar explanation—made in Arita, shipped from Imari—is a useful starting point, but leaves out part of the story. Historical Imari was not exclusively Arita-made, and the name relates to domestic distribution as well as overseas trade.</p>
            <p>Nagasaki was an important overseas trading gateway. The Dutch East India Company ship associated with the major 1659 export milestone departed from Nagasaki, not directly from Imari for Europe. Routes and trading arrangements also changed over time.</p>
            <p>Today, Imari Ware can also refer to porcelain produced in the Imari area. That modern geographical meaning should be distinguished from the broader historical trade name.</p>
          </div>
          <SourceNotes ids={["S13", "S16", "S18"]} />
        </Section>

        <Section id="characteristics">
          <div className={prose}>
            <p>Begin with the relationship between the white porcelain body and its decoration. On a blue-and-white dish, lines and washes organize the surface beneath the glaze. On an enamelled piece, color sits over the fired glaze. Gold can create another layer of detail.</p>
            <p>Some Kakiemon-style compositions give undecorated space an active role. Dense gold decoration offers a different experience, while contemporary white porcelain may place the emphasis on shape and surface rather than painted imagery.</p>
            <p>These are choices within a broad production tradition. Arita cannot be reduced to blue and white, just as <Link href="/en/crafts/kutani-ware" className={textLink}>Kutani Ware</Link> cannot be understood through color alone. Both traditions include overglaze decoration.</p>
          </div>
        </Section>

        <Section id="styles">
          <p className="mt-5 leading-8 text-stone-700">These names describe different things: an early period, a painting technique, or an approach to composition. Use them as ways to look more closely, rather than as mutually exclusive boxes.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {styles.map((style) => <div key={style.name} className={card}><p className="text-sm leading-6 text-stone-500">{style.kind}</p><h3 className="mt-2 text-xl font-semibold">{style.name}</h3><CraftPhoto {...style.photo} /><p className="mt-4 leading-7 text-stone-700">{style.text}</p></div>)}
          </div>
          <div className={prose}>
            <p>The first Sakaida Kakiemon (酒井田柿右衛門) is traditionally credited with an early breakthrough in overglaze enamelling. The Agency for Cultural Affairs itself presents that origin as a transmitted account. The development of color decoration should not be reduced to an unquestioned claim about one inventor.</p>
            <p>Also distinguish Kakiemon as a family and kiln from Kakiemon style as a historical category. The style was associated with work from more than one workshop; a style label alone does not identify a maker.</p>
          </div>
          <aside className="mt-8 border-l-2 border-stone-300 bg-stone-100 p-6">
            <h3 className="text-xl font-semibold">What about Nabeshima?</h3>
            <p className="mt-4 leading-8 text-stone-700">Nabeshima (鍋島) belongs to the history of Saga Domain kilns and porcelain made for presentation, including gifts to the shogun&apos;s household. Its purpose and controlled production differed from commercial Imari. The domain kiln developed at Okawachiyama (大川内山), now in Imari City. This makes Nabeshima more than another pattern to add to a list of Arita designs.</p>
          </aside>
        </Section>

        <Section id="production">
          <p className="mt-5 leading-8 text-stone-700">The sequence below is a guide, not a recipe followed by every kiln. Materials, forming methods, decoration, and firing conditions vary. Modern Arita porcelain is not all made from Izumiyama stone.</p>
          <AritaProcess />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
            {steps.map(([title, description], index) => <li key={title} className="border-l-2 border-stone-300 pl-5"><p className="text-sm text-stone-500">Step {index + 1}</p><h3 className="mt-1 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-stone-700">{description}</p></li>)}
          </ol>
          <p className="mt-8 leading-8 text-stone-700">The key distinction is when decoration is added: sometsuke is painted before glazing and high firing; overglaze enamels are added afterward and fired again. The temperatures above are representative examples, not standards for every product. Different sources describe different overglaze firing temperatures.</p>
        </Section>

        <Section id="world">
          <div className={prose}>
            <p>Chinese porcelain provided important models for early Arita forms and decoration. Political upheaval around the Ming–Qing transition, followed by restrictions on maritime trade, disrupted Chinese overseas supply. This helped create opportunities for Japanese porcelain. It was a changing supply situation, not a single moment when every Chinese export stopped.</p>
            <p>From the 1650s, Japanese porcelain entered expanding overseas networks, reaching Southeast Asia and Europe. The Dutch East India Company, or VOC, was a major participant. 1659 marks a significant expansion of European exports; it should not be treated as the first time any Japanese porcelain left Japan.</p>
            <p>Orders helped change what Arita made. European shapes and requested designs joined Chinese-inspired decoration and products also suited to domestic buyers. Tableware and drinking vessels served practical uses, while large vases and decorative groupings furnished interiors.</p>
            <p>Overseas demand did not simply expand the market. It also influenced what Arita produced. Makers had to respond to expectations about form, finish, and decoration. As Chinese exports recovered, competition continued rather than ending Arita&apos;s overseas story overnight.</p>
            <p>Kakiemon-style porcelain became a reference for European makers, including Meissen, Chantilly, Chelsea, and Bow. Their adaptations show the influence of Japanese designs. They do not establish that Arita caused the invention of porcelain-making technology in Europe.</p>
          </div>
          <SourceNotes ids={["S18", "S20", "S23", "S24"]} />
        </Section>

        <Section id="visit">
          <p className="mt-5 leading-8 text-stone-700">A useful route begins with objects in a museum, continues to the source of the material, and ends with makers and shops. These six stops offer different ways into the story.</p>
          <p className="mt-4 font-medium leading-7">Check the official website before visiting.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {places.map((place) => <div key={place.name} className={card}><p className="text-sm text-stone-500">{place.best}</p><h3 className="mt-2 text-xl font-semibold">{place.name}</h3><p className="mt-4 leading-7 text-stone-700">{place.description}</p><VisitLinks name={place.name} website={place.website} mapQuery={place.mapQuery} note={place.note} /></div>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-stone-600">Opening hours, prices, reservations, and language support can change. A shop or gallery visit does not necessarily include access to a working factory.</p>
        </Section>

        <Section id="today">
          <p className="mt-5 leading-8 text-stone-700">Arita&apos;s contemporary challenge concerns a whole production network. A contraction in the ceramics trade affects the people who prepare materials, make molds, form bodies, decorate surfaces, fire kilns, and bring finished products to customers.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className={card}><p className="text-sm text-stone-500">Challenge</p><h3 className="mt-2 text-xl font-semibold">A Shrinking Production Network</h3><p className="mt-4 leading-7 text-stone-700">Arita Town&apos;s 2024 statistical yearbook records 305 ceramics-related trading establishments in 1997 and 93 in 2021. These figures span different survey systems, so they indicate a long-term contraction rather than a precisely comparable decline rate. They are not counts of all active kilns today.</p></div>
            <div className={card}><p className="text-sm text-stone-500">Skills</p><h3 className="mt-2 text-xl font-semibold">Training the Specialists Behind Arita Ware</h3><p className="mt-4 leading-7 text-stone-700">Training matters across specialist jobs. Industry training also includes painting, wheel work, and plaster-mold making. Sustaining a named kiln depends partly on sustaining these less visible skills.</p></div>
            <div className={card}><p className="text-sm text-stone-500">Collaboration</p><h3 className="mt-2 text-xl font-semibold">Designers and a New Generation</h3><p className="mt-4 leading-7 text-stone-700">The brand 2016/ connects local manufacturing with designers from Japan and overseas. Creative Residency in Arita also brings visiting creative practitioners into contact with the region&apos;s knowledge and facilities. These collaborations offer ways to develop new work; their existence alone is not proof that exports are growing.</p></div>
            <div className={card}><p className="text-sm text-stone-500">Innovation</p><h3 className="mt-2 text-xl font-semibold">New Materials and New Uses</h3><p className="mt-4 leading-7 text-stone-700">The Saga Ceramics Research Laboratory (佐賀県窯業技術センター) supports research, technical advice, and skills development.</p><p className="mt-4 leading-7 text-stone-700">Innovation can begin with the material left over from making. KIHARA and Kichiemon Seitosho&apos;s awagesho, or foam decoration, reuses powdered discarded bisque-fired pieces in a decorative treatment. The documented 2022 project is one example of product development, not a measure of recycling across the entire industry.</p></div>
          </div>
          <p className="mt-6 leading-8 text-stone-700">Arita’s future depends on the connections between specialist skills, manufacturing, and the people who bring its work to new audiences.</p>
          <SourceNotes ids={["S35", "S03", "S38", "S39", "S51", "S52"]} />
        </Section>

        <Section id="buying">
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className={card}><h3 className="text-xl font-semibold">Start with use, weight, and shape</h3><p className="mt-4 leading-7 text-stone-700">For everyday use, hold the cup or bowl, consider the rim and foot, and check how it stacks. A piece that suits your hand, food, and cupboard may be a better first purchase than the most elaborate object in the shop.</p></div>
            <div className={card}><h3 className="text-xl font-semibold">Ask who did what</h3><p className="mt-4 leading-7 text-stone-700">An artist&apos;s work, a kiln&apos;s range, and a merchant&apos;s brand describe different relationships to production, not a simple quality ranking. Ask who designed, formed, fired, and decorated the piece.</p></div>
            <div className={card}><h3 className="text-xl font-semibold">Understand the decoration</h3><p className="mt-4 leading-7 text-stone-700">Hand-painting and transfer decoration are different methods, and a piece may combine them. Ask the seller rather than assuming that a regular pattern is transferred or that a high price guarantees hand-painting.</p></div>
            <div className={card}><h3 className="text-xl font-semibold">Check the maker and provenance</h3><p className="mt-4 leading-7 text-stone-700">“Kakiemon style” does not necessarily mean “made by the Kakiemon kiln.” For expensive pieces, confirm the maker or artist, the seller&apos;s attribution, and any accompanying documentation or box. A style name is not proof of origin.</p></div>
          </div>
          <div className={prose}>
            <h3 className="text-xl font-semibold text-stone-900">Care is part of the choice</h3>
            <p>Before buying, check whether the exact product suits the way you wash and reheat food. Gold or silver decoration, enamels, transfers, and the form of the object can affect care instructions. Do not assume that every piece of porcelain is microwave- or dishwasher-safe.</p>
            <p>Use a soft sponge and suitable kitchen dishwashing detergent, following the maker&apos;s instructions. Avoid abrasive tools and sudden temperature changes. Dry pieces before storage; protective paper between stacked pieces can reduce contact. Display pieces and antiques may need different treatment from everyday tableware.</p>
          </div>
        </Section>

        <Section id="faq">
          <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
            {faqs.map((faq) => <details key={faq.question} className="py-4"><summary className="min-h-11 cursor-pointer py-2 font-semibold leading-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">{faq.question}</summary><p className="mt-3 pb-2 leading-8 text-stone-700">{faq.answer}</p></details>)}
          </div>
        </Section>

        <Section id="sources">
          <p className="mt-5 leading-8 text-stone-700">This guide draws on museum, municipal, prefectural, cultural-property, and industry sources. Traditional origin accounts and archaeological interpretations are distinguished in the text. Manufacturer advice is used for product care, not as a universal rule for all Arita porcelain. Most local sources are in Japanese.</p>
          <div className="mt-8 space-y-10">
            {sourceGroups.map((group) => <div key={group.title}><h3 className="text-xl font-semibold">{group.title}</h3><ul className="mt-4 space-y-6">{group.ids.map((id) => { const source = sources[id]; return <li key={id} id={`source-${id}`} className="scroll-mt-6 border-l-2 border-stone-200 pl-4"><a href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`${source.title} (opens in a new tab)`} className={`inline-block py-2 font-medium leading-7 ${textLink}`}>{source.title} <span aria-hidden="true">↗</span></a><p className="mt-1 text-sm leading-6 text-stone-600">{source.note}</p></li>; })}</ul></div>)}
          </div>
          <p className="mt-8 text-sm leading-7 text-stone-600">Research reviewed September 2026. Visitor arrangements and product-care instructions should always be checked with the relevant institution or maker.</p>
        </Section>
      </article>
    </main>
  );
}
