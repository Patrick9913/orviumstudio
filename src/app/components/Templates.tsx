"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiShoppingBag, FiBriefcase, FiBookOpen, FiCamera, FiCoffee, FiTrendingUp, FiChevronLeft, FiChevronRight, FiExternalLink, FiLayout } from 'react-icons/fi';

// Componente para la vista previa del sitio
const SitePreview: React.FC<{ demoUrl: string; title: string; icon: React.ComponentType<{ className?: string }>, previewColor: string }> = ({ demoUrl, title, icon: Icon, previewColor }) => {
  const [showIframe, setShowIframe] = useState(false);

  // Solo mostrar iframe para URLs válidas después de un delay
  React.useEffect(() => {
    if (demoUrl !== '#') {
      const timer = setTimeout(() => {
        setShowIframe(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [demoUrl]);

  if (demoUrl === '#') {
    return (
      <div className={`h-full bg-gradient-to-br ${previewColor} flex items-center justify-center`}>
        <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
          <Icon className="w-10 h-10 text-gray-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden">
      {/* Preview con gradiente de fondo */}
      <div className={`absolute inset-0 bg-gradient-to-br ${previewColor} flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Icon className="w-8 h-8 text-gray-700" />
          </div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-xs text-gray-500 mt-1">Cargando vista previa...</p>
        </div>
      </div>

      {/* Iframe superpuesto cuando esté listo */}
      {showIframe && (
        <iframe
          src={demoUrl}
          className="absolute inset-0 w-full h-full border-0 transition-opacity duration-500"
          style={{
            pointerEvents: 'none'
          }}
          title={`Vista previa de ${title}`}
          onError={() => setShowIframe(false)}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const Templates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const templates = [
    {
      title: 'Estudio Jurídico',
      description: 'Sitio web profesional para bufetes de abogados con secciones de servicios, equipo y consulta gratuita.',
      icon: FiBriefcase,
      category: 'Profesional',
      features: ['Consulta Gratuita', 'Servicios Legales', 'Equipo Profesional', 'Formularios de Contacto'],
      demoUrl: 'https://landingmodelthree.vercel.app/',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      previewColor: 'from-slate-50 to-slate-100'
    },
    {
      title: 'Tienda de Ropa Urbana',
      description: 'Landing page promocional para tienda de ropa con productos destacados y ofertas especiales.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Productos Destacados', 'Ofertas Especiales', 'Newsletter', 'Catálogo Online'],
      demoUrl: 'https://landingmodeltwo.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      previewColor: 'from-stone-50 to-stone-100'
    },
    {
      title: 'Consultora Empresarial',
      description: 'Sitio web corporativo para consultoras con servicios especializados y formulario de contacto.',
      icon: FiTrendingUp,
      category: 'Consultoría',
      features: ['Servicios Especializados', 'Estadísticas', 'Formulario Contacto', 'Diseño Corporativo'],
      demoUrl: 'https://landingmodelone.vercel.app/',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
      previewColor: 'from-neutral-50 to-neutral-100'
    },
    {
      title: 'E-commerce Moderno',
      description: 'Plantilla completa para tienda online con carrito de compras, pagos integrados y panel administrativo.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Carrito de Compras', 'Pagos Seguros', 'Panel Admin', 'Responsive'],
      demoUrl: 'https://plantilla-ecommerce-lime.vercel.app/',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      previewColor: 'from-zinc-50 to-zinc-100'
    },
  ];

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
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  // Autoplay del carrusel
  useEffect(() => {
    if (isVisible) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % templates.length);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isVisible, templates.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  return (
    <section ref={sectionRef} id="plantillas" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-gray-700 mb-6">
            <FiLayout className="w-7 h-7" />
          </div>
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Plantillas Modelo
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Descubre nuestras plantillas pre-diseñadas y personalízalas según tus necesidades
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor del carrusel */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-0"
              >
                {/* Vista previa del sitio */}
                <div className="h-[500px] md:h-[600px] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <SitePreview 
                    demoUrl={templates[currentIndex].demoUrl} 
                    title={templates[currentIndex].title} 
                    icon={templates[currentIndex].icon}
                    previewColor={templates[currentIndex].previewColor}
                  />
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                  {/* Categoría */}
                  <div className="mb-6">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-4 py-2 rounded-full tracking-wide">
                      {templates[currentIndex].category}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
                    {templates[currentIndex].title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-500 mb-8 font-light leading-relaxed text-lg">
                    {templates[currentIndex].description}
                  </p>

                  {/* Características */}
                  <div className="space-y-4 mb-8">
                    {templates[currentIndex].features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {templates[currentIndex].technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-50 text-gray-500 text-xs px-3 py-1.5 font-light rounded-md border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón de acción */}
                  <a
                    href={templates[currentIndex].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-8 py-4 text-sm font-medium hover:bg-gray-700 transition-colors duration-300 rounded-lg group"
                  >
                    Ver Demo
                    <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación - Flechas */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-300 z-10 group"
              aria-label="Plantilla anterior"
            >
              <FiChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-300 z-10 group"
              aria-label="Plantilla siguiente"
            >
              <FiChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-8">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gray-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a plantilla ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              ¿Querés algo único para tu marca?
            </h3>
            <p className="text-gray-500 mb-8 font-light text-lg max-w-2xl mx-auto">
              Personalizamos cada diseño o creamos algo 100% a medida para vos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-gray-800 text-white px-8 py-4 text-base font-medium hover:bg-gray-700 transition-colors rounded-lg"
              >
                Solicitar Personalización
              </a>
              <a 
                href="#contacto" 
                className="border border-gray-300 text-gray-700 px-8 py-4 text-base font-medium hover:bg-gray-50 transition-colors rounded-lg"
              >
                Consulta Gratuita
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
