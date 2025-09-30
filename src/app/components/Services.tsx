"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiShoppingCart, FiEdit3, FiTrendingUp, FiTool } from 'react-icons/fi';

export const Services: React.FC = () => {
  const services = [
    {
      icon: FiGlobe,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.',
      features: ['Responsive Design', 'SEO Optimizado', 'Velocidad de Carga', 'Seguridad Avanzada']
    },
    {
      icon: FiZap,
      title: 'Aplicaciones Web',
      description: 'Aplicaciones web complejas y sistemas de gestión empresarial personalizados.',
      features: ['SPA & PWA', 'Base de Datos', 'Autenticación', 'Escalabilidad']
    },
    {
      icon: FiShoppingCart,
      title: 'E-commerce',
      description: 'Tiendas online completas con sistemas de pago seguros y gestión de inventario.',
      features: ['Pagos Seguros', 'Gestión Inventario', 'Panel Admin', 'Analytics Avanzado']
    },
    {
      icon: FiEdit3,
      title: 'Diseño UI/UX',
      description: 'Interfaces web intuitivas y atractivas que mejoran la experiencia del usuario.',
      features: ['Prototipado', 'User Research', 'Design System', 'Testing Usuario']
    },
    {
      icon: FiTrendingUp,
      title: 'Consultoría Web',
      description: 'Asesoramiento estratégico para optimizar tu presencia digital y mejorar conversiones.',
      features: ['Auditoría Web', 'Estrategia Digital', 'Optimización SEO', 'Análisis de Datos']
    },
    {
      icon: FiTool,
      title: 'Mantenimiento',
      description: 'Soporte técnico continuo y actualizaciones para mantener tu sitio web funcionando perfectamente.',
      features: ['Soporte 24/7', 'Actualizaciones', 'Monitoreo', 'Backup Automático']
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
            Ofrecemos soluciones digitales completas para impulsar tu negocio hacia el éxito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-gray-200 p-8 hover:border-indigo-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
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
            Solicitar Cotización
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
