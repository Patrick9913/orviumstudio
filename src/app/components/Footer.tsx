import React from 'react';
import { FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo size="lg" className="text-white" />
            </div>
            <p className="text-gray-300 mb-8 max-w-md font-light leading-relaxed">
              Especialistas en desarrollo web y aplicaciones web. Transformamos ideas en soluciones digitales exitosas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-gray-300 hover:text-indigo-400 transition-colors font-light">Desarrollo Web</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-indigo-400 transition-colors font-light">Aplicaciones Web</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-indigo-400 transition-colors font-light">E-commerce</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-indigo-400 transition-colors font-light">Consultoría Web</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contacto</h4>
            <div className="space-y-3 text-gray-300 font-light">
              <p>orviumstudio@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 font-light">
          <p>&copy; 2025 OrviumStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
