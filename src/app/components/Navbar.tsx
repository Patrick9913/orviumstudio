'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo size={50} className="text-gray-800" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
            >
              Servicios
            </a>
            <a
              href="#plantillas"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
            >
              Plantillas
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
            >
              FAQ
            </a>
            <a
              href="#nosotros"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors p-2"
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
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium rounded-lg transition-colors"
              >
                Inicio
              </a>
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
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium rounded-lg transition-colors"
              >
                FAQ
              </a>
              <a
                href="#nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium rounded-lg transition-colors"
              >
                Nosotros
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
