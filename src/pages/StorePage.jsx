import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Pulling TiltCard mechanics from Products component for reusability on Store Page
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="tilt-wrapper"
    >
      {children}
    </motion.div>
  );
};

const StorePage = () => {
  const [filter, setFilter] = useState('All');
  
  const allProducts = [
    { title: "Vinyl Sheets (MLV)", cat: "Isolation", price: "$120/roll", image: "/mlv_roll.png" },
    { title: "Studio Soundproof Frames", cat: "Panels", price: "$350/ea", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800" }, /* Still realistic */
    { title: "PET Felt Hexagons", cat: "Panels", price: "$85/pack", image: "/image.png" }, /* Client provided */
    { title: "Timber Acoustic Slat", cat: "Diffusion", price: "$220/panel", image: "/timber_slats.png" },
    { title: "Rubber Base Underlay", cat: "Isolation", price: "$190/roll", image: "/rubber_underlay.png" },
    { title: "Ceiling Baffles", cat: "Diffusion", price: "$410/set", image: "/ceiling_baffles.png" },
  ];

  const filtered = filter === 'All' ? allProducts : allProducts.filter(p => p.cat === filter);

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '150px', minHeight: '100vh', backgroundColor: '#000' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '6vw', fontFamily: 'Syne', fontWeight: 800, margin: 0, lineHeight: 0.9 }}>
            THE <br /> STUDIO STORE
          </h1>
          <div style={{ display: 'flex', gap: '15px' }}>
            {['All', 'Panels', 'Isolation', 'Diffusion'].map(btn => (
              <button 
                key={btn}
                onClick={() => setFilter(btn)}
                style={{
                  background: filter === btn ? 'var(--accent-blue)' : 'transparent',
                  color: filter === btn ? '#000' : '#fff',
                  border: `1px solid ${filter === btn ? 'var(--accent-blue)' : '#444'}`,
                  padding: '10px 24px', borderRadius: '50px', cursor: 'pointer', fontFamily: 'Inter', fontWeight: 600, transition: 'all 0.3s'
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="products-bento" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
          {filtered.map((prod, i) => (
            <motion.div key={prod.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={{ perspective: 1000 }}>
              <TiltCard>
                <div className="product-bento-card" style={{ height: '400px' }}>
                  <img src={prod.image} alt={prod.title} className="product-bento-img" />
                  <div className="product-bento-info" style={{ transform: "translateZ(50px)" }}>
                    <p style={{ color: 'var(--accent-blue)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 800, marginBottom: '5px' }}>{prod.cat}</p>
                    <h3 style={{ fontSize: '24px' }}>{prod.title}</h3>
                    <p style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{prod.price}</p>
                  </div>
                  <div className="glass-glare"></div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default StorePage;
