
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <nav className="relative z-50 flex items-center justify-between px-16 pt-8">
      {/* Logo */}
      <div className="text-white text-3xl tracking-tight" style={{ fontFamily: 'Varela Round, system-ui, sans-serif' }}>
        <Link to="/">
          <img src={logoImage} alt="wyle" className="h-14" style={{ marginLeft: '-8px' }} />
        </Link>
      </div>

      {/* Center Navigation - Glassmorphism */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 px-10 py-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <Link 
          to="/" 
          className={`text-sm transition-opacity hover:opacity-80 ${currentPath === '/' ? 'text-white' : 'text-gray-400'}`}
          style={{ fontFamily: 'Fredoka, system-ui, sans-serif', fontWeight: 400, letterSpacing: '2px' }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`text-sm transition-opacity hover:opacity-80 ${currentPath === '/about' ? 'text-white' : 'text-gray-400'}`}
          style={{ fontFamily: 'Fredoka, system-ui, sans-serif', fontWeight: 400, letterSpacing: '2px' }}
        >
          About
        </Link>

        {/* Contact - navigate to UserContact form */}
        <Link 
          to="/user-contact" 
          className={`text-sm transition-opacity hover:opacity-80 ${currentPath === '/user-contact' ? 'text-white' : 'text-gray-400'}`}
          style={{ fontFamily: 'Fredoka, system-ui, sans-serif', fontWeight: 400, letterSpacing: '2px' }}
        >
          Contact
        </Link>

      </div>

      <Link
        to="/contact"
        className="px-6 py-3 rounded-full text-sm transition-all"
        style={{
          background: '#D5FF3F',
          border: '1px solid #D5FF3F',
          color: '#000000',
          fontFamily: 'Fredoka, system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '1.5px',
          boxShadow: '0 0 20px rgba(213, 255, 63, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#E5FF5F';
          e.currentTarget.style.borderColor = '#E5FF5F';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(213, 255, 63, 0.5)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#D5FF3F';
          e.currentTarget.style.borderColor = '#D5FF3F';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(213, 255, 63, 0.3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Partner with us
      </Link>
    </nav>
  );
}
