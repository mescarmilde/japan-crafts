import CraftProcess from "../_components/CraftProcess";

const stages = [
  ["Porcelain stone", "Materials vary; not only Izumiyama.", "stone"],
  ["Clay preparation", "Crush, refine, and knead.", "clay"],
  ["Forming", "Shape and dry the body.", "form"],
  ["Bisque firing", "An initial firing.", "fire"],
  ["Underglaze painting", "For blue-and-white decoration.", "blue"],
  ["Glazing", "Apply the glaze.", "glaze"],
  ["High firing", "A piece may be complete here.", "fire"],
  ["Optional overglaze decoration", "Add enamels and fire again, when used.", "color"],
] as const;


const details = [
  [
    "Porcelain stone",
    "Material is selected for the intended body. Izumiyama is historically important, but Amakusa stone and other material combinations are also used."
  ],
  [
    "Clay preparation",
    "The stone is crushed, refined with water, dewatered, and kneaded into a workable body. Preparing the material is a specialist job of its own."
  ],
  [
    "Forming and drying",
    "A potter may use a wheel or a mold-based method, depending on the shape and production requirements. The formed piece must dry before firing."
  ],
  [
    "Bisque firing",
    "An initial firing, often around 900°C in the examples described by Saga Prefecture, prepares the piece for the next stages."
  ],
  [
    "Underglaze painting",
    "For sometsuke, the design is painted with gosu (呉須), a cobalt-based pigment, before the transparent glaze is applied."
  ],
  [
    "Glazing",
    "Glaze covers the body and any underglaze decoration. Its appearance changes during the high firing."
  ],
  [
    "High firing",
    "A firing around 1,300°C is a representative example. Blue-and-white decoration is developed beneath the glaze; a piece may be complete at this stage."
  ],
  [
    "Optional overglaze decoration",
    "Enamels are applied to the fired glaze and fixed in a lower-temperature firing. Metallic decoration can involve further work. Temperatures depend on the materials and process."
  ]
];

function ProcessIcon({ kind }: { kind: (typeof stages)[number][2] }) {
  return <svg viewBox="0 0 80 80" aria-hidden="true" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {kind === "stone" ? <><path d="m12 57 9-27 21-10 22 15 4 24-24 9Z" fill="#ddd6c5"/><path d="m21 30 20 14 23-9M41 44l3 24"/></>
    : kind === "clay" ? <><path d="M15 57q0-26 25-30 24 3 26 30c0 12-51 12-51 0Z" fill="#d4c4ab"/><path d="M25 45q15-8 30 0M25 54q15-6 30 0"/></>
    : kind === "fire" ? <><path d="M14 68V31a26 26 0 0 1 52 0v37Z" fill="#f0e3d4"/><path d="M24 57V34a16 16 0 0 1 32 0v23Z"/><path d="M29 42q11 25 22 0Z" fill="#fff"/><path d="M34 17q-5-4 0-10m12 10q-5-4 0-10" stroke="#a36b4b"/></>
    : <><path d="M13 37q4 29 27 29t27-29" fill={kind === "form" ? "#d4c4ab" : "#fff"}/><ellipse cx="40" cy="37" rx="27" ry="6"/>{kind === "form" ? <path d="M11 70h58M40 66v10"/> : kind === "glaze" ? <><path d="M40 9q-15 18 0 18 15 0 0-18Z" fill="#dce8e9"/><path d="M26 47q14 20 28 0" stroke="#9cbfc3"/></> : <><path d="m52 10 6 4-20 33-6-4Z" fill="#c9b58a"/><path d="M25 50q9 12 18 2" stroke={kind === "blue" ? "#355b8c" : "#a64c3c"} strokeWidth="4"/>{kind === "color" && <path d="m48 51 5 5-5 5-5-5Z" fill="#c59d42"/>}</>}</>}
  </svg>;
}


export default function AritaProcess() {
  return <CraftProcess id="arita-process" eyebrow="From stone to porcelain" title="Making the body, choosing the decoration" steps={stages.map(([shortLabel, summary, kind], index) => ({ number: String(index + 1).padStart(2, "0"), title: details[index][0], description: details[index][1], shortLabel, summary, icon: <ProcessIcon kind={kind} />, optional: index === 7 }))} caveat="A simplified sequence, not a rule for every kiln or piece. Underglaze painting is used for sometsuke; overglaze decoration is optional and adds another firing after the high firing." note={"The key distinction is when decoration is added: sometsuke is painted before glazing and high firing; overglaze enamels are added afterward and fired again. The temperatures above are representative examples, not standards for every product. Different sources describe different overglaze firing temperatures."} />;
}
