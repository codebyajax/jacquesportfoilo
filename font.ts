import localFont from "next/font/local";

export const instagramSans = localFont({
  src: [
    {
      path: "public/assets/font/InstagramSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "public/assets/font/InstagramSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-instagram",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  adjustFontFallback: "Arial",
  preload: true
});

export const FONT_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-";