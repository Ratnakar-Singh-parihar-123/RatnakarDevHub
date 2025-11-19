import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const comparisonData = [
    {
      category: "Web Development",
      basic: {
        title: "Starter Package",
        price: 2500,
        features: [
          "Responsive Design",
          "5 Pages Maximum",
          "Basic SEO Setup",
          "Contact Form",
          "1 Month Support"
        ],
        limitations: [
          "No E-commerce",
          "Limited Customization",
          "Basic Analytics"
        ]
      },
      premium: {
        title: "Professional Package",
        price: 7500,
        features: [
          "Custom Design System",
          "Unlimited Pages",
          "Advanced SEO",
          "E-commerce Ready",
          "CMS Integration",
          "Performance Optimization",
          "6 Months Support"
        ],
        limitations: []
      },
      enterprise: {
        title: "Enterprise Solution",
        price: 15000,
        features: [
          "Full Custom Development",
          "Advanced Integrations",
          "Multi-language Support",
          "Advanced Security",
          "Custom Admin Panel",
          "API Development",
          "12 Months Support",
          "Priority Support"
        ],
        limitations: []
      }
    },
    {
      category: "Mobile Development",
      basic: {
        title: "MVP Package",
        price: 8000,
        features: [
          "Single Platform",
          "Basic UI Components",
          "Core Functionality",
          "App Store Submission",
          "2 Months Support"
        ],
        limitations: [
          "iOS or Android Only",
          "Limited Features",
          "Basic Design"
        ]
      },
      premium: {
        title: "Cross-Platform",
        price: 18000,
        features: [
          "iOS & Android",
          "Custom UI/UX",
          "Advanced Features",
          "Push Notifications",
          "Analytics Integration",
          "Backend Integration",
          "6 Months Support"
        ],
        limitations: []
      },
      enterprise: {
        title: "Native Enterprise",
        price: 35000,
        features: [
          "Native Development",
          "Advanced Security",
          "Offline Functionality",
          "Custom Animations",
          "Enterprise Integrations",
          "Advanced Analytics",
          "12 Months Support",
          "Dedicated Team"
        ],
        limitations: []
      }
    }
  ];

  const PackageCard = ({ package: pkg, type, isPopular = false }) => (
    <div className={`glassmorphism rounded-2xl p-6 space-y-6 relative ${
      isPopular ? 'neon-border scale-105' : 'neon-border-subtle'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center space-y-2">
        <h4 className="text-xl font-bold text-text-primary">{pkg?.title}</h4>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">
            ${pkg?.price?.toLocaleString()}
          </div>
          <div className="text-sm text-text-secondary">Starting price</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Included Features
          </h5>
          <ul className="space-y-2">
            {pkg?.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <Icon name="Check" size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {pkg?.limitations?.length > 0 && (
          <div>
            <h5 className="text-sm font-semibold text-warning uppercase tracking-wide mb-3">
              Limitations
            </h5>
            <ul className="space-y-2">
              {pkg?.limitations?.map((limitation, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm">
                  <Icon name="X" size={14} className="text-warning flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button
        variant={isPopular ? "default" : "outline"}
        fullWidth
        className={isPopular ? "neon-glow" : ""}
      >
        <Link to="/contact" className="flex items-center justify-center space-x-2 w-full">
          <Icon name="MessageCircle" size={16} />
          <span>Get Quote</span>
        </Link>
      </Button>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold holographic-text">
          Service Packages Comparison
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Choose the perfect package that fits your project requirements and budget
        </p>
      </div>
      {comparisonData?.map((service, serviceIndex) => (
        <motion.div
          key={service?.category}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {service?.category}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-neon-bright mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PackageCard package={service?.basic} type="basic" />
            <PackageCard package={service?.premium} type="premium" isPopular={true} />
            <PackageCard package={service?.enterprise} type="enterprise" />
          </div>
        </motion.div>
      ))}
      {/* Custom Quote CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glassmorphism rounded-2xl p-8 text-center space-y-6"
      >
        <div className="space-y-4">
          <div className="w-16 h-16 floating-sphere flex items-center justify-center mx-auto">
            <Icon name="Sparkles" size={32} className="text-black font-bold" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary">
            Need Something Custom?
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg">
            <Link to="/portfolio" className="flex items-center space-x-2">
              <Icon name="Eye" size={20} />
              <span>View Our Work</span>
            </Link>
          </Button>
          <Button variant="default" size="lg" className="neon-glow">
            <Link to="/contact" className="flex items-center space-x-2">
              <Icon name="Calendar" size={20} />
              <span>Schedule Consultation</span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceComparison;