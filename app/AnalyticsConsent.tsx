"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const measurementId = "G-GLH2BLB5YX";
const storageKey = "japan-crafts-analytics-consent";
declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void; }
}
export default function AnalyticsConsent({ enabled }: { enabled: boolean }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch {}
    setChoice(saved === "accepted" || saved === "declined" ? saved : null);
    setLoaded(true);
  }, []);
  function choose(value: string) {
    try { localStorage.setItem(storageKey, value); } catch {}
    if (choice === "accepted" && value === "declined") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (!name.startsWith("_ga")) return;
        const domains = ["", location.hostname, "." + location.hostname];
        for (const domain of domains) document.cookie = name + "=; Max-Age=0; Path=/" + (domain ? "; Domain=" + domain : "");
      });
      location.reload();
      return;
    }
    setChoice(value);
    setEditing(false);
  }
  return <>
    {enabled && choice === "accepted" && <>
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
        gtag('js', new Date());
        gtag('config', '${measurementId}', {allow_google_signals:false,allow_ad_personalization_signals:false});
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    </>}
    <button type="button" onClick={() => setEditing(true)} className="underline underline-offset-4 min-h-11 focus-visible:outline-2 focus-visible:outline-offset-4">Cookie settings</button>
    {loaded && (choice === null || editing) && <section aria-label="Analytics cookie preferences" className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-300 bg-[#faf9f6] p-5 text-stone-800 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6">We use optional Google Analytics cookies to understand which stories people read and how they find us. You can accept or decline and change your choice at any time.{" "}<Link href="/en/privacy" className="underline underline-offset-4">Privacy &amp; cookies</Link></p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => choose("declined")} className="min-h-11 border border-stone-400 px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4">Decline</button>
          <button type="button" onClick={() => choose("accepted")} className="min-h-11 bg-[#355c49] px-4 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4">Accept analytics</button>
        </div>
      </div>
    </section>}
  </>;
}
