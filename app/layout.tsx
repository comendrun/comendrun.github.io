import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COMENDRUN",
  description: "Welcome to my Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}
