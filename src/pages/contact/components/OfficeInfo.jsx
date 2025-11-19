import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const OfficeInfo = () => {
  const officeDetails = {
    address: {
      street: "123 Innovation Drive, Suite 400",
      city: "San Francisco, CA 94105",
      country: "United States"
    },
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM PST" },
      { day: "Sunday", time: "Closed" }
    ],
    socialMedia: [
      { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/ratnakardevhub", color: "text-blue-400" },
      { name: "Twitter", icon: "Twitter", url: "https://twitter.com/ratnakardevhub", color: "text-sky-400" },
      { name: "GitHub", icon: "Github", url: "https://github.com/ratnakardevhub", color: "text-gray-400" },
      { name: "Dribbble", icon: "Dribbble", url: "https://dribbble.com/ratnakardevhub", color: "text-pink-400" }
    ]
  };

  const features = [
    {
      icon: "MapPin",
      title: "Prime Location",
      description: "Located in the heart of San Francisco\'s tech district"
    },
    {
      icon: "Wifi",
      title: "Modern Facilities",
      description: "State-of-the-art office with high-speed internet"
    },
    {
      icon: "Coffee",
      title: "Client Lounge",
      description: "Comfortable meeting spaces for client consultations"
    },
    {
      icon: "Car",
      title: "Easy Access",
      description: "Convenient parking and public transportation"
    }
  ];

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
            Visit Our Office
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Drop by for a coffee and let's discuss your project in person. We'd love to meet you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="glassmorphism p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 floating-sphere flex items-center justify-center text-primary">
                  <Icon name="MapPin" size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Office Address
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {officeDetails?.address?.street}<br />
                    {officeDetails?.address?.city}<br />
                    {officeDetails?.address?.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="glassmorphism p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 floating-sphere flex items-center justify-center text-green-400">
                  <Icon name="Clock" size={20} className="text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    {officeDetails?.hours?.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-text-secondary">{schedule?.day}</span>
                        <span className="text-text-primary font-medium">{schedule?.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glassmorphism p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 floating-sphere flex items-center justify-center text-purple-400">
                  <Icon name="Share2" size={20} className="text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {officeDetails?.socialMedia?.map((social, index) => (
                      <a
                        key={index}
                        href={social?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 p-3 rounded-lg bg-surface/50 hover:bg-surface smooth-transition group ${social?.color}`}
                      >
                        <Icon name={social?.icon} size={16} />
                        <span className="text-sm font-medium">{social?.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Office Features */}
            <div className="grid grid-cols-2 gap-4">
              {features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism p-4 rounded-lg text-center"
                >
                  <div className="w-10 h-10 floating-sphere mx-auto mb-3 flex items-center justify-center text-primary">
                    <Icon name={feature?.icon} size={16} className="text-black" />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {feature?.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {feature?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="Navigation" size={20} className="text-primary" />
              <span>Find Us Here</span>
            </h3>
            
            <div className="relative h-96 rounded-lg overflow-hidden neon-border-subtle">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Ratnakar DevHub Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeDetails?.coordinates?.lat},${officeDetails?.coordinates?.lng}&z=14&output=embed`}
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-text-secondary">
              <span>📍 San Francisco Tech District</span>
              <a
                href={`https://www.google.com/maps?q=${officeDetails?.coordinates?.lat},${officeDetails?.coordinates?.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 smooth-transition flex items-center space-x-1"
              >
                <Icon name="ExternalLink" size={14} />
                <span>Open in Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;