import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-latin.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: {
    default: "TutorVille | Where Learning is a Journey",
    template: "%s | TutorVille",
  },
  description:
    "TutorVille offers expert Maths and English tutoring from Reception to A level. Claim a free introductory lesson with a tutor matched to your child.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${jakarta.variable} bg-white font-sans text-ink`}>
        {children}
      </body>
    </html>
  );
}
