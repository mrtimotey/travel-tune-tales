
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const IntroScreen: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [swipeComplete, setSwipeComplete] = useState(false);
  const navigate = useNavigate();

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    // Если пользователь смахнул достаточно вверх, переходим на основную страницу
    if (info.offset.y < -100) {
      setSwipeComplete(true);
      // Добавляем небольшую задержку для анимации исчезновения
      setTimeout(() => {
        navigate('/home');
      }, 500);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden z-50"
      animate={swipeComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full h-full"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        <img 
          src='https://2.downloader.disk.yandex.ru/preview/bc4a4b4353c2b7611aa7fceee881c740d98aff74ed8424cf948b23033abf1511/inf/BszWjr7AlYgFAAv-0qpplvKPDO0WMo7PcA1uippSaBEb9QOhUuELyfbuowc8I8Jrg5_dcf3CjMfpiwWUrbOTBw%3D%3D?uid=1488535573&filename=intro.gif&disposition=inline&hash=&limit=0&content_type=image%2Fgif&owner_uid=1488535573&tknv=v2&size=1866x920' 
          alt="Intro Animation" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            className="flex flex-col items-center text-white"
            animate={{ y: isDragging ? -10 : 0 }}
            transition={{ repeat: isDragging ? 0 : Infinity, repeatType: "reverse", duration: 1 }}
          >
            <div className="text-xl mb-2">Смахните вверх</div>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
