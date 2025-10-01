"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiSmartphone, 
  FiShield, 
  FiZap,
  FiLayers,
  FiMonitor,
  FiCpu,
  FiGlobe,
  FiSettings
} from 'react-icons/fi';

export const Technologies: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      category: 'Frontend',
      icon: FiMonitor,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      position: { x: 0, y: -120 },
      items: [
        { name: 'React', description: 'Biblioteca de JavaScript', color: 'bg-blue-100', textColor: 'text-blue-800' },
        { name: 'Next.js', description: 'Framework de React', color: 'bg-blue-100', textColor: 'text-blue-800' },
        { name: 'TypeScript', description: 'JavaScript tipado', color: 'bg-blue-100', textColor: 'text-blue-800' },
        { name: 'Tailwind CSS', description: 'CSS utilitario', color: 'bg-blue-100', textColor: 'text-blue-800' },
        { name: 'Framer Motion', description: 'Animaciones', color: 'bg-blue-100', textColor: 'text-blue-800' }
      ]
    },
    {
      category: 'Backend',
      icon: FiDatabase,
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      position: { x: 120, y: 0 },
      items: [
        { name: 'Node.js', description: 'Runtime de JavaScript', color: 'bg-green-100', textColor: 'text-green-800' },
        { name: 'Express.js', description: 'Framework web', color: 'bg-green-100', textColor: 'text-green-800' },
        { name: 'MongoDB', description: 'Base de datos NoSQL', color: 'bg-green-100', textColor: 'text-green-800' },
      ]
    },
    {
      category: 'Cloud',
      icon: FiCloud,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
      position: { x: 0, y: 120 },
      items: [
        { name: 'Firebase', description: 'Plataforma Google', color: 'bg-purple-100', textColor: 'text-purple-800' },
        { name: 'Vercel', description: 'Despliegue', color: 'bg-purple-100', textColor: 'text-purple-800' },
        { name: 'Google Cloud', description: 'Servicios Google', color: 'bg-purple-100', textColor: 'text-purple-800' },
      ]
    },
    {
      category: 'Herramientas',
      icon: FiSettings,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      position: { x: -120, y: 0 },
      items: [
        { name: 'Git', description: 'Control de versiones', color: 'bg-orange-100', textColor: 'text-orange-800' },
        { name: 'Figma', description: 'Diseño', color: 'bg-orange-100', textColor: 'text-orange-800' },
        { name: 'VS Code', description: 'Editor', color: 'bg-orange-100', textColor: 'text-orange-800' },
        { name: 'ESLint', description: 'Linter', color: 'bg-orange-100', textColor: 'text-orange-800' }
      ]
    }
  ];

  return (
    <section id="tecnologias" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Nuestro Ecosistema Tecnológico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Un organigrama visual de las tecnologías que utilizamos para crear soluciones web innovadoras
          </p>
        </motion.div>

        {/* Organigrama en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Categoría principal */}
              <motion.div
                className={`w-20 h-20 ${tech.bgColor} rounded-full flex items-center justify-center shadow-lg mb-4 relative`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <tech.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Label de la categoría */}
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {tech.category}
              </motion.h3>

              {/* Tecnologías de la categoría */}
              <div className="flex flex-wrap justify-center gap-2">
                {tech.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${tech.category}-${item.name}`}
                    className={`px-3 py-2 rounded-full ${item.color} ${item.textColor} text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-md`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 + categoryIndex * 0.1 + itemIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onHoverStart={() => setHoveredTech(item.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información detallada */}
        {hoveredTech && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 max-w-sm z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-1">{hoveredTech}</h4>
              <p className="text-sm text-gray-600">
                {technologies
                  .flatMap(tech => tech.items)
                  .find(item => item.name === hoveredTech)?.description}
              </p>
            </div>
          </motion.div>
        )}

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
