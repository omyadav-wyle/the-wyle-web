import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  // Handle email submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage('Please enter a valid email address');
      setStatusType('error');
      setLoading(false);
      return;
    }

    try {
      // Replace with your actual deployed AppScript URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK55GHroxhyvqusEAofVae9sle4UDebd37aajM15De-fnGvWN052kxslOwcomvLuSS/exec';

      // Send email as form data
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('data', JSON.stringify({ email, type: 'early_access' }));

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

      setStatusMessage('Thank you! We\'ll be in touch soon.');
      setStatusType('success');
      setEmail('');
    } catch (error: any) {
      console.error('Error submitting email:', error);
      setStatusMessage('Something went wrong. Please try again.');
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="relative px-16" 
      style={{ background: '#000000', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <style>{`
        .email-input::placeholder {
          color: #C5C6C7;
          opacity: 0.6;
        }
        .email-input:focus {
          border-color: rgba(199, 162, 255, 0.5);
          outline: none;
          boxShadow: '0 0 20px rgba(199, 162, 255, 0.2)';
        }
      `}</style>
      
      <div className="max-w-2xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
          className="mb-6"
        style={{
          fontSize: '48px',
          fontFamily: 'Fredoka, system-ui, sans-serif',
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
          Ready to <span style={{ color: '#C7A2FF' }}>Unify?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mb-12 max-w-xl mx-auto"
          style={{
            fontSize: '16px',
            color: '#C5C6C7',
            fontFamily: 'Fredoka, system-ui, sans-serif',
            fontWeight: 400,
            lineHeight: '1.6',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the waitlist and be among the first to experience the future of unified digital life.
        </motion.p>

        {/* Email Input Group */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            disabled={loading}
            className="email-input flex-1 px-6 py-4 rounded-lg outline-none transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(199, 162, 255, 0.2)',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
            fontWeight: 400,
              fontSize: '16px',
            }}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-lg font-bold transition-all whitespace-nowrap"
            style={{
              background: 'rgba(199, 162, 255, 0.15)',
              border: '1px solid rgba(199, 162, 255, 0.3)',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
            fontWeight: 400,
              fontSize: '16px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              boxShadow: '0 0 20px rgba(199, 162, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'rgba(199, 162, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(199, 162, 255, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(199, 162, 255, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'rgba(199, 162, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(199, 162, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(199, 162, 255, 0.2)';
              }
            }}
          >
            {loading ? 'Submitting...' : 'Get Early Access'}
          </button>
        </motion.form>

            {/* Status Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-xl mx-auto"
                style={{
                  color: statusType === 'success' ? '#22c55e' : '#ef4444',
                  fontFamily: 'Fredoka, system-ui, sans-serif',
            fontWeight: 400,
                  fontSize: '14px',
                }}
              >
                {statusMessage}
              </motion.div>
            )}
      </div>
    </section>
  );
}
