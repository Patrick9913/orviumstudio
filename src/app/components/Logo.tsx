"use client";

import React from "react";
import Image from "next/image";

export type LogoOrviumProps = {
  size?: number;
  className?: string;
};

export const Logo: React.FC<LogoOrviumProps> = ({
  size = 86,
  className = "",
}) => {
  // Calcular tamaño del texto basado en el tamaño del logo
  const textSize = Math.round(size * 0.4); // Texto proporcional al logo

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      aria-label="OrviumStudio logo"
      role="img"
    >
      <Image
        src="/logoor.png"
        alt="OrviumStudio Logo"
        width={size}
        height={size}
        className="object-contain flex-shrink-0"
        priority
      />
      <span
        className="font-medium tracking-tight"
        style={{
          fontSize: `${textSize}px`,
          lineHeight: 1.2,
        }}
      >
        OrviumStudio
      </span>
    </div>
  );
};
