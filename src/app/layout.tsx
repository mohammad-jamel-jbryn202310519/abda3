import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ibda3 Al-Khalij Student Services",
  description: "بناء مواقع وخدمات طلابية دولية لدراسة الأردن",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
