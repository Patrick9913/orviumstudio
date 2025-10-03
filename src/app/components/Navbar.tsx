'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Servicios
            </a>
            <a href="#plantillas" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Plantillas
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              FAQ
            </a>
            <a href="#nosotros" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-emerald-700 transition-colors">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none focus:text-blue-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#inicio" className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-base font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-base font-medium">
                Servicios
              </a>
              <a href="#plantillas" className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-base font-medium">
                Plantillas
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <a href="#nosotros" className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-base font-medium">
                Nosotros
              </a>
              <a href="#contacto" className="bg-emerald-600 text-white block px-3 py-2 text-base font-medium rounded hover:bg-emerald-700">
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
