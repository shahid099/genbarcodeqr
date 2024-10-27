"use client"
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
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

// Will Work Later on the Title.
{/* <Head>
<title>Generate Barcodes Online Fast, Free, and Easy</title>
<meta name="description" content="Generate Barcodes effortlessly with our powerful tool. Create custom barcodes for products, inventory, shipping, and more in seconds."/>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head> */}

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
        <Header />
        {children}
        <footer className="flex items-center justify-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
