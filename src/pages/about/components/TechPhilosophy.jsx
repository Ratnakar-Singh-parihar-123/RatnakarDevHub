import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechPhilosophy = () => {
  const philosophyPrinciples = [
    {
      icon: "Code",
      title: "Clean Code Philosophy",
      description: "We believe in writing code that is not just functional, but elegant, maintainable, and self-documenting. Every line serves a purpose.",
      details: [
        "Readable and self-documenting code",
        "Consistent coding standards across projects",
        "Comprehensive testing and documentation",
        "Regular code reviews and refactoring"
      ]
    },
    {
      icon: "Layers",
      title: "Scalable Architecture",
      description: "Our solutions are built to grow with your business. We design systems that can handle increased load and evolving requirements.",
      details: [
        "Microservices and modular design",
        "Cloud-native architecture patterns",
        "Performance optimization from day one",
        "Future-proof technology choices"
      ]
    },
    {
      icon: "Shield",
      title: "Security First",
      description: "Security isn\'t an afterthought—it\'s built into every layer of our applications from the ground up.",
      details: [
        "Secure coding practices",
        "Regular security audits and testing",
        "Data encryption and privacy protection",
        "Compliance with industry standards"
      ]
    },
    {
      icon: "Users",
      title: "User-Centric Design",
      description: "Technology should serve people, not the other way around. We prioritize user experience in every technical decision.",
      details: [
        "Intuitive and accessible interfaces",
        "Performance optimization for all devices",
        "Continuous user feedback integration",
        "Inclusive design principles"
      ]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: "Monitor",
      technologies: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: "Backend",
      icon: "Server",
      technologies: ["Node.js", "Python", "Java", "Go", "PostgreSQL"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      category: "Mobile",
      icon: "Smartphone",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Deep dive into requirements, user needs, and technical constraints",
      icon: "Search"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Create scalable, maintainable system architecture and technical specifications",
      icon: "Layout"
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Iterative development with continuous integration and regular client feedback",
      icon: "Zap"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing, code reviews, and performance optimization",
      icon: "CheckCircle"
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing monitoring, maintenance, and support",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="holographic-text">Technology Philosophy</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our approach to building software that stands the test of time and drives real business value
          </p>
        </motion.div>

        {/* Philosophy Principles */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {philosophyPrinciples?.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glassmorphism rounded-2xl p-8 glassmorphism-hover smooth-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 floating-sphere flex items-center justify-center flex-shrink-0">
                    <Icon name={principle?.icon} size={20} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{principle?.title}</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">{principle?.description}</p>
                    <ul className="space-y-2">
                      {principle?.details?.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-text-secondary">
                          <Icon name="CheckCircle" size={14} className="text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-text-primary"
          >
            Our Technology Stack
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack?.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6 text-center glassmorphism-hover smooth-transition"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stack?.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={stack?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">{stack?.category}</h4>
                <div className="space-y-2">
                  {stack?.technologies?.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-1 bg-surface/50 text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-text-primary"
          >
            Our Development Process
          </motion.h3>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              {developmentProcess?.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-6 lg:mb-0`}>
                    <div className="glassmorphism rounded-2xl p-6 glassmorphism-hover smooth-transition">
                      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                        <div className="w-10 h-10 floating-sphere flex items-center justify-center">
                          <Icon name={process.icon} size={20} className="text-black" />
                        </div>
                        <span className="text-2xl font-bold text-primary">{process.step}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary mb-3">{process.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8 neon-glow max-w-4xl mx-auto">
            <Icon name="Quote" size={32} className="text-primary mx-auto mb-4" />
            <blockquote className="text-xl lg:text-2xl font-medium text-text-primary mb-4 leading-relaxed">
              "Technology is best when it brings people together. Our role is to create digital experiences 
              that not only solve problems but inspire and empower users to achieve more."
            </blockquote>
            <cite className="text-text-secondary">— Ratnakar DevHub Team</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechPhilosophy;