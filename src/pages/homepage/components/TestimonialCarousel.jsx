import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO, TechFlow Solutions",
    company: "TechFlow Solutions",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1839f83d3-1763293825256.png",
    avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair in navy blazer smiling confidently",
    content: "Ratnakar DevHub transformed our entire digital infrastructure. Their technical expertise and innovative approach helped us scale from 10K to 1M users seamlessly. The team\'s attention to detail and commitment to excellence is unmatched.",
    rating: 5,
    project: "E-commerce Platform Redesign",
    results: "300% increase in conversion rate"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "Founder & CEO, InnovateLab",
    company: "InnovateLab",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1215564b9-1763294454695.png",
    avatarAlt: "Professional headshot of Hispanic man with short dark hair and beard in charcoal suit smiling warmly",
    content: "Working with Ratnakar DevHub was a game-changer for our startup. They didn\'t just build our app; they became strategic partners who understood our vision and helped us achieve product-market fit faster than we ever imagined.",
    rating: 5,
    project: "Mobile App Development",
    results: "50K+ downloads in first month"
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "VP of Engineering, DataSync Corp",
    company: "DataSync Corp",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1efea8232-1763295833460.png",
    avatarAlt: "Professional headshot of Caucasian woman with blonde hair in white blouse smiling professionally in office setting",
    content: "The level of technical sophistication and clean code architecture delivered by Ratnakar DevHub exceeded our expectations. Their DevOps expertise helped us achieve 99.9% uptime and reduced our deployment time by 80%.",
    rating: 5,
    project: "Cloud Migration & DevOps",
    results: "80% faster deployment cycles"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Product Manager, FinTech Pro",
    company: "FinTech Pro",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18177d561-1763301900808.png",
    avatarAlt: "Professional headshot of Asian man with glasses and short black hair in dark blue suit smiling confidently",
    content: "Security and compliance were critical for our fintech platform. Ratnakar DevHub delivered a solution that not only met all regulatory requirements but also provided an exceptional user experience. Truly impressive work.",
    rating: 5,
    project: "Fintech Security Platform",
    results: "100% compliance achieved"
  }];


  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />

    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-background via-gray-900 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Client </span>
            <span className="holographic-text">Success Stories</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Hear from the leaders who trusted us to transform their digital vision into reality
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="glassmorphism rounded-2xl p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center">

                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon name="Quote" size={32} className="text-primary" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{testimonials?.[currentIndex]?.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(testimonials?.[currentIndex]?.rating)}
                </div>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                      <Image
                        src={testimonials?.[currentIndex]?.avatar}
                        alt={testimonials?.[currentIndex]?.avatarAlt}
                        className="w-full h-full object-cover" />

                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white">
                        {testimonials?.[currentIndex]?.name}
                      </h4>
                      <p className="text-text-secondary">
                        {testimonials?.[currentIndex]?.position}
                      </p>
                      <p className="text-primary text-sm">
                        {testimonials?.[currentIndex]?.company}
                      </p>
                    </div>
                  </div>

                  {/* Project Results */}
                  <div className="text-center md:text-left">
                    <p className="text-sm text-text-secondary mb-1">Project:</p>
                    <p className="text-white font-semibold mb-2">
                      {testimonials?.[currentIndex]?.project}
                    </p>
                    <p className="text-primary font-semibold">
                      {testimonials?.[currentIndex]?.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:neon-border transition-all duration-300 group"
            aria-label="Previous testimonial">

            <Icon
              name="ChevronLeft"
              size={24}
              className="text-primary group-hover:scale-110 transition-transform" />

          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:neon-border transition-all duration-300 group"
            aria-label="Next testimonial">

            <Icon
              name="ChevronRight"
              size={24}
              className="text-primary group-hover:scale-110 transition-transform" />

          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials?.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ?
            'bg-primary neon-glow' : 'bg-surface hover:bg-primary/50'}`
            }
            aria-label={`Go to testimonial ${index + 1}`} />

          )}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-300">

            <Icon
              name={isAutoPlaying ? "Pause" : "Play"}
              size={16} />

            <span className="text-sm">
              {isAutoPlaying ? "Pause" : "Play"} Auto-rotation
            </span>
          </button>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;