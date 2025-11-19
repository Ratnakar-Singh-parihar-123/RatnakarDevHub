import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicePreview = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: "Code",
      features: ["React & Next.js", "Node.js Backend", "Cloud Deployment", "Performance Optimization"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      icon: "Smartphone",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions for modern, resilient applications.",
      icon: "Cloud",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Auto Scaling"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Intelligent solutions powered by machine learning and artificial intelligence technologies.",
      icon: "Brain",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-900">
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
            <span className="holographic-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glassmorphism p-8 rounded-2xl ${service?.borderColor} group cursor-pointer`}
            >
              <Link to="/services" className="block">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service?.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      name={service?.icon} 
                      size={32} 
                      className="text-primary" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {service?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service?.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary neon-glow" />
                      <span className="text-text-secondary group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center space-x-2 text-primary group-hover:text-neon-bright transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform" 
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 glassmorphism px-8 py-4 rounded-xl hover:neon-border transition-all duration-300 group"
          >
            <span className="text-lg font-semibold text-white group-hover:text-primary">
              Explore All Services
            </span>
            <Icon 
              name="ExternalLink" 
              size={20} 
              className="text-primary group-hover:scale-110 transition-transform" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePreview;