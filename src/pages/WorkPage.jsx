import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PagesResponsive.css';

const ParallaxImage = ({ src, title, client }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.img 
        src={src} 
        alt={title}
        style={{ y, position: 'absolute', width: '100%', height: '140%', objectFit: 'cover', filter: 'brightness(0.5)' }}
      />
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <p style={{ color: 'var(--accent-blue)', fontFamily: 'Inter', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 800, marginBottom: '20px' }}>{client}</p>
        <h2 style={{ fontFamily: 'Syne', fontSize: '8vw', color: '#fff', margin: 0, lineHeight: 0.9 }}>{title}</h2>
      </div>
    </div>
  );
};

const WorkPage = () => {
  const projects = [
    { title: "THE BEAST ROOM", client: "Sony Music", src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600" },
    { title: "ECHO CHAMBER", client: "Universal Audio", src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1600" },
    { title: "SILENT ATELIER", client: "Private Client", src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600" }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '60px' }}>
        <motion.h1 
          className="resp-work-title"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ fontSize: '6vw', fontFamily: 'Syne', fontWeight: 800, lineHeight: 0.9, margin: 0, letterSpacing: '-2px' }}
        >
          OUR <br/>WORK
        </motion.h1>
      </div>

      <div>
        {projects.map((proj, i) => (
          <ParallaxImage key={i} src={proj.src} title={proj.title} client={proj.client} />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
