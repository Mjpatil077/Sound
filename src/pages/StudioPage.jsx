import React from 'react';
import { motion } from 'framer-motion';

const StudioPage = () => {
  return (
    <div style={{ padding: '150px 0', minHeight: '100vh', backgroundColor: '#000', color: '#fff', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Massive background ambient text */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', fontSize: '30vw', fontFamily: 'Syne', color: 'rgba(255,255,255,0.02)', zIndex: 0, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          PHILOSOPHY
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', position: 'relative', zIndex: 10, marginTop: '10vh' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 style={{ fontSize: '80px', fontFamily: 'Syne', lineHeight: 0.9, marginBottom: '50px' }}>
              WE SHAPE <br/><span style={{ color: 'var(--accent-blue)' }}>SILENCE.</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#aaa', lineHeight: 1.8, marginBottom: '30px' }}>
              Founded on the intersection of architectural engineering and acoustic physics, Beast Acoustic was created to end the era of ugly, inefficient foam squares. 
            </p>
            <p style={{ fontSize: '18px', color: '#aaa', lineHeight: 1.8 }}>
              We believe a studio should be an immaculate sanctuary. The materials that isolate your sound should be as visually breathtaking as the music created within them. Everything we manufacture is bespoke, mathematically tuned, and unapologetically premium.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" 
              alt="Studio" 
              style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '24px', filter: 'grayscale(0.8)' }}
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '150px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '80px' }}
        >
          <div>
            <h3 style={{ fontSize: '48px', fontFamily: 'Syne', color: 'var(--accent-blue)', margin: '0 0 10px 0' }}>Est. 2026</h3>
            <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>Founded with a pure vision to combine hyper-effective sound dampening with minimalist aesthetics.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', fontFamily: 'Syne', color: 'var(--accent-blue)', margin: '0 0 10px 0' }}>150+</h3>
            <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>Professional recording environments and commercial spaces engineered globally.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '48px', fontFamily: 'Syne', color: 'var(--accent-blue)', margin: '0 0 10px 0' }}>NRC 1.0</h3>
            <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>Our flagship panels achieve pure Noise Reduction Coefficients, killing standing waves permanently.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StudioPage;
