import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 floating-sphere opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 floating-sphere opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 floating-sphere opacity-25"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 floating-sphere flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-black" />
                </div>
                <span className="text-primary font-mono text-sm tracking-wider uppercase">
                  About Ratnakar DevHub
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                <span className="holographic-text">The Future-Forward</span>
                <br />
                <span className="text-text-primary">Development Partner</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-text-secondary leading-relaxed max-w-2xl"
              >
                We embody the perfect fusion of technical mastery and creative innovation. 
                The bridge between complex technology and elegant solutions, where black represents 
                the depth of technical expertise and neon green symbolizes the spark of innovation and growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-lg">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="text-text-primary font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-lg">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-text-primary font-medium">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-lg">
                <Icon name="Globe" size={20} className="text-primary" />
                <span className="text-text-primary font-medium">Global Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glassmorphism rounded-2xl p-8 neon-glow">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Icon name="Code" size={40} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-text-primary">Technical Excellence</h3>
                    <p className="text-sm text-text-secondary">Cutting-edge solutions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Icon name="Lightbulb" size={40} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-text-primary">Innovation</h3>
                    <p className="text-sm text-text-secondary">Creative problem solving</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Icon name="Heart" size={40} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-text-primary">Human Warmth</h3>
                    <p className="text-sm text-text-secondary">Approachable expertise</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Icon name="Rocket" size={40} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-text-primary">Future Ready</h3>
                    <p className="text-sm text-text-secondary">Tomorrow's technology</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;