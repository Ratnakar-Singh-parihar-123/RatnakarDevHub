import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 9399741051",
      action: "tel:+919399741051",
      available: "Mon-Fri, 9AM-6PM EST",
      color: "text-blue-400"
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Us",
      description: "Send us a detailed message",
      value: "hello@ratnakardevhub.com",
      action: "mailto:hello@ratnakardevhub.com",
      available: "24/7 Response",
      color: "text-green-400"
    },
    {
      id: 3,
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Get instant support",
      value: "Start Chat",
      action: "#",
      available: "Online Now",
      color: "text-purple-400"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Book Meeting",
      description: "Schedule a consultation",
      value: "Book Now",
      action: "#",
      available: "Available Slots",
      color: "text-orange-400"
    }
  ];

  const emergencyContact = {
    icon: "AlertCircle",
    title: "Emergency Support",
    description: "For urgent project issues",
    value: "+91 9399741051",
    action: "tel:+919399741051",
    available: "24/7 Emergency Line"
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold holographic-text mb-6">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose your preferred communication method. We're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods?.map((method, index) => (
            <motion.div
              key={method?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-6 rounded-xl hover:neon-glow-hover smooth-transition group cursor-pointer"
              onClick={() => {
                if (method?.action?.startsWith('tel:') || method?.action?.startsWith('mailto:')) {
                  window.location.href = method?.action;
                }
              }}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto floating-sphere flex items-center justify-center ${method?.color} group-hover:scale-110 smooth-transition`}>
                  <Icon name={method?.icon} size={24} className="text-black" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {method?.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {method?.description}
                  </p>
                  <p className={`font-medium ${method?.color} mb-2`}>
                    {method?.value}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {method?.available}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glassmorphism p-6 rounded-xl neon-border max-w-md mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 floating-sphere flex items-center justify-center text-red-400">
              <Icon name={emergencyContact?.icon} size={20} className="text-black" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-text-primary">
                {emergencyContact?.title}
              </h4>
              <p className="text-sm text-text-secondary mb-1">
                {emergencyContact?.description}
              </p>
              <p className="text-red-400 font-medium">
                {emergencyContact?.value}
              </p>
              <p className="text-xs text-text-secondary">
                {emergencyContact?.available}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethods;