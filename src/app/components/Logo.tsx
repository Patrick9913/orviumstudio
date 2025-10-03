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
  const orviumSize = Math.round(20 * textScale); // 20px base
  const studioSize = Math.round(30 * textScale); // 30px base
  const gap = Math.round(3 * textScale); // 3 = gap-3 en rem

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
        {/* Anillo exterior (O) */}
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" />
        
        {/* Línea vertical interna */}
        <line
          x1="20"
          y1="14"
          x2="20"
          y2="50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark - escala con el size */}
      <div className="leading-none">
        <div className="tracking-wider">
          {/* Orvium hereda el color del className padre */}
          <span 
            className={`font-semibold ${className}`}
            style={{ fontSize: `${orviumSize}px` }}
          >
            Orvium
          </span>
          {/* Studio siempre cyan-600 */}
          <span 
            className="font-semibold text-cyan-500"
            style={{ fontSize: `${studioSize}px` }}
          >
            Studio
          </span>
        </div>
      </div>
    </div>
  );
};
