// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

// const HeroSection = () => {
//   const particles = Array.from({ length: 50 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 4 + 1,
//     duration: Math.random() * 20 + 10
//   }));

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-gray-900 to-black">
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0">
//         {particles?.map((particle) => (
//           <motion.div
//             key={particle?.id}
//             className="absolute rounded-full bg-primary/20"
//             style={{
//               left: `${particle?.x}%`,
//               top: `${particle?.y}%`,
//               width: `${particle?.size}px`,
//               height: `${particle?.size}px`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: particle?.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           {/* Main Heading */}
//           <div className="space-y-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold"
//             >
//               <span className="holographic-text">Building Tomorrow's</span>
//               <br />
//               <span className="text-white">Technology </span>
//               <span className="text-primary">Today</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
//             >
//               Where innovation meets implementation. We transform ambitious visions into
//               cutting-edge digital solutions that drive growth and redefine possibilities.
//             </motion.p>
//           </div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Button
//               variant="default"
//               size="lg"
//               className="neon-glow-hover floating-sphere px-8 py-4"
//             >
//               <Link to="/contact" className="flex items-center space-x-3">
//                 <Icon name="Rocket" size={24} />
//                 <span className="text-lg font-semibold">Start Your Project</span>
//               </Link>
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               className="glassmorphism hover:neon-border px-8 py-4"
//             >
//               <Link to="/portfolio" className="flex items-center space-x-3">
//                 <Icon name="Play" size={24} />
//                 <span className="text-lg font-semibold">View Our Work</span>
//               </Link>
//             </Button>
//           </motion.div>

//           {/* Trust Indicators */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-wrap justify-center items-center gap-8 pt-8"
//           >
//             <div className="flex items-center space-x-2 text-text-secondary">
//               <Icon name="Shield" size={20} className="text-primary" />
//               <span>Enterprise Security</span>
//             </div>
//             <div className="flex items-center space-x-2 text-text-secondary">
//               <Icon name="Clock" size={20} className="text-primary" />
//               <span>24/7 Support</span>
//             </div>
//             <div className="flex items-center space-x-2 text-text-secondary">
//               <Icon name="Award" size={20} className="text-primary" />
//               <span>Industry Leaders</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex flex-col items-center space-y-2 text-text-secondary"
//         >
//           <span className="text-sm">Scroll to explore</span>
//           <Icon name="ChevronDown" size={24} className="text-primary" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ★ BACKGROUND IMAGE WITH CINEMATIC BLUR */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://wallpapers.com/images/featured/best-office-background-5gterh8tggbflw6w.jpg"
          alt="Tech Workspace Background"
          className="w-full h-full object-cover opacity-100 scale-105"
        />

        {/* Soft Gaussian blur + slight dark tint */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10"></div>
      </div>

      {/* ★ SOFT VISIBLE GRADIENT (NOT TOO DARK) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* ★ Laptop neon glow bloom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-green-400/20 blur-[150px] opacity-70" />
      </div>

      {/* ★ Floating dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ★ MAIN CONTENT */}
      <div className="relative z-20 w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            <span className="text-green-400 drop-shadow-[0_0_25px_rgba(0,255,120,0.8)]">
              Building Tomorrow’s
            </span>
            <br />
            <span className="text-white">Technology </span>
            <span className="text-green-400">Today</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Where premium craftsmanship meets innovation. Crafting world-class
            digital experiences powered by futuristic engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button
              variant="default"
              size="lg"
              className="neon-glow-hover px-10 py-5 bg-green-500 text-black font-bold shadow-lg shadow-green-500/40"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <Icon name="Rocket" size={24} />
                <span className="text-lg">Start Your Project</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glassmorphism px-10 py-5 hover:neon-border border-green-400"
            >
              <Link to="/portfolio" className="flex items-center gap-3">
                <Icon name="Play" size={24} />
                <span className="text-lg">View Portfolio</span>
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-10 pt-6 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} className="text-green-400" />
              <span>Enterprise-Grade Security</span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="text-green-400" />
              <span>24/7 Dedicated Support</span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-green-400" />
              <span>Award-Winning Engineers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={28} className="text-green-400" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;

