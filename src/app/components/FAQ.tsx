"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiDollarSign, FiClock, FiShield, FiZap, FiHelpCircle } from 'react-icons/fi';

export const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
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

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      category: 'Precios y Costos',
      items: [
        {
          question: '¿Cómo cotizan los proyectos?',
          answer:
            'Cotizamos cada proyecto según su complejidad y funcionalidades. Analizamos tus necesidades y alcance para darte un precio justo y transparente, con desglose de funcionalidades y tiempos.'
        },
        {
          question: '¿Por qué es más caro que otros desarrolladores?',
          answer:
            'Usamos Firebase, Next.js y tecnologías de vanguardia que garantizan velocidad, seguridad y escalabilidad. Un sitio barato con WordPress puede costarte más a largo plazo en mantenimiento y pérdida de ventas por lentitud.'
        },
        {
          question: '¿Ofrecen planes de pago?',
          answer:
            'Sí. 50% al inicio y 50% al finalizar. Para proyectos grandes podemos dividir en 3 cuotas.'
        }
      ]
    },
    {
      category: 'Tiempo y Proceso',
      items: [
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio web?',
          answer:
            'Sitios básicos: 2-3 semanas. E-commerce: 4-6 semanas. Aplicaciones complejas: 8-12 semanas. Trabajamos con metodologías ágiles y avances semanales.'
        },
        {
          question: '¿Qué incluye el proceso de desarrollo?',
          answer:
            'Consulta inicial gratuita, diseño en Figma (te mostramos antes de programar), desarrollo, testing, capacitación y soporte post-lanzamiento.'
        },
        {
          question: '¿Puedo ver el progreso del proyecto?',
          answer:
            'Sí. Actualizaciones semanales con capturas y demos en vivo. Herramientas colaborativas para feedback en tiempo real.'
        }
      ]
    },
    {
      category: 'Tecnología y Seguridad',
      items: [
        {
          question: '¿Por qué usan Firebase en lugar de WordPress?',
          answer:
            'Firebase es de Google: tiempo real, alta seguridad y se integra con Analytics y Ads. WordPress suele ser más lento y vulnerable. Con Firebase tu sitio es rápido y escalable desde el día 1.'
        },
        {
          question: '¿Mi sitio web será seguro?',
          answer:
            'Sí. Usamos la infraestructura de Google: encriptación, respaldos automáticos y certificados SSL.'
        },
        {
          question: '¿Qué pasa si mi sitio se cae?',
          answer:
            'Con Google Cloud hay 99.9% de disponibilidad. Los problemas se resuelven en minutos y tienes respaldos automáticos diarios.'
        }
      ]
    },
    {
      category: 'SEO y Marketing',
      items: [
        {
          question: '¿Mi sitio aparecerá en Google?',
          answer:
            'Sí. Next.js está optimizado para SEO. Configuramos Analytics, Search Console y optimizamos cada página para palabras clave relevantes.'
        },
        {
          question: '¿Cómo puedo medir si mi sitio está funcionando?',
          answer:
            'Te configuramos Google Analytics para ver visitantes, conversiones y tiempo en el sitio. Te enseñamos a interpretar los datos.'
        },
        {
          question: '¿Pueden ayudarme con marketing digital?',
          answer:
            'Sí. Ofrecemos consultoría en Google Ads, redes sociales, email marketing y estrategias para convertir más visitantes en clientes.'
        }
      ]
    }
  ];

  const flatItems = faqs.flatMap((cat) =>
    cat.items.map((item, i) => ({
      ...item,
      category: cat.category,
      key: `${cat.category}-${i}-${item.question.slice(0, 20)}`,
      globalIndex: 0
    }))
  );
  flatItems.forEach((item, i) => {
    item.globalIndex = i;
  });

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-gray-700 mb-6">
            <FiHelpCircle className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-500 font-light text-base">
            Resolvemos las dudas más comunes
          </p>
        </motion.div>

        <div className="space-y-2">
          {flatItems.map((item, index) => {
            const idx = item.globalIndex;
            const isOpen = openItem === idx;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  type="button"
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
                  onClick={() => toggleItem(idx)}
                >
                  <span className="font-medium text-gray-800 text-sm leading-snug pr-2">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-gray-400 group-hover:text-gray-600"
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-500 text-sm font-light mb-4">
            ¿Más dudas? Agenda una consulta gratuita.
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
