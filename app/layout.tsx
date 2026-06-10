import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twilight Studios | Calgary Photography & Videography",
  description:
    "Calgary photography, videography, studio rental, portraits, weddings, events, and creative content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
   <body className="min-h-full bg-[#080808] text-white">
  <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_75%_15%,rgba(190,190,190,0.12),transparent_32%),radial-gradient(circle_at_20%_85%,rgba(120,120,120,0.10),transparent_35%),linear-gradient(135deg,#050505_0%,#101010_35%,#1f1f1f_55%,#080808_100%)]" />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}