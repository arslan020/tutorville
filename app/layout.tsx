import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
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
