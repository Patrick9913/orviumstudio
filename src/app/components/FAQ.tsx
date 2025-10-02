"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiDollarSign, FiClock, FiShield, FiZap } from 'react-icons/fi';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Precios y Costos',
      icon: FiDollarSign,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100',
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
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
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
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
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
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
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
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Resolvemos las dudas más comunes sobre nuestros servicios y cómo pueden impulsar tu negocio
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header de la categoría */}
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Preguntas de la categoría */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <FiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        className="overflow-hidden"
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <FiHelpCircle className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold">
                ¿Tienes más preguntas?
              </h3>
            </div>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos donde resolvemos todas tus dudas y te mostramos exactamente cómo podemos impulsar tu negocio.
            </p>
            <motion.a 
              href="#contacto" 
              className="inline-block bg-white text-emerald-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors rounded-lg shadow-lg"
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
