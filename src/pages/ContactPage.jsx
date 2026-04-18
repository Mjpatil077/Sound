import React from 'react';
import { motion } from 'framer-motion';
import './PagesResponsive.css';

const ContactPage = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px', display: 'flex', alignItems: 'center', backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 60%)' }}>
      <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        
        <motion.div 
          className="resp-contact-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            width: '100%', 
            maxWidth: '600px', 
            backgroundColor: 'rgba(10, 10, 10, 0.6)', 
            border: '1px solid var(--glass-border)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '60px'
          }}
        >
          <h1 className="resp-contact-title" style={{ fontFamily: 'Syne', fontSize: '48px', marginBottom: '10px', textAlign: 'center' }}>LET'S TALK.</h1>
          <p style={{ color: '#888', textAlign: 'center', marginBottom: '50px' }}>Inquire about bespoke panels, studio framing, or raw materials.</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ width: '100%', padding: '16px 24px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', color: '#fff', fontSize: '16px', fontFamily: 'Inter', outline: 'none' }}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ width: '100%', padding: '16px 24px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', color: '#fff', fontSize: '16px', fontFamily: 'Inter', outline: 'none' }}
            />
            <textarea 
              placeholder="Project Details" 
              rows="5"
              style={{ width: '100%', padding: '16px 24px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', color: '#fff', fontSize: '16px', fontFamily: 'Inter', outline: 'none', resize: 'vertical' }}
            ></textarea>
            
            <button 
              type="button" 
              style={{ width: '100%', padding: '18px 0', backgroundColor: 'var(--accent-blue)', color: '#000', borderRadius: '12px', fontFamily: 'Syne', fontWeight: 800, fontSize: '18px', textTransform: 'uppercase', marginTop: '10px', transition: 'all 0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-blue)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
