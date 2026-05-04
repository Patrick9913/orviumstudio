'use client';

import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

const SCROLL_TOP_THRESHOLD = 12;

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < SCROLL_TOP_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = atTop
    ? 'text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors'
    : 'text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors';

  const contactClass = atTop
    ? 'border border-white text-white bg-transparent px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white hover:text-blue-900 transition-colors'
    : 'bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors';

  return (
    <nav
      className={`fixed w-full z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        atTop
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo size={50} className={atTop ? 'text-white' : 'text-gray-800'} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className={navLinkClass}>
              Servicios
            </a>
            <a href="#plantillas" className={navLinkClass}>
              Plantillas
            </a>
            <a href="#contacto" className={contactClass}>
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={
                atTop
                  ? 'text-white hover:text-white/80 focus:outline-none transition-colors p-2'
                  : 'text-gray-600 hover:text-gray-800 focus:outline-none transition-colors p-2'
              }
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white">
              <a
                href="#servicios"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium rounded-lg transition-colors"
              >
                Servicios
              </a>
              <a
                href="#plantillas"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium rounded-lg transition-colors"
              >
                Plantillas
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gray-800 text-white block px-3 py-2.5 text-base font-medium rounded-lg hover:bg-gray-700 transition-colors mt-2"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
