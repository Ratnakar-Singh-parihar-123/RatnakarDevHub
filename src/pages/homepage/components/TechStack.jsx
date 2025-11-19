import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with cutting-edge frameworks',
      icon: 'Monitor',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: 'Code', description: 'Component-based UI library' },
        { name: 'Next.js', icon: 'Layers', description: 'Full-stack React framework' },
        { name: 'TypeScript', icon: 'FileCode', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', icon: 'Palette', description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', icon: 'Zap', description: 'Animation library' },
        { name: 'Vite', icon: 'Rocket', description: 'Fast build tool' }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust architecture',
      icon: 'Server',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', icon: 'Code2', description: 'JavaScript runtime' },
        { name: 'Express.js', icon: 'Globe', description: 'Web application framework' },
        { name: 'Python', icon: 'FileCode2', description: 'Versatile programming language' },
        { name: 'PostgreSQL', icon: 'Database', description: 'Relational database' },
        { name: 'MongoDB', icon: 'HardDrive', description: 'NoSQL database' },
        { name: 'Redis', icon: 'Zap', description: 'In-memory data store' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      description: 'Modern deployment and infrastructure management solutions',
      icon: 'Cloud',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'AWS', icon: 'CloudLightning', description: 'Amazon Web Services' },
        { name: 'Docker', icon: 'Package', description: 'Containerization platform' },
        { name: 'Kubernetes', icon: 'Boxes', description: 'Container orchestration' },
        { name: 'GitHub Actions', icon: 'GitBranch', description: 'CI/CD automation' },
        { name: 'Terraform', icon: 'Settings', description: 'Infrastructure as code' },
        { name: 'Nginx', icon: 'Shield', description: 'Web server & proxy' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance',
      icon: 'Smartphone',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'React Native', icon: 'Smartphone', description: 'Cross-platform framework' },
        { name: 'Expo', icon: 'Zap', description: 'React Native toolchain' },
        { name: 'Flutter', icon: 'Code', description: 'Google\'s UI toolkit' },
        { name: 'Swift', icon: 'Apple', description: 'iOS development' },
        { name: 'Kotlin', icon: 'Code2', description: 'Android development' },
        { name: 'Firebase', icon: 'Database', description: 'Backend-as-a-Service' }
      ]
    }
  };

  const categoryKeys = Object.keys(techCategories);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
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
            <span className="text-white">Technology </span>
            <span className="holographic-text">Stack</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our innovative solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryKeys?.map((category) => {
            const isActive = activeCategory === category;
            const categoryData = techCategories?.[category];
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'glassmorphism neon-border text-primary' :'bg-surface/30 text-text-secondary hover:text-white hover:bg-surface/50'
                }`}
              >
                <Icon 
                  name={categoryData?.icon} 
                  size={20} 
                  className={isActive ? 'text-primary' : 'text-current'} 
                />
                <span className="font-semibold">{categoryData?.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-8 rounded-2xl"
        >
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full bg-gradient-to-r ${techCategories?.[activeCategory]?.color} shadow-lg`}>
                <Icon 
                  name={techCategories?.[activeCategory]?.icon} 
                  size={32} 
                  className="text-white" 
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {techCategories?.[activeCategory]?.title}
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {techCategories?.[activeCategory]?.description}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories?.[activeCategory]?.technologies?.map((tech, index) => (
              <motion.div
                key={tech?.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-surface/30 p-6 rounded-xl border border-surface hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon 
                      name={tech?.icon} 
                      size={24} 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                      {tech?.name}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tech?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-secondary mb-6">
            Want to see these technologies in action?
          </p>
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 glassmorphism px-8 py-4 rounded-xl hover:neon-border transition-all duration-300 group"
          >
            <Icon name="Eye" size={20} className="text-primary" />
            <span className="text-white group-hover:text-primary font-semibold text-lg">
              View Our Portfolio
            </span>
            <Icon 
              name="ArrowRight" 
              size={20} 
              className="text-primary group-hover:translate-x-1 transition-transform" 
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;