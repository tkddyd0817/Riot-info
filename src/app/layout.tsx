"use client";
import Providers from "@/components/provider/RQProvider";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logoimg from "@/components/logoimg";
import ThemeToggle from "@/components/src/components/ThemeToggle";
import AudioPlayer from "@/app/audio/AudioPlayer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "LOL-Info ssy",
//   description: "LOL-Info ssy App",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <header className="  border border-gray flex items-center bg-[#020b17] fiexd top-50 bottom-50 w-full z-50 shadow hover:shadow-ig">
            <div>
              <nav className="container  mx-auto flex justify-around ">
                <div>
                  <nav className="container  mx-auto flex items-center justify-around">
                    <AudioPlayer />
                    <Link
                      className="p-20 text-red-500 text-2xl font-bold"
                      href="/"
                    >
                      Home
                    </Link>

                    <Link
                      className="p-20 text-red-500 text-2xl font-bold"
                      href="/champions"
                    >
                      Champions
                    </Link>

                    <div className="flex items-center">
                      <Logoimg />
                    </div>

                    <Link
                      className="p-20 text-red-500 text-2xl font-bold"
                      href="/items"
                    >
                      Items
                    </Link>

                    <Link
                      className="p-20 text-red-500 text-2xl font-bold"
                      href="/rotation"
                    >
                      Rotation
                    </Link>

                    <div className="flex items-center">
                      <ThemeToggle />
                    </div>
                  </nav>
                </div>
              </nav>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
