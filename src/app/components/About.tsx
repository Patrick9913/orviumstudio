"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiUsers, FiClock, FiAward } from 'react-icons/fi';
import { Logo } from './Logo';

export const About: React.FC = () => {
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
    <section ref={sectionRef} id="nosotros" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <Logo size={86} className="text-gray-800" />
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-700">
                  <FiAward className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-light text-gray-800">
                  ¿Por qué elegirnos?
                </h2>
              </div>
            </div>
            <p className="text-base text-gray-600 mb-5 font-light leading-relaxed">
              En <strong className="font-medium text-gray-800">Orvium Studio</strong> contamos con un equipo de{' '}
              <strong className="font-medium text-gray-800">profesionales en desarrollo web</strong> y{' '}
              <strong className="font-medium text-gray-800">diseño digital</strong> comprometidos con la excelencia. Nuestra experiencia combinada nos permite ofrecer{' '}
              <strong className="font-medium text-gray-800">soluciones tecnológicas</strong> que impulsan la transformación digital de empresas y organizaciones, 
              garantizando calidad, eficiencia y resultados sostenibles.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Nos especializamos en comprender los objetivos estratégicos de cada cliente para diseñar{' '}
              <strong className="font-medium text-gray-800">sitios web</strong> y <strong className="font-medium text-gray-800">aplicaciones web</strong> a medida, orientadas a optimizar procesos y potenciar el crecimiento. 
              Nuestro compromiso es acompañar a las empresas en su desarrollo en toda la{' '}
              <strong className="font-medium text-gray-800">Argentina</strong> y en el mercado global.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5"
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
