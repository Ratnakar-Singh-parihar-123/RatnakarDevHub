import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const timelineEvents = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Ratnakar DevHub was founded with a vision to bridge the gap between complex technology and business needs.",
      icon: "Rocket",
      achievements: [
        "Company founded by Ratnakar Singh",
        "First client project completed",
        "Established core development principles"
      ]
    },
    {
      year: "2020",
      title: "Growth & Expansion",
      description: "Expanded our team and service offerings, focusing on modern web technologies and cloud solutions.",
      icon: "TrendingUp",
      achievements: [
        "Team grew to 5 developers",
        "Launched cloud migration services",
        "Completed 15+ successful projects"
      ]
    },
    {
      year: "2021",
      title: "Innovation Focus",
      description: "Invested heavily in emerging technologies and established our reputation for cutting-edge solutions.",
      icon: "Lightbulb",
      achievements: [
        "Introduced AI/ML capabilities",
        "Launched mobile development division",
        "Achieved 98% client satisfaction rate"
      ]
    },
    {
      year: "2022",
      title: "Market Leadership",
      description: "Became a recognized leader in full-stack development with a focus on scalable, enterprise-grade solutions.",
      icon: "Award",
      achievements: [
        "Served 30+ clients globally",
        "Launched DevOps and infrastructure services",
        "Established partnerships with major cloud providers"
      ]
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Expanded into comprehensive digital transformation consulting, helping businesses modernize their entire tech stack.",
      icon: "Zap",
      achievements: [
        "Team expanded to 15+ professionals",
        "Launched enterprise consulting division",
        "Completed 50+ successful transformations"
      ]
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Continuing to innovate and lead in emerging technologies while maintaining our commitment to excellence.",
      icon: "Star",
      achievements: [
        "Introduced AI-powered development tools",
        "Expanded global client base",
        "Launched mentorship and training programs"
      ]
    }
  ];

  const milestones = [
    { number: "50+", label: "Projects Completed", icon: "CheckCircle" },
    { number: "30+", label: "Happy Clients", icon: "Users" },
    { number: "15+", label: "Team Members", icon: "UserCheck" },
    { number: "5+", label: "Years of Excellence", icon: "Calendar" }
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
            <span className="holographic-text">Our Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From a small startup to a leading development partner - the milestones that shaped our story
          </p>
        </motion.div>

        {/* Milestones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
          {milestones?.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 text-center glassmorphism-hover smooth-transition"
            >
              <Icon name={milestone?.icon} size={32} className="text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-text-primary mb-1">{milestone?.number}</h3>
              <p className="text-text-secondary text-sm">{milestone?.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full"></div>
          
          <div className="space-y-16">
            {timelineEvents?.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="glassmorphism rounded-2xl p-8 glassmorphism-hover smooth-transition">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 floating-sphere flex items-center justify-center">
                        <Icon name={event?.icon} size={24} className="text-black" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{event?.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{event?.title}</h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">{event?.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-text-primary text-sm mb-3">Key Achievements:</h4>
                      {event?.achievements?.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm text-text-secondary">
                          <Icon name="CheckCircle" size={14} className="text-primary mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg">
                    <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glassmorphism rounded-2xl p-8 neon-glow">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Icon name="Telescope" size={32} className="text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Looking Ahead</h3>
            </div>
            
            <p className="text-xl text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
              As we continue to grow, our commitment remains unchanged: delivering exceptional technology 
              solutions that empower businesses to thrive in the digital age. The future holds exciting 
              possibilities, and we're ready to build them together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Globe" size={24} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary mb-1">Global Expansion</h4>
                <p className="text-sm text-text-secondary">Serving clients worldwide</p>
              </div>
              <div className="text-center">
                <Icon name="Cpu" size={24} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary mb-1">AI Integration</h4>
                <p className="text-sm text-text-secondary">Leading in AI-powered solutions</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-text-primary mb-1">Team Growth</h4>
                <p className="text-sm text-text-secondary">Expanding our talented team</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline;