"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiUsers, FiClock } from 'react-icons/fi';

export const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '30+', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '99%', label: 'Tasa de Satisfacción' }
  ];

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
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              ¿Por qué elegir OrviumStudio?
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              Somos un equipo apasionado de desarrolladores web y diseñadores que creemos en el poder 
              de la tecnología web para transformar negocios. Con más de 5 años de experiencia, hemos 
              ayudado a empresas de todos los tamaños a alcanzar sus objetivos digitales.
            </p>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Nuestro enfoque se centra en entender las necesidades únicas de cada cliente y 
              crear sitios web y aplicaciones web personalizadas que no solo cumplen con los requisitos, sino que 
              superan las expectativas.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-light text-indigo-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              <p className="text-indigo-500 mb-4 font-medium">CEO & Full Stack Developer</p>
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
              <p className="text-indigo-500 mb-4 font-medium">UI/UX Designer</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Experta en diseño de interfaces y experiencia de usuario con enfoque en conversión.
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
              <p className="text-indigo-500 mb-4 font-medium">Frontend Developer</p>
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
