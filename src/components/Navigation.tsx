
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if screen is mobile/tablet (below 1025px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const handleNavClick = (path: string) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to ensure scroll starts, then navigate
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-16 pt-8" style={{ paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)', paddingTop: 'clamp(16px, 2vw, 32px)' }}>
      {/* Logo */}
      <div className="text-white text-3xl tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Link to="/">
          <img src={logoImage} alt="wyle" className="h-14" style={{ marginLeft: '-8px', height: 'clamp(40px, 3.5vw, 56px)' }} />
        </Link>
      </div>

      {/* Desktop Navigation - Only visible on desktop/laptop */}
      {!isMobile && (
        <>
      {/* Center Navigation - Glassmorphism */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 px-10 py-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              gap: 'clamp(12px, 2vw, 32px)',
              paddingLeft: 'clamp(16px, 2.5vw, 40px)',
              paddingRight: 'clamp(16px, 2.5vw, 40px)',
              paddingTop: 'clamp(8px, 1vw, 16px)',
              paddingBottom: 'clamp(8px, 1vw, 16px)',
            }}
          >
            <button
              onClick={() => handleNavClick('/')}
              className={`text-sm transition-opacity hover:opacity-80 cursor-pointer ${currentPath === '/' ? 'text-white' : 'text-gray-400'}`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '2px', fontSize: 'clamp(11px, 1.2vw, 14px)', background: 'none', border: 'none', padding: 0 }}
        >
          Home
            </button>
            <span className="text-white" style={{ fontSize: 'clamp(11px, 1.2vw, 14px)' }}>|</span>
            <button
              onClick={() => handleNavClick('/about')}
              className={`text-sm transition-opacity hover:opacity-80 cursor-pointer ${currentPath === '/about' ? 'text-white' : 'text-gray-400'}`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '2px', fontSize: 'clamp(11px, 1.2vw, 14px)', background: 'none', border: 'none', padding: 0 }}
        >
          About Us
            </button>
            <span className="text-white" style={{ fontSize: 'clamp(11px, 1.2vw, 14px)' }}>|</span>
        {/* Contact - navigate to UserContact form */}
            <button
              onClick={() => handleNavClick('/user-contact')}
              className={`text-sm transition-opacity hover:opacity-80 cursor-pointer ${currentPath === '/user-contact' ? 'text-white' : 'text-gray-400'}`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '2px', fontSize: 'clamp(11px, 1.2vw, 14px)', background: 'none', border: 'none', padding: 0 }}
        >
          Contact Us
            </button>
      </div>

          {/* Partner with us button - Desktop */}
          <button
            onClick={() => handleNavClick('/contact')}
            className="px-6 py-3 rounded-full text-sm transition-all cursor-pointer"
        style={{
          background: '#D5FF3F',
          border: '1px solid #D5FF3F',
          color: '#000000',
              fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '1.5px',
          boxShadow: '0 0 20px rgba(213, 255, 63, 0.3)',
              paddingLeft: 'clamp(12px, 1.5vw, 24px)',
              paddingRight: 'clamp(12px, 1.5vw, 24px)',
              paddingTop: 'clamp(8px, 0.75vw, 12px)',
              paddingBottom: 'clamp(8px, 0.75vw, 12px)',
              fontSize: 'clamp(11px, 1.2vw, 14px)',
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
          </button>
        </>
      )}

      {/* Mobile Navigation - Hamburger Menu */}
      {isMobile && (
        <>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex flex-col items-center justify-center rounded-full transition-all"
            style={{
              width: '48px',
              height: '48px',
              padding: '12px',
              background: isMenuOpen 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))'
                : 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            aria-label="Toggle menu"
          >
            <span
              className="block transition-all"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#FFFFFF',
                transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                marginBottom: isMenuOpen ? '0' : '5px',
                borderRadius: '1px',
                boxShadow: '0 0 2px rgba(255,255,255,0.5)',
              }}
            />
            <span
              className="block transition-all"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#FFFFFF',
                opacity: isMenuOpen ? 0 : 1,
                borderRadius: '1px',
                boxShadow: '0 0 2px rgba(255,255,255,0.5)',
              }}
            />
            <span
              className="block transition-all"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#FFFFFF',
                transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                marginTop: isMenuOpen ? '0' : '5px',
                borderRadius: '1px',
                boxShadow: '0 0 2px rgba(255,255,255,0.5)',
              }}
            />
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(4px)',
                }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}
              <div
                className="fixed top-0 right-0 z-50 h-full w-80 flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(15, 15, 15, 0.98))',
                  backdropFilter: 'blur(30px)',
                  borderLeft: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
                  paddingTop: '80px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  paddingBottom: '32px',
                }}
              >
                {/* Menu Items */}
                <div className="flex flex-col gap-6">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('/');
                    }}
                    className={`text-lg transition-opacity hover:opacity-80 py-2 text-left cursor-pointer ${
                      currentPath === '/' ? 'text-white' : 'text-gray-400'
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '2px',
                      borderBottom: currentPath === '/' ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      background: 'none',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      padding: 0,
                    }}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('/about');
                    }}
                    className={`text-lg transition-opacity hover:opacity-80 py-2 text-left cursor-pointer ${
                      currentPath === '/about' ? 'text-white' : 'text-gray-400'
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '2px',
                      borderBottom: currentPath === '/about' ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      background: 'none',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      padding: 0,
                    }}
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('/user-contact');
                    }}
                    className={`text-lg transition-opacity hover:opacity-80 py-2 text-left cursor-pointer ${
                      currentPath === '/user-contact' ? 'text-white' : 'text-gray-400'
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '2px',
                      borderBottom: currentPath === '/user-contact' ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      background: 'none',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      padding: 0,
                    }}
                  >
                    Contact
                  </button>

                  {/* Partner with us button - Mobile */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('/contact');
                    }}
                    className="mt-4 px-6 py-3 rounded-full text-sm transition-all text-center cursor-pointer"
                    style={{
                      background: '#D5FF3F',
                      border: '1px solid #D5FF3F',
                      color: '#000000',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      boxShadow: '0 0 20px rgba(213, 255, 63, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E5FF5F';
                      e.currentTarget.style.borderColor = '#E5FF5F';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(213, 255, 63, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#D5FF3F';
                      e.currentTarget.style.borderColor = '#D5FF3F';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(213, 255, 63, 0.3)';
                    }}
                  >
                    Partner with us
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </nav>
  );
}
