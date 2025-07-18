import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
  variable: "--font-source-sans-pro",
});

export const metadata: Metadata = {
  title: "Serge DeNimes | Men's Silver Jewellery | Silver Rings & Necklaces",
  description: "Serge DeNimes Home Page",
  icons: {
    icon: "/snapshots/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/snapshots/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${sourceSansPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
