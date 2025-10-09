import type { Metadata } from "next";
import AnimatedCursor from "../animation/AnimatedCursor"
import "./globals.css";

// Import Google Fonts
import { Poppins, Inter } from "next/font/google";

// Poppins for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

// Inter for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans bg-black text-white`}
      >
        {children}
        <AnimatedCursor />
      </body>
    </html>
  );
}
