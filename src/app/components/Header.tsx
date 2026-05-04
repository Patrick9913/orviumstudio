"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
      <header id="inicio" className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex flex-col justify-center">
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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light mb-8 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Desarrollamos tu
              <span className="block mt-2 text-white font-normal">Presencia Digital</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl text-gray-300 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Creamos webs y apps que venden más, cargan más rápido y te hacen destacar frente a tu competencia.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none"
              >
                Quiero una propuesta gratis
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-white/10 transition-colors rounded-none"
              >
                Nuestros Servicios
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </>
  );
};
