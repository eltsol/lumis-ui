import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/ui/tokens.css";
import { ThemeProvider } from "@ui/design-system/providers";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Elena Tsolakou | Senior UI Engineer",
  description:
    "Senior UI Engineer specializing in accessible, scalable design systems. Explore Lumis UI, a themeable React component system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
