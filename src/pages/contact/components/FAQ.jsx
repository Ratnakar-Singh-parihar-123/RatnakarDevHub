import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How quickly can you start my project?",
      answer: `We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding within 48-72 hours. Our team maintains flexible capacity to accommodate rush projects when needed.\n\nThe exact timeline depends on project complexity and our current workload, but we always provide realistic expectations upfront.`
    },
    {
      id: 2,
      question: "What information do you need to provide a quote?",
      answer: `To provide an accurate quote, we need:\n• Project scope and objectives\n• Target platforms (web, mobile, desktop)\n• Design requirements and preferences\n• Timeline expectations\n• Budget range\n• Integration requirements\n• Team size preferences\n\nThe more details you provide, the more accurate our initial estimate will be.`
    },
    {
      id: 3,
      question: "Do you offer ongoing support and maintenance?",
      answer: `Yes! We provide comprehensive post-launch support including:\n• Bug fixes and security updates\n• Performance monitoring and optimization\n• Feature enhancements and additions\n• Technical support and consultation\n• Server maintenance and hosting\n• Regular backups and security audits\n\nWe offer flexible maintenance packages to suit different needs and budgets.`
    },
    {
      id: 4,
      question: "What technologies do you specialize in?",
      answer: `Our core expertise includes:\n• Frontend: React, Next.js, Vue.js, Angular\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter, Swift, Kotlin\n• Databases: PostgreSQL, MongoDB, MySQL\n• Cloud: AWS, Google Cloud, Azure\n• DevOps: Docker, Kubernetes, CI/CD\n\nWe stay current with emerging technologies and can adapt to your specific requirements.`
    },
    {
      id: 5,
      question: "How do you handle project communication?",
      answer: `We maintain transparent communication through:\n• Weekly progress reports and demos\n• Dedicated project manager as your main contact\n• Real-time collaboration tools (Slack, Teams)\n• Regular video calls and screen sharing\n• Shared project dashboard with live updates\n• 24/7 access to project documentation\n\nYou'll always know exactly where your project stands.`
    },
    {
      id: 6,
      question: "What if I'm not satisfied with the work?",
      answer: `Your satisfaction is our priority. We offer:\n• Unlimited revisions during development phases\n• 30-day post-launch support for any issues\n• Money-back guarantee for the first milestone\n• Transparent refund policy\n• Alternative developer assignment if needed\n• Mediation through project management\n\nWe work until you're completely satisfied with the results.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold holographic-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get quick answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/30 smooth-transition"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq?.question}
                </h3>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 smooth-transition ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className="text-primary" 
                  />
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 border-t border-surface">
                      <div className="pt-4">
                        {faq?.answer?.split('\n')?.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-text-secondary leading-relaxed mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glassmorphism p-8 rounded-xl neon-border-subtle">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-black rounded-lg font-medium hover:bg-primary/90 smooth-transition neon-glow-hover"
              >
                <Icon name="Phone" size={16} />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:hello@ratnakardevhub.com"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 smooth-transition"
              >
                <Icon name="Mail" size={16} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;