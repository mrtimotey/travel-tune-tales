
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Info } from 'lucide-react';
import { landmarks } from '../data';
import AudioPlayer from '../components/AudioPlayer';
import Bird from '../components/Bird';

const LandmarkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBird, setShowBird] = useState(true);
  
  const landmark = landmarks.find(l => l.id === Number(id));
  
  const nextImage = () => {
    if (!landmark) return;
    setCurrentImageIndex((prev) => (prev + 1) % landmark.images.length);
  };
  
  const prevImage = () => {
    if (!landmark) return;
    setCurrentImageIndex((prev) => (prev - 1 + landmark.images.length) % landmark.images.length);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!landmark) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Достопримечательность не найдена</h2>
          <Link to="/" className="text-blue-500 hover:underline">Вернуться на главную</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Bird name={landmark.name} active={showBird} onComplete={() => setShowBird(false)} />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Назад к списку
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-sm font-medium text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
            Аудиогид
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2 text-gray-900">{landmark.name}</h1>
          <p className="text-xl text-gray-600">{landmark.subtitle}</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <img 
                src={landmark.images[currentImageIndex]} 
                alt={landmark.name} 
                className="w-full h-full object-cover"
              />
              
              {landmark.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ArrowLeft size={20} className="transform rotate-180" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {landmark.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-8">
              <AudioPlayer audioSrc={landmark.audioFile} title="Аудиогид" />
              
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Описание</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {landmark.description}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-5/12"
          >
            <div className="sticky top-8">
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <MapPin size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-medium">Расположение</h3>
                </div>
                <p className="text-gray-700">{landmark.location}</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Info size={20} className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-medium">Интересные факты</h3>
                </div>
                <ul className="space-y-3">
                  {landmark.facts.map((fact, index) => (
                    <li key={index} className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkDetail;
