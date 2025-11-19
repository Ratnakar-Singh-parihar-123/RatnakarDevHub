import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LiveCounters = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const targetValues = {
    projects: 150,
    clients: 89,
    experience: 8,
    satisfaction: 98
  };

  const counterData = [
    {
      key: 'projects',
      label: 'Projects Completed',
      icon: 'CheckCircle',
      suffix: '+',
      color: 'text-primary'
    },
    {
      key: 'clients',
      label: 'Happy Clients',
      icon: 'Users',
      suffix: '+',
      color: 'text-blue-400'
    },
    {
      key: 'experience',
      label: 'Years Experience',
      icon: 'Award',
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      key: 'satisfaction',
      label: 'Client Satisfaction',
      icon: 'Star',
      suffix: '%',
      color: 'text-yellow-400'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setCounters({
          projects: Math.floor(targetValues?.projects * easeOutProgress),
          clients: Math.floor(targetValues?.clients * easeOutProgress),
          experience: Math.floor(targetValues?.experience * easeOutProgress),
          satisfaction: Math.floor(targetValues?.satisfaction * easeOutProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues); // Ensure exact final values
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500); // Start after 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-background to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Proven </span>
            <span className="holographic-text">Results</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </motion.div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData?.map((item, index) => (
            <motion.div
              key={item?.key}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glassmorphism p-8 rounded-2xl text-center group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-surface/50 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon 
                    name={item?.icon} 
                    size={32} 
                    className={`${item?.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>
              </div>

              {/* Counter Value */}
              <div className="mb-4">
                <motion.span
                  className={`text-4xl md:text-5xl font-bold ${item?.color} block`}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {counters?.[item?.key]}{item?.suffix}
                </motion.span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                {item?.label}
              </h3>

              {/* Animated Progress Bar */}
              <motion.div
                className="mt-4 h-1 bg-surface rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${item?.color?.replace('text-', 'from-')} to-primary rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-secondary mb-6">
            Ready to become our next success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 glassmorphism px-6 py-3 rounded-xl hover:neon-border transition-all duration-300 group"
            >
              <Icon name="MessageCircle" size={20} className="text-primary" />
              <span className="text-white group-hover:text-primary font-semibold">
                Start Your Project
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveCounters;