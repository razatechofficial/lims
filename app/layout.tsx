import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIMS",
  description: "LIMS Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/public/assets/images/cloud1.png"
          type="image/png"
          sizes="any"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
