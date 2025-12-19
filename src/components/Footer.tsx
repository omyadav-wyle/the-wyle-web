import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';

export function Footer() {
  return (
    <footer className="relative py-16 px-16" style={{ background: '#000000', borderTop: '1px solid rgba(110, 216, 255, 0.1)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-12">
          {/* Left - Logo, Email, and Navigation Links */}
          <div className="flex-shrink-0 flex flex-col">
            <img 
              src={logoImage} 
              alt="wyle" 
              className="mb-4" 
              style={{ 
                width: 'auto',
                height: '56px',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
            <a
              href="mailto:info@wyle.ai"
              className="transition-opacity hover:opacity-80 mb-4"
              style={{
                fontSize: '13px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              info@wyle.ai
            </a>
            {/* Navigation Links */}
            <div className="flex gap-6 items-center">
              <Link
                to="/"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Home
              </Link>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <Link
                to="/about"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                About
              </Link>
              <span style={{ color: '#C5C6C7', opacity: 0.3 }}>|</span>
              <Link
                to="/contact"
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  opacity: 0.7,
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="flex-shrink-0 flex items-start">
            <div className="flex gap-3">
              <a
                href="https://twitter.com/wyle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Twitter size={16} color="#6ED8FF" />
              </a>
              <a
                href="https://facebook.com/wyle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Facebook size={16} color="#6ED8FF" />
              </a>
              <a
                href="https://instagram.com/wyle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{
                  background: 'rgba(110, 216, 255, 0.1)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <Instagram size={16} color="#6ED8FF" />
              </a>
              <a
                href="https://linkedin.com/company/wyle"
                target="_blank"
                rel="noopener noreferrer"
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
            © 2025 WYLE Global Corporation, Inc.
          </div>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/cookies"
              className="transition-opacity hover:opacity-80"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#C5C6C7',
                opacity: 0.7,
              }}
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
