import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderStory = () => {
  const founderData = {
    name: "Ratnakar Singh Parihar",
    title: "Founder & Lead Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s",
    imageAlt: "Professional headshot of Indian man with short black hair wearing dark blue shirt in modern office setting",
    experience: "8+ Years",
    specialization: "Full-Stack Development & System Architecture",
    story: `My journey began with a simple belief: technology should empower, not complicate. After spending years in corporate environments, I witnessed firsthand how businesses struggled with digital transformation—not because of lack of vision, but because of the gap between technical complexity and business needs.\n\nRatnakar DevHub was born from this realization. We're not just developers; we're translators between the world of code and the language of business growth. Every line of code we write, every system we architect, serves a greater purpose: enabling businesses to focus on what they do best while we handle the technical complexities.\n\nOur approach is different. We don't just build applications; we craft digital experiences that grow with your business. We believe in the power of clean code, elegant solutions, and most importantly, genuine partnerships with our clients.`,
    achievements: [
    { icon: "Trophy", text: "50+ Successful Projects" },
    { icon: "Users", text: "30+ Happy Clients" },
    { icon: "Code", text: "100K+ Lines of Code" },
    { icon: "Globe", text: "15+ Countries Served" }],

    philosophy: "Building tomorrow's technology today, one elegant solution at a time."
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="holographic-text">Founder's Story</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The vision behind Ratnakar DevHub and our mission to bridge technology and business success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8">

            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 neon-glow">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden neon-border">
                      <Image
                        src={founderData?.image}
                        alt={founderData?.imageAlt}
                        className="w-full h-full object-cover" />

                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 floating-sphere flex items-center justify-center">
                      <Icon name="Crown" size={24} className="text-black" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-text-primary">{founderData?.name}</h3>
                    <p className="text-primary font-medium">{founderData?.title}</p>
                    <p className="text-text-secondary">{founderData?.specialization}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-text-secondary">{founderData?.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {founderData?.achievements?.map((achievement, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-lg p-4 text-center">

                  <Icon name={achievement?.icon} size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-text-primary">{achievement?.text}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8">

            <div className="glassmorphism rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon name="Quote" size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold text-text-primary">The Journey</h3>
                </div>
                
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  {founderData?.story?.split('\n\n')?.map((paragraph, index) =>
                  <p key={index}>{paragraph}</p>
                  )}
                </div>

                <div className="border-t border-surface pt-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Philosophy</h4>
                      <p className="text-text-secondary italic">{founderData?.philosophy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="glassmorphism rounded-xl p-6 neon-border-subtle">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Target" size={20} className="text-primary" />
                <h4 className="font-semibold text-text-primary">Our Mission</h4>
              </div>
              <p className="text-text-secondary">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create lasting digital transformation. We believe in 
                building partnerships, not just products.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default FounderStory;