import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import { Footer } from './Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';

export function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    country: '',
    city: '',
    employees: '',
    outlets: '',
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success', 'error'

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Validation
    if (
      !formData.businessName.trim() ||
      !formData.industry.trim() ||
      !formData.country.trim() ||
      !formData.city.trim() ||
      !formData.employees.trim() ||
      !formData.outlets.trim() ||
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.department.trim() ||
      !formData.message.trim()
    ) {
      setStatusMessage('Please fill in all fields');
      setStatusType('error');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage('Please enter a valid email address');
      setStatusType('error');
      setLoading(false);
      return;
    }

    try {
      // Use the same AppScript URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK55GHroxhyvqusEAofVae9sle4UDebd37aajM15De-fnGvWN052kxslOwcomvLuSS/exec';

      // Send data as URL-encoded form data to avoid CORS issues
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('data', JSON.stringify(formData));

      // Use no-cors mode to bypass CORS restrictions
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

      // Since we can't read the response with no-cors, we assume success if no error is thrown
      setStatusMessage('Form submitted successfully! We will get back to you soon.');
      setStatusType('success');
      // Reset form
      setFormData({
        businessName: '',
        industry: '',
        country: '',
        city: '',
        employees: '',
        outlets: '',
        fullName: '',
        email: '',
        phone: '',
        department: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatusMessage(
        error.message || 'Failed to send message. Please check your connection and try again.'
      );
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative w-full min-h-screen" style={{ background: '#000000' }}>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Navigation */}
      <Navigation/>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-16">
        {/* Purple arc - left side */}
        <div className="absolute pointer-events-none" style={{ left: '-40px', top: '50%', zIndex: 1, transform: 'translateY(-50%) scaleX(-1)' }}>
          {/* Heavily blurred base layer */}
          <img 
            src={arcImage} 
            alt="purple arc blur base" 
            className="h-[50vh]"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(50px) brightness(1.6)',
              opacity: 0.5,
            }}
          />
          
          {/* Medium blur layer */}
          <img 
            src={arcImage} 
            alt="purple arc blur medium" 
            className="h-[50vh] absolute top-0 right-0"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(30px) brightness(1.4)',
              opacity: 0.6,
            }}
          />
          
          {/* Soft blur overlay */}
          <img 
            src={arcImage} 
            alt="purple arc blur soft" 
            className="h-[50vh] absolute top-0 right-0"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.5,
              filter: 'blur(15px) brightness(1.2)',
            }}
          />
        </div>

        {/* Purple flow - right side */}
        <div className="absolute pointer-events-none" style={{ right: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(-20deg)' }}>
          <img 
            src={imgPurpleFlow} 
            alt="purple flow" 
            className="h-[100vh]"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.6,
              filter: 'blur(3px)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            style={{
              fontSize: '64px',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '-1px',
              lineHeight: '1.2',
              marginBottom: '24px',
            }}
          >
            Grow You Business<br />with WYLE
          </h1>

          <p
            style={{
              fontSize: '16px',
              color: '#CCCCCC',
              fontFamily: 'Fredoka, system-ui, sans-serif',
              letterSpacing: '0.3px',
              lineHeight: '1.6',
              maxWidth: '600px',
            }}
          >
            Partner with WYLE and move forward together with shared purpose and ambition.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12 px-16 pb-32">
        {/* Purple flow - right side of form */}
        <div className="absolute pointer-events-none" style={{ right: '-500px', top: '40%', zIndex: 1, transform: 'translateY(-50%) rotate(15deg)' }}>
          <img 
            src={imgPurpleFlow} 
            alt="purple flow form" 
            className="h-[60vh]"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.4,
              filter: 'blur(3px)',
            }}
          />
        </div>

        {/* Purple flow - left side near message */}
        <div className="absolute pointer-events-none" style={{ left: '-500px', bottom: '0%', zIndex: 1, transform: 'rotate(-15deg)' }}>
          <img 
            src={imgPurpleFlow} 
            alt="purple flow form left" 
            className="h-[60vh]"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.4,
              filter: 'blur(3px)',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <form className="space-y-12" onSubmit={handleSubmit}>
            {/* Two Column Grid - Row 1 */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {/* Business Name */}
              <div>
                <label 
                  htmlFor="businessName"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Business Name <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Industry */}
              <div>
                <label 
                  htmlFor="industry"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Industry <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Country */}
              <div>
                <label 
                  htmlFor="country"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Country <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* City */}
              <div>
                <label 
                  htmlFor="city"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  City <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Number Of Employees */}
              <div>
                <label 
                  htmlFor="employees"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Number Of Employees <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Number Of Outlets */}
              <div>
                <label 
                  htmlFor="outlets"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Number Of Outlets <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="outlets"
                  name="outlets"
                  value={formData.outlets}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Full Name <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Email <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label 
                  htmlFor="phone"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Phone Number <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>

              {/* Which department */}
              <div>
                <label 
                  htmlFor="department"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    marginBottom: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  Department <span style={{ color: '#FF0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full pb-2"
                  style={{
                    background: 'transparent',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#999999',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  placeholder="Your answer"
                />
              </div>
            </div>

            {/* Message - Full Width */}
            <div>
              <label 
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontFamily: 'Fredoka, system-ui, sans-serif',
                  marginBottom: '12px',
                  letterSpacing: '0.3px',
                }}
              >
                Message <span style={{ color: '#FF0000' }}>*</span>
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pb-2"
                style={{
                  background: 'transparent',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#999999',
                  fontFamily: 'Fredoka, system-ui, sans-serif',
                  fontSize: '14px',
                  outline: 'none',
                }}
                placeholder="Your answer"
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg"
                style={{
                  background:
                    statusType === 'success'
                      ? 'rgba(34, 197, 94, 0.1)'
                      : 'rgba(239, 68, 68, 0.1)',
                  border:
                    statusType === 'success'
                      ? '1px solid rgba(34, 197, 94, 0.3)'
                      : '1px solid rgba(239, 68, 68, 0.3)',
                  color: statusType === 'success' ? '#22c55e' : '#ef4444',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                }}
              >
                {statusMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full text-sm transition-opacity hover:opacity-80 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '1.5px',
                }}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}