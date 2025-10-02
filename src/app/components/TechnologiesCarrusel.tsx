"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export const TechnologiesCarrusel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Array de tecnologías con sus logos
  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // Ajusta la velocidad del scroll (valores más altos = más rápido)

    const animate = () => {
      scrollPosition += speed;
      
      // Cuando llegamos al final del primer set, reseteamos sin transición
      if (scrollPosition >= track.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      track.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full py-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
     <div className="max-w-7xl mx-auto px-4 mb-10">
        <h3 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-3">
          Tecnología que Impulsa tu Negocio
        </h3>
        <p className="text-center text-gray-600 text-lg font-light max-w-2xl mx-auto">
          Usamos las herramientas más avanzadas para crear sitios web rápidos, seguros y que generen ventas
        </p>
      </div> 

      {/* Contenedor del carrusel */}
      <div className="relative">
        {/* Gradientes laterales para efecto fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track del carrusel */}
        <div className="overflow-hidden">
          <div 
            ref={trackRef}
            className="flex will-change-transform"
            style={{ width: 'max-content' }}
          >
            {/* Duplicamos el array 2 veces para crear el efecto infinito */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-8 flex flex-col items-center"
              >
              <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 hover:scale-110">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={60}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  unoptimized
                />
              </div>
              <p className="text-center text-xs md:text-sm mt-2 text-gray-600 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
