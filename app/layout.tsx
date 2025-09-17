import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-proivider";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Packright Solutions",
  description:
    "All the right packaging solutions for your business at one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmMono.variable} *:scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-pink-400 bg-[#EFEBE0] antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
