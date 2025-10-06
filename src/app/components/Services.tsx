"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiShoppingCart, FiEdit3, FiTrendingUp, FiTool } from 'react-icons/fi';

export const Services: React.FC = () => {
  const services = [
    {
      icon: FiGlobe,
      title: 'Desarrollo Web',
      description: 'Sitios modernos, rápidos y escalables.',
      features: ['Responsive Design', 'SEO Optimizado', 'Velocidad de Carga', 'Seguridad Avanzada'],
      cardColor: 'from-orvium-primary-50 to-orvium-primary-light'
    },
    {
      icon: FiZap,
      title: 'Aplicaciones Web',
      description: 'Aplicaciones web complejas y sistemas de gestión empresarial personalizados.',
      features: ['SPA & PWA', 'Base de Datos', 'Autenticación', 'Escalabilidad'],
      cardColor: 'from-orvium-accent-light to-orvium-accent'
    },
    {
      icon: FiShoppingCart,
      title: 'E-commerce',
      description: 'Tu tienda online lista para vender 24/7.',
      features: ['Pagos Seguros', 'Gestión Inventario', 'Panel Admin', 'Analytics Avanzado'],
      cardColor: 'from-orvium-success/10 to-orvium-success/20'
    },
    {
      icon: FiEdit3,
      title: 'Diseño UI/UX',
      description: 'Tu marca con identidad, tu sitio con impacto.',
      features: ['Prototipado', 'User Research', 'Design System', 'Testing Usuario'],
      cardColor: 'from-orvium-warning/10 to-orvium-warning/20'
    },
    {
      icon: FiTrendingUp,
      title: 'Consultoría Web',
      description: 'Asesoramiento estratégico para optimizar tu presencia digital y mejorar conversiones.',
      features: ['Auditoría Web', 'Estrategia Digital', 'Optimización SEO', 'Análisis de Datos'],
      cardColor: 'from-orvium-gray-50 to-orvium-gray-100'
    },
    {
      icon: FiTool,
      title: 'Mantenimiento',
      description: 'Soporte técnico continuo y actualizaciones para mantener tu sitio web funcionando perfectamente.',
      features: ['Soporte 24/7', 'Actualizaciones', 'Monitoreo', 'Backup Automático'],
      cardColor: 'from-orvium-primary-50 to-orvium-primary-light'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Soluciones digitales pensadas para hacer crecer tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group bg-white border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl cursor-pointer rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Área superior con gradiente */}
              <div className={`h-48 bg-gradient-to-br ${service.cardColor} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-10 h-10 text-gray-600" />
                </div>
              </div>

              <div className="p-8">
                {/* Título y descripción */}
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Características simplificadas */}
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contacto" 
            className="bg-emerald-600 text-white px-8 py-4 text-lg font-medium hover:bg-emerald-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Empeza tu proyecto gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
