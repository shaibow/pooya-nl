import type { Metadata } from "next";
import { Press_Start_2P, VT323, Space_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Pooya Khoshbakht — Head of Product",
  description:
    "Innovative product leader with a proven track record of identifying performance issues and crafting solutions that achieve product–market fit and sustainable growth.",
  openGraph: {
    title: "Pooya Khoshbakht — Head of Product",
    description: "Founder of Pishee. Head of Product at Scitodate. Builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable} ${spaceMono.variable}`}>
      <body className="font-space-mono bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
