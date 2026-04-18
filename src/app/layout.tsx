import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

const cairo = Cairo({
  variable: "--font-family-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-family-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pizza-pan-prototype.netlify.app"),
  title: "Pizza Pan | بيتزا بان — أحلى بيتزا في كفر الشيخ",
  description:
    "Pizza Pan — Fast food restaurant in Kafr El Sheikh, Egypt. Pizza, Crepe, Pies, Bombs and more. Order now: 15616. بيتزا بان — كفر الشيخ. بيتزا، كريب، فطير، قنابل وأكتر. اطلب دلوقتي: 15616",
  keywords: [
    "Pizza Pan",
    "بيتزا بان",
    "كفر الشيخ",
    "بيتزا",
    "كريب",
    "فطير",
    "دليفري",
    "pizza",
    "crepe",
    "Kafr El Sheikh",
    "fast food",
    "restaurant",
  ],
  authors: [{ name: "Pizza Pan" }],
  creator: "Pizza Pan",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-EG": "/ar",
    },
  },
  openGraph: {
    title: "Pizza Pan | بيتزا بان",
    description:
      "عِشره بقالها سنين ومكملين — أحلى بيتزا في كفر الشيخ. اطلب دلوقتي 15616",
    url: "https://pizza-pan-prototype.netlify.app",
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    siteName: "Pizza Pan",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pizza Pan — Food Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Pan | بيتزا بان",
    description: "عِشره بقالها سنين ومكملين — أحلى بيتزا في كفر الشيخ. اطلب دلوقتي 15616",
    images: ["/images/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-family-cairo)]" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
