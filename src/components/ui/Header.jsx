import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Code' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
    { name: 'Pricing', path: '/pricing', icon: 'DollarSign' },
    { name: 'About', path: '/about', icon: 'Users' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled 
          ? 'glassmorphism backdrop-blur-xl' :'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 floating-sphere flex items-center justify-center smooth-transition group-hover:scale-110">
                <Icon 
                  name="Zap" 
                  size={20} 
                  className="text-black font-bold" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold holographic-text">
                Ratnakar DevHub
              </span>
              <span className="text-xs text-text-secondary font-mono">
                Technical Artistry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary neon-border-subtle' :'text-text-primary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={isActivePath(item?.path) ? 'text-primary' : 'text-current'} 
                />
                <span className="font-medium">{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-text-primary hover:text-primary"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Contact</span>
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="neon-glow-hover floating-sphere"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <Icon name="Rocket" size={16} />
                <span>Start Project</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-primary hover:bg-surface/50 smooth-transition"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden glassmorphism border-t border-neon-border smooth-transition ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-6 py-4 space-y-2">
            {navigationItems?.map((item, index) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary neon-border-subtle' :'text-text-primary hover:text-primary hover:bg-surface/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  className={isActivePath(item?.path) ? 'text-primary' : 'text-current'} 
                />
                <span className="font-medium">{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3 border-t border-surface">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-primary hover:text-primary hover:bg-surface/50 smooth-transition"
              >
                <Icon name="MessageCircle" size={20} />
                <span className="font-medium">Contact Us</span>
              </Link>
              
              <Button
                variant="default"
                fullWidth
                className="neon-glow floating-sphere"
              >
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full"
                >
                  <Icon name="Rocket" size={20} />
                  <span>Start Your Project</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;