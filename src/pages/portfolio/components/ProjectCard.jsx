import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glassmorphism rounded-xl overflow-hidden group hover:neon-glow-hover smooth-transition"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full neon-border-subtle">
            {project?.type}
          </span>
        </div>

        {/* Technology Stack */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project?.technologies?.slice(0, 3)?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-surface/80 text-text-primary text-xs rounded-md backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-surface/80 text-text-secondary text-xs rounded-md backdrop-blur-sm">
              +{project?.technologies?.length - 3}
            </span>
          )}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary smooth-transition">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            <Icon name="Star" size={16} className="fill-current" />
            <span className="text-sm font-medium">{project?.rating}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Project Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{project?.metrics?.performance}</div>
            <div className="text-xs text-text-secondary">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-success">{project?.metrics?.roi}</div>
            <div className="text-xs text-text-secondary">ROI Increase</div>
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
              src={project?.client?.logo}
              alt={project?.client?.logoAlt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-text-primary">{project?.client?.name}</div>
              <div className="text-xs text-text-secondary">{project?.client?.industry}</div>
            </div>
          </div>
          <div className="text-xs text-text-secondary">{project?.duration}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="ExternalLink"
            iconPosition="right"
            iconSize={14}
          >
            Live Demo
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="right"
            iconSize={14}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;