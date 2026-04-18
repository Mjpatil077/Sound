import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Layers, Grid, Combine, ArrowUpRight } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: "01",
    title: "Mass Loaded Vinyl",
    description: "High-density MLV sheets to effectively block sound transmission through walls.",
    icon: <Layers size={48} />
  },
  {
    id: "02",
    title: "Acoustic Frames",
    description: "Handcrafted, heavy-duty soundproof frames designed for studio isolation.",
    icon: <Grid size={32} />
  },
  {
    id: "03",
    title: "Floor Underlays",
    description: "Premium rubber and foam underlays to cut impact noise transmission.",
    icon: <Combine size={48} />
  },
  {
    id: "04",
    title: "PET Felt Solutions",
    description: "Eco-friendly, visually stunning felt panels targeting middle & high frequencies.",
    icon: <Mic2 size={32} />
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        
        <div className="services-header">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Pioneering the boundary between absolute silence and high-end aesthetics.
          </motion.p>
        </div>

        <div className="bento-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="bento-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bento-num">{service.id}</div>
              <div className="bento-icon">{service.icon}</div>
              <div>
                <h3 className="bento-title">{service.title}</h3>
                <p className="bento-desc">{service.description}</p>
              </div>
              <div className="bento-arrow">
                <ArrowUpRight size={28} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
