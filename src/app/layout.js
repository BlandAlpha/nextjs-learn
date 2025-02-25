import { Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const mulish = Mulish({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen font-sans antialiased', mulish.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
