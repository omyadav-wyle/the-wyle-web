import { motion } from 'motion/react';
import { Instagram, Twitter, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success', 'error'

  // Handle input changes
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.subject.trim() ||
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
      // Replace with your actual deployed AppScript URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK55GHroxhyvqusEAofVae9sle4UDebd37aajM15De-fnGvWN052kxslOwcomvLuSS/exec';

      // Send data as URL-encoded form data to avoid CORS issues
      // This works better with Google Apps Script web apps
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('data', JSON.stringify(formData));

      // Use no-cors mode to bypass CORS restrictions
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

      // Since we can't read the response with no-cors, we assume success if no error is thrown
      // The data has been sent to your AppScript and will be processed
      setStatusMessage('Message sent successfully! We will get back to you soon.');
      setStatusType('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
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
    <section className="relative py-32 px-16" style={{ background: '#000000' }}>
      {/* Heading */}
      <motion.h2
        className="text-center mb-20"
        style={{
          fontSize: '48px',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '4px',
          color: '#FFFFFF',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        We'd Love to Hear From You
      </motion.h2>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontSize: '28px',
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Get In <span style={{ color: '#6ED8FF' }}>Contact</span> with us
          </h3>

          <p
            style={{
              fontSize: '14px',
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#C5C6C7',
              lineHeight: '1.6',
              marginBottom: '32px',
              opacity: 0.8,
            }}
          >
            Have a question or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail size={18} color="#6ED8FF" />
              <span
                style={{
                  fontSize: '15px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#FFFFFF',
                }}
              >
                info@wyleapp.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} color="#6ED8FF" />
              <span
                style={{
                  fontSize: '15px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#FFFFFF',
                }}
              >
                +971 9 xxxxxxx
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} color="#6ED8FF" />
              <span
                style={{
                  fontSize: '15px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#FFFFFF',
                }}
              >
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
              style={{
                background: 'rgba(110, 216, 255, 0.1)',
                border: '1px solid rgba(110, 216, 255, 0.3)',
              }}
            >
              <Instagram size={18} color="#6ED8FF" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
              style={{
                background: 'rgba(110, 216, 255, 0.1)',
                border: '1px solid rgba(110, 216, 255, 0.3)',
              }}
            >
              <Twitter size={18} color="#6ED8FF" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
              style={{
                background: 'rgba(110, 216, 255, 0.1)',
                border: '1px solid rgba(110, 216, 255, 0.3)',
              }}
            >
              <Mail size={18} color="#6ED8FF" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
              style={{
                background: 'rgba(110, 216, 255, 0.1)',
                border: '1px solid rgba(110, 216, 255, 0.3)',
              }}
            >
              <Linkedin size={18} color="#6ED8FF" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First and Last Name Row */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    background: '#0A0A0F',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    background: '#0A0A0F',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                  }}
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    background: '#0A0A0F',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    background: '#0A0A0F',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                  }}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                style={{
                  fontSize: '12px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  marginBottom: '8px',
                  display: 'block',
                }}
              >
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                style={{
                  background: '#0A0A0F',
                  border: '1px solid rgba(110, 216, 255, 0.3)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                style={{
                  fontSize: '12px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#C5C6C7',
                  marginBottom: '8px',
                  display: 'block',
                }}
              >
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg outline-none transition-all resize-none"
                style={{
                  background: '#0A0A0F',
                  border: '1px solid rgba(110, 216, 255, 0.3)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  boxShadow: '0 0 20px rgba(110, 216, 255, 0.1)',
                }}
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
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 rounded-full transition-all w-full"
              style={{
                background: loading
                  ? 'rgba(110, 216, 255, 0.3)'
                  : 'rgba(197, 198, 199, 0.15)',
                border: '1px solid rgba(197, 198, 199, 0.3)',
                color: '#FFFFFF',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                boxShadow: '0 0 30px rgba(110, 216, 255, 0.2)',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
