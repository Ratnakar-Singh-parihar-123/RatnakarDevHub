import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import OfficeInfo from './components/OfficeInfo';
import FAQ from './components/FAQ';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Ratnakar DevHub | Start Your Project Today</title>
        <meta 
          name="description" 
          content="Get in touch with Ratnakar DevHub for your next development project. Multiple contact methods, expert consultation, and 24-hour response time guaranteed." 
        />
        <meta name="keywords" content="contact, consultation, project inquiry, development services, tech support" />
        <meta property="og:title" content="Contact Ratnakar DevHub - Expert Development Services" />
        <meta property="og:description" content="Ready to transform your digital vision? Contact our expert development team for consultation and project quotes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ratnakardevhub.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          <ContactMethods />
          <ContactForm />
          <OfficeInfo />
          <FAQ />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-surface py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
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
                  Transforming digital visions into reality with cutting-edge technology and innovative solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                    <span className="sr-only">LinkedIn</span>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                      <span className="text-sm">Li</span>
                    </div>
                  </a>
                  <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                    <span className="sr-only">Twitter</span>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                      <span className="text-sm">Tw</span>
                    </div>
                  </a>
                  <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                    <span className="sr-only">GitHub</span>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                      <span className="text-sm">Gh</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-text-secondary hover:text-primary smooth-transition">Services</a></li>
                  <li><a href="/portfolio" className="text-text-secondary hover:text-primary smooth-transition">Portfolio</a></li>
                  <li><a href="/pricing" className="text-text-secondary hover:text-primary smooth-transition">Pricing</a></li>
                  <li><a href="/about" className="text-text-secondary hover:text-primary smooth-transition">About</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Contact</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>+91 9399741051</li>
                  <li>hello@ratnakardevhub.com</li>
                  <li>MP BHOPAL, INDIA 🌎</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-surface mt-8 pt-8 text-center text-text-secondary">
              <p>&copy; {new Date()?.getFullYear()} Ratnakar DevHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;