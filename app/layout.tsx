import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/ThemeProviders";

// const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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

      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
