import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProcessTimeline from './components/ProcessTimeline';
import TechnologyStack from './components/TechnologyStack';
import ServiceComparison from './components/ServiceComparison';
import InteractiveDemo from './components/InteractiveDemo';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    icon: "Globe",
    isPopular: true,
    startingPrice: 2500,
    timeline: "4-12 weeks",
    features: [
    "Responsive Design",
    "Performance Optimization",
    "SEO Implementation",
    "Content Management",
    "E-commerce Integration",
    "API Development"],

    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS", "Vercel"]
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native performance across iOS and Android devices.",
    icon: "Smartphone",
    isPopular: false,
    startingPrice: 8000,
    timeline: "8-16 weeks",
    features: [
    "Cross-Platform Development",
    "Native Performance",
    "Offline Functionality",
    "Push Notifications",
    "App Store Optimization",
    "Backend Integration"],

    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Redux", "GraphQL"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive and engaging digital experiences.",
    icon: "Palette",
    isPopular: false,
    startingPrice: 1500,
    timeline: "2-6 weeks",
    features: [
    "User Research",
    "Wireframing & Prototyping",
    "Visual Design",
    "Usability Testing",
    "Design Systems",
    "Brand Identity"],

    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer", "Miro", "Zeplin"]
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing and inventory management.",
    icon: "ShoppingCart",
    isPopular: true,
    startingPrice: 5000,
    timeline: "6-14 weeks",
    features: [
    "Custom Shopping Cart",
    "Payment Gateway Integration",
    "Inventory Management",
    "Order Processing",
    "Customer Analytics",
    "Multi-vendor Support"],

    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Square", "Klaviyo", "Mailchimp"]
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern application deployment.",
    icon: "Cloud",
    isPopular: false,
    startingPrice: 3000,
    timeline: "3-8 weeks",
    features: [
    "Cloud Migration",
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Container Orchestration",
    "Monitoring & Logging",
    "Security Implementation"],

    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"]
  },
  {
    id: 6,
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs that power modern applications with secure data exchange.",
    icon: "Code",
    isPopular: false,
    startingPrice: 2000,
    timeline: "3-10 weeks",
    features: [
    "RESTful API Design",
    "GraphQL Implementation",
    "Authentication & Authorization",
    "Rate Limiting",
    "API Documentation",
    "Third-party Integrations"],

    technologies: ["Node.js", "Express", "FastAPI", "Django", "GraphQL", "JWT", "OAuth", "Swagger"]
  }];


  const stats = [
  { label: "Projects Completed", value: "150+", icon: "CheckCircle" },
  { label: "Happy Clients", value: "120+", icon: "Users" },
  { label: "Years Experience", value: "8+", icon: "Calendar" },
  { label: "Technologies Mastered", value: "50+", icon: "Code" }];


  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d709bfd4-1763294049962.png",
    avatarAlt: "Professional headshot of blonde woman in business attire smiling at camera",
    content: `Ratnakar DevHub transformed our outdated system into a modern, scalable platform. Their technical expertise and attention to detail exceeded our expectations.`,
    rating: 5,
    project: "Enterprise Web Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EcoCommerce",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15db12dbc-1763293506512.png",
    avatarAlt: "Professional headshot of Asian man in navy suit with confident smile",
    content: `The e-commerce solution they built for us increased our conversion rate by 40%. The team's dedication to performance optimization is remarkable.`,
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, HealthTech Solutions",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15285ac25-1763298493834.png",
    avatarAlt: "Professional headshot of Hispanic woman with dark hair in white blazer",
    content: `Their mobile app development expertise helped us launch on both iOS and Android simultaneously. The user experience is exceptional.`,
    rating: 5,
    project: "Healthcare Mobile App"
  }];


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services - Ratnakar DevHub | Premium IT Development Solutions</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, UI/UX design, e-commerce solutions, cloud infrastructure, and API development. Transform your digital presence with cutting-edge technology." />
        <meta name="keywords" content="web development, mobile app development, UI UX design, e-commerce solutions, cloud services, API development, React, Node.js, React Native" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-bright/5 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6">

                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="holographic-text">Premium IT Services</span>
                  <br />
                  <span className="text-text-primary">That Transform Businesses</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                  From concept to deployment, we deliver cutting-edge digital solutions that drive growth, 
                  enhance user experience, and position your business for the future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center">

                <Button variant="default" size="lg" className="neon-glow">
                  <Link to="/contact" className="flex items-center space-x-2">
                    <Icon name="Rocket" size={20} />
                    <span>Start Your Project</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/portfolio" className="flex items-center space-x-2">
                    <Icon name="Eye" size={20} />
                    <span>View Our Work</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">

                {stats?.map((stat, index) =>
                <div key={stat?.label} className="text-center space-y-2">
                    <div className="w-12 h-12 floating-sphere flex items-center justify-center mx-auto">
                      <Icon name={stat?.icon} size={24} className="text-black font-bold" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{stat?.value}</div>
                    <div className="text-sm text-text-secondary">{stat?.label}</div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold holographic-text">
                Our Service Universe
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Comprehensive digital solutions designed to accelerate your business growth and technical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, index) =>
              <ServiceCard
                key={service?.id}
                service={service}
                index={index} />

              )}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 lg:py-32 bg-surface/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <InteractiveDemo />
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ProcessTimeline />
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 lg:py-32 bg-surface/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <TechnologyStack />
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ServiceComparison />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 lg:py-32 bg-surface/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold holographic-text">
                Client Success Stories
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Hear from businesses that have transformed their digital presence with our expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, index) =>
              <motion.div
                key={testimonial?.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6 space-y-4">

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                      src={testimonial?.avatar}
                      alt={testimonial?.avatarAlt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{testimonial?.name}</h4>
                      <p className="text-sm text-text-secondary">{testimonial?.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={16} className="text-primary fill-current" />
                  )}
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {testimonial?.content}
                  </p>

                  <div className="pt-2 border-t border-surface">
                    <span className="text-xs text-primary font-medium">
                      Project: {testimonial?.project}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glassmorphism rounded-3xl p-12 text-center space-y-8 neon-glow">

              <div className="space-y-4">
                <div className="w-20 h-20 floating-sphere flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" size={40} className="text-black font-bold" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Let's discuss your project requirements and create a custom solution that drives results. 
                  Our team is ready to turn your vision into reality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="default" size="lg" className="neon-glow">
                  <Link to="/contact" className="flex items-center space-x-2">
                    <Icon name="Calendar" size={20} />
                    <span>Schedule Free Consultation</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/pricing" className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={20} />
                    <span>View Pricing Plans</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface/10 border-t border-surface py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 floating-sphere flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-black font-bold" />
              </div>
              <span className="text-lg font-bold holographic-text">Ratnakar DevHub</span>
            </div>
            <p className="text-text-secondary">
              © {new Date()?.getFullYear()} Ratnakar DevHub. All rights reserved. Building tomorrow's technology today.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Services;