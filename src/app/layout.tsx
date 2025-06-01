import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import Link from "next/link"; // Import Link
import "./globals.css";

export const metadata: Metadata = {
  title: "sylwebz",
  description: "Sylwebz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Theme>
          <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
            </nav>
          </header>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
