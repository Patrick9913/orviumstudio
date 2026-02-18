"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';

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
      <header id="inicio" className="relative bg-gray-900 text-white pt-16 overflow-hidden min-h-[90vh] flex flex-col justify-center">
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

        {/* Overlay oscuro suave para legibilidad */}
        <div className="absolute inset-0 bg-gray-900/70 z-10" />

        {/* Contenido */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Desarrollamos tu
              <span className="block mt-2 text-white font-normal">Presencia Digital</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto text-gray-300 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Creamos webs y apps que venden más, cargan más rápido y te hacen destacar frente a tu competencia.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 text-base font-medium hover:bg-gray-100 transition-colors rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Quiero una propuesta gratis
              </motion.a>
              <motion.a
                href="#servicios"
                className="inline-flex items-center justify-center border border-white/80 text-white px-8 py-4 text-base font-medium hover:bg-white/10 transition-colors rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nuestros Servicios
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Features */}
          <section
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-16 md:pb-24"
            aria-label="Características principales"
          >
            <motion.div
              className="grid md:grid-cols-3 gap-6 md:gap-8 text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.article
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-5"
                  aria-hidden="true"
                >
                  <FiZap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                  Desarrollo Web Rápido
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base">
                  Sitios 10 veces más rápidos que WordPress
                </p>
              </motion.article>
              <motion.article
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-5"
                  aria-hidden="true"
                >
                  <FiShield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                  Diseño Web Seguro
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base">
                  Tecnologías usadas por Google y Netflix
                </p>
              </motion.article>
              <motion.article
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-5"
                  aria-hidden="true"
                >
                  <FiTrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                  Ventas
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base">
                  Páginas optimizadas para convertir visitas en clientes
                </p>
              </motion.article>
            </motion.div>
          </section>
        </div>
      </header>
    </>
  );
};
