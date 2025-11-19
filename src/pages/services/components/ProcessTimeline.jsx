import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a comprehensive roadmap for success.",
      icon: "Search",
      duration: "1-2 weeks",
      deliverables: ["Project Brief", "Technical Specification", "Timeline & Milestones"]
    },
    {
      id: 2,
      title: "Design & Architecture",
      description: "Our team creates wireframes, prototypes, and system architecture to visualize your solution.",
      icon: "Palette",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "System Architecture", "Database Design"]
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies with continuous testing and quality assurance.",
      icon: "Code",
      duration: "4-12 weeks",
      deliverables: ["MVP Development", "Quality Testing", "Performance Optimization"]
    },
    {
      id: 4,
      title: "Deployment & Launch",
      description: "We deploy your solution to production environments and ensure smooth launch operations.",
      icon: "Rocket",
      duration: "1 week",
      deliverables: ["Production Deployment", "Launch Support", "Performance Monitoring"]
    },
    {
      id: 5,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your solution running optimally.",
      icon: "Shield",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Reports"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold holographic-text">
          Our Development Process
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          A proven methodology that ensures project success from concept to deployment
        </p>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block"></div>

        <div className="space-y-8">
          {processSteps?.map((step, index) => (
            <motion.div
              key={step?.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
                {/* Step Number & Icon */}
                <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-2 lg:w-24 flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 floating-sphere flex items-center justify-center">
                      <Icon 
                        name={step?.icon} 
                        size={24} 
                        className="text-black font-bold" 
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary text-black rounded-full flex items-center justify-center text-xs font-bold">
                      {step?.id}
                    </div>
                  </div>
                  <div className="text-sm text-primary font-medium lg:text-center">
                    {step?.duration}
                  </div>
                </div>

                {/* Step Content */}
                <div className="glassmorphism rounded-xl p-6 flex-1">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      {step?.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {step?.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step?.deliverables?.map((deliverable, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-surface/50 text-xs text-text-secondary rounded-full neon-border-subtle"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;