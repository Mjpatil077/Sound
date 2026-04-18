import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div style={{ padding: '150px 0', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '100px' }}
        >
          <h1 style={{ fontSize: '8vw', fontFamily: 'Syne', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-2px' }}>
            ACOUSTIC <br /> SERVICES.
          </h1>
          <p style={{ marginTop: '30px', maxWidth: '600px', fontSize: '18px', color: '#888', lineHeight: 1.6 }}>
            Total spectrum sound control. We engineer absolute silence using computational acoustic modeling and bespoke material crafting. From massive recording studios to isolated home theaters, our engineering team constructs environments where sound operates purely on your terms.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            { tag: "01", title: "Parametric Acoustic Modeling", desc: "Before a single panel is mounted, we map your entire room in 3D, tracing frequency reflections and nulls to design the absolute perfect acoustic signature." },
            { tag: "02", title: "Custom Framing Isolation", desc: "We decouple structures from the physical world. Floating floors and isolated walls ensure that heavy sub-bass and impact noise simply vanishes." },
            { tag: "03", title: "Aesthetic Integration", desc: "No more ugly foam blocks. We integrate MLV, PET felt, and tuned timber diffusion directly into your interior design, creating invisible high-end silence." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{ padding: '60px', backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', display: 'flex', alignItems: 'flex-start', gap: '40px' }}
            >
              <h2 style={{ fontFamily: 'Syne', fontSize: '64px', color: 'var(--accent-blue)', opacity: 0.8, marginTop: '-10px' }}>{item.tag}</h2>
              <div>
                <h3 style={{ fontSize: '32px', marginBottom: '16px', fontFamily: 'Syne' }}>{item.title}</h3>
                <p style={{ color: '#aaa', maxWidth: '800px', fontSize: '16px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
