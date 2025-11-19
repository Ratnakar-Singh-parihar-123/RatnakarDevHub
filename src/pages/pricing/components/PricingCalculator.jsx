import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCalculator = ({ onQuoteGenerated }) => {
  const [projectScope, setProjectScope] = useState({
    complexity: 50,
    pages: 25,
    features: 30,
    timeline: 40,
    support: 20
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  const scopeOptions = {
    complexity: {
      label: "Project Complexity",
      icon: "Cpu",
      min: 0,
      max: 100,
      ranges: {
        0: "Simple Landing Page",
        25: "Business Website", 
        50: "E-commerce Platform",
        75: "Custom Web App",
        100: "Enterprise Solution"
      }
    },
    pages: {
      label: "Number of Pages",
      icon: "FileText",
      min: 0,
      max: 100,
      ranges: {
        0: "1-3 Pages",
        25: "4-10 Pages",
        50: "11-25 Pages", 
        75: "26-50 Pages",
        100: "50+ Pages"
      }
    },
    features: {
      label: "Advanced Features",
      icon: "Zap",
      min: 0,
      max: 100,
      ranges: {
        0: "Basic Features",
        25: "User Authentication",
        50: "Payment Integration",
        75: "API Integrations",
        100: "AI/ML Features"
      }
    },
    timeline: {
      label: "Project Timeline",
      icon: "Calendar",
      min: 0,
      max: 100,
      ranges: {
        0: "6+ Months",
        25: "3-6 Months",
        50: "2-3 Months",
        75: "1-2 Months",
        100: "Rush (< 1 Month)"
      }
    },
    support: {
      label: "Ongoing Support",
      icon: "Shield",
      min: 0,
      max: 100,
      ranges: {
        0: "No Support",
        25: "Basic Support",
        50: "Priority Support",
        75: "24/7 Support",
        100: "Dedicated Team"
      }
    }
  };

  useEffect(() => {
    calculateEstimate();
  }, [projectScope]);

  const calculateEstimate = () => {
    const basePrice = 2500;
    const complexityMultiplier = 1 + (projectScope?.complexity / 100) * 4;
    const pagesMultiplier = 1 + (projectScope?.pages / 100) * 2;
    const featuresMultiplier = 1 + (projectScope?.features / 100) * 3;
    const timelineMultiplier = projectScope?.timeline > 75 ? 1.5 : 1;
    const supportMultiplier = 1 + (projectScope?.support / 100) * 0.8;

    const calculated = Math.round(
      basePrice * 
      complexityMultiplier * 
      pagesMultiplier * 
      featuresMultiplier * 
      timelineMultiplier * 
      supportMultiplier
    );

    setEstimatedPrice(calculated);
    
    setBreakdown({
      base: basePrice,
      complexity: Math.round(basePrice * (complexityMultiplier - 1)),
      pages: Math.round(basePrice * (pagesMultiplier - 1)),
      features: Math.round(basePrice * (featuresMultiplier - 1)),
      timeline: timelineMultiplier > 1 ? Math.round(calculated * 0.2) : 0,
      support: Math.round(basePrice * (supportMultiplier - 1))
    });
  };

  const handleSliderChange = (key, value) => {
    setProjectScope(prev => ({
      ...prev,
      [key]: parseInt(value)
    }));
  };

  const getCurrentRange = (key, value) => {
    const ranges = scopeOptions?.[key]?.ranges;
    const keys = Object.keys(ranges)?.map(Number)?.sort((a, b) => a - b);
    
    for (let i = keys?.length - 1; i >= 0; i--) {
      if (value >= keys?.[i]) {
        return ranges?.[keys?.[i]];
      }
    }
    return ranges?.[keys?.[0]];
  };

  const generateQuote = () => {
    const quoteData = {
      projectScope,
      estimatedPrice,
      breakdown,
      timestamp: new Date()?.toISOString()
    };
    onQuoteGenerated(quoteData);
  };

  return (
    <div className="glassmorphism rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold holographic-text mb-2">
          Interactive Pricing Calculator
        </h3>
        <p className="text-text-secondary">
          Adjust the sliders to get an instant estimate for your project
        </p>
      </div>
      {/* Price Display */}
      <div className="text-center mb-8 p-6 bg-primary/10 rounded-xl neon-border-subtle">
        <div className="text-sm text-text-secondary mb-2">Estimated Project Cost</div>
        <div className="text-4xl font-bold holographic-text mb-2">
          ${estimatedPrice?.toLocaleString()}
        </div>
        <div className="text-sm text-text-secondary">
          Based on your current selections
        </div>
      </div>
      {/* Scope Sliders */}
      <div className="space-y-6 mb-8">
        {Object.entries(scopeOptions)?.map(([key, config]) => (
          <div key={key} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name={config?.icon} size={18} className="text-primary" />
                <span className="font-medium text-text-primary">{config?.label}</span>
              </div>
              <span className="text-sm text-primary font-medium">
                {getCurrentRange(key, projectScope?.[key])}
              </span>
            </div>
            
            <div className="relative">
              <input
                type="range"
                min={config?.min}
                max={config?.max}
                value={projectScope?.[key]}
                onChange={(e) => handleSliderChange(key, e?.target?.value)}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${projectScope?.[key]}%, #333333 ${projectScope?.[key]}%, #333333 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>Basic</span>
                <span>Advanced</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Price Breakdown */}
      <div className="mb-8 p-6 bg-surface/30 rounded-xl">
        <h4 className="font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Calculator" size={18} className="text-primary mr-2" />
          Price Breakdown
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Base Development</span>
            <span className="text-text-primary">${breakdown?.base?.toLocaleString()}</span>
          </div>
          {breakdown?.complexity > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Complexity Add-on</span>
              <span className="text-text-primary">+${breakdown?.complexity?.toLocaleString()}</span>
            </div>
          )}
          {breakdown?.pages > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Additional Pages</span>
              <span className="text-text-primary">+${breakdown?.pages?.toLocaleString()}</span>
            </div>
          )}
          {breakdown?.features > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Advanced Features</span>
              <span className="text-text-primary">+${breakdown?.features?.toLocaleString()}</span>
            </div>
          )}
          {breakdown?.timeline > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Rush Timeline</span>
              <span className="text-warning">+${breakdown?.timeline?.toLocaleString()}</span>
            </div>
          )}
          {breakdown?.support > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Support Package</span>
              <span className="text-text-primary">+${breakdown?.support?.toLocaleString()}</span>
            </div>
          )}
          <div className="border-t border-surface pt-2 mt-3">
            <div className="flex justify-between font-semibold">
              <span className="text-text-primary">Total Estimate</span>
              <span className="text-primary">${estimatedPrice?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          className="neon-glow-hover"
          onClick={generateQuote}
        >
          <Icon name="FileText" size={18} className="mr-2" />
          Generate Detailed Quote
        </Button>
        
        <Button
          variant="outline"
          fullWidth
          className="text-primary hover:bg-primary/10"
        >
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Discuss Requirements
        </Button>
      </div>
      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-warning mt-0.5 flex-shrink-0" />
          <div className="text-xs text-text-secondary">
            <strong className="text-warning">Note:</strong> This is an estimated range. 
            Final pricing depends on detailed requirements, technical specifications, 
            and project scope discussions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;