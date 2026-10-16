import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeerMileApp — Beer Mile Training",
  description: "Train for the Beer Mile with custom profiles, lap tracking, and training plans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-black text-xl tracking-tight">
              🍺🏃 BeerMileApp
            </Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/profile" className="hover:underline">Profile</Link>
              <Link href="/training" className="hover:underline">Training</Link>
              <Link href="/log" className="hover:underline">Log Run</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-8 text-center text-xs text-neutral-500">
          Drink responsibly. 21+ only. Train safe.
        </footer>
      </body>
    </html>
  );
}
