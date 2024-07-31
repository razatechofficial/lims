import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/ThemeProviders";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/public/assets/images/cloud1.png"
          type="image/png"
          sizes="any"
        />
      </head>

      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
