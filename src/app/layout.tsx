import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibda3 Al-Khalij Student Services",
  description: "بناء مواقع وخدمات طلابية دولية لدراسة الأردن",
  metadataBase: new URL(process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning className={`${cairo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
