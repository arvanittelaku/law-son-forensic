import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { HOME_TITLE } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "x-default": SITE_URL },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen min-h-[100dvh] flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push(['consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500}]);`,
          }}
        />
        <CookieConsentProvider>
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <CookiePreferencesModal />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
