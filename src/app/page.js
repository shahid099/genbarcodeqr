"use client"
// Import Components 
import Barcodegenerate from "../components/Barcodegenerate";
export default function Home() {
  return (
    <div className="h-full w-[100%]">
      <main className="h-full flex flex-col">
        <Barcodegenerate />
      </main>
    </div>
  );
}
