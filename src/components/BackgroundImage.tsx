
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface BackgroundImageProps {
  variant?: 'home' | 'detail';
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ variant = 'home' }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="fixed inset-0 -z-10 bg-cover bg-center pointer-events-none"
      style={{ backgroundImage: 'url("blob:https://web.telegram.org/b5dd936b-8385-43f9-b808-3336d58dc70e")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundImage;
