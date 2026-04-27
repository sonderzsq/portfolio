import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diana Zhang — Finance @ Georgia State",
  description:
    "Portfolio of Diana Zhang, Finance student at Georgia State University. Crypto, esports, and the bot I'm building at the intersection of finance and code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-black text-zinc-200 font-sans">
        {children}
      </body>
    </html>
  );
}
