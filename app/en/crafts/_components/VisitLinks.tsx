export default function VisitLinks({ name, website, mapQuery, note }: { name: string; website: string; mapQuery: string; note: string }) {
  return (
    <div className="mt-6 border-t border-stone-200 pt-5">
      <p className="text-sm leading-6 text-stone-600">{note}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={website} target="_blank" rel="noopener noreferrer" aria-label={name + ": official website (opens in a new tab)"} className="inline-flex min-h-11 items-center border border-[#355c49] bg-[#355c49] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#284637] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">Official website <span aria-hidden="true" className="ml-2">↗</span></a>
        <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapQuery)} target="_blank" rel="noopener noreferrer" aria-label={name + ": view on Google Maps (opens in a new tab)"} className="inline-flex min-h-11 items-center border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355c49]">View on Google Maps <span aria-hidden="true" className="ml-2">↗</span></a>
      </div>
    </div>
  );
}
