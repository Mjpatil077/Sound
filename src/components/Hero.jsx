import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SoundproofFrame3D from './SoundproofFrame3D';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const textX = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="hero">
      <div className="container hero-container">
        
        <motion.h1 
          className="hero-huge-text"
          style={{ x: textX }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 }
            }
          }}
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } }} 
            style={{ display: 'block' }}
          >
            ACOUSTIC
          </motion.span>
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } }} 
            style={{ display: 'block' }}
          >
            ATELIER
          </motion.span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering absolute silence. Premium soundproofing materials and studio design for the modern era.
        </motion.p>

        <div className="hero-visuals-3d">
          <SoundproofFrame3D />
        </div>
        
        <motion.div 
          className="scroll-indicator-premium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="mouse-icon">
            <motion.div 
              className="wheel"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
          <span>SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
