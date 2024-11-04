// components/Header.js
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 rounded-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="block">
            <span className="textgradient">GenerateBarcodes</span> 
          </Link>
          <Link href="/qrcode" className="block">
          <span className="textgradient">GenerateQR</span> 
          </Link>
            {/* Other Pages */}
          <Link 
            className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
            href="/about">About Website
          </Link>
          <Link 
            className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
            href="/contact">Contact Me
          </Link>
          <Link 
            className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
            href="/projects">Projects
          </Link>
          <Link 
            className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
            href="/login">Login
          </Link>
        </nav>

        {/* Hamburger button for small screens */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
        </button>
        <div className="md:hidden w-full flex justify-center gap-[5%] items-center">
          <Link href="/" className="block">
            <span className="textgradient text-sm">Generate Barcodes</span> 
          </Link>
          <Link href="/qrcode" className="block">
            <span className="textgradient text-sm">Generate QR</span> 
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <div className='flex justify-center items-center flex-col gap-2'>
              {/* Other Pages */}
            <Link 
              className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
              href="/about">About Website
            </Link>
            <Link 
              className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
              href="/contact">Contact Me
            </Link>
            <Link 
              className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
              href="/projects">Projects
            </Link>
            <Link 
              className="p-2 text-sm text-zinc-200 hover:text-cyan-400" 
              href="/login">Login
            </Link>
          </div>
        </nav>

      )}
    </header>
  );
}