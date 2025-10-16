"use client"
import localFont from "next/font/local";
import "./globals.css";
// Importing Components
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

// export const metadata = {
//   title: "Generate Barcodes Online Fast, Free, and Easy",
//   description: "Generate Barcodes effortlessly with our powerful tool. Create custom barcodes for products, inventory, shipping, and more in seconds.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header>
          <Header />
        </header> */}
        {children}
      <footer className="flex items-center justify-center mt-[30rem]">
        <Footer />
      </footer>
      </body>
    </html>
  );
}
