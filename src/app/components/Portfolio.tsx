import React from 'react';
import { FiShoppingBag, FiBarChart, FiHome, FiBookOpen, FiFileText, FiUsers } from 'react-icons/fi';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Fashion',
      description: 'Tienda online completa con sistema de pago integrado y gestión de inventario.',
      icon: FiShoppingBag,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce'
    },
    {
      title: 'Dashboard Empresarial',
      description: 'Panel de control para gestión de ventas y análisis de datos en tiempo real.',
      icon: FiBarChart,
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      category: 'Web App'
    },
    {
      title: 'Sitio Web Corporativo',
      description: 'Landing page moderna para empresa de servicios profesionales.',
      icon: FiHome,
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Website'
    },
    {
      title: 'Plataforma Educativa',
      description: 'Sistema de aprendizaje online con videoconferencias y evaluaciones.',
      icon: FiBookOpen,
      technologies: ['React', 'Socket.io', 'AWS', 'WebRTC'],
      category: 'Web App'
    },
    {
      title: 'Portal de Noticias',
      description: 'Sitio web de noticias con CMS personalizado y sistema de suscripciones.',
      icon: FiFileText,
      technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'Redis'],
      category: 'Website'
    },
    {
      title: 'Sistema CRM',
      description: 'Aplicación web para gestión de clientes y seguimiento de ventas.',
      icon: FiUsers,
      technologies: ['React', 'Express', 'MySQL', 'JWT'],
      category: 'Web App'
    }
  ];

  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6">
            Nuestro Portafolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Proyectos que demuestran nuestra capacidad de resolución.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:border-gray-900 transition-colors duration-300 rounded-none group">
              <div className="p-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#fafafa] border border-gray-200 rounded-none flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="inline-block border border-gray-200 text-gray-500 text-xs uppercase tracking-widest px-3 py-1 mb-6 self-start rounded-none">
                  {project.category}
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-8 font-light leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="border border-gray-100 text-gray-400 text-[10px] uppercase tracking-wider px-2 py-1 rounded-none">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-gray-900 hover:text-gray-500 uppercase tracking-widest font-medium text-xs transition-colors self-start flex items-center">
                  <span className="border-b border-gray-900 pb-1 mr-2 group-hover:border-gray-500 transition-colors">Ver Proyecto</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-start lg:justify-end">
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center bg-gray-900 text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-none"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};
