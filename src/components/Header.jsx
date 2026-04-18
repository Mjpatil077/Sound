import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        <nav className={`nav-links-pill ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/store" onClick={() => setMenuOpen(false)}>Store</NavLink>
          <NavLink to="/work" onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/studio" onClick={() => setMenuOpen(false)}>Studio</NavLink>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-only-contact">Let's Talk</Link>
        </nav>

        <div className="mobile-actions">
          <Link to="/contact" className="pill-contact-btn desktop-only">
            Let's Talk
          </Link>
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
