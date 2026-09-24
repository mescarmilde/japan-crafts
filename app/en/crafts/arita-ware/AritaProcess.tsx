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

function ProcessIcon({ kind }: { kind: (typeof stages)[number][2] }) {
  return <svg viewBox="0 0 80 80" aria-hidden="true" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {kind === "stone" ? <><path d="m12 57 9-27 21-10 22 15 4 24-24 9Z" fill="#ddd6c5"/><path d="m21 30 20 14 23-9M41 44l3 24"/></>
    : kind === "clay" ? <><path d="M15 57q0-26 25-30 24 3 26 30c0 12-51 12-51 0Z" fill="#d4c4ab"/><path d="M25 45q15-8 30 0M25 54q15-6 30 0"/></>
    : kind === "fire" ? <><path d="M14 68V31a26 26 0 0 1 52 0v37Z" fill="#f0e3d4"/><path d="M24 57V34a16 16 0 0 1 32 0v23Z"/><path d="M29 42q11 25 22 0Z" fill="#fff"/><path d="M34 17q-5-4 0-10m12 10q-5-4 0-10" stroke="#a36b4b"/></>
    : <><path d="M13 37q4 29 27 29t27-29" fill={kind === "form" ? "#d4c4ab" : "#fff"}/><ellipse cx="40" cy="37" rx="27" ry="6"/>{kind === "form" ? <path d="M11 70h58M40 66v10"/> : kind === "glaze" ? <><path d="M40 9q-15 18 0 18 15 0 0-18Z" fill="#dce8e9"/><path d="M26 47q14 20 28 0" stroke="#9cbfc3"/></> : <><path d="m52 10 6 4-20 33-6-4Z" fill="#c9b58a"/><path d="M25 50q9 12 18 2" stroke={kind === "blue" ? "#355b8c" : "#a64c3c"} strokeWidth="4"/>{kind === "color" && <path d="m48 51 5 5-5 5-5-5Z" fill="#c59d42"/>}</>}</>}
  </svg>;
}

export default function AritaProcess() {
  return <figure aria-labelledby="arita-process-heading" className="mt-10 border border-stone-200 bg-stone-50 p-5 sm:p-6">
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">From stone to porcelain</p>
    <h3 id="arita-process-heading" className="mt-2 text-2xl font-semibold">Making the body, choosing the decoration</h3>
    <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map(([title,description,kind],index)=><li key={title} className={`rounded-lg border p-4 ${index === 7 ? "border-dashed border-[#355c49] bg-[#e3ece6]" : "border-stone-200 bg-white"}`}>
        <div className="flex items-center justify-between text-stone-600"><ProcessIcon kind={kind}/><span aria-hidden="true" className="text-sm text-stone-400">0{index+1}</span></div>
        <h4 className="mt-3 text-sm font-semibold leading-6">{title}</h4><p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
      </li>)}
    </ol>
    <figcaption className="mt-6 border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600">A simplified sequence, not a rule for every kiln or piece. Underglaze painting is used for sometsuke; overglaze decoration is optional and adds another firing after the high firing.</figcaption>
  </figure>;
}
