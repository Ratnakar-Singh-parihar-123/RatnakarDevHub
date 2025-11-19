import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 floating-sphere opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 floating-sphere opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full neon-border-subtle mb-6">
            <Icon name="Briefcase" size={16} className="text-primary" />
            <span className="text-primary font-medium">Our Work Portfolio</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="holographic-text">Transforming Ideas</span>
          <br />
          <span className="text-text-primary">Into Digital Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Explore our comprehensive portfolio showcasing cutting-edge web applications, mobile solutions, and digital transformations that have driven measurable success for businesses across industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary"
        >
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span>150+ Projects Delivered</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Star" size={16} className="text-warning" />
            <span>98% Client Satisfaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} className="text-primary" />
            <span>Industry Recognition</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;