import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onContactForSimilar }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glassmorphism rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">{project?.title}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full neon-border-subtle">
                      {project?.type}
                    </span>
                    <div className="flex items-center space-x-1 text-warning">
                      <Icon name="Star" size={16} className="fill-current" />
                      <span className="text-sm font-medium">{project?.rating}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  iconName="X"
                  iconSize={20}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src={project?.image}
                    alt={project?.imageAlt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    {project?.gallery?.map((img, index) => (
                      <Image
                        key={index}
                        src={img?.src}
                        alt={img?.alt}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Project Overview</h3>
                    <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
                  </div>

                  {/* Client Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Client</h3>
                    <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-lg">
                      <Image
                        src={project?.client?.logo}
                        alt={project?.client?.logoAlt}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-text-primary">{project?.client?.name}</div>
                        <div className="text-sm text-text-secondary">{project?.client?.industry}</div>
                        <div className="text-xs text-text-secondary">{project?.client?.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-surface/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{project?.metrics?.performance}</div>
                        <div className="text-sm text-text-secondary">Performance Boost</div>
                      </div>
                      <div className="text-center p-4 bg-surface/30 rounded-lg">
                        <div className="text-2xl font-bold text-success">{project?.metrics?.roi}</div>
                        <div className="text-sm text-text-secondary">ROI Increase</div>
                      </div>
                      <div className="text-center p-4 bg-surface/30 rounded-lg">
                        <div className="text-2xl font-bold text-warning">{project?.metrics?.users}</div>
                        <div className="text-sm text-text-secondary">Active Users</div>
                      </div>
                      <div className="text-center p-4 bg-surface/30 rounded-lg">
                        <div className="text-2xl font-bold text-accent">{project?.duration}</div>
                        <div className="text-sm text-text-secondary">Completion Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-surface/50 text-text-primary rounded-lg border border-border hover:border-primary smooth-transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">{feature?.title}</div>
                        <div className="text-sm text-text-secondary">{feature?.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project?.testimonial && (
                <div className="bg-surface/30 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={project?.testimonial?.avatar}
                      alt={project?.testimonial?.avatarAlt}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-text-secondary italic mb-3">"{project?.testimonial?.quote}"</p>
                      <div>
                        <div className="font-medium text-text-primary">{project?.testimonial?.name}</div>
                        <div className="text-sm text-text-secondary">{project?.testimonial?.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Live Project
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  iconName="Github"
                  iconPosition="right"
                >
                  View Source Code
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => onContactForSimilar(project)}
                  iconName="MessageCircle"
                  iconPosition="right"
                >
                  Request Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;