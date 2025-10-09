"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiSun, FiSettings } from 'react-icons/fi';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <>
      <style jsx>{`
        video {
          pointer-events: none;
        }
        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
        }
        video::-webkit-media-controls-play-button {
          display: none !important;
        }
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
        video::-webkit-media-controls-panel {
          display: none !important;
        }
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        video::-webkit-media-controls-fullscreen-button {
          display: none !important;
        }
        video::-webkit-media-controls-volume-slider {
          display: none !important;
        }
        video::-webkit-media-controls-mute-button {
          display: none !important;
        }
      `}</style>
      <header id="inicio" className="relative bg-blue-900 text-white pt-16 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/tinta.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
      
      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desarrollamos tu
            <span className="block text-indigo-400 font-normal">Presencia Digital</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creamos webs y apps que venden mas, cargan mas rapido y te hacen destacar frente a tu competencia.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#contacto" 
              className="bg-emerald-600 text-white px-8 py-4 text-lg font-medium hover:bg-emerald-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quiero una propuesta gratis
            </motion.a>
            <motion.a 
              href="#servicios" 
              className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nuestros Servicios
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24" aria-label="Características principales">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.article 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <FiZap className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Desarrollo Web Rápido</h3>
            <p className="text-gray-300 font-light">Sitio 10 veces mas rapidos que wordpress</p>
          </motion.article>
          <motion.article 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <FiSun className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Diseño Web Seguro</h3>
            <p className="text-gray-300 font-light">Tecnologias usadas por Google y Netflix</p>
          </motion.article>
          <motion.article 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <FiSettings className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Ventas</h3>
            <p className="text-gray-300 font-light">Paginas optimizadas para convertir visitas en clientes</p>
          </motion.article>
        </motion.div>
        </section>
      </div>
    </header>
    </>
  );
};
