import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Metacap Technology — We make digital work matter",
 description: "Metacap Technology builds and maintains digital products for ambitious businesses.",
 metadataBase: new URL("https://metacap.technology"),
 openGraph: { title: "Metacap Technology", description: "We make digital work matter.", type: "website" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}