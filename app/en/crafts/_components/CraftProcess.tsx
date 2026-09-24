import type { ReactNode } from "react";

export type ProcessStep = {
  number: string;
  title: string;
  shortLabel?: string;
  summary: string;
  description: string;
  icon?: ReactNode;
  optional?: boolean;
};

type CraftProcessProps = {
  id: string;
  eyebrow: string;
  title: string;
  introduction?: string;
  steps: readonly ProcessStep[];
  caveat: string;
  note: string;
};

export default function CraftProcess({ id, eyebrow, title, introduction, steps, caveat, note }: CraftProcessProps) {
  return (
    <div className="mt-10">
      <figure aria-labelledby={`${id}-heading`} className="border border-stone-200 bg-stone-50 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{eyebrow}</p>
        <h3 id={`${id}-heading`} className="mt-2 text-2xl font-semibold text-stone-900">{title}</h3>
        {introduction && <p className="mt-3 text-sm leading-6 text-stone-600">{introduction}</p>}
        <ol className={`mt-8 grid grid-cols-1 gap-4 ${steps.length <= 5 ? "sm:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]" : "sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]"}`}>
          {steps.map((step, index) => (
            <li key={step.number} className={`min-w-0 rounded-lg border p-4 ${step.optional ? "border-dashed border-[#355c49] bg-[#e3ece6]" : "border-stone-200 bg-white"}`}>
              <div className="flex items-center justify-between gap-3 text-stone-600">
                {step.icon}
                <span className="text-sm font-medium text-stone-500">{step.number}{index < steps.length - 1 && <span aria-hidden="true" className="ml-2"><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></span>}</span>
              </div>
              <a href={`#${id}-${step.number}`} className="mt-3 block rounded text-sm font-semibold leading-6 text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700">{step.shortLabel ?? step.title}</a>
              <p className="mt-2 text-sm leading-6 text-stone-600">{step.summary}</p>
            </li>
          ))}
        </ol>
        <figcaption className="mt-6 border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600">{caveat}</figcaption>
      </figure>
      <ol className="mt-10 divide-y divide-stone-200">
        {steps.map(step => (
          <li id={`${id}-${step.number}`} key={step.number} className="grid scroll-mt-24 gap-3 py-7 first:pt-0 sm:grid-cols-[60px_1fr] sm:gap-5">
            <span className="text-sm font-medium text-stone-500">{step.number}</span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <aside className="mt-8 border-l-2 border-stone-300 pl-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">Why this matters</h3>
        <p className="mt-3 leading-8 text-stone-700">{note}</p>
      </aside>
    </div>
  );
}
