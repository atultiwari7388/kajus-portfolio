import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Atul Tiwari | Full Stack Web && App Developer",
  description:
    "Welcome to my portfolio showcasing my expertise in web development, featuring projects built with React, Next.js, and other modern technologies.",
  keywords: [
    "web developer",
    "full stack",
    "portfolio",
    "React",
    "Next.js",
    "Firebase",
    "Rest APIS",
    "Flutter",
  ],
  authors: [{ name: "Atul Tiwari" }],
  creator: "Darling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
