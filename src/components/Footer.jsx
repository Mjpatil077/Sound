import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Share2, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container" style={{ position: 'relative' }}>
        
        <div className="footer-top">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>SOUND<span style={{color: 'var(--accent-blue)'}}>::</span></h2>
            <p>The definitive source for luxury acoustic modeling and soundproofing.</p>
          </motion.div>
          
          <div className="footer-links">
            <motion.div 
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4>Menu</h4>
              <a href="/">Index</a>
              <a href="/#services">Services</a>
              <a href="/#products">Store</a>
              <a href="/#about">Studio</a>
            </motion.div>
            
            <motion.div 
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4>Contact</h4>
              <p>hello@soundcomfort.genz</p>
              <p>+7 (915) 822-58-55</p>
            </motion.div>
          </div>
        </div>

        <div className="marquee-container">
          <motion.div 
            className="marquee-content"
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="marquee-text">SOUND COMFORT</div>
            <div className="marquee-text">SOUND COMFORT</div>
            <div className="marquee-text">SOUND COMFORT</div>
            <div className="marquee-text">SOUND COMFORT</div>
          </motion.div>
        </div>

        <div className="footer-socials">
          <a href="#ig"><Globe size={24} /></a>
          <a href="#tw"><MessageCircle size={24} /></a>
          <a href="#in"><Share2 size={24} /></a>
          <a href="#mail"><Mail size={24} /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
