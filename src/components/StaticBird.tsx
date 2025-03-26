
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
  birdImage: string;
}

const StaticBird: React.FC<BirdProps> = ({ 
  color, 
  position, 
  rotation = 0, 
  birdText,
  delay = 0,
  birdImage
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

  return (
    <>
      <motion.div 
        className="absolute cursor-pointer z-20"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'bottom center', // Make birds appear to be sitting
        }}
        onClick={() => setIsDialogOpen(true)}
      >
        <motion.div
          animate={isFlapping ? {
            rotate: [0, 15, 0, -15, 0],
            transition: { duration: 0.5 }
          } : {}}
          style={{ width: '40px', height: '40px' }}
        >
          <img 
            src={birdImage} 
            alt={`${color} bird`} 
            className="w-full h-full object-contain" 
          />
        </motion.div>
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
