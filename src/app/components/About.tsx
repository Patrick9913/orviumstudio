"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiUsers, FiClock } from 'react-icons/fi';
import { Logo } from './Logo';

export const About: React.FC = () => {

  const values = [
    {
      icon: FiTarget,
      title: 'Enfoque en Resultados',
      description: 'Cada proyecto está diseñado para generar valor real y medible para tu negocio.'
    },
    {
      icon: FiZap,
      title: 'Innovación Constante',
      description: 'Utilizamos las últimas tecnologías y metodologías para crear soluciones de vanguardia.'
    },
    {
      icon: FiUsers,
      title: 'Colaboración Transparente',
      description: 'Mantenemos comunicación constante y te involucramos en cada etapa del desarrollo.'
    },
    {
      icon: FiClock,
      title: 'Entrega Rápida',
      description: 'Metodologías ágiles que nos permiten entregar resultados de calidad en tiempo récord.'
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
              En <strong>Orvium Studio</strong> contamos con un equipo de <strong>profesionales en desarrollo web</strong> y 
              <strong> diseño digital</strong> comprometidos con la excelencia. Nuestra experiencia combinada nos permite ofrecer 
              <strong> soluciones tecnológicas</strong> que impulsan la transformación digital de empresas y organizaciones, 
              garantizando calidad, eficiencia y resultados sostenibles.
            </p>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Nos especializamos en comprender los objetivos estratégicos de cada cliente para diseñar 
              <strong> sitios web</strong> y <strong>aplicaciones web</strong> a medida, orientadas a optimizar procesos y potenciar el crecimiento. 
              Nuestro compromiso es acompañar a las empresas en su desarrollo en toda la
              <strong> Argentina</strong> y en el mercado global.
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
                Especialista en React, Node.js y arquitecturas escalables con más de 8 años de experiencia.
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
                Experto en diseño de interfaces y experiencia de usuario con enfoque en conversión.
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
                Desarrollador especializado en interfaces de usuario y experiencias web modernas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
