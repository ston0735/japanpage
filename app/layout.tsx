import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name}｜${SITE.tagline}`,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name}｜${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* LY Corporation Global snippet */}
        <Script
          src="https://tag.flvcdn.net/lytag.js"
          strategy="afterInteractive"
          async
        />
        <Script id="ly-tag-init" strategy="afterInteractive">
          {`
            window.lyDataLayer = window.lyDataLayer || [];
            function lytag() {
                lyDataLayer.push(Array.from(arguments));
            }
            lytag({
                type: 'init',
                tagId: 'e112fbca-6451-4dff-a992-e5ef1388c8cd',
                config: {
                    useCookie: true,
                    useLocalStorage: true
                }
            });
            lytag({
                type: 'event',
                eventType: 'page_view',
                tagId: 'e112fbca-6451-4dff-a992-e5ef1388c8cd'
            });
          `}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  );
}
