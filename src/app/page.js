"use client"
import { NextSeo } from 'next-seo';
// Import Components 
import Barcodegenerate from "../components/Barcodegenerate";
export default function Home() {
  return (
    <div className="h-full w-[100%]">
      <>
        <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        />
      </>
      <main className="h-full flex flex-col">
        <Barcodegenerate />
      </main>
    </div>
  );
}
