"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiShoppingBag, FiBriefcase, FiBookOpen, FiCamera, FiCoffee, FiTrendingUp } from 'react-icons/fi';

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
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
          title={`Vista previa de ${title}`}
          onError={() => setShowIframe(false)}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          scrolling="no"
        />
      )}
    </div>
  );
};

export const Templates: React.FC = () => {
  const templates = [
    {
      title: 'Estudio Jurídico',
      description: 'Sitio web profesional para bufetes de abogados con secciones de servicios, equipo y consulta gratuita.',
      icon: FiBriefcase,
      category: 'Profesional',
      features: ['Consulta Gratuita', 'Servicios Legales', 'Equipo Profesional', 'Formularios de Contacto'],
      demoUrl: 'https://landingmodelthree.vercel.app/',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      previewColor: 'from-orvium-primary-50 to-orvium-primary-light'
    },
    {
      title: 'Tienda de Ropa Urbana',
      description: 'Landing page promocional para tienda de ropa con productos destacados y ofertas especiales.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Productos Destacados', 'Ofertas Especiales', 'Newsletter', 'Catálogo Online'],
      demoUrl: 'https://landingmodeltwo.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      previewColor: 'from-orvium-warning/10 to-orvium-warning/20'
    },
    {
      title: 'Consultora Empresarial',
      description: 'Sitio web corporativo para consultoras con servicios especializados y formulario de contacto.',
      icon: FiTrendingUp,
      category: 'Consultoría',
      features: ['Servicios Especializados', 'Estadísticas', 'Formulario Contacto', 'Diseño Corporativo'],
      demoUrl: 'https://landingmodelone.vercel.app/',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
      previewColor: 'from-orvium-success/10 to-orvium-success/20'
    },
    {
      title: 'E-commerce Moderno',
      description: 'Plantilla completa para tienda online con carrito de compras, pagos integrados y panel administrativo.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Carrito de Compras', 'Pagos Seguros', 'Panel Admin', 'Responsive'],
      demoUrl: 'https://plantilla-ecommerce-lime.vercel.app/',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      previewColor: 'from-orvium-accent-light to-orvium-accent'
    },
  ];

  const categories = ['Todas', 'Profesional', 'E-commerce', 'Consultoría', 'Corporativo', 'Portfolio', 'Blog', 'Restaurante', 'SaaS'];

  return (
    <section id="plantillas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Plantillas Modelo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Descubre nuestras plantillas pre-diseñadas y personalízalas según tus necesidades
          </p>
        </motion.div>

        {/* Filtros de categorías */}
        {/* <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        {/* Grid de plantillas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {templates.map((template, index) => (
            <motion.a
              key={index}
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-500 hover:shadow-xl cursor-pointer rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Vista previa del sitio */}
              <div className="h-80 relative overflow-hidden">
                <SitePreview 
                  demoUrl={template.demoUrl} 
                  title={template.title} 
                  icon={template.icon}
                  previewColor={template.previewColor}
                />
                {/* Overlay minimalista */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Ver Demo</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Categoría */}
                <div className="mb-6">
                  <div className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full">
                    {template.category}
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {template.description}
                </p>

                {/* Características simplificadas */}
                <div className="space-y-3 mb-8">
                  {template.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tecnologías minimalistas */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {template.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-50 text-gray-500 text-xs px-3 py-1.5 font-light rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón de demo minimalista */}
                <div className="text-center">
                  <span className="inline-flex items-center text-gray-600 group-hover:text-indigo-500 font-medium text-sm transition-colors duration-300">
                    Ver Demo →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA final */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
            ¿Querés algo único para tu marca?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
            Personalizamos cada diseño o creamos algo 100 % a medida para vos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-indigo-500 text-white px-8 py-3 text-lg font-medium hover:bg-indigo-600 transition-colors"
              >
                Solicitar Personalización
              </a>
              <a 
                href="#contacto" 
                className="border border-indigo-500 text-indigo-500 px-8 py-3 text-lg font-medium hover:bg-indigo-500 hover:text-white transition-colors"
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
