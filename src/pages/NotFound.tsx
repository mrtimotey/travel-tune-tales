
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center glass-card p-12 rounded-xl"
      >
        <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-8">Страница не найдена</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Вернуться на главную
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
