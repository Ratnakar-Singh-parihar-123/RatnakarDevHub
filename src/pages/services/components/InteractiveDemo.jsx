import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('web');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = {
    web: {
      title: "Web Application Demo",
      description: "Experience our responsive web development capabilities",
      features: [
        "Responsive Design",
        "Interactive Components",
        "Performance Optimized",
        "SEO Friendly"
      ],
      mockup: {
        type: "website",
        screens: [
          { name: "Desktop", width: "100%", height: "400px" },
          { name: "Tablet", width: "768px", height: "400px" },
          { name: "Mobile", width: "375px", height: "400px" }
        ]
      }
    },
    mobile: {
      title: "Mobile App Demo",
      description: "See our cross-platform mobile development in action",
      features: [
        "Native Performance",
        "Smooth Animations",
        "Offline Capability",
        "Push Notifications"
      ],
      mockup: {
        type: "mobile",
        screens: [
          { name: "Home", active: true },
          { name: "Profile", active: false },
          { name: "Settings", active: false }
        ]
      }
    },
    api: {
      title: "API Integration Demo",
      description: "Explore our backend and API development capabilities",
      features: [
        "RESTful APIs",
        "Real-time Data",
        "Secure Authentication",
        "Scalable Architecture"
      ],
      mockup: {
        type: "api",
        endpoints: [
          { method: "GET", path: "/api/users", status: "200" },
          { method: "POST", path: "/api/auth/login", status: "201" },
          { method: "PUT", path: "/api/users/123", status: "200" },
          { method: "DELETE", path: "/api/users/123", status: "204" }
        ]
      }
    }
  };

  const WebsiteMockup = () => (
    <div className="space-y-4">
      <div className="flex space-x-2 justify-center">
        {demos?.web?.mockup?.screens?.map((screen, idx) => (
          <button
            key={screen?.name}
            className="px-3 py-1 text-xs bg-surface/50 text-text-secondary rounded neon-border-subtle hover:text-primary smooth-transition"
          >
            {screen?.name}
          </button>
        ))}
      </div>
      <div className="glassmorphism rounded-lg p-4 bg-background/50">
        {/* Browser Header */}
        <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-surface">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-surface/50 rounded px-3 py-1 text-xs text-text-secondary">
            https://ratnakar-devhub.com
          </div>
        </div>
        
        {/* Website Content */}
        <div className="space-y-3">
          <div className="h-8 bg-gradient-to-r from-primary/20 to-transparent rounded"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 bg-surface/30 rounded"></div>
            <div className="h-16 bg-surface/30 rounded"></div>
            <div className="h-16 bg-surface/30 rounded"></div>
          </div>
          <div className="h-4 bg-surface/20 rounded w-3/4"></div>
          <div className="h-4 bg-surface/20 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  const MobileMockup = () => (
    <div className="flex justify-center">
      <div className="w-64 h-96 bg-surface/20 rounded-3xl p-4 relative">
        {/* Phone Frame */}
        <div className="w-full h-full bg-background rounded-2xl overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 py-2 text-xs text-text-secondary">
            <span>9:41</span>
            <div className="flex space-x-1">
              <Icon name="Wifi" size={12} />
              <Icon name="Battery" size={12} />
            </div>
          </div>
          
          {/* App Content */}
          <div className="px-4 space-y-4">
            <div className="h-6 bg-gradient-to-r from-primary/20 to-transparent rounded"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 bg-surface/30 rounded-lg"></div>
              <div className="h-20 bg-surface/30 rounded-lg"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-surface/20 rounded"></div>
              <div className="h-3 bg-surface/20 rounded w-3/4"></div>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-around py-2 bg-surface/30 rounded-lg">
            {demos?.mobile?.mockup?.screens?.map((screen, idx) => (
              <div
                key={screen?.name}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  screen?.active ? 'bg-primary/20' : 'bg-surface/20'
                }`}
              >
                <div className={`w-4 h-4 rounded ${
                  screen?.active ? 'bg-primary' : 'bg-surface'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const APIMockup = () => (
    <div className="glassmorphism rounded-lg p-4 bg-background/50 font-mono text-sm">
      <div className="space-y-3">
        {demos?.api?.mockup?.endpoints?.map((endpoint, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex items-center space-x-4 p-2 bg-surface/20 rounded"
          >
            <span className={`px-2 py-1 rounded text-xs font-bold ${
              endpoint?.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
              endpoint?.method === 'POST' ? 'bg-green-500/20 text-green-400' :
              endpoint?.method === 'PUT'? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {endpoint?.method}
            </span>
            <span className="text-text-secondary flex-1">{endpoint?.path}</span>
            <span className="text-primary">{endpoint?.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMockup = () => {
    switch (activeDemo) {
      case 'web':
        return <WebsiteMockup />;
      case 'mobile':
        return <MobileMockup />;
      case 'api':
        return <APIMockup />;
      default:
        return <WebsiteMockup />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold holographic-text">
          Interactive Demos
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Experience our development capabilities through interactive demonstrations
        </p>
      </div>
      {/* Demo Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(demos)?.map(([key, demo]) => (
          <button
            key={key}
            onClick={() => setActiveDemo(key)}
            className={`px-6 py-3 rounded-lg smooth-transition ${
              activeDemo === key
                ? 'bg-primary/10 text-primary neon-border-subtle' :'text-text-secondary hover:text-primary hover:bg-surface/50'
            }`}
          >
            <span className="font-medium">{demo?.title}</span>
          </button>
        ))}
      </div>
      {/* Demo Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Demo Info */}
        <motion.div
          key={`${activeDemo}-info`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary">
              {demos?.[activeDemo]?.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {demos?.[activeDemo]?.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-2">
              {demos?.[activeDemo]?.features?.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={16} className="mr-2" />
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </Button>
            <Button variant="default" className="neon-glow">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Request Demo
            </Button>
          </div>
        </motion.div>

        {/* Demo Mockup */}
        <motion.div
          key={`${activeDemo}-mockup`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {renderMockup()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveDemo;