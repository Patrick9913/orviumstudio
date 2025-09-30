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
    <section id="portafolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Proyectos exitosos que demuestran nuestra experiencia y creatividad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:border-indigo-500 transition-colors duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                  <project.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <div className="inline-block bg-indigo-500/10 text-indigo-600 text-sm font-medium px-3 py-1 mb-4">
                  {project.category}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-gray-600 text-xs px-3 py-1 font-light">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-indigo-500 hover:text-indigo-600 font-medium text-sm">
                  Ver Proyecto →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contacto" 
            className="bg-blue-900 text-white px-8 py-4 text-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};
