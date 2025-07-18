'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/71906441_9756133.png" 
                alt="Tesasomi Solution Logo" 
                width={70} 
                height={60} 
                className="mr-4"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg">
                Tesasomi Solution
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#a83232] transition-colors">
              Početna
            </Link>
            <Link href="/o-nama" className="text-gray-700 hover:text-[#a83232] transition-colors">
              O nama
            </Link>
            <Link href="/meni" className="text-gray-700 hover:text-[#a83232] transition-colors">
              Meni
            </Link>
            <Link href="/zdravi-obroci" className="text-gray-700 hover:text-[#a83232] transition-colors">
              Zdravi obroci
            </Link>
            <Link href="/ketering-za-firme" className="text-gray-700 hover:text-[#a83232] transition-colors">
              Ketering za firme
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-[#a83232] transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:0603044421" 
              className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>060 304 44 21</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Početna
              </Link>
              <Link href="/o-nama" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                O nama
              </Link>
              <Link href="/meni" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Meni
              </Link>
              <Link href="/zdravi-obroci" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Zdravi obroci
              </Link>
              <Link href="/ketering-za-firme" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Ketering za firme
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-[#a83232] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t">
              <a 
                href="tel:0603044421" 
                className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors flex items-center space-x-2 w-fit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>060 304 44 21</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 