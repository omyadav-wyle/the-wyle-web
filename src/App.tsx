import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { CloneWithConscience } from './components/CloneWithConscience';
import { GradientWave } from './components/GradientWave';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingUISection } from './components/FloatingUISection';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { useEffect } from 'react';
import { ProblemSection } from './components/ProblemSection';
import { OtherApps } from '../src/components/OtherApps';
import { FragmentedReality } from './components/FragmentedReality';
  
  function HomePage() {
  const location = useLocation();

  useEffect(() => {
   if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="relative w-full" style={{ background: '#000000' }}>
      {/* HERO SECTION
      <HeroSection />

      {/* ADDITIONAL SECTIONS *
      <FloatingUISection />
      <CloneWithConscience />
      <GradientWave />
      <div id="contact">
        <ContactSection />
      </div>
      <MapSection />
      <Footer />
    </div> */}
    {/* <div className="relative w-full" style={{ background: '#000000' }}> */}
      <HeroSection />
      <FloatingUISection />
      <CloneWithConscience />
     
      {/* <GradientWave /> */}
       <OtherApps />
      {/* <ProblemSection/> */}
      <FragmentedReality />
      <div id="contact">
        <ContactSection />
      </div>

      <MapSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}