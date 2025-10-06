"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiDollarSign, FiClock, FiShield, FiZap } from 'react-icons/fi';

export const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const faqs = [
    {
      category: 'Precios y Costos',
      icon: FiDollarSign,
      description: 'Información sobre costos, cotizaciones y planes de pago flexibles.',
      cardColor: 'from-orvium-success/10 to-orvium-success/20',
      items: [
        {
          question: '¿Cómo cotizan los proyectos?',
          answer: 'Cotizamos cada proyecto según su complejidad y funcionalidades específicas. Analizamos tus necesidades, objetivos de negocio y alcance del proyecto para darte un precio justo y transparente. Cada propuesta incluye un desglose detallado de funcionalidades y tiempos de entrega.'
        },
        {
          question: '¿Por qué es más caro que otros desarrolladores?',
          answer: 'Usamos Firebase de Google, Next.js y tecnologías de vanguardia que garantizan velocidad, seguridad y escalabilidad. Un sitio barato con WordPress puede costarte más a largo plazo en mantenimiento, seguridad y pérdida de ventas por lentitud.'
        },
        {
          question: '¿Ofrecen planes de pago?',
          answer: 'Sí, trabajamos con planes de pago flexibles. 50% al inicio del proyecto y 50% al finalizar. Para proyectos grandes, podemos dividir en 3 cuotas. Tu inversión se recupera rápidamente con las ventas que genera tu sitio web.'
        }
      ]
    },
    {
      category: 'Tiempo y Proceso',
      icon: FiClock,
      description: 'Tiempos de desarrollo, metodologías y seguimiento de proyectos.',
      cardColor: 'from-orvium-primary-50 to-orvium-primary-light',
      items: [
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio web?',
          answer: 'Sitios web básicos: 2-3 semanas. E-commerce: 4-6 semanas. Aplicaciones complejas: 8-12 semanas. Trabajamos con metodologías ágiles, así que ves avances semanales y puedes dar feedback en tiempo real.'
        },
        {
          question: '¿Qué incluye el proceso de desarrollo?',
          answer: '1) Consulta inicial gratuita para entender tu negocio. 2) Diseño en Figma (te mostramos antes de programar). 3) Desarrollo con tecnologías de Google. 4) Testing y optimización. 5) Capacitación para que sepas gestionar tu sitio. 6) Soporte post-lanzamiento.'
        },
        {
          question: '¿Puedo ver el progreso del proyecto?',
          answer: 'Absolutamente. Te enviamos actualizaciones semanales con capturas de pantalla y demos en vivo. Usamos herramientas colaborativas para que puedas dar feedback en tiempo real y aprobar cada etapa.'
        }
      ]
    },
    {
      category: 'Tecnología y Seguridad',
      icon: FiShield,
      description: 'Tecnologías utilizadas, seguridad y confiabilidad de nuestros sistemas.',
      cardColor: 'from-orvium-accent-light to-orvium-accent',
      items: [
        {
          question: '¿Por qué usan Firebase en lugar de WordPress?',
          answer: 'Firebase es de Google, funciona en tiempo real, es imposible de hackear y se conecta automáticamente con Google Analytics y Ads. WordPress es lento, vulnerable y requiere mantenimiento constante. Con Firebase, tu sitio es rápido, seguro y escalable desde el día 1.'
        },
        {
          question: '¿Mi sitio web será seguro?',
          answer: 'Sí, usamos la misma infraestructura de seguridad que Google. Firebase tiene encriptación de extremo a extremo, respaldos automáticos y certificados SSL. Tu información y la de tus clientes está 100% protegida.'
        },
        {
          question: '¿Qué pasa si mi sitio se cae?',
          answer: 'Con Google Cloud, tu sitio tiene 99.9% de disponibilidad. Si hay algún problema (muy raro), se resuelve automáticamente en minutos. Además, tienes respaldos automáticos diarios, así que nunca pierdes información.'
        }
      ]
    },
    {
      category: 'SEO y Marketing',
      icon: FiZap,
      description: 'Posicionamiento en Google, analytics y estrategias de marketing digital.',
      cardColor: 'from-orvium-warning/10 to-orvium-warning/20',
      items: [
        {
          question: '¿Mi sitio aparecerá en Google?',
          answer: 'Sí, Next.js está optimizado para SEO desde el código. Tu sitio carga 3x más rápido que la competencia, Google lo premia con mejor posicionamiento. Además, configuramos Google Analytics, Search Console y optimizamos cada página para palabras clave relevantes.'
        },
        {
          question: '¿Cómo puedo medir si mi sitio está funcionando?',
          answer: 'Te configuramos Google Analytics completo para que veas: visitantes únicos, páginas más visitadas, conversiones, tiempo en el sitio, etc. También te enseñamos a interpretar los datos para tomar decisiones que aumenten tus ventas.'
        },
        {
          question: '¿Pueden ayudarme con marketing digital?',
          answer: 'Sí, además del desarrollo, ofrecemos consultoría en marketing digital. Te ayudamos con Google Ads, Facebook Ads, email marketing y estrategias para convertir más visitantes en clientes.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="group bg-white border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl cursor-pointer rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Área superior con gradiente */}
              <div className={`h-48 bg-gradient-to-br ${category.cardColor} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <category.icon className="w-10 h-10 text-gray-600" />
                </div>
              </div>

              <div className="p-8">
                {/* Título y descripción */}
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {category.category}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Preguntas de la categoría */}
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    const isOpen = openItem === globalIndex;
                    
                    return (
                      <motion.div
                        key={itemIndex}
                        className="border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-medium text-gray-900 pr-4 text-sm">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <FiChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          ) : (
                            <FiChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        <motion.div
                          className="overflow-hidden"
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-4 pb-3">
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">
                ¿Tienes más preguntas?
              </h3>
            </div>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto font-light">
              Agenda una consulta gratuita de 30 minutos donde resolvemos todas tus dudas y te mostramos exactamente cómo podemos impulsar tu negocio.
            </p>
            <motion.a 
              href="#contacto" 
              className="inline-block bg-white text-emerald-600 px-8 py-3 text-base font-semibold hover:bg-gray-50 transition-colors rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta Gratuita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
