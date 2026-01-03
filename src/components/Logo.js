import React from 'react';
import Link from 'next/link';

const Logo = ({ 
  className = '', 
  withText = true, 
  size = 'md',
  iconColor = 'text-emerald-600',
  textColor = 'text-emerald-700',
  textSecondaryColor = 'text-emerald-600',
  darkMode = false
}) => {
  // If dark mode is enabled, use light colors by default
  if (darkMode) {
    iconColor = iconColor === 'text-emerald-600' ? 'text-white' : iconColor;
    textColor = textColor === 'text-emerald-700' ? 'text-white' : textColor;
    textSecondaryColor = textSecondaryColor === 'text-emerald-600' ? 'text-gray-200' : textSecondaryColor;
  }

  const sizeClasses = {
    sm: 'h-6 w-6 md:h-8 md:w-8',
    md: 'h-8 w-8 md:h-12 md:w-12',
    lg: 'h-12 w-12 md:h-16 md:w-16',
  };

  const textSizes = {
    sm: 'text-base md:text-xl',
    md: 'text-xl md:text-xl',
    lg: 'text-2xl md:text-2xl',
  };

  const logo = (
    <div className={`flex items-center ${className}`}>
      <svg
        className={`${sizeClasses[size]} ${iconColor} flex-shrink-0`}
        viewBox="0 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z" />
        <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
        <path d="M256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
        <path d="M256 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
      </svg>
      {withText && (
        <span className={`ml-3 font-bold ${textColor} ${textSizes[size]} leading-tight md:leading-snug`}>
          Blooming Farms Venue
          {/* <span className={`block ${textSecondaryColor} text-sm font-normal`}>Venue</span> */}
        </span>
      )}
    </div>
  );

  return withText ? <Link href="/">{logo}</Link> : logo;
};

export default Logo;
