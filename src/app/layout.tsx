import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}