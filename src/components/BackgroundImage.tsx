
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface BackgroundImageProps {
  variant?: 'home' | 'detail';
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ variant = 'home' }) => {
  const isMobile = useIsMobile();
  
  // Используем разные классы для разных вариантов фона
  const bgClassName = variant === 'home' 
    ? 'bg-image-home' 
    : 'bg-image-detail';
  
  return (
    <div className={`fixed inset-0 -z-10 ${bgClassName} bg-cover bg-center pointer-events-none`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundImage;
