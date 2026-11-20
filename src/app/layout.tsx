
import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

/* ================================
   LOCAL FONTS
================================ */

// DM Sans — body text
const dmSans = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--dm-sans",
  display: "swap",
});

// Manrope — headings
const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--manrope",
  display: "swap",
  weight: "200 800",
});

// Playfair Display — italic accent text
const playfair = localFont({
  src: "./fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
  variable: "--playfair-italic",
  display: "swap",
  style: "italic",
  weight: "400 900",
});

// Space Mono — metadata, labels, numbers
const spaceMono = localFont({
  src: "./fonts/SpaceMono-Regular.ttf",
  variable: "--space-mono",
  display: "swap",
  weight: "400",
});

/* ================================
   METADATA / SEO
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://metacap.technology"),

  title: {
    default: "Metacap Technology — We make ideas matter",
    template: "%s | Metacap Technology",
  },

  description:
    "Metacap Technology is an independent digital studio that designs, builds, and maintains digital products, websites, and software platforms for ambitious businesses.",

  keywords: [
    "Metacap Technology",
    "digital studio",
    "software development",
    "web development",
    "website design",
    "digital products",
    "software engineering",
    "business websites",
    "web applications",
    "Abuja Nigeria",
  ],

  authors: [{ name: "Metacap Technology" }],
  creator: "Metacap Technology",
  publisher: "Metacap Technology",

  alternates: {
    canonical: "https://metacap.technology",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Metacap Technology — We make ideas matter",
    description:
      "We design, build, and maintain digital products that move businesses forward.",
    url: "https://metacap.technology",
    siteName: "Metacap Technology",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/brands/metacap-og.png",
        width: 1200,
        height: 630,
        alt: "Metacap Technology — We make ideas matter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Metacap Technology — We make ideas matter",
    description:
      "We design, build, and maintain digital products that move businesses forward.",
    images: ["/images/brands/metacap-og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ================================
   ROOT LAYOUT
================================ */

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${manrope.variable} ${playfair.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
