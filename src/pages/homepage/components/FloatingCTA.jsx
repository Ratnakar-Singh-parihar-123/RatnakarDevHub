import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating CTA after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaOptions = [
    {
      id: 'project',
      title: 'Start Project',
      description: 'Begin your digital transformation',
      icon: 'Rocket',
      link: '/contact',
      color: 'from-primary to-green-400'
    },
    {
      id: 'consultation',
      title: 'Free Consultation',
      description: 'Discuss your requirements',
      icon: 'MessageCircle',
      link: '/contact',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'portfolio',
      title: 'View Portfolio',
      description: 'See our latest work',
      icon: 'Eye',
      link: '/portfolio',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="mb-4 space-y-3"
              >
                {ctaOptions?.map((option, index) => (
                  <motion.div
                    key={option?.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      to={option?.link}
                      className="flex items-center space-x-3 glassmorphism p-4 rounded-xl hover:neon-border transition-all duration-300 group min-w-64"
                      onClick={() => setIsExpanded(false)}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${option?.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon 
                          name={option?.icon} 
                          size={20} 
                          className="text-white" 
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold group-hover:text-primary transition-colors">
                          {option?.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {option?.description}
                        </p>
                      </div>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="text-primary group-hover:translate-x-1 transition-transform" 
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              variant="default"
              size="lg"
              className="w-16 h-16 rounded-full neon-glow floating-sphere shadow-2xl"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon 
                  name={isExpanded ? "X" : "Plus"} 
                  size={24} 
                  className="text-black" 
                />
              </motion.div>
            </Button>

            {/* Pulse Animation */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>

          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 glassmorphism px-3 py-2 rounded-lg whitespace-nowrap"
            >
              <span className="text-sm text-white font-medium">
                Need help? Click here!
              </span>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-surface border-t-2 border-b-2 border-t-transparent border-b-transparent" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;