import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next-App",
  description: "Desc from root",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
