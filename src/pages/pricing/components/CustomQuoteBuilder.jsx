import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const CustomQuoteBuilder = ({ onQuoteSubmitted }) => {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Project Details
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    
    // Selected Services
    services: [],
    
    // Additional Requirements
    requirements: [],
    
    // Preferences
    communicationPreference: '',
    startDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom website development with modern technologies',
      basePrice: 5000,
      icon: 'Code'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Development',
      description: 'Online store with payment integration and inventory management',
      basePrice: 8000,
      icon: 'ShoppingCart'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Native or cross-platform mobile applications',
      basePrice: 12000,
      icon: 'Smartphone'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      description: 'User interface and experience design services',
      basePrice: 3000,
      icon: 'Palette'
    },
    {
      id: 'seo-optimization',
      name: 'SEO Optimization',
      description: 'Search engine optimization and digital marketing',
      basePrice: 2000,
      icon: 'Search'
    },
    {
      id: 'maintenance',
      name: 'Ongoing Maintenance',
      description: 'Regular updates, security, and technical support',
      basePrice: 500,
      icon: 'Shield'
    }
  ];

  const additionalRequirements = [
    { id: 'cms', name: 'Content Management System', price: 1500 },
    { id: 'analytics', name: 'Advanced Analytics Setup', price: 800 },
    { id: 'social-integration', name: 'Social Media Integration', price: 600 },
    { id: 'multilingual', name: 'Multi-language Support', price: 2000 },
    { id: 'api-integration', name: 'Third-party API Integration', price: 1200 },
    { id: 'security', name: 'Advanced Security Features', price: 1000 },
    { id: 'performance', name: 'Performance Optimization', price: 800 },
    { id: 'training', name: 'Team Training Sessions', price: 1500 }
  ];

  const budgetRanges = [
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-50000', label: '$25,000 - $50,000' },
    { value: '50000-100000', label: '$50,000 - $100,000' },
    { value: '100000+', label: '$100,000+' }
  ];

  const timelineOptions = [
    { value: '1-2-months', label: '1-2 Months' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-12-months', label: '6-12 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev?.services?.includes(serviceId)
        ? prev?.services?.filter(id => id !== serviceId)
        : [...prev?.services, serviceId]
    }));
  };

  const handleRequirementToggle = (requirementId) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev?.requirements?.includes(requirementId)
        ? prev?.requirements?.filter(id => id !== requirementId)
        : [...prev?.requirements, requirementId]
    }));
  };

  const calculateEstimatedCost = () => {
    let total = 0;
    
    // Add service costs
    formData?.services?.forEach(serviceId => {
      const service = serviceOptions?.find(s => s?.id === serviceId);
      if (service) total += service?.basePrice;
    });
    
    // Add requirement costs
    formData?.requirements?.forEach(reqId => {
      const requirement = additionalRequirements?.find(r => r?.id === reqId);
      if (requirement) total += requirement?.price;
    });
    
    return total;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.company?.trim()) newErrors.company = 'Company is required';
    if (!formData?.projectType?.trim()) newErrors.projectType = 'Project type is required';
    if (!formData?.budget) newErrors.budget = 'Budget range is required';
    if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
    if (formData?.services?.length === 0) newErrors.services = 'Please select at least one service';
    if (!formData?.description?.trim()) newErrors.description = 'Project description is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData?.email && !emailRegex?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const quoteData = {
        ...formData,
        estimatedCost: calculateEstimatedCost(),
        timestamp: new Date()?.toISOString(),
        quoteId: `QUOTE-${Date.now()}`
      };
      
      onQuoteSubmitted(quoteData);
      
      // Reset form
      setFormData({
        name: '', email: '', company: '', phone: '',
        projectType: '', budget: '', timeline: '', description: '',
        services: [], requirements: [],
        communicationPreference: '', startDate: ''
      });
      
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glassmorphism rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold holographic-text mb-2">
          Custom Quote Builder
        </h3>
        <p className="text-text-secondary">
          Tell us about your project and get a personalized quote
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="User" size={18} className="text-primary mr-2" />
            Contact Information
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              error={errors?.name}
              required
            />
            
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@company.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
            
            <Input
              label="Company Name"
              type="text"
              placeholder="Your company name"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
              error={errors?.company}
              required
            />
            
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
            />
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Briefcase" size={18} className="text-primary mr-2" />
            Project Details
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Project Type"
              type="text"
              placeholder="e.g., E-commerce Website, Mobile App"
              value={formData?.projectType}
              onChange={(e) => handleInputChange('projectType', e?.target?.value)}
              error={errors?.projectType}
              required
            />
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Budget Range *
              </label>
              <select
                value={formData?.budget}
                onChange={(e) => handleInputChange('budget', e?.target?.value)}
                className={`w-full px-4 py-2 bg-surface border rounded-lg text-text-primary focus:border-primary focus:outline-none ${
                  errors?.budget ? 'border-error' : 'border-surface'
                }`}
              >
                <option value="">Select budget range</option>
                {budgetRanges?.map(range => (
                  <option key={range?.value} value={range?.value}>
                    {range?.label}
                  </option>
                ))}
              </select>
              {errors?.budget && (
                <p className="text-error text-xs mt-1">{errors?.budget}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Timeline *
              </label>
              <select
                value={formData?.timeline}
                onChange={(e) => handleInputChange('timeline', e?.target?.value)}
                className={`w-full px-4 py-2 bg-surface border rounded-lg text-text-primary focus:border-primary focus:outline-none ${
                  errors?.timeline ? 'border-error' : 'border-surface'
                }`}
              >
                <option value="">Select timeline</option>
                {timelineOptions?.map(option => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              {errors?.timeline && (
                <p className="text-error text-xs mt-1">{errors?.timeline}</p>
              )}
            </div>
            
            <Input
              label="Preferred Start Date"
              type="date"
              value={formData?.startDate}
              onChange={(e) => handleInputChange('startDate', e?.target?.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Project Description *
            </label>
            <textarea
              placeholder="Describe your project requirements, goals, and any specific features you need..."
              value={formData?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
              rows={4}
              className={`w-full px-4 py-2 bg-surface border rounded-lg text-text-primary focus:border-primary focus:outline-none resize-none ${
                errors?.description ? 'border-error' : 'border-surface'
              }`}
            />
            {errors?.description && (
              <p className="text-error text-xs mt-1">{errors?.description}</p>
            )}
          </div>
        </div>

        {/* Services Selection */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Zap" size={18} className="text-primary mr-2" />
            Required Services *
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceOptions?.map(service => (
              <div
                key={service?.id}
                className={`p-4 rounded-lg border cursor-pointer smooth-transition ${
                  formData?.services?.includes(service?.id)
                    ? 'border-primary bg-primary/10 neon-border-subtle' :'border-surface bg-surface/30 hover:border-primary/50'
                }`}
                onClick={() => handleServiceToggle(service?.id)}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={formData?.services?.includes(service?.id)}
                    onChange={() => handleServiceToggle(service?.id)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <Icon name={service?.icon} size={16} className="text-primary" />
                        <span className="font-medium text-text-primary">{service?.name}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        ${service?.basePrice?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{service?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {errors?.services && (
            <p className="text-error text-xs mt-2">{errors?.services}</p>
          )}
        </div>

        {/* Additional Requirements */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Plus" size={18} className="text-primary mr-2" />
            Additional Requirements
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {additionalRequirements?.map(requirement => (
              <div
                key={requirement?.id}
                className={`p-3 rounded-lg border cursor-pointer smooth-transition ${
                  formData?.requirements?.includes(requirement?.id)
                    ? 'border-primary bg-primary/5' :'border-surface/50 hover:border-surface'
                }`}
                onClick={() => handleRequirementToggle(requirement?.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData?.requirements?.includes(requirement?.id)}
                      onChange={() => handleRequirementToggle(requirement?.id)}
                    />
                    <span className="text-sm text-text-primary">{requirement?.name}</span>
                  </div>
                  <span className="text-sm text-primary">+${requirement?.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estimated Cost */}
        <div className="p-6 bg-primary/10 rounded-xl neon-border-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" size={20} className="text-primary" />
              <span className="text-lg font-semibold text-text-primary">
                Estimated Project Cost
              </span>
            </div>
            <div className="text-2xl font-bold holographic-text">
              ${calculateEstimatedCost()?.toLocaleString()}
            </div>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            This is a preliminary estimate. Final pricing will be provided after detailed consultation.
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="neon-glow-hover px-8 py-3"
          >
            <Icon name="Send" size={18} className="mr-2" />
            {isSubmitting ? 'Generating Quote...' : 'Get Custom Quote'}
          </Button>
          
          <p className="text-xs text-text-secondary mt-3">
            We'll review your requirements and send you a detailed quote within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CustomQuoteBuilder;