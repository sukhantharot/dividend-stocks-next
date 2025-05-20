import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thai Stock Dividend",
  description: "View dividend information for Thai stocks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold">
                Thai Stock Dividend
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Summary
                </Link>
                <Link
                  href="/stock"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Stock Details
                </Link>
                <Link
                  href="/soon"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Soon
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
