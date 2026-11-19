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

// Manrope — headings (ExtraBold 800)
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
   METADATA
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://metacap.technology"),

  title: {
    default: "Metacap Technology — We make digital work matter",
    template: "%s | Metacap Technology",
  },

  description:
    "Metacap Technology designs, builds, and maintains digital products, websites, and software platforms for ambitious businesses.",

  openGraph: {
    title: "Metacap Technology — We make digital work matter",
    description:
      "We design, build, and maintain digital products that move businesses forward.",
    url: "https://metacap.technology",
    siteName: "Metacap Technology",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Metacap Technology",
    description:
      "We design, build, and maintain digital products that move businesses forward.",
  },

  robots: {
    index: true,
    follow: true,
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