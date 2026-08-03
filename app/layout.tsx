import type { Metadata } from "next";
import { instagramSans,italicSerif } from "@/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacques Azianou",
  description:
    "Helping brands thrive in the digital world. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Jacques",

  openGraph: {
    title: "Jacques Azianou • Intuitive Designer & Developer",
    description:
      "Helping brands thrive in the digital world. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch.",
    siteName: "Jacques Azianou",
    locale: "en",
    type: "website",
  },

  metadataBase: new URL("https://komiazianou.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${instagramSans.variable} ${italicSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}