import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beer Mile Training",
  description: "Complete the questionnaire to get your 12-week Beer Mile training plan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="site-logo">
              Beer Mile Training
            </Link>
            <div className="site-links">
              <Link href="/" className="old-link">
                home
              </Link>
              <Link href="/quiz" className="old-link">
                questionnaire
              </Link>
              <Link href="/training" className="old-link">
                my plan
              </Link>
            </div>
          </nav>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer" />
      </body>
    </html>
  );
}
