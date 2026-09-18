const steps = [
  { title: "Porcelain stone", text: "Quarry the raw material.", icon: "stone" },
  { title: "Prepare clay", text: "Crush, refine, and knead.", icon: "clay" },
  { title: "Shape & dry", text: "Form the vessel and let it dry.", icon: "shape" },
  { title: "Bisque fire", text: "Give the dried body its first firing.", icon: "bisque" },
  { title: "Glaze & fire", text: "Create a hard, glazed porcelain body.", icon: "glaze" },
  { title: "Paint", text: "Apply overglaze colors to the fired surface.", icon: "paint" },
  { title: "Fire the colors", text: "Fire again to develop the decoration.", icon: "finish" },
] as const;

function ProcessIcon({ kind }: { kind: (typeof steps)[number]["icon"] }) {
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
  return (
    <figure aria-labelledby="kutani-process-heading" className="mt-10 border border-stone-200 bg-stone-50 p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">From stone to color</p>
      <h3 id="kutani-process-heading" className="mt-2 text-2xl font-semibold text-stone-900">How a Kutani piece takes shape</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">First make the porcelain body. Then paint its glazed surface and fire it again.</p>
      <ol className="mt-8 grid gap-8 lg:grid-cols-7 lg:gap-3">
        {steps.map((step, index) => (
          <li key={step.icon} className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
            <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${index < 5 ? "bg-[#ece9df] text-stone-600" : "bg-[#e3ece6] text-[#355c49]"}`}>
              <ProcessIcon kind={step.icon} />
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-stone-500">0{index + 1}</p>
              <h4 className="mt-1 text-sm font-semibold leading-5 text-stone-900">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-stone-600 lg:text-xs lg:leading-5">{step.text}</p>
            </div>
            {index < steps.length - 1 && <span aria-hidden="true" className="absolute -bottom-7 left-8 text-xl text-stone-400 lg:-right-3 lg:bottom-auto lg:left-auto lg:top-7"><span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span></span>}
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600">
        <strong className="font-semibold text-[#355c49]">The key sequence: fire → paint → fire again.</strong>{" "}
        This is a simplified overview of overglaze-decorated Kutani ware. Methods vary, and gold decoration may require another firing.
      </figcaption>
    </figure>
  );
}
