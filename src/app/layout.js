import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// Importing the Footer Component
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Generate Barcodes Online Fast, Free, and Easy",
  description: "Generate Barcodes effortlessly with our powerful tool. Create custom barcodes for products, inventory, shipping, and more in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-[100%] h-6 relative z-40">
        <nav className="bg w-full h-10 flex justify-around items-center rounded-md bg-slate-700">
          <div className="threebar flex-col gap-1 hidden">
            <span className="block w-6 h-1 bg-slate-300"></span>
            <span className="block w-6 h-1 bg-slate-300"></span>
            <span className="block w-6 h-1 bg-slate-300"></span>
          </div>
          {/* Generate Barcodes Route */}
          <Link className="removeElement" href="/">
            <span className="textgradient">Generate Barcodes</span> 
          </Link>
          {/* Generate QR Code Route */}
          <Link className="removeElement" href="/qrcode">
            <span className="textgradient">Generate QR</span> 
          </Link>
          {/* Other Pages */}
          <Link 
            className="removeElement p-2 text-zinc-200 hover:text-cyan-400" 
            href="/about">About Website
          </Link>
          <Link 
            className="removeElement p-2 text-zinc-200 hover:text-cyan-400" 
            href="/contact">Contact Me
          </Link>
          <Link 
            className="removeElement p-2 text-zinc-200 hover:text-cyan-400" 
            href="/projects">Projects
          </Link>
          <Link 
            className="removeElement p-2 text-zinc-200 hover:text-cyan-400" 
            href="/login">Login
          </Link>
        </nav>
      </header>
        {children}
        <footer className="flex items-center justify-center my-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
