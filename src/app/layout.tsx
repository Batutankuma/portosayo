import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaelBatuta",
  description: "C'est un protofolio de Sael Batuta Nkuma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen bg-black text-white flex-col items-center justify-between p-10 px-24">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
