"use client"
import Header from "@/components/Header";
// Import Components 
import Barcodegenerate from "../components/Barcodegenerate";

export default function Home() {
  return (
    <div className="h-full w-[100%]">
      <header>
        <Header />
      </header>
      <main className="h-full flex flex-col">
        <Barcodegenerate />
      </main>
    </div>
  );
}
