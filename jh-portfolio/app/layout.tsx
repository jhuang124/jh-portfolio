import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Huang — Product Manager",
  description: "John Huang, PM with a track record in monetization, lifecycle, and billing infrastructure at The Atlantic.",
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
