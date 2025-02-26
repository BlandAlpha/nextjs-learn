import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const dm_sans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen antialiased', dm_sans.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
