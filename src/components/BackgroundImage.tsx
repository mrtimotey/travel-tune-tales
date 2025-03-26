
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface BackgroundImageProps {
  variant?: 'home' | 'detail';
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ variant = 'home' }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor: 'rgb(255, 160, 122)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundImage;
