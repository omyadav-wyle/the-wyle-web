import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';

export function Footer() {
  return (
    <footer className="relative py-16 px-16" style={{ background: '#000000', borderTop: '1px solid rgba(110, 216, 255, 0.1)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-12">
          {/* Left - Logo and Menu */}
          <div>
            {/* Logo */}
            <img src={logoImage} alt="wyle" className="h-12 mb-6" />
            
            {/* Menu Links */}
            <div className="flex gap-6 flex-wrap">
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Home
              </a>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                About
              </a>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Partners
              </a>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Services
              </a>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Blog
              </a>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right - App Badges and Social */}
          <div className="flex flex-col items-end gap-6">
            {/* App Store Badges */}
            <div className="flex gap-3">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="white" opacity="0.7"/>
                </svg>
                <div>
                  <div style={{ fontSize: '9px', color: '#C5C6C7', opacity: 0.7 }}>Download on the</div>
                  <div style={{ fontSize: '13px', color: '#FFFFFF' }}>App Store</div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 3.132L13.75 13.25 3.626 20.244C3.312 20.022 3.094 19.653 3.094 19.188V4.812C3.094 4.347 3.312 3.978 3.626 3.756L3.609 3.132zM15.172 14.672l2.907 2.906-10.875 6.047c-.28.156-.591.234-.891.234-.15 0-.3-.019-.45-.056l8.309-9.131zM19.891 11.297c.562.328.89.797.89 1.328 0 .531-.328 1-.89 1.328l-2.625 1.453-3.094-3.094 2.625-1.453 3.094 1.438zM14.797 10.844L6.434 2.438c.15-.037.3-.056.45-.056.3 0 .611.078.891.234l10.875 6.047-3.853 2.181z" fill="white" opacity="0.7"/>
                </svg>
                <div>
                  <div style={{ fontSize: '9px', color: '#C5C6C7', opacity: 0.7 }}>GET IT ON</div>
                  <div style={{ fontSize: '13px', color: '#FFFFFF' }}>Google Play</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Twitter size={16} color="#6ED8FF" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Facebook size={16} color="#6ED8FF" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Instagram size={16} color="#6ED8FF" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Linkedin size={16} color="#6ED8FF" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div
          className="flex items-center justify-between pt-8"
          style={{ borderTop: '1px solid rgba(110, 216, 255, 0.1)' }}
        >
          <div
            style={{
              fontSize: '12px',
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#C5C6C7',
              opacity: 0.7,
            }}
          >
            © 2025 WYLE All rights reserved
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
