import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function HomePage() {
  return (
    <div className="relative w-full" style={{ background: '#000000' }}>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ADDITIONAL SECTIONS */}
      <FloatingUISection />
      <CloneWithConscience />
      <GradientWave />
      <ContactSection />
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