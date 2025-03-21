
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
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
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Return to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
