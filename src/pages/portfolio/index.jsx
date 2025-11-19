import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    technology: [],
    type: [],
    complexity: []
  });

  // Mock Projects Data
  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Revolution",
    type: "Web Application",
    description: "Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse with AI-powered recommendations and real-time inventory management.",
    fullDescription: `This comprehensive e-commerce platform represents a complete digital transformation journey for a traditional retail business. We built a scalable, high-performance solution that handles thousands of concurrent users while providing personalized shopping experiences through AI-powered product recommendations.\n\nThe platform features real-time inventory management, advanced analytics dashboard, multi-payment gateway integration, and a responsive design that works seamlessly across all devices. The result was a 300% increase in online sales and 250% improvement in customer engagement metrics.`,
    image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
    imageAlt: "Modern e-commerce website interface showing product grid with shopping cart and user dashboard on desktop computer",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redis"],
    industry: "Retail",
    complexity: "High",
    rating: 4.9,
    duration: "6 months",
    metrics: {
      performance: "+85%",
      roi: "+300%",
      users: "50K+",
      conversion: "+120%"
    },
    client: {
      name: "RetailMax Solutions",
      industry: "E-Commerce Retail",
      location: "San Francisco, CA",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11da810b0-1763483671602.png",
      logoAlt: "Professional business logo for RetailMax Solutions showing modern retail storefront"
    },
    gallery: [
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7effff9-1763483672222.png",
      alt: "Mobile responsive design showing product catalog on smartphone and tablet devices"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2cf16e2-1763483670824.png",
      alt: "Analytics dashboard displaying sales metrics and customer behavior data visualization"
    }],

    features: [
    {
      title: "AI-Powered Recommendations",
      description: "Machine learning algorithms for personalized product suggestions"
    },
    {
      title: "Real-time Inventory",
      description: "Live stock management with automated reorder notifications"
    },
    {
      title: "Multi-Payment Gateway",
      description: "Secure payment processing with multiple payment options"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting and business intelligence dashboard"
    }],

    testimonial: {
      quote: "Ratnakar DevHub transformed our entire business model. The e-commerce platform they built exceeded all our expectations and delivered results beyond our wildest dreams.",
      name: "Sarah Johnson",
      position: "CEO, RetailMax Solutions",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15bc85f39-1763293602964.png",
      avatarAlt: "Professional headshot of Sarah Johnson, CEO with blonde hair in business attire smiling at camera"
    }
  },
  {
    id: 2,
    title: "FinTech Mobile Banking App",
    type: "Mobile Application",
    description: "Revolutionary mobile banking application with biometric authentication, real-time transactions, and AI-powered financial insights for next-generation banking experience.",
    fullDescription: `A cutting-edge mobile banking application that redefines the financial services experience. Built with security-first architecture, the app features biometric authentication, real-time transaction processing, and AI-powered financial insights that help users make smarter financial decisions.\n\nThe application includes advanced features like budget tracking, investment portfolio management, peer-to-peer payments, and personalized financial advice. With bank-grade security and intuitive user experience, the app has achieved 4.8-star ratings and processed over $50M in transactions within the first year.`,
    image: "https://images.unsplash.com/photo-1663000805908-1106cf7ad001",
    imageAlt: "Mobile banking app interface showing account dashboard with transaction history and financial charts on smartphone",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Blockchain", "TensorFlow"],
    industry: "FinTech",
    complexity: "High",
    rating: 4.8,
    duration: "8 months",
    metrics: {
      performance: "+92%",
      roi: "+250%",
      users: "100K+",
      transactions: "$50M+"
    },
    client: {
      name: "NeoBank Digital",
      industry: "Financial Services",
      location: "New York, NY",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_129c756c8-1763483672071.png",
      logoAlt: "Modern financial institution logo with geometric design representing digital banking innovation"
    },
    gallery: [
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1deaf61d5-1763483671091.png",
      alt: "Banking app security features showing biometric login and encryption indicators"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1776334b3-1763483672211.png",
      alt: "Investment portfolio interface displaying stock charts and financial performance metrics"
    }],

    features: [
    {
      title: "Biometric Security",
      description: "Advanced fingerprint and facial recognition authentication"
    },
    {
      title: "Real-time Transactions",
      description: "Instant money transfers and payment processing"
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial insights and investment recommendations"
    },
    {
      title: "Blockchain Integration",
      description: "Secure and transparent transaction recording"
    }],

    testimonial: {
      quote: "The mobile banking app has revolutionized how our customers interact with their finances. The user experience is exceptional and the security features are industry-leading.",
      name: "Michael Chen",
      position: "CTO, NeoBank Digital",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1df73dbfc-1763299001791.png",
      avatarAlt: "Professional headshot of Asian male CTO in navy suit with confident expression in modern office setting"
    }
  },
  {
    id: 3,
    title: "Healthcare Management System",
    type: "Web Application",
    description: "Comprehensive healthcare management platform connecting patients, doctors, and administrators with telemedicine capabilities and AI-powered diagnostic assistance.",
    fullDescription: `A comprehensive healthcare management system that digitizes and streamlines medical operations while improving patient care quality. The platform connects patients, healthcare providers, and administrators through an integrated ecosystem that includes appointment scheduling, electronic health records, telemedicine consultations, and AI-powered diagnostic assistance.\n\nThe system features HIPAA-compliant data handling, real-time patient monitoring, prescription management, and advanced analytics for healthcare insights. The implementation resulted in 40% reduction in administrative overhead and 60% improvement in patient satisfaction scores.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3059174-1763483671646.png",
    imageAlt: "Healthcare management dashboard showing patient records, appointment scheduling, and medical analytics on computer screen",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker", "TensorFlow"],
    industry: "Healthcare",
    complexity: "High",
    rating: 4.7,
    duration: "10 months",
    metrics: {
      performance: "+75%",
      roi: "+180%",
      users: "25K+",
      efficiency: "+40%"
    },
    client: {
      name: "MediCare Plus",
      industry: "Healthcare Services",
      location: "Boston, MA",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b97e3c4d-1763483671125.png",
      logoAlt: "Medical healthcare logo featuring cross symbol and modern typography representing healthcare innovation"
    },
    gallery: [
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1587882bb-1763483672088.png",
      alt: "Telemedicine video consultation interface showing doctor-patient virtual appointment on tablet"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8059b3d-1763483673318.png",
      alt: "Electronic health records system displaying patient medical history and treatment plans"
    }],

    features: [
    {
      title: "Telemedicine Platform",
      description: "High-quality video consultations with integrated health monitoring"
    },
    {
      title: "AI Diagnostic Assistant",
      description: "Machine learning algorithms for preliminary diagnosis support"
    },
    {
      title: "Electronic Health Records",
      description: "Comprehensive patient data management with HIPAA compliance"
    },
    {
      title: "Appointment Management",
      description: "Intelligent scheduling system with automated reminders"
    }],

    testimonial: {
      quote: "This healthcare management system has transformed our practice. We can now provide better patient care while reducing administrative burden significantly.",
      name: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, MediCare Plus",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_155748a5d-1763296653785.png",
      avatarAlt: "Professional headshot of Hispanic female doctor in white coat with stethoscope smiling confidently"
    }
  },
  {
    id: 4,
    title: "EdTech Learning Platform",
    type: "Web Application",
    description: "Interactive online learning platform with AI-powered personalized curricula, virtual classrooms, and comprehensive progress tracking for modern education.",
    fullDescription: `An innovative educational technology platform that revolutionizes online learning through personalized AI-driven curricula and interactive virtual classrooms. The platform adapts to individual learning styles and paces, providing customized educational experiences that maximize student engagement and knowledge retention.\n\nFeatures include live virtual classrooms, interactive assignments, peer collaboration tools, comprehensive progress analytics, and gamification elements. The platform has served over 75,000 students and achieved 95% course completion rates, significantly higher than industry averages.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe1828a5-1763483670715.png",
    imageAlt: "Online learning platform interface showing virtual classroom with video lectures and interactive student dashboard",
    technologies: ["React", "Express.js", "MongoDB", "WebRTC", "Socket.io", "AWS"],
    industry: "Education",
    complexity: "Medium",
    rating: 4.6,
    duration: "7 months",
    metrics: {
      performance: "+88%",
      roi: "+220%",
      users: "75K+",
      completion: "95%"
    },
    client: {
      name: "EduFuture Academy",
      industry: "Online Education",
      location: "Austin, TX",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c024046a-1763483671636.png",
      logoAlt: "Educational institution logo with book and graduation cap symbols representing academic excellence"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1558301285-c3d15a72670b",
      alt: "Students using laptops in virtual classroom environment with collaborative learning tools"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_13800c29a-1763483670263.png",
      alt: "Learning analytics dashboard showing student progress charts and performance metrics"
    }],

    features: [
    {
      title: "AI-Powered Personalization",
      description: "Adaptive learning paths based on individual student performance"
    },
    {
      title: "Virtual Classrooms",
      description: "Interactive live sessions with screen sharing and collaboration tools"
    },
    {
      title: "Progress Analytics",
      description: "Comprehensive tracking and reporting of learning outcomes"
    },
    {
      title: "Gamification Elements",
      description: "Achievement badges and leaderboards to boost engagement"
    }],

    testimonial: {
      quote: "The learning platform has completely transformed our educational delivery. Student engagement and completion rates have never been higher.",
      name: "Prof. David Kim",
      position: "Academic Director, EduFuture Academy",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1d3ca18-1763296866581.png",
      avatarAlt: "Professional headshot of Asian male professor with glasses in academic setting with books in background"
    }
  },
  {
    id: 5,
    title: "Real Estate CRM Platform",
    type: "Web Application",
    description: "Advanced customer relationship management system for real estate professionals with property management, lead tracking, and automated marketing campaigns.",
    fullDescription: `A sophisticated CRM platform specifically designed for real estate professionals, featuring comprehensive property management, intelligent lead tracking, and automated marketing campaign management. The system integrates with multiple listing services and provides powerful analytics to help agents close more deals.\n\nKey capabilities include property portfolio management, client communication automation, market analysis tools, document management, and mobile accessibility. The platform has helped real estate agencies increase their closing rates by 45% and reduce administrative time by 60%.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_176d9f617-1763483673811.png",
    imageAlt: "Real estate CRM dashboard showing property listings, client management, and sales analytics on computer screen",
    technologies: ["Angular", "Node.js", "MySQL", "Redis", "AWS", "Twilio"],
    industry: "Real Estate",
    complexity: "Medium",
    rating: 4.5,
    duration: "5 months",
    metrics: {
      performance: "+70%",
      roi: "+190%",
      users: "15K+",
      efficiency: "+60%"
    },
    client: {
      name: "PropertyPro Realty",
      industry: "Real Estate Services",
      location: "Miami, FL",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_133f31dbc-1763483671828.png",
      logoAlt: "Real estate company logo featuring house icon and professional typography for property services"
    },
    gallery: [
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_15ad84b6b-1763483670250.png",
      alt: "Property management interface showing listing details, photos, and client communication tools"
    },
    {
      src: "https://img.rocket.new/generatedImages/rocket_gen_img_18d29ece7-1763483670704.png",
      alt: "Real estate analytics dashboard displaying market trends and sales performance metrics"
    }],

    features: [
    {
      title: "Lead Management",
      description: "Intelligent lead scoring and automated follow-up sequences"
    },
    {
      title: "Property Portfolio",
      description: "Comprehensive property management with virtual tours integration"
    },
    {
      title: "Marketing Automation",
      description: "Automated email campaigns and social media posting"
    },
    {
      title: "Market Analytics",
      description: "Real-time market data and comparative market analysis tools"
    }],

    testimonial: {
      quote: "This CRM has revolutionized our real estate operations. We\'re closing more deals and spending less time on administrative tasks.",
      name: "Jennifer Martinez",
      position: "Broker Owner, PropertyPro Realty",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc91b7e6-1763295022163.png",
      avatarAlt: "Professional headshot of Hispanic female real estate broker in business suit with confident smile"
    }
  },
  {
    id: 6,
    title: "Restaurant Management Suite",
    type: "Web Application",
    description: "Complete restaurant management solution with POS integration, inventory tracking, staff scheduling, and customer loyalty programs for enhanced operations.",
    fullDescription: `A comprehensive restaurant management suite that streamlines all aspects of restaurant operations from front-of-house to back-of-house management. The system integrates point-of-sale functionality, inventory management, staff scheduling, and customer relationship management into a unified platform.\n\nThe solution includes real-time order tracking, kitchen display systems, automated inventory alerts, employee performance analytics, and customer loyalty program management. Restaurants using this system have reported 35% reduction in food waste and 50% improvement in order accuracy.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_125b38831-1763483671631.png",
    imageAlt: "Restaurant management system interface showing order tracking, inventory management, and staff scheduling on tablet",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Stripe", "Firebase"],
    industry: "Food Service",
    complexity: "Medium",
    rating: 4.4,
    duration: "4 months",
    metrics: {
      performance: "+65%",
      roi: "+160%",
      users: "8K+",
      accuracy: "+50%"
    },
    client: {
      name: "Gourmet Bistro Chain",
      industry: "Restaurant & Hospitality",
      location: "Chicago, IL",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1659c909f-1763483670363.png",
      logoAlt: "Restaurant chain logo featuring chef hat and fork symbols representing culinary excellence"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1716800361130-54dcfdf5f68f",
      alt: "Kitchen display system showing active orders and preparation times in busy restaurant kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1604181083147-1e8fe0913c44",
      alt: "Point of sale system interface with menu items, order customization, and payment processing"
    }],

    features: [
    {
      title: "Integrated POS System",
      description: "Seamless order processing with payment gateway integration"
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking with automated reorder alerts"
    },
    {
      title: "Staff Scheduling",
      description: "Intelligent scheduling system with labor cost optimization"
    },
    {
      title: "Customer Loyalty",
      description: "Points-based loyalty program with personalized offers"
    }],

    testimonial: {
      quote: "The restaurant management suite has streamlined our operations significantly. We've reduced waste and improved customer satisfaction across all locations.",
      name: "Chef Antonio Rossi",
      position: "Operations Manager, Gourmet Bistro Chain",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_148ff2a44-1763301396659.png",
      avatarAlt: "Professional headshot of Italian male chef in white uniform with warm smile in restaurant kitchen"
    }
  }];


  // Filter options derived from projects
  const filters = useMemo(() => {
    const industries = [...new Set(projects.map((p) => p.industry))];
    const technologies = [...new Set(projects.flatMap((p) => p.technologies))];
    const types = [...new Set(projects.map((p) => p.type))];
    const complexity = [...new Set(projects.map((p) => p.complexity))];

    return { industries, technologies, types, complexity };
  }, [projects]);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    let filtered = projects?.filter((project) => {
      // Search filter
      const matchesSearch = project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      project?.technologies?.some((tech) => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

      // Category filters
      const matchesIndustry = activeFilters?.industry?.length === 0 || activeFilters?.industry?.includes(project?.industry);
      const matchesTechnology = activeFilters?.technology?.length === 0 ||
      activeFilters?.technology?.some((tech) => project?.technologies?.includes(tech));
      const matchesType = activeFilters?.type?.length === 0 || activeFilters?.type?.includes(project?.type);
      const matchesComplexity = activeFilters?.complexity?.length === 0 || activeFilters?.complexity?.includes(project?.complexity);

      return matchesSearch && matchesIndustry && matchesTechnology && matchesType && matchesComplexity;
    });

    // Sort projects
    switch (sortBy) {
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      case 'complexity':
        const complexityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
        filtered?.sort((a, b) => complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity]);
        break;
      case 'recent':
      default:
        // Keep original order (most recent first)
        break;
    }

    return filtered;
  }, [projects, searchTerm, activeFilters, sortBy]);

  const handleFilterChange = (category, values) => {
    if (category === 'clear') {
      setActiveFilters({
        industry: [],
        technology: [],
        type: [],
        complexity: []
      });
    } else {
      setActiveFilters((prev) => ({
        ...prev,
        [category]: values
      }));
    }
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleContactForSimilar = (project) => {
    // In a real app, this would navigate to contact form with pre-filled project type
    console.log('Contact for similar project:', project?.type);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Ratnakar DevHub | Showcasing Digital Excellence</title>
        <meta name="description" content="Explore our comprehensive portfolio of cutting-edge web applications, mobile solutions, and digital transformations. See how we've driven measurable success for businesses across industries." />
        <meta name="keywords" content="portfolio, web development, mobile apps, digital transformation, case studies, React projects, Node.js applications" />
        <meta property="og:title" content="Portfolio - Ratnakar DevHub" />
        <meta property="og:description" content="Discover our proven track record of delivering exceptional digital solutions that drive business growth and innovation." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <HeroSection />
          <StatsSection />
          
          <FilterBar
            filters={filters}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalProjects={projects?.length}
            filteredCount={filteredProjects?.length} />


          {/* Projects Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>

            {filteredProjects?.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredProjects?.map((project, index) =>
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewDetails}
                index={index} />

              )}
              </div> :

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16">

                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-surface/50 flex items-center justify-center">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">No Projects Found</h3>
                <p className="text-text-secondary mb-6 max-w-md mx-auto">
                  We couldn't find any projects matching your current filters. Try adjusting your search criteria or clearing some filters.
                </p>
                <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  handleFilterChange('clear', []);
                }}
                iconName="RotateCcw"
                iconPosition="left">

                  Reset Filters
                </Button>
              </motion.div>
            }
          </motion.section>

          {/* Load More Button */}
          {filteredProjects?.length > 0 && filteredProjects?.length >= 6 &&
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">

              <Button
              variant="outline"
              size="lg"
              iconName="Plus"
              iconPosition="left">

                Load More Projects
              </Button>
            </motion.div>
          }

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20">

            <div className="glassmorphism rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with cutting-edge technology and exceptional user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="neon-glow-hover"
                  iconName="MessageCircle"
                  iconPosition="right">

                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="right">

                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContactForSimilar={handleContactForSimilar} />

    </div>);

};

export default Portfolio;