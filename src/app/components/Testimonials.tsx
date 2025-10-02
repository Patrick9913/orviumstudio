"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface Testimonial {
  clientName: string;
  clientType: string;
  quote: string;
  website?: string;
}

export const Testimonials: React.FC = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedTestimonials(newExpanded);
  };

  const testimonials: Testimonial[] = [
    {
      clientName: 'Municipalidad de Calingasta',
      clientType: 'Gobierno de San Juan',
      quote: 'El equipo de Orvium Studio nos acompañó en la modernización de nuestro portal institucional, brindando soluciones rápidas, seguras y fáciles de usar para los vecinos. Su profesionalismo y compromiso fueron clave para lograr un sitio accesible y funcional.',
      website: 'https://www.calingasta.gob.ar',
    },
    {
      clientName: 'Municipalidad de Calingasta',
      clientType: 'Gobierno de San Juan',
      quote: 'El equipo de Orvium Studio nos acompañó en la modernización de nuestro portal institucional, brindando soluciones rápidas, seguras y fáciles de usar para los vecinos. Su profesionalismo y compromiso fueron clave para lograr un sitio accesible y funcional.',
      website: 'https://www.calingasta.gob.ar',
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header simple */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Clientes que trabajan y confían en nosotros
          </h2>
          <p className="text-gray-600 font-light">
            Instituciones y empresas que eligieron soluciones profesionales
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote */}
              <div className="mb-4">
                <p className={`text-gray-700 font-light leading-relaxed ${
                  !expandedTestimonials.has(index) ? 'line-clamp-3' : ''
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                {testimonial.quote.length > 150 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 transition-colors"
                  >
                    {expandedTestimonials.has(index) ? 'Leer menos' : 'Leer más'}
                  </button>
                )}
              </div>

              {/* Info mínima */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.clientName}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {testimonial.clientType}
                  </p>
                </div>

                {testimonial.website && (
                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={`Visitar sitio de ${testimonial.clientName}`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
