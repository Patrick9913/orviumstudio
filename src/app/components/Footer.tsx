import React from 'react';
import { FiTwitter, FiFacebook, FiLinkedin, FiMail } from 'react-icons/fi';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-8 max-w-md font-light leading-relaxed text-base">
              Especialistas en desarrollo web y aplicaciones web. Transformamos ideas en soluciones digitales exitosas.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-medium mb-6 text-gray-200">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm">
                  Aplicaciones Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm">
                  Consultoría Web
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-medium mb-6 text-gray-200">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:orviumstudio@gmail.com" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors font-light text-sm group"
              >
                <FiMail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                orviumstudio@gmail.com
              </a>
              {/* <p className="text-gray-400 font-light text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-400 font-light text-sm">Buenos Aires, Argentina</p> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-light text-sm text-center md:text-left">
              &copy; 2025 OrviumStudio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#inicio" 
                className="text-gray-500 hover:text-gray-300 transition-colors font-light text-sm"
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-500 hover:text-gray-300 transition-colors font-light text-sm"
              >
                Servicios
              </a>
              <a 
                href="#contacto" 
                className="text-gray-500 hover:text-gray-300 transition-colors font-light text-sm"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
