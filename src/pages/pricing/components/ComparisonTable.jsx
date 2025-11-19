import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTable = ({ tiers, onSelectTier }) => {
  const [activeCategory, setActiveCategory] = useState('features');

  const categories = {
    features: {
      label: "Core Features",
      icon: "Zap",
      items: [
        "Responsive Design",
        "SEO Optimization", 
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Mobile Optimization",
        "Content Management",
        "Analytics Integration",
        "Security Implementation",
        "API Integration",
        "Database Design",
        "User Authentication",
        "Payment Processing",
        "Third-party Integrations",
        "Custom Functionality",
        "Advanced Animations"
      ]
    },
    support: {
      label: "Support & Maintenance",
      icon: "Shield",
      items: [
        "Initial Setup Support",
        "Bug Fixes (30 days)",
        "Content Updates",
        "Technical Support",
        "Priority Support",
        "24/7 Monitoring",
        "Backup & Recovery",
        "Security Updates",
        "Performance Monitoring",
        "Dedicated Account Manager",
        "Training Sessions",
        "Documentation",
        "Video Tutorials",
        "Live Chat Support",
        "Phone Support"
      ]
    },
    delivery: {
      label: "Delivery & Timeline",
      icon: "Clock",
      items: [
        "Project Planning",
        "Design Mockups",
        "Development Phases",
        "Testing & QA",
        "Deployment",
        "Launch Support",
        "Post-launch Monitoring",
        "Revision Rounds",
        "Client Reviews",
        "Progress Updates",
        "Milestone Deliveries",
        "Final Handover",
        "Documentation Delivery",
        "Training Materials",
        "Ongoing Consultation"
      ]
    }
  };

  const getFeatureStatus = (tierIndex, featureIndex, category) => {
    // Mock feature availability based on tier and feature complexity
    const tierLevels = [0.4, 0.7, 1.0]; // Starter, Professional, Enterprise
    const featureComplexity = (featureIndex + 1) / categories?.[category]?.items?.length;
    
    if (tierLevels?.[tierIndex] >= featureComplexity) {
      return 'included';
    } else if (tierLevels?.[tierIndex] >= featureComplexity - 0.2) {
      return 'partial';
    } else {
      return 'not-included';
    }
  };

  const renderFeatureIcon = (status) => {
    switch (status) {
      case 'included':
        return <Icon name="Check" size={16} className="text-success" />;
      case 'partial':
        return <Icon name="Minus" size={16} className="text-warning" />;
      case 'not-included':
        return <Icon name="X" size={16} className="text-error" />;
      default:
        return <Icon name="Help" size={16} className="text-text-secondary" />;
    }
  };

  return (
    <div className="glassmorphism rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold holographic-text mb-2">
          Detailed Feature Comparison
        </h3>
        <p className="text-text-secondary">
          Compare what's included in each pricing tier
        </p>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(categories)?.map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
              activeCategory === key
                ? 'bg-primary text-black neon-glow' :'bg-surface/50 text-text-secondary hover:text-primary hover:bg-surface'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="font-medium">{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-surface">
              <th className="text-left py-4 px-4 text-text-primary font-semibold">
                {categories?.[activeCategory]?.label}
              </th>
              {tiers?.map((tier, index) => (
                <th key={index} className="text-center py-4 px-4 min-w-[200px]">
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-text-primary">{tier?.name}</div>
                    <div className="text-2xl font-bold holographic-text">
                      ${tier?.price}
                    </div>
                    <div className="text-sm text-text-secondary">/{tier?.duration}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {categories?.[activeCategory]?.items?.map((feature, featureIndex) => (
              <tr 
                key={featureIndex} 
                className="border-b border-surface/50 hover:bg-surface/20 smooth-transition"
              >
                <td className="py-3 px-4 text-text-secondary">
                  {feature}
                </td>
                {tiers?.map((tier, tierIndex) => (
                  <td key={tierIndex} className="py-3 px-4 text-center">
                    {renderFeatureIcon(getFeatureStatus(tierIndex, featureIndex, activeCategory))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Table Footer with CTAs */}
          <tfoot>
            <tr>
              <td className="py-6 px-4"></td>
              {tiers?.map((tier, index) => (
                <td key={index} className="py-6 px-4">
                  <Button
                    variant={index === 1 ? "default" : "outline"}
                    fullWidth
                    className={index === 1 ? "neon-glow-hover" : ""}
                    onClick={() => onSelectTier(tier)}
                  >
                    {index === 1 ? "Get Started" : "Choose Plan"}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
      {/* Legend */}
      <div className="mt-8 p-4 bg-surface/30 rounded-lg">
        <h4 className="font-semibold text-text-primary mb-3 flex items-center">
          <Icon name="Info" size={16} className="text-primary mr-2" />
          Feature Legend
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} className="text-success" />
            <span className="text-text-secondary">Fully Included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Minus" size={16} className="text-warning" />
            <span className="text-text-secondary">Partially Included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="X" size={16} className="text-error" />
            <span className="text-text-secondary">Not Included</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;