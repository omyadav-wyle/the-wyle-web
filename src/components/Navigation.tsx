import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';

export function Navigation() {
  return (
    <nav className="relative z-50 flex items-center px-16 pt-8">
      {/* Logo */}
      <div className="text-white text-3xl tracking-tight" style={{ fontFamily: 'Varela Round, system-ui, sans-serif' }}>
        <Link to="/">
          <img src={logoImage} alt="wyle" className="h-14" style={{ marginLeft: '-8px' }} />
        </Link>
      </div>

      {/* Center Navigation - Glassmorphism */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 px-10 py-4 rounded-full"
           style={{
             background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
             backdropFilter: 'blur(30px)',
             border: '1px solid rgba(255,255,255,0.15)',
             boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
           }}>
        <Link to="/" className="text-white text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Home</Link>
        <Link to="/services" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Services</Link>
        <Link to="/about" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>About</Link>
        <Link to="/contact" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Contact</Link>
      </div>
    </nav>
  );
}





