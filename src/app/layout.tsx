import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niedziela zwykła czy pojebana?",
  description: "Niedziela handlowa API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
