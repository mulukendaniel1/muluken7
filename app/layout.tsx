import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M7 | Full Stack Web Developer",
  description:
    "Portfolio of M7, a full stack web developer building modern websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}