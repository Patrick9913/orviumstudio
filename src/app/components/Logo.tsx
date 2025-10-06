"use client";

import React from "react";

export type LogoOrviumProps = {
  size?: number;
  className?: string;
};

export const Logo: React.FC<LogoOrviumProps> = ({
  size = 86,
  className = "",
}) => {
  // Calcular tamaños del texto basados en el tamaño del SVG
  const textScale = size / 56;  // 56 es el tamaño base
  const orviumSize = Math.round(24 * textScale); // 24px base - más grande
  const studioSize = Math.round(18 * textScale); // 18px base - más pequeño para jerarquía
  const gap = Math.round(4 * textScale); // 4 = gap-4 en rem - más espacio

  return (
    <div
      className={`inline-flex items-center select-none`}
      style={{ gap: `${gap * 1}px` }}
      aria-label="OrviumStudio logo"
      role="img"
    >
      {/* Isotipo - siempre cyan-600 */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-cyan-500"
      >
        <title>OrviumStudio</title>
        {/* Anillo exterior (O) - más grueso y moderno */}
        <circle 
          cx="32" 
          cy="32" 
          r="22" 
          stroke="currentColor" 
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Línea vertical interna - más gruesa y con terminaciones redondeadas */}
        <line
          x1="20"
          y1="14"
          x2="20"
          y2="50"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Punto decorativo - añade sofisticación */}
        <circle 
          cx="32" 
          cy="20" 
          r="2" 
          fill="currentColor"
        />
      </svg>

      {/* Wordmark - escala con el size */}
      <div className="leading-none">
        <div className="tracking-tight">
          {/* Orvium - tipografía principal más llamativa */}
          <span 
            className={`font-black tracking-tight ${className}`}
            style={{ 
              fontSize: `${orviumSize}px`,
              letterSpacing: '-0.02em',
              fontWeight: '900'
            }}
          >
            Orvium
          </span>
          {/* Studio - tipografía secundaria más elegante */}
          <span 
            className="font-light text-cyan-500 tracking-wider"
            style={{ 
              fontSize: `${studioSize}px`,
              letterSpacing: '0.1em',
              fontWeight: '300'
            }}
          >
            Studio
          </span>
        </div>
      </div>
    </div>
  );
};
