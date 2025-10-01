import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: {
      container: 'w-6 h-6',
      circle: 'w-5 h-5',
      text: 'text-sm',
      smallCircle: 'w-3 h-3',
      smallText: 'text-xs'
    },
    md: {
      container: 'w-10 h-10',
      circle: 'w-8 h-8',
      text: 'text-lg',
      smallCircle: 'w-4 h-4',
      smallText: 'text-sm'
    },
    lg: {
      container: 'w-12 h-12',
      circle: 'w-10 h-10',
      text: 'text-xl',
      smallCircle: 'w-5 h-5',
      smallText: 'text-base'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo circular minimalista */}
      <div className="relative group">
        <div className={`${currentSize.container} bg-gray-900 rounded-full flex items-center justify-center`}>
          <span className={`text-white font-thin ${currentSize.text}`}>O</span>
        </div>
        <div className={`absolute -top-1 -right-1 ${currentSize.smallCircle} bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <span className={`text-white font-thin ${currentSize.smallText}`}>S</span>
        </div>
      </div>
      
      {/* Texto con tipografía delgada */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${currentSize.text} font-thin text-gray-900 tracking-wider`}>
            <span className="text-gray-900">Orvium</span>
            <span className="text-gray-400">Studio</span>
          </h1>
          <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent"></div>
        </div>
      )}
    </div>
  );
};
