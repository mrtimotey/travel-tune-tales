
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import StaticBird from "../components/StaticBird";
import BackgroundImage from "../components/BackgroundImage";
import { useIsMobile } from "../hooks/use-mobile";

const NotFound = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BackgroundImage variant="home" />
      
      <StaticBird 
        color="yellow" 
        position={isMobile ? { x: 25, y: 20 } : { x: 35, y: 30 }} 
        rotation={-5}
        birdText="Ой! Кажется, вы заблудились. Такой страницы не существует."
        delay={0}
        birdImage="/birds/yellow-bird-1.png"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center glass-card p-8 md:p-12 rounded-2xl z-10 mx-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-secondary">404</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">Страница не найдена</p>
        <Link 
          to="/" 
          className="px-4 md:px-6 py-2 md:py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors inline-block"
        >
          Вернуться на главную
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
