import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  CustomCursor from "./components/CustomCursor.js"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanuja Gurav | Full Stack Developer",
  description: " Portfolio of Tanuja Gurav - Full Stack Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <CustomCursor/>
        {children}
      </body>
    </html>
  );
}

