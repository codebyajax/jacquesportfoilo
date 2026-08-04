import type { Metadata } from "next";
import { instagramSans, italicSerif } from "@/font";
import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://komiazianou.vercel.app/#person",
      name: "Jacques Azianou",
      givenName: "Jacques",
      familyName: "Azianou",
      url: "https://komiazianou.vercel.app/",
      image: "https://komiazianou.vercel.app/aurelius.png",
      email: "mailto:jackthe1first@gmail.com",
      jobTitle: "Fullstack Developer & UI/UX Designer",
      description:
        "Fullstack Developer & UI/UX Designer building fast, accessible, and modern web applications with React, Next.js, JavaScript, Node.js, and contemporary design systems.",
      sameAs: [
        "https://github.com/codebyajax",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "Node.js",
        "Express",
        "Django",
        "MongoDB",
        "MySQL",
        "Tailwind CSS",
        "GSAP",
        "Three.js",
        "Figma",
        "UI Design",
        "UX Design",
        "Web Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://komiazianou.vercel.app/#website",
      url: "https://komiazianou.vercel.app/",
      name: "Jacques Azianou",
      image: "https://komiazianou.vercel.app/aurelius.png",
      inLanguage: "en",
      description:
        "Portfolio of Jacques Azianou, a Fullstack Developer and UI/UX Designer specializing in modern web applications, UI engineering, and interactive experiences.",
      keywords: [
        "Jacques Azianou",
        "Portfolio",
        "Fullstack Developer",
        "Frontend Developer",
        "UI Designer",
        "React",
        "Next.js",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
      ],
      publisher: {
        "@id": "https://komiazianou.vercel.app/#person",
      },
    },

    {
      "@type": "WebPage",
      "@id": "https://komiazianou.vercel.app/#webpage",
      url: "https://komiazianou.vercel.app/",
      name: "Jacques Azianou | Fullstack Developer & UI/UX Designer",
      description:
        "Portfolio of Jacques Azianou showcasing projects, skills, and experience in fullstack development and UI/UX design.",
      isPartOf: {
        "@id": "https://komiazianou.vercel.app/#website",
      },
      about: {
        "@id": "https://komiazianou.vercel.app/#person",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://komiazianou.vercel.app/aurelius.png",
      },
      inLanguage: "en",
      breadcrumb: {
        "@id": "https://komiazianou.vercel.app/#breadcrumb",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://komiazianou.vercel.app/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://komiazianou.vercel.app/",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://komiazianou.vercel.app"),
  title: {
    default: "Jacques Azianou",
    template: "%s | Jacques Azianou",
  },
  description:
    "Fullstack Developer & UI/UX Designer crafting fast, accessible, and visually engaging digital experiences with React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Jacques Azianou",
    "Frontend Developer",
    "Fullstack Developer",
    "UI Designer",
    "UX Designer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Portfolio",
    "Nigeria",
    "Lagos",
  ],
  authors: [
    {
      name: "Jacques Azianou",
      url: "https://komiazianou.vercel.app",
    },
  ],
  creator: "Jacques Azianou",
  publisher: "Jacques Azianou",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jacques Azianou • Fullstack Developer & UI/UX Designer",
    description:
      "Crafting fast, accessible, and visually engaging digital experiences with React, Next.js, TypeScript, and modern web technologies.",
    url: "https://komiazianou.vercel.app",
    siteName: "Jacques Azianou",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/aurelius.png",
        width: 1200,
        height: 630,
        alt: "Jacques Azianou Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacques Azianou • Fullstack Developer",
    description: "Building fast, modern and interactive digital experiences.",
    creator: "@codebyajax",
    images: ["/aurelius.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instagramSans.variable} ${italicSerif.variable} antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}