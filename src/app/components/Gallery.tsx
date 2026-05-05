"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper arrays for images (Web Design, Graphic Design, Digital UI)
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", // 0: Web Layout / Analytics
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80", // 1: UI Design Mockups en pantalla (Reemplazo Netflix)
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", // 2: Web App Dashboard en laptop
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80", // 3: Minimalist web layout on iMac (Keep)
    "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&q=80", // 4: Phone on desk (Keep)
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"  // 5: Wireframes (Keep)
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6">
            Galería
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Nuestra filosofía visual aplicada. Una composición que refleja
            nuestro enfoque de diseño estructurado, limpio y atemporal.
          </p>
        </div>

        {/* Collage Container */}
        {/* El aspect-ratio asegura que las posiciones absolutas se mantengan proporcionales en cualquier pantalla */}
        <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/9] mx-auto bg-neutral-50/30">

          {/* 1. Top Orange Block */}
          <div
            className="absolute z-10 transition-transform duration-700 hover:z-50"
            style={{ left: '30%', top: '10%', width: '35%', height: '25%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#b87352] group overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(images[0])}
            >
              <img
                src={images[0]}
                alt="Diseño de Layout Web Colorido"
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 2. Left Dark Gray Block */}
          <div
            className="absolute z-20 transition-transform duration-700 hover:z-50"
            style={{ left: '15%', top: '25%', width: '20%', height: '40%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#7a7a7a] group overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(images[1])}
            >
              <img
                src={images[1]}
                alt="Interfaz de Usuario Vibrante"
                loading="lazy"
                width="600"
                height="800"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 3. Center Yellow Block */}
          <div
            className="absolute z-[15] transition-transform duration-700 hover:z-50"
            style={{ left: '50%', top: '32%', width: '30%', height: '38%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#f0e6b4] group overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(images[2])}
            >
              <img
                src={images[2]}
                alt="Diseño Gráfico Digital"
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 4. Bottom Left Light Gray Block */}
          <div
            className="absolute z-30 transition-transform duration-700 hover:z-50"
            style={{ left: '30%', top: '45%', width: '25%', height: '40%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#c2c2c2] group overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setSelectedImage(images[3])}
            >
              <img
                src={images[3]}
                alt="Diseño Web Minimalista"
                loading="lazy"
                width="600"
                height="600"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 5. Right Dark Gray Block */}
          <div
            className="absolute z-[25] transition-transform duration-700 hover:z-50"
            style={{ left: '70%', top: '20%', width: '20%', height: '30%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#7a7a7a] group overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(images[4])}
            >
              <img
                src={images[4]}
                alt="Tipografía y Elementos UI"
                loading="lazy"
                width="400"
                height="600"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 6. Bottom Right Light Gray Block */}
          <div
            className="absolute z-[35] transition-transform duration-700 hover:z-50"
            style={{ left: '65%', top: '60%', width: '20%', height: '25%' }}
          >
            <div 
              className="w-full h-full border-[6px] md:border-[8px] border-white bg-[#c2c2c2] group overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(images[5])}
            >
              <img
                src={images[5]}
                alt="Branding e Identidad Web"
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Visor de imagen de galería ampliada"
            >
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-[90vh] object-contain shadow-2xl border-4 border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 -mt-12 md:-mt-0 md:-mr-12 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Cerrar"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
