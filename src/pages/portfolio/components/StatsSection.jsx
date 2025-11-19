import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'Trophy',
      value: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered across various industries',
      color: 'text-warning'
    },
    {
      icon: 'Users',
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys and reviews',
      color: 'text-success'
    },
    {
      icon: 'Clock',
      value: '2.5x',
      label: 'Faster Delivery',
      description: 'Compared to industry average timelines',
      color: 'text-primary'
    },
    {
      icon: 'TrendingUp',
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for our clients',
      color: 'text-accent'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="glassmorphism rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Proven Track Record of Excellence
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our portfolio speaks for itself. Here are the numbers that showcase our commitment to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-surface/50 flex items-center justify-center group-hover:neon-glow smooth-transition ${stat?.color}`}>
                  <Icon name={stat?.icon} size={28} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${stat?.color}`}>
                  {stat?.value}
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {stat?.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat?.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;