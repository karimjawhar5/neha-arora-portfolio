import { Barlow_Semi_Condensed } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

const barlowSemi = Barlow_Semi_Condensed({
  weight: ["100", "200", "300", "400", "500", "700"],
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neha Arora | Portfolio Website",
  description:
    "Neha Arora is a third-year Film and Television student at Sheridan College with a passion for production design and directing. What began as a hobby in video editing evolved into a love for filmmaking—leading her to discover her voice in production design across various student films.",
  keywords: [
    "Neha Arora",
    "Film and Television",
    "Production Design",
    "Directing",
    "Cinematography",
    "Editing",
    "Short Film",
    "Sheridan College",
  ],
  openGraph: {
    title: "Neha Arora | Portfolio Website",
    description:
      "Discover the portfolio of Neha Arora, a Sheridan College Film and Television student passionate about production design, directing, and filmmaking.",
    url: "https://n-arora.com",
    siteName: "Neha Arora Portfolio",
    images: [
      {
        url: "https://n-arora.com/images/og/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Neha Arora Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Arora | Portfolio Website",
    description:
      "Discover the portfolio of Neha Arora, a Sheridan College Film and Television student passionate about production design, directing, and filmmaking.",
    images: ["https://n-arora.com/images/og/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowSemi.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
