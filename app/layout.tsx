import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "DevHugon blog",
  description: "DevHugon blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`antialiased max-w-screen-md mx-auto py-0 px-4 md:py-16`}>
        {children}
      </body>
    </html>
  );
}
