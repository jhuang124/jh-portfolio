import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Huang — Product Manager",
  description: "Product manager with a track record of building user-centric products at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
