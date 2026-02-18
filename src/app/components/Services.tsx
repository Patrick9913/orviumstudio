"use client";

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiShoppingCart, FiEdit3, FiTrendingUp, FiTool, FiLayers } from 'react-icons/fi';

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const services = useMemo(
    () => [
      {
        icon: FiGlobe,
        title: 'Desarrollo Web',
        description: 'Sitios modernos, rápidos y escalables.',
        features: ['Responsive Design', 'SEO Optimizado', 'Velocidad de Carga', 'Seguridad Avanzada'],
        cardColor: 'from-slate-50 to-slate-100'
      },
      {
        icon: FiZap,
        title: 'Aplicaciones Web',
        description: 'Aplicaciones web complejas y sistemas de gestión empresarial personalizados.',
        features: ['SPA & PWA', 'Base de Datos', 'Autenticación', 'Escalabilidad'],
        cardColor: 'from-stone-50 to-stone-100'
      },
      {
        icon: FiShoppingCart,
        title: 'E-commerce',
        description: 'Tu tienda online lista para vender 24/7.',
        features: ['Pagos Seguros', 'Gestión Inventario', 'Panel Admin', 'Analytics Avanzado'],
        cardColor: 'from-neutral-50 to-neutral-100'
      },
      {
        icon: FiEdit3,
        title: 'Diseño UI/UX',
        description: 'Tu marca con identidad, tu sitio con impacto.',
        features: ['Prototipado', 'User Research', 'Design System', 'Testing Usuario'],
        cardColor: 'from-zinc-50 to-zinc-100'
      },
      {
        icon: FiTrendingUp,
        title: 'Consultoría Web',
        description: 'Asesoramiento estratégico para optimizar tu presencia digital y mejorar conversiones.',
        features: ['Auditoría Web', 'Estrategia Digital', 'Optimización SEO', 'Análisis de Datos'],
        cardColor: 'from-slate-50 to-slate-100'
      },
      {
        icon: FiTool,
        title: 'Mantenimiento',
        description: 'Soporte técnico continuo y actualizaciones para mantener tu sitio web funcionando perfectamente.',
        features: ['Soporte 24/7', 'Actualizaciones', 'Monitoreo', 'Backup Automático'],
        cardColor: 'from-stone-50 to-stone-100'
      }
    ],
    []
  );

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-gray-700 mb-6">
            <FiLayers className="w-7 h-7" />
          </div>
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Soluciones digitales pensadas para hacer crecer tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Área superior con gradiente suave */}
              <div
                className={`h-36 bg-gradient-to-br ${service.cardColor} flex items-center justify-center border-b border-gray-100`}
              >
                <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                  <service.icon className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 text-base font-medium hover:bg-gray-700 transition-colors rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Empezá tu proyecto gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
