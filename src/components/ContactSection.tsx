import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
export function ContactSection() {
  const navigate = useNavigate();

  const handleGetEarlyAccess = () => {
    navigate('/user-contact');
  };

  return (
    <section 
      className="relative px-16" 
      style={{ background: '#000000', paddingBottom: 'clamp(32px, 4vw, 64px)', paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' }}
    >
      <div className="max-w-2xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
          className="mb-6"
        style={{
          fontSize: 'var(--font-size-heading-sm)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          letterSpacing: '1px',
          color: '#FFFFFF',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Ready to experience <span style={{ color: '#1B998B' }}>what's next?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mb-12 max-w-xl mx-auto"
          style={{
            fontSize: 'var(--font-size-body)',
            color: '#C5C6C7',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            lineHeight: '1.6',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join us in building a more connected, effortless digital experience. Get early access and be part of the journey.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={handleGetEarlyAccess}
            className="px-8 py-4 rounded-lg font-bold transition-all whitespace-nowrap"
            style={{
              background: '#D5FF3F',
              border: '1px solid #D5FF3F',
              color: '#000000',
              fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: 'var(--font-size-body)',
              cursor: 'pointer',
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
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}
