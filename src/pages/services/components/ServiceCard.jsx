import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glassmorphism rounded-2xl p-8 neon-glow-hover smooth-transition group"
    >
      {/* Service Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 floating-sphere flex items-center justify-center group-hover:scale-110 smooth-transition">
          <Icon 
            name={service?.icon} 
            size={32} 
            className="text-black font-bold" 
          />
        </div>
        {service?.isPopular && (
          <div className="absolute -top-2 -right-2 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
            Popular
          </div>
        )}
      </div>
      {/* Service Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary smooth-transition">
          {service?.title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed">
          {service?.description}
        </p>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-1">
            {service?.features?.slice(0, 3)?.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {service?.technologies?.slice(0, 4)?.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-surface/50 text-xs text-text-secondary rounded-full neon-border-subtle"
            >
              {tech}
            </span>
          ))}
          {service?.technologies?.length > 4 && (
            <span className="px-3 py-1 bg-surface/50 text-xs text-primary rounded-full neon-border-subtle">
              +{service?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Pricing Range */}
        <div className="flex items-center justify-between pt-4 border-t border-surface">
          <div>
            <span className="text-xs text-text-secondary">Starting from</span>
            <div className="text-xl font-bold text-primary">
              ${service?.startingPrice?.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-text-secondary">Timeline</span>
            <div className="text-sm font-medium text-text-primary">
              {service?.timeline}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Link to="/portfolio" className="flex items-center justify-center space-x-2 w-full">
              <Icon name="Eye" size={16} />
              <span>View Work</span>
            </Link>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 neon-glow"
          >
            <Link to="/contact" className="flex items-center justify-center space-x-2 w-full">
              <Icon name="MessageCircle" size={16} />
              <span>Get Quote</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;