import { Calendar, Gift, ShoppingCart, Car, MapPin, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import dubaiMarinaImage from 'figma:asset/fe4c2f760420bc1329b7068d017d9c72a6ddb980.png';

export function FloatingUISection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Dispersion transforms for each element - staggered to prevent overlap
  // Calendar - top left (moves first)
  const calendarX = useTransform(scrollYProgress, [0.25, 0.65], [0, -420]);
  const calendarY = useTransform(scrollYProgress, [0.25, 0.65], [0, -280]);
  const calendarOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [1, 0.8, 0]);
  
  // Car - top right (moves early)
  const carX = useTransform(scrollYProgress, [0.28, 0.68], [0, 420]);
  const carY = useTransform(scrollYProgress, [0.28, 0.68], [0, -220]);
  const carOpacity = useTransform(scrollYProgress, [0.28, 0.48, 0.68], [1, 0.8, 0]);
  
  // Gift - left lower (moves mid-early)
  const giftX = useTransform(scrollYProgress, [0.32, 0.72], [0, -250]);
  const giftY = useTransform(scrollYProgress, [0.32, 0.72], [0, 180]);
  const giftOpacity = useTransform(scrollYProgress, [0.32, 0.52, 0.72], [1, 0.8, 0]);
  
  // Shopping Cart - right middle (moves mid)
  const cartX = useTransform(scrollYProgress, [0.35, 0.75], [0, 360]);
  const cartY = useTransform(scrollYProgress, [0.35, 0.75], [0, 60]);
  const cartOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [1, 0.8, 0]);
  
  // Food ordering card - top right (moves early, curved path)
  const foodX = useTransform(scrollYProgress, [0.3, 0.7], [0, 470]);
  const foodY = useTransform(scrollYProgress, [0.3, 0.7], [0, -160]);
  const foodOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1, 0.8, 0]);
  
  // Dubai Marina card - left middle (moves first, curved path)
  const marinaX = useTransform(scrollYProgress, [0.27, 0.67], [0, -480]);
  const marinaY = useTransform(scrollYProgress, [0.27, 0.67], [0, 20]);
  const marinaOpacity = useTransform(scrollYProgress, [0.27, 0.47, 0.67], [1, 0.8, 0]);
  
  // Birthday card - bottom right (moves last)
  const birthdayX = useTransform(scrollYProgress, [0.38, 0.78], [0, 420]);
  const birthdayY = useTransform(scrollYProgress, [0.38, 0.78], [0, 220]);
  const birthdayOpacity = useTransform(scrollYProgress, [0.38, 0.58, 0.78], [1, 0.8, 0]);

  // Notification fade-in (stays in phone)
  const notificationOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Second notification fade-in (appears slightly later)
  const notification2Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative px-16" 
      style={{ 
        background: 'linear-gradient(to bottom, #000000 0%, #0B0B11 50%, #000000 100%)',
        overflow: 'visible',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      {/* Soft purple gradient edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(166, 140, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(107, 216, 255, 0.06) 0%, transparent 50%)',
        }}
      />

      {/* Central Phone Container */}
      <div className="relative z-10 flex items-center justify-center" style={{ minHeight: '700px', marginTop: '80px' }}>

        {/* CENTER - Phone */}
        <div
          className="relative z-20"
          style={{
            width: '340px',
            height: '700px',
          }}
        >
          {/* Phone Frame */}
          <div
            className="relative w-full h-full rounded-[48px]"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)',
              border: '12px solid #000000',
              boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 40px rgba(166,140,255,0.15)',
              overflow: 'visible',
            }}
          >
            {/* Status Bar */}
            <div 
              className="absolute top-0 left-0 right-0 pt-2 px-6 flex items-center justify-between"
              style={{
                height: '44px',
                zIndex: 50,
              }}
            >
              {/* Time - Left */}
              <span 
                style={{
                  fontSize: '15px',
                  color: '#FFFFFF',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 600,
                }}
              >
                9:41
              </span>

              {/* Right side icons */}
              <div className="flex items-center gap-1.5">
                {/* Signal bars */}
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                  <rect x="0" y="8" width="3" height="4" rx="1" fill="white" />
                  <rect x="5" y="5" width="3" height="7" rx="1" fill="white" />
                  <rect x="10" y="2" width="3" height="10" rx="1" fill="white" />
                  <rect x="15" y="0" width="2" height="12" rx="1" fill="white" opacity="0.4" />
                </svg>

                {/* WiFi */}
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M8 4.5C9.1 4.5 10.1 4.9 10.9 5.5L8 9L5.1 5.5C5.9 4.9 6.9 4.5 8 4.5ZM8 0C10.2 0 12.3 0.8 13.9 2.2L15.5 0.3C13.4 -1.4 10.8 -2.3 8 -2.3C5.2 -2.3 2.6 -1.4 0.5 0.3L2.1 2.2C3.7 0.8 5.8 0 8 0ZM8 2.3C6.4 2.3 4.9 2.9 3.7 3.9L5.3 6C6.1 5.3 7 4.9 8 4.9C9 4.9 9.9 5.3 10.7 6L12.3 3.9C11.1 2.9 9.6 2.3 8 2.3Z" fill="white" transform="translate(0, 2)" />
                </svg>

                {/* Battery */}
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect x="0" y="0" width="22" height="12" rx="3" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
                  <rect x="2" y="2" width="16" height="8" rx="1.5" fill="white" />
                  <path d="M23 4 C23.5 4, 24 4.5, 24 5 L24 7 C24 7.5, 23.5 8, 23 8 Z" fill="white" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Screen content - Animated elements */}
            <div className="w-full h-full p-4 flex flex-col gap-3" style={{ paddingTop: '50px', overflow: 'visible' }}>
              {/* Top row of 4 icon cards - Animated */}
              <div className="flex gap-2 justify-between">
                {/* Calendar Icon */}
                <motion.div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    background: '#2A2B30',
                    width: '62px',
                    height: '62px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    x: calendarX,
                    y: calendarY,
                    opacity: calendarOpacity,
                  }}
                >
                  <Calendar size={22} style={{ color: '#FFFFFF' }} />
                </motion.div>

                {/* Car Icon */}
                <motion.div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    background: '#2A2B30',
                    width: '62px',
                    height: '62px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    x: carX,
                    y: carY,
                    opacity: carOpacity,
                  }}
                >
                  <Car size={22} style={{ color: '#FFFFFF' }} />
                </motion.div>

                {/* Gift Icon */}
                <motion.div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    background: '#2A2B30',
                    width: '62px',
                    height: '62px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    x: giftX,
                    y: giftY,
                    opacity: giftOpacity,
                  }}
                >
                  <Gift size={22} style={{ color: '#FFFFFF' }} />
                </motion.div>

                {/* Shopping Cart Icon */}
                <motion.div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    background: '#2A2B30',
                    width: '62px',
                    height: '62px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    x: cartX,
                    y: cartY,
                    opacity: cartOpacity,
                  }}
                >
                  <ShoppingCart size={22} style={{ color: '#FFFFFF' }} />
                </motion.div>
              </div>

              {/* Food ordering card */}
              <motion.div
                className="rounded-2xl p-4"
                style={{
                  background: '#2A2B30',
                  border: '1px solid rgba(255,255,255,0.08)',
                  x: foodX,
                  y: foodY,
                  opacity: foodOpacity,
                }}
              >
                <h3 
                  className="mb-1.5"
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  You haven't eaten in a while
                </h3>
                
                <p 
                  className="mb-3"
                  style={{
                    fontSize: '12px',
                    color: '#999999',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    lineHeight: '1.4',
                  }}
                >
                  Let's order your favorite Chinese dish
                </p>
                
                <button
                  className="w-full px-4 py-2.5 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    fontSize: '13px',
                    color: '#000000',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Let's order you food
                </button>
              </motion.div>

              {/* Birthday card */}
              <motion.div
                className="rounded-2xl p-4"
                style={{
                  background: '#2A2B30',
                  border: '1px solid rgba(255,255,255,0.08)',
                  x: birthdayX,
                  y: birthdayY,
                  opacity: birthdayOpacity,
                }}
              >
                <h3 
                  className="mb-1.5"
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  12:00 AM
                </h3>
                
                <p 
                  style={{
                    fontSize: '12px',
                    color: '#999999',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  Happy Birthday, Let's get you a cake
                </p>
              </motion.div>

              {/* Dubai Marina card */}
              <motion.div
                className="rounded-2xl p-4 relative"
                style={{
                  background: '#2A2B30',
                  border: '1px solid rgba(255,255,255,0.08)',
                  x: marinaX,
                  y: marinaY,
                  opacity: marinaOpacity,
                }}
              >
                <MapPin 
                  className="absolute top-4 right-4" 
                  size={18} 
                  style={{ color: '#FFFFFF', opacity: 0.6 }}
                />
                
                <h3 
                  className="mb-1.5"
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  Dubai Marina
                </h3>
                
                <p 
                  className="mb-3"
                  style={{
                    fontSize: '12px',
                    color: '#999999',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    lineHeight: '1.3',
                  }}
                >
                  Early meeting tomorrow?<br />Let's get you there
                </p>
                
                <img
                  src={dubaiMarinaImage}
                  alt="Dubai Marina"
                  className="w-full object-cover rounded-xl mb-3"
                  style={{ height: '100px' }}
                />
                
                <button
                  className="w-full px-4 py-2.5 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    fontSize: '12px',
                    color: '#000000',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Est. 15–20 min
                </button>
              </motion.div>

              {/* Notification - stays in phone */}
              <motion.div
                className="rounded-2xl"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 40px)',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'calc(100% - 32px)',
                  opacity: notificationOpacity,
                  zIndex: 10,
                  background: '#2A2B30',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '14px 16px',
                }}
              >
                {/* Purple decorative dots on left */}
                <div className="absolute left-4 top-5 flex flex-col gap-1">
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.6 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.4 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.2 }} />
                </div>

                {/* Header with icon */}
                <div className="flex items-start gap-2 mb-1.5">
                  <span style={{ fontSize: '20px', lineHeight: 1 }}>🥗</span>
                  <h3 
                    style={{
                      fontSize: '15px',
                      color: '#AAAAAA',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Ready for a Reset?
                  </h3>
                </div>
                
                <p 
                  style={{
                    fontSize: '12px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    lineHeight: '1.5',
                    paddingLeft: '28px',
                    margin: 0,
                  }}
                >
                  We noticed a late-night treat yesterday!<br />
                  Time for a fresh, healthy meal today.
                </p>
              </motion.div>

              {/* Second Notification - stays in phone */}
              <motion.div
                className="rounded-2xl"
                style={{
                  position: 'absolute',
                  top: 'calc(50% + 70px)',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'calc(100% - 32px)',
                  opacity: notification2Opacity,
                  zIndex: 10,
                  background: '#2A2B30',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '12px 16px',
                }}
              >
                {/* Purple decorative dots on left */}
                <div className="absolute left-4 top-4 flex flex-col gap-1">
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.6 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.4 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#A68CFF', opacity: 0.2 }} />
                </div>

                {/* Header with icon */}
                <div className="flex items-start gap-2 mb-1">
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>🥛</span>
                  <h3 
                    style={{
                      fontSize: '14px',
                      color: '#AAAAAA',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Out of Milk?
                  </h3>
                </div>
                
                <p 
                  style={{
                    fontSize: '11px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    lineHeight: '1.4',
                    paddingLeft: '26px',
                    margin: 0,
                  }}
                >
                  Coming right up! Fresh organic milk arriving in 20 min.
                </p>
              </motion.div>
            </div>

            {/* Notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl"
              style={{
                width: '120px',
                height: '28px',
                background: '#000000',
              }}
            />
          </div>
        </div>

      </div>

      {/* Motion blur ambiance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(166,140,255,0.03) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Purple arc - left side, smaller */}
      <div className="absolute left-0 top-1/2 pointer-events-none" style={{ zIndex: 8, transform: 'translateY(-50%) scaleX(-1)' }}>
        {/* Heavily blurred base layer */}
        <img 
          src={arcImage} 
          alt="purple arc blur base" 
          className="h-[45vh]"
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
          className="h-[45vh] absolute top-0 right-0"
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
          className="h-[45vh] absolute top-0 right-0"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.5,
            filter: 'blur(15px) brightness(1.2)',
          }}
        />
      </div>
    </section>
  );
}