import type { Metadata } from "next";
import { Inter, Merriweather, Fira_Code  } from "next/font/google";
import "./globals.css";
import SideDotNav from "@/components/layout/SideDotNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"], 
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: "Robert Salvo | Portfolio — Software Developer",
  description: "Robert Salvo's portfolio: Computer Engineering student specializing in web & mobile development, React, Next.js, Flutter. Open to opportunities. View projects and get in touch.",
  openGraph: {
    title: "Robert Salvo | Portfolio — Software Developer",
    description: "Web & mobile developer. View projects and contact for opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${inter.variable} ${merriweather.variable} ${firaCode.variable} bg-brand-primary antialiased min-h-screen`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SideDotNav />
        {children}
      </body>
    </html>
  );
}
