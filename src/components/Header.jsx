import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      <motion.div 
        className={`header-pill ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="logo-pill">
          <Link to="/">
            SOUND<span className="logo-accent">::</span>
          </Link>
        </div>
        
        <nav className="nav-links-pill">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/studio">Studio</NavLink>
        </nav>

        <Link to="/contact" className="pill-contact-btn">
          Let's Talk
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
