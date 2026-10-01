import { pageMetadata, siteUrl, siteTitle, siteDescription } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: { google: "LSb-BOo07pIAe8yvJRjPZ790mPcypj3pI4Qs9jbmTCM" },
  ...pageMetadata({ title: siteTitle, description: siteDescription, path: "/en" }),
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
