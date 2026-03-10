import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ALumiEye — AI-Powered Trading Intelligence",
  description:
    "Detect alpha. Track smart money. Trade with confidence. ALumiEye is an AI-powered trading intelligence platform that helps traders find opportunities before the market moves.",
  keywords: [
    "trading",
    "AI",
    "fintech",
    "market intelligence",
    "smart money",
    "alpha",
    "trading signals",
  ],
  authors: [{ name: "ALumiEye" }],
  openGraph: {
    title: "ALumiEye — AI-Powered Trading Intelligence",
    description:
      "Detect alpha. Track smart money. Trade with confidence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALumiEye — AI-Powered Trading Intelligence",
    description: "Detect alpha. Track smart money. Trade with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
