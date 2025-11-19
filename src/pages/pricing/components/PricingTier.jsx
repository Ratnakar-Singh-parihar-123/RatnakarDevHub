import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTier = ({ 
  tier, 
  isPopular = false, 
  onSelectTier, 
  onCustomizePackage 
}) => {
  const {
    name,
    price,
    duration,
    description,
    features,
    limitations,
    idealFor,
    deliveryTime,
    support,
    revisions
  } = tier;

  return (
    <div className={`relative glassmorphism rounded-2xl p-8 smooth-transition hover:scale-105 ${
      isPopular 
        ? 'neon-border ring-2 ring-primary/20 shadow-2xl' 
        : 'border border-surface hover:border-primary/30'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-black px-6 py-2 rounded-full text-sm font-bold neon-glow">
            Most Popular
          </div>
        </div>
      )}
      {/* Tier Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">{name}</h3>
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-4xl font-bold holographic-text">${price}</span>
          <span className="text-text-secondary ml-2">/{duration}</span>
        </div>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-surface/30 rounded-lg">
        <div className="text-center">
          <Icon name="Clock" size={20} className="text-primary mx-auto mb-1" />
          <div className="text-sm font-medium text-text-primary">{deliveryTime}</div>
          <div className="text-xs text-text-secondary">Delivery</div>
        </div>
        <div className="text-center">
          <Icon name="RefreshCw" size={20} className="text-primary mx-auto mb-1" />
          <div className="text-sm font-medium text-text-primary">{revisions}</div>
          <div className="text-xs text-text-secondary">Revisions</div>
        </div>
        <div className="text-center">
          <Icon name="Headphones" size={20} className="text-primary mx-auto mb-1" />
          <div className="text-sm font-medium text-text-primary">{support}</div>
          <div className="text-xs text-text-secondary">Support</div>
        </div>
      </div>
      {/* Features */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="CheckCircle" size={18} className="text-primary mr-2" />
          What's Included
        </h4>
        <ul className="space-y-3">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" size={16} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Limitations */}
      {limitations && limitations?.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-text-secondary mb-3 flex items-center">
            <Icon name="AlertCircle" size={16} className="text-warning mr-2" />
            Limitations
          </h4>
          <ul className="space-y-2">
            {limitations?.map((limitation, index) => (
              <li key={index} className="flex items-start">
                <Icon name="X" size={14} className="text-warning mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-xs">{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Ideal For */}
      <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
          <Icon name="Target" size={16} className="mr-2" />
          Perfect For
        </h4>
        <p className="text-text-secondary text-sm">{idealFor}</p>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant={isPopular ? "default" : "outline"}
          fullWidth
          className={isPopular ? "neon-glow-hover" : ""}
          onClick={() => onSelectTier(tier)}
        >
          {isPopular ? "Get Started Now" : "Choose Plan"}
        </Button>
        
        <Button
          variant="ghost"
          fullWidth
          className="text-primary hover:bg-primary/10"
          onClick={() => onCustomizePackage(tier)}
        >
          <Icon name="Settings" size={16} className="mr-2" />
          Customize Package
        </Button>
      </div>
    </div>
  );
};

export default PricingTier;