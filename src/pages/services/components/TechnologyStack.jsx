import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      description: "Modern, responsive user interfaces that deliver exceptional user experiences",
      technologies: [
        { name: "React", level: 95, description: "Component-based UI library" },
        { name: "Next.js", level: 90, description: "Full-stack React framework" },
        { name: "TypeScript", level: 88, description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework" },
        { name: "Framer Motion", level: 85, description: "Animation library" },
        { name: "Vue.js", level: 80, description: "Progressive JavaScript framework" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      description: "Scalable server-side solutions with robust APIs and database management",
      technologies: [
        { name: "Node.js", level: 93, description: "JavaScript runtime environment" },
        { name: "Python", level: 90, description: "Versatile programming language" },
        { name: "Express.js", level: 88, description: "Web application framework" },
        { name: "Django", level: 85, description: "High-level Python framework" },
        { name: "PostgreSQL", level: 87, description: "Advanced relational database" },
        { name: "MongoDB", level: 82, description: "NoSQL document database" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: "Smartphone",
      description: "Cross-platform mobile applications with native performance",
      technologies: [
        { name: "React Native", level: 88, description: "Cross-platform mobile framework" },
        { name: "Flutter", level: 85, description: "Google\'s UI toolkit" },
        { name: "Swift", level: 80, description: "iOS native development" },
        { name: "Kotlin", level: 78, description: "Android native development" },
        { name: "Expo", level: 83, description: "React Native platform" },
        { name: "Firebase", level: 86, description: "Mobile backend services" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "Cloud",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      technologies: [
        { name: "AWS", level: 90, description: "Amazon Web Services" },
        { name: "Docker", level: 88, description: "Containerization platform" },
        { name: "Kubernetes", level: 82, description: "Container orchestration" },
        { name: "Vercel", level: 85, description: "Frontend deployment platform" },
        { name: "GitHub Actions", level: 87, description: "CI/CD automation" },
        { name: "Terraform", level: 80, description: "Infrastructure as code" }
      ]
    }
  };

  const categories = Object.keys(techCategories);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold holographic-text">
          Technology Stack
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Cutting-edge technologies and frameworks we use to build exceptional digital solutions
        </p>
      </div>
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg smooth-transition ${
              activeCategory === category
                ? 'bg-primary/10 text-primary neon-border-subtle' :'text-text-secondary hover:text-primary hover:bg-surface/50'
            }`}
          >
            <Icon 
              name={techCategories?.[category]?.icon} 
              size={20} 
              className={activeCategory === category ? 'text-primary' : 'text-current'} 
            />
            <span className="font-medium capitalize">{category}</span>
          </button>
        ))}
      </div>
      {/* Active Category Content */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glassmorphism rounded-2xl p-8"
      >
        <div className="space-y-6">
          {/* Category Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 floating-sphere flex items-center justify-center">
                <Icon 
                  name={techCategories?.[activeCategory]?.icon} 
                  size={24} 
                  className="text-black font-bold" 
                />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                {techCategories?.[activeCategory]?.title}
              </h3>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {techCategories?.[activeCategory]?.description}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories?.[activeCategory]?.technologies?.map((tech, index) => (
              <motion.div
                key={tech?.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-surface/30 rounded-xl p-4 space-y-3 hover:bg-surface/50 smooth-transition"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-text-primary">{tech?.name}</h4>
                  <span className="text-sm text-primary font-medium">{tech?.level}%</span>
                </div>
                
                <p className="text-sm text-text-secondary">{tech?.description}</p>
                
                {/* Skill Level Bar */}
                <div className="space-y-1">
                  <div className="w-full bg-surface rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech?.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="bg-gradient-to-r from-primary to-neon-bright h-2 rounded-full neon-glow"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyStack;