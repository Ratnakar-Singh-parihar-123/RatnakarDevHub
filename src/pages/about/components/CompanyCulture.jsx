import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyCulture = () => {
  const cultureValues = [
  {
    icon: "Lightbulb",
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative problem-solving approaches to deliver solutions that push boundaries.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: "Users",
    title: "Collaborative Spirit",
    description: "Our team thrives on collaboration, knowledge sharing, and supporting each other to achieve collective success.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: "Target",
    title: "Quality Excellence",
    description: "We maintain the highest standards in code quality, testing, and delivery, ensuring every project exceeds expectations.",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    icon: "Heart",
    title: "Client-Centric",
    description: "Every decision we make is guided by our commitment to delivering exceptional value and building lasting partnerships.",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: "Zap",
    title: "Continuous Learning",
    description: "We invest in our team's growth through training, conferences, and exploring emerging technologies and methodologies.",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: "Shield",
    title: "Integrity & Trust",
    description: "Transparency, honesty, and ethical practices form the foundation of all our client relationships and internal operations.",
    color: "from-gray-500/20 to-slate-500/20"
  }];


  const workEnvironment = [
  {
    title: "Flexible Work Arrangements",
    description: "Remote-first culture with flexible hours that promote work-life balance",
    image: "https://images.unsplash.com/photo-1720774531750-9483452857fb",
    imageAlt: "Modern home office setup with laptop, plants, and natural lighting showing remote work environment"
  },
  {
    title: "Continuous Learning",
    description: "Regular tech talks, conference attendance, and skill development programs",
    image: "https://images.unsplash.com/photo-1719978184147-c5bf6b82c6e1",
    imageAlt: "Team meeting in modern conference room with people collaborating around a table with laptops"
  },
  {
    title: "Innovation Time",
    description: "Dedicated time for personal projects and exploring new technologies",
    image: "https://images.unsplash.com/photo-1566924534124-f009c8277a1c",
    imageAlt: "Developer working on innovative project with multiple monitors showing code and design interfaces"
  },
  {
    title: "Team Building",
    description: "Regular team events, hackathons, and collaborative projects",
    image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78",
    imageAlt: "Diverse team of professionals celebrating success with high-fives in modern office space"
  }];


  const benefits = [
  { icon: "Clock", title: "Flexible Hours", description: "Work when you\'re most productive" },
  { icon: "Home", title: "Remote Work", description: "Work from anywhere in the world" },
  { icon: "BookOpen", title: "Learning Budget", description: "Annual budget for courses and conferences" },
  { icon: "Coffee", title: "Wellness Program", description: "Health and wellness support" },
  { icon: "Gamepad2", title: "Team Events", description: "Regular team building activities" },
  { icon: "Award", title: "Recognition", description: "Performance-based rewards and recognition" }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="holographic-text">Our Culture</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collaborative environment where innovation thrives and every team member contributes to our shared success
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-text-primary">

            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues?.map((value, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 glassmorphism-hover smooth-transition">

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value?.color} flex items-center justify-center mb-4`}>
                  <Icon name={value?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">{value?.title}</h4>
                <p className="text-text-secondary leading-relaxed">{value?.description}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Work Environment */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-text-primary">

            Work Environment
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workEnvironment?.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism rounded-2xl overflow-hidden glassmorphism-hover smooth-transition">

                <div className="h-48 overflow-hidden">
                  <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{item?.title}</h4>
                  <p className="text-text-secondary">{item?.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Benefits & Perks */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-text-primary">

            Benefits & Perks
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits?.map((benefit, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 text-center glassmorphism-hover smooth-transition">

                <div className="w-12 h-12 floating-sphere flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={20} className="text-black" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{benefit?.title}</h4>
                <p className="text-text-secondary text-sm">{benefit?.description}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16">

          <div className="glassmorphism rounded-2xl p-8 neon-glow">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Join Our Growing Team</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. Be part of building tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg neon-glow-hover smooth-transition">
                View Open Positions
              </button>
              <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 smooth-transition">
                Send Your Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CompanyCulture;