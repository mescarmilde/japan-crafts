import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy & Cookies | Japan Crafts", description: "How Japan Crafts uses optional analytics cookies." };
export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
    <h1 className="text-4xl font-semibold">Privacy &amp; Cookies</h1>
    <div className="mt-8 space-y-6 leading-8 text-stone-700">
      <p>Japan Crafts uses Google Analytics 4 to understand visits, traffic sources, pages read, scrolling, and clicks on external links. This helps us improve our articles and navigation.</p>
      <p>Analytics is optional. Google Analytics loads only after you select “Accept analytics.” If you decline, we do not load Google Analytics. You can change your choice through “Cookie settings” in the footer. We store your preference in your browser so that we can remember it.</p>
      <p>After you accept, Google Analytics uses cookies and collects information such as the pages you visit, referring websites, browser and device information, and interactions with our content. We do not enable advertising personalization or Google signals, and we do not intentionally send names, email addresses, or other directly identifying information to Analytics.</p>
      <p>Google processes analytics data on its infrastructure, which may be outside your country. Read <a className="underline underline-offset-4" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses information from sites that use its services</a> and <a className="underline underline-offset-4" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a>.</p>
      <p>Declining analytics does not prevent the hosting service from processing the technical information needed to deliver and secure this website. Blocking cookies or using privacy tools may also limit analytics.</p>
    </div>
  </main>;
}
