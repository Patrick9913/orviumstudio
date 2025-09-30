"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiSun, FiSettings } from 'react-icons/fi';

export const Header: React.FC = () => {
  return (
    <header id="inicio" className="relative bg-blue-900 text-white pt-16 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videofondo.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
      
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
            Creamos sitios web y aplicaciones web modernas que impulsan tu negocio hacia el éxito digital
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
              Comenzar Proyecto
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiZap className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Desarrollo Web Rápido</h3>
            <p className="text-gray-300 font-light">Entregamos sitios web en tiempo récord sin comprometer la calidad</p>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiSun className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Diseño Web Innovador</h3>
            <p className="text-gray-300 font-light">Creamos experiencias web únicas que destacan tu marca</p>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiSettings className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-4">Soporte Continuo</h3>
            <p className="text-gray-300 font-light">Mantenemos y actualizamos tu proyecto a largo plazo</p>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </header>
  );
};
