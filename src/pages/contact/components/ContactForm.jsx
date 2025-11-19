import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solution' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-2-months', label: '1-2 Months' },
    { value: '3-4-months', label: '3-4 Months' },
    { value: '6-months', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-12 rounded-2xl text-center neon-glow"
          >
            <div className="w-20 h-20 floating-sphere mx-auto mb-6 flex items-center justify-center">
              <Icon name="CheckCircle" size={32} className="text-black" />
            </div>
            <h2 className="text-3xl font-bold holographic-text mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-text-secondary mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold holographic-text mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Tell us about your project and we'll provide you with a detailed proposal and timeline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData?.name}
                onChange={handleInputChange}
                error={errors?.name}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData?.email}
                onChange={handleInputChange}
                error={errors?.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                type="text"
                name="company"
                placeholder="Your Company (Optional)"
                value={formData?.company}
                onChange={handleInputChange}
              />
              
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData?.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData?.projectType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary smooth-transition ${
                    errors?.projectType ? 'border-red-500' : 'border-border'
                  }`}
                  required
                >
                  <option value="">Select Project Type</option>
                  {projectTypes?.map(type => (
                    <option key={type?.value} value={type?.value}>
                      {type?.label}
                    </option>
                  ))}
                </select>
                {errors?.projectType && (
                  <p className="text-red-400 text-sm mt-1">{errors?.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData?.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                >
                  <option value="">Select Budget</option>
                  {budgetRanges?.map(budget => (
                    <option key={budget?.value} value={budget?.value}>
                      {budget?.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData?.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                >
                  <option value="">Select Timeline</option>
                  {timelineOptions?.map(timeline => (
                    <option key={timeline?.value} value={timeline?.value}>
                      {timeline?.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Project Description *
              </label>
              <textarea
                name="message"
                value={formData?.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                rows={6}
                className={`w-full px-4 py-3 bg-input border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary smooth-transition resize-none ${
                  errors?.message ? 'border-red-500' : 'border-border'
                }`}
                required
              />
              {errors?.message && (
                <p className="text-red-400 text-sm mt-1">{errors?.message}</p>
              )}
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData?.newsletter}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary focus:ring-2"
              />
              <label htmlFor="newsletter" className="text-sm text-text-secondary">
                Subscribe to our newsletter for development tips and industry insights
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="neon-glow-hover"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>

            {/* Security Notice */}
            <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary pt-4">
              <Icon name="Shield" size={16} className="text-primary" />
              <span>Your information is secure and will never be shared</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;