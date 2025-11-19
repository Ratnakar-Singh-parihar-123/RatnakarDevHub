import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import LiveCounters from './components/LiveCounters';
import TechStack from './components/TechStack';
import TestimonialCarousel from './components/TestimonialCarousel';
import FloatingCTA from './components/FloatingCTA';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Service Preview Section */}
        <ServicePreview />

        {/* Live Counters Section */}
        <LiveCounters />

        {/* Technology Stack Section */}
        <TechStack />

        {/* Testimonial Carousel Section */}
        <TestimonialCarousel />

        {/* Newsletter & Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-t from-background to-gray-900"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="glassmorphism p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Ready to Build </span>
                <span className="holographic-text">Tomorrow's Technology?</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Join the innovators who trust Ratnakar DevHub to transform their digital vision into reality. 
                Your success story starts with a single conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-primary text-black px-8 py-4 rounded-xl font-semibold neon-glow-hover transition-all duration-300"
                >
                  <span>Start Your Project Today</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 glassmorphism px-8 py-4 rounded-xl text-white hover:text-primary hover:neon-border transition-all duration-300"
                >
                  <span>Explore Our Portfolio</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-surface">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-primary neon-glow" />
                  <span>150+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-primary neon-glow" />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-primary neon-glow" />
                  <span>8+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      {/* Floating CTA */}
      <FloatingCTA />
      {/* Footer */}
      <footer className="bg-black border-t border-surface py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 floating-sphere flex items-center justify-center">
                  <span className="text-black font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold holographic-text">RSP DevHub</h3>
                  <p className="text-sm text-text-secondary">Technical Artistry</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4 max-w-md">
                Building tomorrow's technology today. We transform ambitious visions into 
                cutting-edge digital solutions that drive growth and redefine possibilities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 rounded-full bg-surface/50 flex items-center justify-center hover:bg-primary/20">
                    <span>in</span>
                  </div>
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <div className="w-8 h-8 rounded-full bg-surface/50 flex items-center justify-center hover:bg-primary/20">
                    <span>gh</span>
                  </div>
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 rounded-full bg-surface/50 flex items-center justify-center hover:bg-primary/20">
                    <span>tw</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-text-secondary hover:text-primary transition-colors">Services</a></li>
                <li><a href="/portfolio" className="text-text-secondary hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="/pricing" className="text-text-secondary hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="/about" className="text-text-secondary hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>hello@ratnakardevhub.com</li>
                <li>+91 9399741051</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-surface mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} Ratnakar DevHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;