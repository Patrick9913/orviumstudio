"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiShoppingBag, FiBriefcase, FiBookOpen, FiCamera, FiCoffee, FiTrendingUp } from 'react-icons/fi';

// Componente para la vista previa del sitio
const SitePreview: React.FC<{ demoUrl: string; title: string; icon: React.ComponentType<{ className?: string }> }> = ({ demoUrl, title, icon: Icon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (demoUrl === '#') {
    return (
      <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
        <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-indigo-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-gray-100 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <Icon className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Vista previa no disponible</p>
          </div>
        </div>
      ) : (
        <iframe
          src={demoUrl}
          className="w-full h-full border-0 transform scale-50 origin-top-left"
          style={{
            width: '200%',
            height: '200%',
            pointerEvents: 'none'
          }}
          title={`Vista previa de ${title}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
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
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
    },
    {
      title: 'Tienda de Ropa Urbana',
      description: 'Landing page promocional para tienda de ropa con productos destacados y ofertas especiales.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Productos Destacados', 'Ofertas Especiales', 'Newsletter', 'Catálogo Online'],
      demoUrl: 'https://landingmodeltwo.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
      title: 'Consultora Empresarial',
      description: 'Sitio web corporativo para consultoras con servicios especializados y formulario de contacto.',
      icon: FiTrendingUp,
      category: 'Consultoría',
      features: ['Servicios Especializados', 'Estadísticas', 'Formulario Contacto', 'Diseño Corporativo'],
      demoUrl: 'https://landingmodelone.vercel.app/',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React']
    },
    {
      title: 'E-commerce Moderno',
      description: 'Plantilla completa para tienda online con carrito de compras, pagos integrados y panel administrativo.',
      icon: FiShoppingBag,
      category: 'E-commerce',
      features: ['Carrito de Compras', 'Pagos Seguros', 'Panel Admin', 'Responsive'],
      demoUrl: '#',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB']
    },
    {
      title: 'Sitio Corporativo',
      description: 'Landing page profesional para empresas con secciones de servicios, equipo y contacto.',
      icon: FiBriefcase,
      category: 'Corporativo',
      features: ['SEO Optimizado', 'Formularios', 'Blog Integrado', 'Analytics'],
      demoUrl: '#',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript']
    },
    {
      title: 'Portfolio Creativo',
      description: 'Plantilla elegante para mostrar trabajos creativos, ideal para diseñadores y fotógrafos.',
      icon: FiCamera,
      category: 'Portfolio',
      features: ['Galería Interactiva', 'Animaciones', 'Contacto Directo', 'Redes Sociales'],
      demoUrl: '#',
      technologies: ['React', 'Framer Motion', 'GSAP', 'Sass']
    },
    {
      title: 'Blog Personal',
      description: 'Sistema de blog completo con CMS integrado, comentarios y sistema de categorías.',
      icon: FiBookOpen,
      category: 'Blog',
      features: ['CMS Integrado', 'Comentarios', 'Categorías', 'Búsqueda'],
      demoUrl: '#',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL']
    },
    {
      title: 'Restaurante & Café',
      description: 'Sitio web para restaurantes con menú interactivo, reservas online y galería de platos.',
      icon: FiCoffee,
      category: 'Restaurante',
      features: ['Menú Digital', 'Reservas Online', 'Galería', 'Ubicación'],
      demoUrl: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps']
    },
    {
      title: 'Aplicación SaaS',
      description: 'Dashboard moderno para aplicaciones SaaS con autenticación y panel de usuario.',
      icon: FiMonitor,
      category: 'SaaS',
      features: ['Dashboard', 'Autenticación', 'Subscripciones', 'API REST'],
      demoUrl: '#',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT']
    }
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
        <motion.div 
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
        </motion.div>

        {/* Grid de plantillas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.a
              key={index}
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Vista previa del sitio */}
              <div className="h-48 relative overflow-hidden">
                <SitePreview 
                  demoUrl={template.demoUrl} 
                  title={template.title} 
                  icon={template.icon} 
                />
                {/* Overlay para indicar que es clickeable */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-700">Ver Demo</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Categoría */}
                <div className="mb-4">
                  <div className="inline-block bg-indigo-500/10 text-indigo-600 text-sm font-medium px-3 py-1">
                    {template.category}
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-4 font-light text-sm">
                  {template.description}
                </p>

                {/* Características */}
                <div className="space-y-2 mb-6">
                  {template.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-gray-600 text-xs px-2 py-1 font-light">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón de demo */}
                <div className="text-center">
                  <span className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium text-sm transition-colors">
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
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              Podemos personalizar cualquiera de estas plantillas o crear algo completamente nuevo para tu proyecto
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
