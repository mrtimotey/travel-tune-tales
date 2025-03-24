
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { landmarks } from '../data';
import Bird from '../components/Bird';

const Home: React.FC = () => {
  const [showBird, setShowBird] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Bird active={showBird} onComplete={() => setShowBird(false)} />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Аудиогид по России</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="h-full glass-card rounded-xl overflow-hidden transition-all">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={landmark.images[0]} 
                      alt={landmark.name} 
                      className="w-full h-full object-cover landmark-image"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-gray-900">{landmark.name}</h2>
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
