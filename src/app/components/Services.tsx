"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiTrendingUp } from 'react-icons/fi';

export const Services: React.FC = () => {
  const services = useMemo(
    () => [
      {
        id: '01',
        icon: FiGlobe,
        title: 'Desarrollo Web',
        description:
          'Desarrollamos sitios web complejos, landings y apps web a medida, pensadas para crecer con tu negocio.',
        features: ['Sitios Web Complejos', 'Landing Pages', 'Apps Web a Medida', 'SEO y Performance'],
      },
      {
        id: '02',
        icon: FiTrendingUp,
        title: 'Consultoría Web',
        description:
          'Te asesoramos para definir prioridades, optimizar tu presencia digital y convertir mejor con una estrategia clara.',
        features: ['Auditoría Web', 'Estrategia Digital', 'Optimización de Conversión', 'Roadmap Técnico'],
      }
    ],
    []
  );

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 md:mb-28 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Soluciones digitales pensadas para hacer crecer tu negocio, con un enfoque claro en la conversión y escalabilidad.
          </p>
        </motion.div>

        <div className="border-t border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group border-b border-gray-200 py-12 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 transition-all duration-500 hover:bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Left: Number & Icon */}
              <div className="lg:w-1/4 flex flex-col justify-between px-4 lg:px-8">
                <span className="text-xs font-medium text-gray-400 mb-8 block font-mono">/ {service.id}</span>
                <div>
                  <service.icon className="w-8 h-8 text-gray-300 group-hover:text-gray-900 transition-colors duration-500 mb-6" />
                  <h3 className="text-3xl font-light text-gray-900 tracking-tight">{service.title}</h3>
                </div>
              </div>
              
              {/* Middle: Description */}
              <div className="lg:w-1/3 flex items-end px-4 lg:px-0">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {/* Right: Features */}
              <div className="lg:w-1/3 flex flex-col justify-end lg:ml-auto px-4 lg:px-8">
                <ul className="space-y-4">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-light">
                      <span className="w-6 h-[1px] bg-gray-200 mr-4 group-hover:bg-gray-900 transition-colors duration-500"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 md:mt-32 flex justify-start lg:justify-end px-4 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-none"
          >
            Empezar Proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
};
