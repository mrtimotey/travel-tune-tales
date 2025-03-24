
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BirdProps {
  color: string;
  position: { x: number; y: number };
  rotation?: number;
  birdText: string;
  delay?: number;
}

const StaticBird: React.FC<BirdProps> = ({ 
  color, 
  position, 
  rotation = 0, 
  birdText,
  delay = 0
}) => {
  const [isFlapping, setIsFlapping] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scheduleNextFlap = () => {
      // Random time between 1-5 seconds
      const randomDelay = Math.random() * 4000 + 1000;
      
      timeoutRef.current = setTimeout(() => {
        setIsFlapping(true);
        
        // Reset flapping state after animation completes
        setTimeout(() => {
          setIsFlapping(false);
          scheduleNextFlap();
        }, 500);
      }, randomDelay);
    };

    // Initial delay based on prop to stagger birds' animations
    setTimeout(() => {
      scheduleNextFlap();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  const fillColor = color === 'yellow' ? '#FFC738' : 
                   color === 'blue' ? '#6E9EDE' : 
                   color === 'green' ? '#5FCC63' : '#FFC738';

  return (
    <>
      <motion.div 
        className="absolute cursor-pointer z-10"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: `rotate(${rotation}deg)`
        }}
        onClick={() => setIsDialogOpen(true)}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M22 7.24L20.85 6.1L17.54 5.27L14.23 3L12 5.91L9.77 3L6.46 5.27L3.15 6.1L2 7.24L5.08 10.16L4 13.28L5.15 16.4L8.92 19.06L12 18L15.08 19.06L18.85 16.4L20 13.28L18.92 10.16L22 7.24Z" 
            fill={fillColor} 
            stroke="#1E3A70" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={isFlapping ? {
              rotate: [0, 15, 0, -15, 0],
              transition: { duration: 0.5 }
            } : {}}
          />
        </svg>
      </motion.div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="max-w-md rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-center font-medium">Птичка говорит</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-center">
            {birdText}
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default StaticBird;
