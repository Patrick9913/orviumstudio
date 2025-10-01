"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiSmartphone, 
  FiShield, 
  FiZap,
  FiLayers,
  FiMonitor
} from 'react-icons/fi';

export const Technologies: React.FC = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: FiMonitor,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      items: [
        { name: 'React', description: 'Biblioteca de JavaScript para interfaces de usuario' },
        { name: 'Next.js', description: 'Framework de React para aplicaciones web' },
        { name: 'TypeScript', description: 'JavaScript con tipado estático' },
        { name: 'Tailwind CSS', description: 'Framework de CSS utilitario' },
        { name: 'Framer Motion', description: 'Biblioteca de animaciones' }
      ]
    },
    {
      category: 'Backend',
      icon: FiDatabase,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      items: [
        { name: 'Node.js', description: 'Entorno de ejecución de JavaScript' },
        { name: 'Express.js', description: 'Framework web para Node.js' },
        { name: 'MongoDB', description: 'Base de datos NoSQL' },
        { name: 'PostgreSQL', description: 'Base de datos relacional' },
        { name: 'Prisma', description: 'ORM para bases de datos' }
      ]
    },
    {
      category: 'Cloud & Servicios',
      icon: FiCloud,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      items: [
        { name: 'Firebase', description: 'Plataforma de desarrollo de Google' },
        { name: 'Vercel', description: 'Plataforma de despliegue' },
        { name: 'AWS', description: 'Servicios en la nube de Amazon' },
        { name: 'Google Cloud', description: 'Servicios en la nube de Google' },
        { name: 'Stripe', description: 'Procesamiento de pagos' }
      ]
    },
    {
      category: 'Herramientas',
      icon: FiCode,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      items: [
        { name: 'Git', description: 'Control de versiones' },
        { name: 'Docker', description: 'Contenedores de aplicaciones' },
        { name: 'Figma', description: 'Diseño de interfaces' },
        { name: 'VS Code', description: 'Editor de código' },
        { name: 'ESLint', description: 'Linter de JavaScript' }
      ]
    }
  ];

  return (
    <section id="tecnologias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Tecnologías que Utilizamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Trabajamos con las tecnologías más modernas y confiables del mercado para crear productos web de alta calidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {technologies.map((tech, categoryIndex) => (
            <motion.div 
              key={tech.category}
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${tech.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">
                  {tech.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className={`w-3 h-3 ${tech.color.replace('text-', 'bg-')} rounded-full`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de características adicionales */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              ¿Por qué elegir nuestras tecnologías?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Utilizamos un stack tecnológico probado y actualizado que garantiza rendimiento, seguridad y escalabilidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiZap className="w-8 h-8 text-indigo-500" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Rendimiento Óptimo</h4>
              <p className="text-gray-600 font-light">
                Tecnologías que garantizan velocidad de carga y experiencia de usuario excepcional
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-indigo-500" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Seguridad Avanzada</h4>
              <p className="text-gray-600 font-light">
                Implementamos las mejores prácticas de seguridad para proteger tu información
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiLayers className="w-8 h-8 text-indigo-500" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">Escalabilidad</h4>
              <p className="text-gray-600 font-light">
                Arquitecturas que crecen con tu negocio sin comprometer el rendimiento
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
