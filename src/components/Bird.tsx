
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BirdProps {
  name?: string;
  active: boolean;
  onComplete?: () => void;
}

const Bird: React.FC<BirdProps> = ({ name, active, onComplete }) => {
  const [position, setPosition] = useState({ x: -100, y: Math.random() * 100 });
  const [showSpeech, setShowSpeech] = useState(false);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setShowSpeech(true);
      }, 1500);

      const completeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearTimeout(completeTimer);
      };
    } else {
      setShowSpeech(false);
    }
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <motion.div
        initial={{ x: -100, y: position.y, opacity: 0 }}
        animate={{ 
          x: window.innerWidth / 2 - 50, 
          y: window.innerHeight / 3, 
          opacity: 1,
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 2,
          rotate: {
            repeat: Infinity,
            duration: 2
          }
        }}
        className="absolute bird"
      >
        <svg width="80" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 7.24L20.85 6.1L17.54 5.27L14.23 3L12 5.91L9.77 3L6.46 5.27L3.15 6.1L2 7.24L5.08 10.16L4 13.28L5.15 16.4L8.92 19.06L12 18L15.08 19.06L18.85 16.4L20 13.28L18.92 10.16L22 7.24Z" 
                fill="#4E7AC7" stroke="#1E3A70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {showSpeech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 mt-16 glass-card rounded-xl px-6 py-3 shadow-lg"
        >
          <p className="text-lg font-medium">Привет{name ? `, ${name}` : ''}!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Bird;
