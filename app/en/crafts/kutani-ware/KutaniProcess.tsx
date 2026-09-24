import CraftProcess from "../_components/CraftProcess";

const steps = [
  {
    "title": "Stone to Porcelain Clay",
    "description": "Porcelain stone is quarried, crushed into a fine powder, mixed with water, and refined to remove unwanted material. Excess water is then removed until the material reaches the right consistency for working.",
    "number": "01",
    "shortLabel": "Stone & clay",
    "summary": "Quarry, crush, and refine the raw material.",
    "kind": "stone"
  },
  {
    "title": "Shaping and Drying",
    "description": "The clay is kneaded to remove air and then shaped. Round vessels are often formed on a potter's wheel, while other forms may require hand-building or different forming techniques. The piece is then dried and carefully finished.",
    "number": "02",
    "shortLabel": "Shape & dry",
    "summary": "Form the vessel and let it dry.",
    "kind": "shape"
  },
  {
    "title": "Bisque, Glaze, and High Firing",
    "description": "The dried piece is first bisque-fired at around 800°C. After glazing, it is fired again at roughly 1,300°C, producing the hard white porcelain surface that will become the canvas for Kutani decoration.",
    "number": "03",
    "shortLabel": "Bisque, glaze & fire",
    "summary": "Create a hard, glazed porcelain body.",
    "kind": "glaze"
  },
  {
    "title": "Overglaze Painting",
    "description": "Artists paint over the already glazed porcelain. Fine outlines may first define the composition, followed by layers of colored overglaze enamels. At this stage, the pigments do not necessarily show the brilliant colors they will have after firing.",
    "number": "04",
    "shortLabel": "Overglaze painting",
    "summary": "Apply overglaze colors to the fired surface.",
    "kind": "paint"
  },
  {
    "title": "Color Firing and Finishing",
    "description": "The decorated piece is fired again, generally between about 800°C and 1,000°C, allowing the overglaze colors to develop. Pieces with gold or silver decoration may require an additional lower-temperature firing.",
    "number": "05",
    "shortLabel": "Color firing",
    "summary": "Fire again to develop the decoration.",
    "kind": "finish"
  }
] as const;

function ProcessIcon({ kind }: { kind: "stone" | "clay" | "shape" | "bisque" | "glaze" | "paint" | "finish" }) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {kind === "stone" ? (
        <><path d="M12 56 21 30 42 20 63 33 69 58 47 67 25 64Z" fill="#ddd6c5" /><path d="m21 30 18 13 24-10M39 43l8 24M12 56l27-13" /></>
      ) : kind === "clay" ? (
        <><path d="M17 59c-3-12 5-17 9-23 4-8 15-12 24-7 8 4 15 15 14 25-1 11-42 16-47 5Z" fill="#d4c4ab" /><path d="M27 45c8-7 20-7 29-1M26 53c9-5 18-5 29-2M16 17l-4 7m52-10-4 8" /></>
      ) : kind === "shape" ? (
        <><ellipse cx="40" cy="58" rx="29" ry="8" fill="#e6e7df" /><path d="M21 31c2 20 10 25 19 25s17-5 19-25" fill="#d4c4ab" /><ellipse cx="40" cy="31" rx="19" ry="5" fill="#f4f0e5" /><path d="M40 66v7M25 74h30M11 40l-5 8 9 3M68 54l6-7-8-4" /></>
      ) : kind === "bisque" || kind === "glaze" ? (
        <><path d="M14 67V30a26 26 0 0 1 52 0v37Z" fill={kind === "bisque" ? "#f0e3d4" : "#e4ece7"} /><path d="M23 55V33a17 17 0 0 1 34 0v22Z" /><path d="M28 39c1 10 5 14 12 14s11-4 12-14Z" fill={kind === "bisque" ? "#cdb18d" : "#ffffff"} /><path d="M31 62h18M31 16c-4-5 4-6 0-11m9 9c-4-5 4-6 0-11m9 13c-4-5 4-6 0-11" stroke="#a36b4b" /></>
      ) : kind === "paint" ? (
        <><path d="M13 40c2 19 12 27 27 27s25-8 27-27Z" fill="#fff" /><ellipse cx="40" cy="40" rx="27" ry="6" /><path d="m51 12 6 4-16 27-6-3Z" fill="#c9b58a" /><path d="m35 40-2 11 8-8" fill="#355c49" /><path d="M25 52q8 10 14 4" stroke="#355c49" strokeWidth="4" /></>
      ) : (
        <><path d="M13 34c2 21 12 30 27 30s25-9 27-30Z" fill="#fff" /><ellipse cx="40" cy="34" rx="27" ry="6" /><path d="M23 45q8 17 15 8t18-8" stroke="#355c49" strokeWidth="5" /><path d="m39 46 5 5-5 5-5-5Z" fill="#ba9545" stroke="#ba9545" /><path d="m58 10 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#ba9545" stroke="#ba9545" /><path d="M18 22c-4-5 4-7 0-12M29 22c-4-5 4-7 0-12" stroke="#a36b4b" /></>
      )}
    </svg>
  );
}


export default function KutaniProcess() {
  return <CraftProcess id="kutani-process" eyebrow="From stone to color" title="How a Kutani piece takes shape" introduction="First make the porcelain body. Then paint its glazed surface and fire it again." steps={steps.map(step => ({ ...step, icon: <ProcessIcon kind={step.kind} /> }))} caveat="The key sequence: fire → paint → fire again. This is a simplified overview of overglaze-decorated Kutani Ware. Methods vary, and gold decoration may require another firing." note={"A finished piece can therefore be the result of several separate processes and firings. Kutani Ware is not defined only by the person who shapes the vessel: clay producers, form makers, painters, kiln workers, and other specialists can all contribute to the finished object."} />;
}
