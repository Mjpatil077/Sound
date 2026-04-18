import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import StorePage from './pages/StorePage';
import WorkPage from './pages/WorkPage';
import StudioPage from './pages/StudioPage';
import ContactPage from './pages/ContactPage';
import Cursor from './components/Cursor';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Cursor />
      <div className="noise-overlay"></div>
      <div className="glow-bg" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="glow-bg" style={{ top: '60%', right: '-30%' }}></div>
      
      <Header />
      
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
