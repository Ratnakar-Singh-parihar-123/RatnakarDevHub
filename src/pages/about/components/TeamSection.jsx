import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Frontend Developer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bd1d466-1763295184837.png",
    imageAlt: "Professional headshot of Indian woman with long dark hair wearing white blazer in modern office",
    experience: "5+ Years",
    specialization: "React, Vue.js, UI/UX Design",
    bio: "Priya brings pixel-perfect designs to life with her expertise in modern frontend frameworks. She has a keen eye for user experience and specializes in creating responsive, accessible web applications.",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Figma"],
    interests: ["Photography", "Digital Art", "Hiking"],
    achievements: ["Led 20+ frontend projects", "UI/UX certification", "Open source contributor"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Backend Architect",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1906b47b8-1763294374769.png",
    imageAlt: "Professional headshot of Indian man with short black hair and beard wearing navy blue shirt",
    experience: "6+ Years",
    specialization: "Node.js, Python, Cloud Architecture",
    bio: "Arjun designs and builds scalable backend systems that power modern applications. His expertise in cloud technologies and microservices architecture ensures robust and efficient solutions.",
    skills: ["Node.js", "Python", "AWS", "Docker", "MongoDB"],
    interests: ["Chess", "Cooking", "Tech Podcasts"],
    achievements: ["AWS Solutions Architect", "Built systems serving 1M+ users", "Tech conference speaker"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "DevOps Engineer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc1f2fd2-1763297375501.png",
    imageAlt: "Professional headshot of Caucasian woman with blonde hair wearing black blazer in tech office",
    experience: "4+ Years",
    specialization: "CI/CD, Kubernetes, Infrastructure",
    bio: "Sarah ensures smooth deployment and operation of applications with her expertise in DevOps practices. She specializes in automation, monitoring, and maintaining high-availability systems.",
    skills: ["Kubernetes", "Jenkins", "Terraform", "Monitoring", "Linux"],
    interests: ["Rock Climbing", "Automation", "Sustainability"],
    achievements: ["Reduced deployment time by 80%", "Kubernetes certification", "DevOps community leader"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Mobile Developer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_165afbdf1-1763293866263.png",
    imageAlt: "Professional headshot of Asian man with short black hair wearing gray sweater in modern workspace",
    experience: "5+ Years",
    specialization: "React Native, Flutter, iOS/Android",
    bio: "Michael creates seamless mobile experiences across platforms. His expertise in cross-platform development helps businesses reach users on any device with consistent, high-quality applications.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    interests: ["Mobile Gaming", "Fitness", "Travel"],
    achievements: ["50+ mobile apps published", "App Store featured apps", "Mobile development mentor"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            <span className="holographic-text">Meet Our Team</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The talented individuals who bring technical expertise and creative innovation to every project
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {teamMembers?.map((member) =>
          <motion.div
            key={member?.id}
            variants={itemVariants}
            className="glassmorphism rounded-2xl p-6 text-center cursor-pointer glassmorphism-hover smooth-transition"
            onClick={() => setSelectedMember(member)}>

              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neon-border">
                  <Image
                  src={member?.image}
                  alt={member?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-2 -right-8 w-8 h-8 floating-sphere flex items-center justify-center">
                  <Icon name="Star" size={16} className="text-black" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-text-primary">{member?.name}</h3>
                <p className="text-primary font-medium text-sm">{member?.role}</p>
                <p className="text-text-secondary text-sm">{member?.specialization}</p>
                
                <div className="flex items-center justify-center space-x-2 text-xs">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-text-secondary">{member?.experience}</span>
                </div>

                <div className="flex justify-center space-x-3 pt-2">
                  <Icon name="Linkedin" size={16} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                  <Icon name="Github" size={16} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                  <Icon name="Twitter" size={16} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6">

          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-text-primary mb-1">15+</h3>
            <p className="text-text-secondary text-sm">Team Members</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="Award" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-text-primary mb-1">25+</h3>
            <p className="text-text-secondary text-sm">Years Combined Experience</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="Code" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-text-primary mb-1">50+</h3>
            <p className="text-text-secondary text-sm">Technologies Mastered</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="Globe" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-text-primary mb-1">24/7</h3>
            <p className="text-text-secondary text-sm">Global Support</p>
          </div>
        </motion.div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember &&
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="glassmorphism rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-text-primary">Team Member Profile</h3>
              <button
              onClick={() => setSelectedMember(null)}
              className="p-2 rounded-lg hover:bg-surface/50 smooth-transition">

                <Icon name="X" size={20} className="text-text-secondary" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden neon-border mb-4">
                    <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <h4 className="text-xl font-semibold text-text-primary">{selectedMember?.name}</h4>
                  <p className="text-primary font-medium">{selectedMember?.role}</p>
                  <p className="text-text-secondary text-sm">{selectedMember?.experience}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Code" size={16} className="text-primary mr-2" />
                    Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.skills?.map((skill, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full neon-border-subtle">

                        {skill}
                      </span>
                  )}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Heart" size={16} className="text-primary mr-2" />
                    Interests
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.interests?.map((interest, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full">

                        {interest}
                      </span>
                  )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="User" size={16} className="text-primary mr-2" />
                    About
                  </h5>
                  <p className="text-text-secondary leading-relaxed">{selectedMember?.bio}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Trophy" size={16} className="text-primary mr-2" />
                    Achievements
                  </h5>
                  <ul className="space-y-2">
                    {selectedMember?.achievements?.map((achievement, index) =>
                  <li key={index} className="flex items-center text-text-secondary">
                        <Icon name="CheckCircle" size={14} className="text-primary mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                  )}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-3">Connect</h5>
                  <div className="flex space-x-4">
                    <Icon name="Linkedin" size={20} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                    <Icon name="Github" size={20} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                    <Icon name="Twitter" size={20} className="text-text-secondary hover:text-primary cursor-pointer smooth-transition" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </section>);

};

export default TeamSection;