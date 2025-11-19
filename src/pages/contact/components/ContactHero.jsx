import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-gray-900 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 floating-sphere opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 floating-sphere opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 floating-sphere opacity-25"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 floating-sphere flex items-center justify-center neon-glow">
              <Icon name="MessageSquare" size={32} className="text-black" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
            Let's Build Something
            <br />
            <span className="text-primary">Amazing Together</span>
          </h1>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital vision into reality? Our team of expert developers is here to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Clock" size={16} />
              <span className="text-sm">24h Response Time</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Shield" size={16} />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Award" size={16} />
              <span className="text-sm">Expert Consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;