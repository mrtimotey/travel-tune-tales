
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { landmarks } from '../data';
import StaticBird from '../components/StaticBird';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-pattern">
      <div className="sun-burst"></div>
      <div className="arc-decoration">
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
      </div>
      
      {/* Птицы */}
      <StaticBird 
        color="yellow" 
        position={{ x: 15, y: 25 }} 
        rotation={-5}
        birdText="Привет! Я желтая птичка! Добро пожаловать в аудиогид по России."
        delay={0}
      />
      <StaticBird 
        color="blue" 
        position={{ x: 85, y: 32 }} 
        rotation={5}
        birdText="Привет! Я синяя птичка! Нажми на достопримечательность, чтобы узнать больше."
        delay={1000}
      />
      <StaticBird 
        color="yellow" 
        position={{ x: 25, y: 70 }} 
        rotation={-8}
        birdText="Привет! Я еще одна желтая птичка! Наслаждайся путешествием по России!"
        delay={2000}
      />
      
      <div className="container mx-auto px-4 py-12 bg-shade">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Аудиогид по России</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Исследуйте самые впечатляющие достопримечательности России с нашими аудиогидами. 
            Выберите место, которое хотите посетить виртуально.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((landmark, index) => (
            <motion.div
              key={landmark.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/landmark/${landmark.id}`} className="block h-full">
                <div className="h-full glass-card rounded-2xl overflow-hidden transition-all">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={landmark.images[0]} 
                      alt={landmark.name} 
                      className="w-full h-full object-cover landmark-image"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-primary">{landmark.name}</h2>
                    <p className="text-gray-600">{landmark.subtitle}</p>
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
