import type { Metadata } from "next";
import { Inter, Merriweather, Fira_Code  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Robert Salvo Portfolio",
  description: "Portfolio website of Robert Salvo created using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${inter.variable} ${merriweather.variable} ${firaCode.variable} bg-brand-primary antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
