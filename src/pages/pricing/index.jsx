import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import PricingTier from './components/PricingTier';
import PricingCalculator from './components/PricingCalculator';
import ComparisonTable from './components/ComparisonTable';
import ROICalculator from './components/ROICalculator';
import CustomQuoteBuilder from './components/CustomQuoteBuilder';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('tiers');
  const [selectedTier, setSelectedTier] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [generatedQuote, setGeneratedQuote] = useState(null);

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      price: 2500,
      duration: 'project',
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive Design (Mobile, Tablet, Desktop)',
        'Up to 5 Pages',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        'Google Analytics Setup',
        'SSL Certificate Setup',
        'Basic Performance Optimization',
        '30 Days Post-Launch Support'
      ],
      limitations: [
        'No E-commerce functionality',
        'Limited to 2 revision rounds',
        'No advanced animations',
        'Basic CMS only'
      ],
      idealFor: 'Small businesses, personal portfolios, and simple informational websites that need a professional online presence.',
      deliveryTime: '2-3 weeks',
      support: 'Email',
      revisions: '2 rounds'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 7500,
      duration: 'project',
      description: 'Ideal for growing businesses with advanced requirements',
      features: [
        'Everything in Starter',
        'Up to 15 Pages',
        'Advanced SEO & Performance',
        'Content Management System',
        'E-commerce Integration (up to 50 products)',
        'Payment Gateway Integration',
        'User Authentication System',
        'Advanced Animations & Interactions',
        'API Integrations (3rd party)',
        'Email Marketing Integration',
        'Advanced Analytics & Tracking',
        '60 Days Post-Launch Support',
        'Training Session Included'
      ],
      limitations: [
        'Limited to 100 products for e-commerce',
        'Standard hosting recommendations'
      ],
      idealFor: 'Growing businesses, e-commerce stores, and organizations needing advanced functionality and professional design.',
      deliveryTime: '4-6 weeks',
      support: 'Priority Email + Phone',
      revisions: '4 rounds'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 15000,
      duration: 'project',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Web Application Development',
        'Advanced E-commerce (Unlimited products)',
        'Multi-user Dashboard & Roles',
        'Advanced Security Implementation',
        'Custom API Development',
        'Third-party System Integrations',
        'Advanced Performance Optimization',
        'Multi-language Support',
        'Advanced Analytics & Reporting',
        'Dedicated Project Manager',
        '90 Days Post-Launch Support',
        'Comprehensive Training Program',
        'Priority Support & Maintenance'
      ],
      limitations: [],
      idealFor: 'Large enterprises, complex web applications, and organizations requiring custom development and enterprise-grade features.',
      deliveryTime: '8-12 weeks',
      support: '24/7 Dedicated',
      revisions: 'Unlimited'
    }
  ];

  const tabOptions = [
    { id: 'tiers', label: 'Pricing Tiers', icon: 'DollarSign' },
    { id: 'calculator', label: 'Price Calculator', icon: 'Calculator' },
    { id: 'comparison', label: 'Feature Comparison', icon: 'BarChart3' },
    { id: 'roi', label: 'ROI Calculator', icon: 'TrendingUp' },
    { id: 'custom', label: 'Custom Quote', icon: 'FileText' }
  ];

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    // Scroll to contact section or open modal
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomizePackage = (tier) => {
    setSelectedTier(tier);
    setActiveTab('custom');
  };

  const handleQuoteGenerated = (quoteData) => {
    setGeneratedQuote(quoteData);
    setShowQuoteModal(true);
  };

  const handleQuoteSubmitted = (quoteData) => {
    setGeneratedQuote(quoteData);
    setShowQuoteModal(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="holographic-text">Transparent Pricing</span>
              <br />
              <span className="text-text-primary">For Every Project</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your project. No hidden fees, no surprises. 
              Just transparent, value-driven pricing that scales with your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="neon-glow-hover"
                onClick={() => setActiveTab('calculator')}
              >
                <Icon name="Calculator" size={18} className="mr-2" />
                Calculate Your Price
              </Button>
              
              <Button
                variant="outline"
                className="text-primary hover:bg-primary/10"
                onClick={() => setActiveTab('custom')}
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Get Custom Quote
              </Button>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {tabOptions?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg smooth-transition ${
                  activeTab === tab?.id
                    ? 'bg-primary text-black neon-glow' :'glassmorphism text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Sections */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'tiers' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {pricingTiers?.map((tier, index) => (
                  <motion.div
                    key={tier?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PricingTier
                      tier={tier}
                      isPopular={tier?.id === 'professional'}
                      onSelectTier={handleSelectTier}
                      onCustomizePackage={handleCustomizePackage}
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'calculator' && (
              <div className="max-w-4xl mx-auto">
                <PricingCalculator onQuoteGenerated={handleQuoteGenerated} />
              </div>
            )}

            {activeTab === 'comparison' && (
              <div className="max-w-6xl mx-auto">
                <ComparisonTable tiers={pricingTiers} onSelectTier={handleSelectTier} />
              </div>
            )}

            {activeTab === 'roi' && (
              <div className="max-w-5xl mx-auto">
                <ROICalculator />
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="max-w-4xl mx-auto">
                <CustomQuoteBuilder onQuoteSubmitted={handleQuoteSubmitted} />
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Pricing Methodology Section */}
      <section className="py-16 px-6 lg:px-8 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold holographic-text mb-4">
              Our Pricing Methodology
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Transparent, fair, and value-driven pricing based on project complexity, 
              timeline, and the value we deliver to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Target',
                title: 'Value-Based Pricing',
                description: 'Pricing based on the value and impact we deliver to your business, not just hours worked.'
              },
              {
                icon: 'Clock',
                title: 'Timeline Flexibility',
                description: 'Flexible timelines with rush options available. Longer timelines often mean better rates.'
              },
              {
                icon: 'Layers',
                title: 'Complexity Assessment',
                description: 'Detailed analysis of project requirements to ensure accurate pricing and scope definition.'
              },
              {
                icon: 'Shield',
                title: 'No Hidden Costs',
                description: 'Complete transparency with all costs outlined upfront. No surprises or hidden fees.'
              }
            ]?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6 text-center hover:scale-105 smooth-transition"
              >
                <div className="w-12 h-12 floating-sphere mx-auto mb-4 flex items-center justify-center">
                  <Icon name={item?.icon} size={20} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item?.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold holographic-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Common questions about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the base price?",
                answer: "Base prices include design, development, basic SEO, responsive layout, and initial setup. Specific inclusions vary by tier - check the detailed feature list for each plan."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes! We offer flexible payment plans with 50% upfront and 50% on completion for most projects. Enterprise projects can be structured with milestone-based payments."
              },
              {
                question: "What if my project requirements change?",
                answer: "We understand projects evolve. Minor changes are included in your revision rounds. Significant scope changes will be discussed and quoted separately to ensure transparency."
              },
              {
                question: "Is ongoing maintenance included?",
                answer: "Basic post-launch support is included (duration varies by tier). Ongoing maintenance, updates, and hosting are available as separate service packages."
              },
              {
                question: "How do you handle rush projects?",
                answer: "Rush projects (under 4 weeks) include a 25-50% timeline premium depending on complexity. We'll assess feasibility and provide a custom quote."
              },
              {
                question: "What's your refund policy?",
                answer: "We offer a satisfaction guarantee. If you're not happy with our work in the first 14 days, we'll work to make it right or provide a partial refund based on work completed."
              }
            ]?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="HelpCircle" size={18} className="text-primary mr-2" />
                  {faq?.question}
                </h3>
                <p className="text-text-secondary">
                  {faq?.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact-section" className="py-16 px-6 lg:px-8 bg-surface/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold holographic-text mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              {selectedTier 
                ? `You've selected the ${selectedTier?.name} plan. Let's discuss your project requirements and get started!`
                : "Have questions about pricing or ready to begin? We're here to help you choose the perfect solution for your needs."
              }
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="neon-glow-hover"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={18} />
                  <span>Start Consultation</span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                className="text-primary hover:bg-primary/10"
              >
                <Link to="/portfolio" className="flex items-center space-x-2">
                  <Icon name="Eye" size={18} />
                  <span>View Our Work</span>
                </Link>
              </Button>
            </div>

            {selectedTier && (
              <div className="mt-8 p-6 glassmorphism rounded-xl">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Selected Plan: {selectedTier?.name}
                </h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
                  <span>Price: ${selectedTier?.price?.toLocaleString()}</span>
                  <span>•</span>
                  <span>Timeline: {selectedTier?.deliveryTime}</span>
                  <span>•</span>
                  <span>Support: {selectedTier?.support}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Quote Modal */}
      {showQuoteModal && generatedQuote && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glassmorphism rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="text-center mb-6">
              <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold holographic-text mb-2">
                Quote Generated Successfully!
              </h3>
              <p className="text-text-secondary">
                Your custom quote has been prepared. We'll be in touch within 24 hours.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-surface/30 rounded-lg">
                <span className="text-text-secondary">Estimated Cost:</span>
                <span className="text-2xl font-bold text-primary">
                  ${generatedQuote?.estimatedPrice?.toLocaleString() || generatedQuote?.estimatedCost?.toLocaleString()}
                </span>
              </div>
              
              {generatedQuote?.quoteId && (
                <div className="flex justify-between items-center p-4 bg-surface/30 rounded-lg">
                  <span className="text-text-secondary">Quote ID:</span>
                  <span className="text-text-primary font-mono">{generatedQuote?.quoteId}</span>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <Button
                variant="default"
                fullWidth
                className="neon-glow-hover"
              >
                <Link to="/contact" className="flex items-center justify-center space-x-2 w-full">
                  <Icon name="MessageCircle" size={18} />
                  <span>Discuss Project</span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                fullWidth
                onClick={() => setShowQuoteModal(false)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            © {new Date()?.getFullYear()} Ratnakar DevHub. All rights reserved. 
            Transparent pricing, exceptional results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;