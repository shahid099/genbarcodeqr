"use client"
import Image from "next/image";
import Link from "next/link";
// Import Components 
import Barcodegenerate from "../../components/Barcodegenerate";
export default function Home() {
  return (
    <div className="min-h-[50em] w-[100%]">
      <header className="w-full h-6">
        <nav className="w-full h-10 flex justify-around items-center rounded-md bg-slate-700">
          <div className="flex-col gap-1 hidden">
            <span className="block w-6 h-1 bg-slate-300"></span>
            <span className="block w-6 h-1 bg-slate-300"></span>
            <span className="block w-6 h-1 bg-slate-300"></span>
          </div>
          {/* Generate Barcodes Route */}
          <Link href="/">
            <span className="textgradient">Generate Barcodes</span> 
          </Link>
          {/* Generate QR Code Route */}
          <Link href="/">
            <span className="textgradient">Generate QR</span> 
          </Link>
          {/* Other Pages */}
          <Link className="p-2 text-zinc-200 hover:text-cyan-400" href="/about">About Website</Link>
          <Link className="p-2 text-zinc-200 hover:text-cyan-400" href="/contact">Contact Me</Link>
          <Link className="p-2 text-zinc-200 hover:text-cyan-400" href="/projects">Projects</Link>
          <Link className="p-2 text-zinc-200 hover:text-cyan-400" href="/login">Login</Link>
        </nav>
      </header>
      <main className="h-full flex flex-col">
        <Barcodegenerate />
      </main>
      <footer className="flex items-center justify-center my-10">
        &copy; Barcodeqrcode All rights Reserved.
      </footer>
    </div>
  );
}
