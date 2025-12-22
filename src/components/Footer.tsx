import { Link, useNavigate } from 'react-router-dom';
import { Twitter,X , Instagram, Linkedin, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';
import { FaXTwitter } from 'react-icons/fa6'; 
// npm install @heroicons/react
import '../index.css';
export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to ensure scroll starts, then navigate
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <footer className="relative py-16 px-16 w-full" style={{ background: '#000000', borderTop: '1px solid rgba(110, 216, 255, 0.1)', paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)', paddingTop: 'clamp(32px, 4vw, 64px)', paddingBottom: 'clamp(32px, 4vw, 64px)', width: '100%', maxWidth: '100%' }}>
      {/* Main Footer Content */}
      <div className="w-full" style={{ maxWidth: '100%' }}>
        {/* Top Section */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
          
          {/* Left - Logo and Navigation Links on same line */}
          <div className="flex-shrink-0 flex items-center gap-6 flex-wrap">
            <img 
              src={logoImage} 
              alt="wyle" 
              className="h-14"
              style={{ 
                width: 'auto',
                height: 'clamp(40px, 3.5vw, 56px)',
                objectFit: 'contain',
                display: 'block',
                marginLeft: '-15px',
              }} 
            />
            
            {/* Navigation Links */}
            <div className="flex gap-6 items-center flex-wrap">
              <button
                onClick={() => handleNavClick('/')}
                className="transition-opacity hover:opacity-80 cursor-pointer"
                style={{
                  fontSize: 'clamp(11px, 1.3vw, 13px)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#C5C6C7',
                  opacity: 0.7,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                Home
              </button>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <button
                onClick={() => handleNavClick('/about')}
                className="transition-opacity hover:opacity-80 cursor-pointer"
                style={{
                  fontSize: 'clamp(11px, 1.3vw, 13px)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#C5C6C7',
                  opacity: 0.7,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                About Us
              </button>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <button
                onClick={() => handleNavClick('/user-contact')}
                className="transition-opacity hover:opacity-80 cursor-pointer"
                style={{
                  fontSize: 'clamp(11px, 1.3vw, 13px)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#C5C6C7',
                  opacity: 0.7,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex gap-3 items-center">
              <a
                href="https://x.com/wyleuae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all hover:bg-white/10"
                style={{
                  width: 'clamp(36px, 2.25vw, 36px)',
                  height: 'clamp(36px, 2.25vw, 36px)',
                  minWidth: '36px',
                  minHeight: '36px',
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <FaXTwitter   size={16} color="#D5FF3F" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
              </a>
              <a
                href="https://www.instagram.com/wyle.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all hover:bg-white/10"
                style={{
                  width: 'clamp(36px, 2.25vw, 36px)',
                  height: 'clamp(36px, 2.25vw, 36px)',
                  minWidth: '36px',
                  minHeight: '36px',
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Instagram size={16} color="#D5FF3F" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
              </a>
              <a
                href="https://www.linkedin.com/company/wyle-global-corporation/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all hover:bg-white/10"
                style={{
                  width: 'clamp(36px, 2.25vw, 36px)',
                  height: 'clamp(36px, 2.25vw, 36px)',
                  minWidth: '36px',
                  minHeight: '36px',
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Linkedin size={16} color="#D5FF3F" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
              </a>
              <a
                href="https://maps.app.goo.gl/cyX8V3suKxunWiH17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all hover:bg-white/10"
                style={{
                  width: 'clamp(36px, 2.25vw, 36px)',
                  height: 'clamp(36px, 2.25vw, 36px)',
                  minWidth: '36px',
                  minHeight: '36px',
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                  cursor: 'pointer',
                }}
                aria-label="Open location in Google Maps"
              >
                <MapPin size={16} color="#D5FF3F" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div
          className="flex items-center justify-center pt-8"
          style={{ borderTop: '1px solid rgba(110, 216, 255, 0.1)', paddingTop: 'clamp(16px, 2vw, 32px)' }}
        >
          <div
            style={{
              fontSize: 'clamp(10px, 1.2vw, 12px)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: '#C5C6C7',
              opacity: 0.7,
            }}
          >
            © 2025 WYLE Global Corporation, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}