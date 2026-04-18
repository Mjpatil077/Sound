import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Products.css';

const productsData = [
  {
    id: 1,
    title: "Vinyl Sheets",
    subtitle: "Mass Loaded Vinyl Barrier",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Soundproof Frames",
    subtitle: "Heavy-Duty Acoustic Panels",
    badge: "Pro",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "PET Felt Panels",
    subtitle: "Hexagon & Slat Designs",
    badge: "New",
    image: "/image.png"
  }
];

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="tilt-wrapper"
    >
      {children}
    </motion.div>
  );
};

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        
        <motion.div 
          className="products-title-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>OUR<br/>PRODUCTS</h2>
        </motion.div>

        <div className="products-bento">
          {productsData.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ perspective: 1000 }} /* required for TiltCard 3d effect */
            >
              <TiltCard>
                <div className="product-bento-card">
                  {prod.badge && (
                    <div className="product-badge" style={{ transform: "translateZ(40px)" }}>
                      {prod.badge}
                    </div>
                  )}
                  <img src={prod.image} alt={prod.title} className="product-bento-img" />
                  
                  {/* The dark gradient overlay also gets popped out in 3D */}
                  <div className="product-bento-info" style={{ transform: "translateZ(60px)" }}>
                    <h3>{prod.title}</h3>
                    <p>{prod.subtitle}</p>
                  </div>
                  
                  {/* Subtle glass glare effect element mapped to tilt mechanics later or controlled via CSS */}
                  <div className="glass-glare"></div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
