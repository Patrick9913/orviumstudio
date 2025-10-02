"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiUsers, FiClock } from 'react-icons/fi';
import { Logo } from './Logo';

export const About: React.FC = () => {
  const highlights = [
    { 
      icon: '🚀', 
      title: 'Innovación', 
      description: 'Tecnologías de vanguardia y metodologías modernas' 
    },
    { 
      icon: '⚡', 
      title: 'Velocidad', 
      description: 'Desarrollo ágil y entrega rápida de resultados' 
    },
    { 
      icon: '🎯', 
      title: 'Enfoque', 
      description: 'Soluciones personalizadas para cada cliente' 
    },
    { 
      icon: '💡', 
      title: 'Creatividad', 
      description: 'Diseños únicos que destacan tu marca' 
    }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'ROI Garantizado',
      description: 'Cada sitio web está optimizado para generar más ventas y aumentar tus ingresos desde el primer día.'
    },
    {
      icon: FiZap,
      title: 'Tecnología de Google',
      description: 'Firebase, Google Cloud y Next.js para máxima velocidad, seguridad y posicionamiento en Google.'
    },
    {
      icon: FiUsers,
      title: 'Soporte Personalizado',
      description: 'Te acompañamos en cada paso y te enseñamos a gestionar tu sitio web para maximizar resultados.'
    },
    {
      icon: FiClock,
      title: 'Tiempo de Mercado Rápido',
      description: 'Tu competencia no te espera. Entregamos sitios web funcionales en semanas, no meses.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Logo size="lg" className="mb-6" />
              <h2 className="text-4xl font-light text-gray-900">
                ¿Por qué elegirnos?
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              Somos especialistas en <strong>transformar negocios</strong> a través de la tecnología web. 
              No solo creamos sitios web bonitos, creamos <strong>máquinas de ventas digitales</strong> que 
              generan resultados reales para tu empresa. Cada proyecto está diseñado para  
              <strong> aumentar tus conversiones</strong> y <strong>maximizar tu ROI</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Utilizamos <strong>Firebase de Google</strong> para bases de datos en tiempo real, 
              <strong>Next.js</strong> para SEO que te posiciona primero en Google, y 
              <strong>tecnologías de vanguardia</strong> que garantizan que tu sitio web 
              sea rápido, seguro y escalable. Estamos listos para 
              impulsar tu negocio en toda <strong>Argentina</strong>.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Nuestro Equipo
            </h3>
            <p className="text-lg text-gray-600 font-light">
              Profesionales apasionados por la tecnología y la innovación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                PD
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Patrick Developer</h4>
              <p className="text-indigo-500 mb-4 font-medium">Full Stack Developer</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Especialista en crear sitios web que convierten visitantes en clientes. Más de 8 años optimizando conversiones.
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                TZ
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Tomas Zalazar</h4>
              <p className="text-indigo-500 mb-4 font-medium">Full Stack Developer</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Experto en UX/UI que aumenta las ventas. Diseña interfaces que fidelizan clientes y maximizan conversiones.
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-medium">
                GM
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Gonzalo Miguel</h4>
              <p className="text-indigo-500 mb-4 font-medium">Full Stack Developer</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Desarrollador especializado en sitios web que generan leads y ventas. Experto en tecnologías de Google.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
