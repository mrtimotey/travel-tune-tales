
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { landmarks } from '../data';
import StaticBird from '../components/StaticBird';
import BackgroundImage from '../components/BackgroundImage';
import { useIsMobile } from '../hooks/use-mobile';

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <BackgroundImage variant="home" />
      
      {/* Yellow bird sitting on the top edge of the first card */}
      <StaticBird 
        color="yellow" 
        position={isMobile ? { x: 12, y: 42 } : { x: 15, y: 48 }} 
        rotation={-5}
        birdText="Привет! Я желтая птичка! Добро пожаловать в аудиогид по России."
        delay={0}
        birdImage="/birds/yellow-bird-1.png"
      />
      
      {/* Blue bird sitting on the right side of the description area */}
      <StaticBird 
        color="blue" 
        position={isMobile ? { x: 80, y: 25 } : { x: 85, y: 33 }} 
        rotation={5}
        birdText="Привет! Я синяя птичка! Нажми на достопримечательность, чтобы узнать больше."
        delay={1000}
        birdImage="/birds/blue-bird-1.png"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Аудиогид по России</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Исследуйте самые впечатляющие достопримечательности России с нашими аудиогидами. 
            Выберите место, которое хотите посетить виртуально.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {landmarks.map((landmark, index) => (
            <motion.div
              key={landmark.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/landmark/${landmark.id}`} className="block h-full">
                <div className="h-full glass-card rounded-2xl overflow-hidden transition-all">
                  <div className="h-48 md:h-64 overflow-hidden">
                    <img 
                      src={landmark.images[0]} 
                      alt={landmark.name} 
                      className="w-full h-full object-cover landmark-image"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-bold mb-2 text-primary">{landmark.name}</h2>
                    <p className="text-sm md:text-base text-gray-600">{landmark.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
