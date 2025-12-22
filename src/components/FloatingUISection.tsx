import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect, useMemo } from 'react';
import Lottie from 'lottie-react';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import backgroundAnimationData from '../assets/Background looping animation.json';
import '../index.css';
export function FloatingUISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Calculate responsive transform values based on viewport width
  // On smaller screens, reduce the movement distance to keep elements within bounds
  const getResponsiveValue = (desktopValue: number) => {
    // Scale down movement on smaller screens
    // For screens < 640px, use 30% of desktop value
    // For screens 640-1024px, use 50% of desktop value
    // For screens > 1024px, use full desktop value
    if (windowWidth < 640) {
      return desktopValue * 0.3;
    } else if (windowWidth < 1024) {
      return desktopValue * 0.5;
    }
    return desktopValue;
  };

  // Calculate responsive output ranges - recalculate when windowWidth changes
  const calendarXRange = useMemo(() => [0, -getResponsiveValue(420)], [windowWidth]);
  const calendarYRange = useMemo(() => [0, -getResponsiveValue(280)], [windowWidth]);
  const carXRange = useMemo(() => [0, getResponsiveValue(420)], [windowWidth]);
  const carYRange = useMemo(() => [0, -getResponsiveValue(220)], [windowWidth]);
  const giftXRange = useMemo(() => [0, -getResponsiveValue(250)], [windowWidth]);
  const giftYRange = useMemo(() => [0, getResponsiveValue(180)], [windowWidth]);
  const cartXRange = useMemo(() => [0, getResponsiveValue(360)], [windowWidth]);
  const cartYRange = useMemo(() => [0, getResponsiveValue(60)], [windowWidth]);
  const foodXRange = useMemo(() => [0, getResponsiveValue(470)], [windowWidth]);
  const foodYRange = useMemo(() => [0, -getResponsiveValue(160)], [windowWidth]);
  const marinaXRange = useMemo(() => [0, -getResponsiveValue(480)], [windowWidth]);
  const marinaYRange = useMemo(() => [0, getResponsiveValue(20)], [windowWidth]);
  const birthdayXRange = useMemo(() => [0, getResponsiveValue(420)], [windowWidth]);
  const birthdayYRange = useMemo(() => [0, getResponsiveValue(220)], [windowWidth]);

  // Dispersion transforms for each element - staggered to prevent overlap
  // Calendar - top left (moves first)
  const calendarX = useTransform(scrollYProgress, [0.25, 0.65], calendarXRange);
  const calendarY = useTransform(scrollYProgress, [0.25, 0.65], calendarYRange);
  const calendarOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [1, 0.8, 0]);
  
  // Car - top right (moves early)
  const carX = useTransform(scrollYProgress, [0.28, 0.68], carXRange);
  const carY = useTransform(scrollYProgress, [0.28, 0.68], carYRange);
  const carOpacity = useTransform(scrollYProgress, [0.28, 0.48, 0.68], [1, 0.8, 0]);
  
  // Gift - left lower (moves mid-early)
  const giftX = useTransform(scrollYProgress, [0.32, 0.72], giftXRange);
  const giftY = useTransform(scrollYProgress, [0.32, 0.72], giftYRange);
  const giftOpacity = useTransform(scrollYProgress, [0.32, 0.52, 0.72], [1, 0.8, 0]);
  
  // Shopping Cart - right middle (moves mid)
  const cartX = useTransform(scrollYProgress, [0.35, 0.75], cartXRange);
  const cartY = useTransform(scrollYProgress, [0.35, 0.75], cartYRange);
  const cartOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [1, 0.8, 0]);
  
  // Food ordering card - top right (moves early, curved path)
  const foodX = useTransform(scrollYProgress, [0.3, 0.7], foodXRange);
  const foodY = useTransform(scrollYProgress, [0.3, 0.7], foodYRange);
  const foodOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1, 0.8, 0]);
  
  // Dubai Marina card - left middle (moves first, curved path)
  const marinaX = useTransform(scrollYProgress, [0.27, 0.67], marinaXRange);
  const marinaY = useTransform(scrollYProgress, [0.27, 0.67], marinaYRange);
  const marinaOpacity = useTransform(scrollYProgress, [0.27, 0.47, 0.67], [1, 0.8, 0]);
  
  // Birthday card - bottom right (moves last)
  const birthdayX = useTransform(scrollYProgress, [0.38, 0.78], birthdayXRange);
  const birthdayY = useTransform(scrollYProgress, [0.38, 0.78], birthdayYRange);
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
        overflow: 'hidden',
        paddingTop: 'clamp(16px, 1vw, 16px)',
        paddingBottom: 'clamp(16px, 5vw, 64px)',
        paddingLeft: 'clamp(16px, 4vw, 64px)',
        paddingRight: 'clamp(16px, 4vw, 64px)',
      }}
    >
      {/* Lottie Background Animation with Teal Theme */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.4,
          filter: 'hue-rotate(160deg) saturate(1.2) brightness(0.8) contrast(1.1)',
          mixBlendMode: 'screen',
        }}
      >
        <Lottie
          animationData={backgroundAnimationData}
          loop={true}
          autoplay={true}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Soft teal gradient edges overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'radial-gradient(ellipse at 0% 50%, rgba(27, 153, 139, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(0, 47, 58, 0.06) 0%, transparent 50%)',
        }}
      />

      {/* Heading and Subtext */}
      <div className="relative z-10 text-center mb-16" style={{ paddingTop: 'clamp(40px, 5vw, 80px)', marginBottom: 'clamp(32px, 4vw, 64px)' }}>
        <motion.h2
          className="mb-4"
          style={{
            fontSize: 'var(--font-size-heading-sm)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            letterSpacing: '1px',
            color: '#FFFFFF',
            lineHeight: '1.2',
            marginBottom: 'clamp(12px, 1.5vw, 16px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          More happens than you notice.
        </motion.h2>
        <motion.p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            fontFamily: 'var(--font-size-body)',
            fontWeight: 400,
            color: '#999999',
            lineHeight: '1.6',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A day is made of moments like these.
        </motion.p>
      </div>

      {/* Central Phone Container */}
      <div className="relative z-20 flex items-center justify-center" style={{ minHeight: 'clamp(500px, 70vh, 700px)', marginTop: '0' }}>

        {/* CENTER - Phone */}
        <div
          className="relative z-20"
          style={{
            width: 'clamp(240px, 34vw, 340px)',
            height: 'clamp(500px, 70vh, 700px)',
          }}
        >
          {/* Phone Frame */}
          <div
            className="relative w-full h-full rounded-[48px]"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)',
              border: '12px solid #000000',
              boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 40px rgba(27, 153, 139, 0.15)',
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
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
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

              {/* Food awareness card */}
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
                    fontSize: 'clamp(12px, 1.6vw, 16px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  You haven't eaten.
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: '#999999',
                    fontFamily: 'var(--font-body)',
                    lineHeight: '1.4',
                  }}
                >
                  It's later than usual.
                </p>
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
                    fontSize: 'clamp(12px, 1.6vw, 16px)',
                    color: '#FFFFFF',
                    fontFamily:'var(--font-body)',
                  }}
                >
                  12:00 AM
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: '#999999',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Today matters to someone.
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
                <h3 
                  className="mb-1.5"
                  style={{
                    fontSize: 'clamp(12px, 1.6vw, 16px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Tomorrow starts early.
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: '#999999',
                    fontFamily:'var(--font-body)',
                    lineHeight: '1.3',
                  }}
                >
                  Mornings don't wait here.
                </p>
              </motion.div>

              {/* Reset notification - stays in phone */}
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
                {/* Teal decorative dots on left */}
                <div className="absolute left-4 top-5 flex flex-col gap-1">
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.6 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.4 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.2 }} />
                </div>

                <h3 
                  className="mb-1.5"
                  style={{
                    fontSize: 'clamp(12px, 1.5vw, 15px)',
                    color: '#AAAAAA',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    paddingLeft: 'clamp(16px, 1.25vw, 20px)',
                  }}
                >
                  Late night.
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    lineHeight: '1.5',
                    paddingLeft: 'clamp(16px, 1.25vw, 20px)',
                    margin: 0,
                  }}
                >
                  Today feels slower because of it.
                </p>
              </motion.div>

              {/* Milk notification - stays in phone */}
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
                {/* Teal decorative dots on left */}
                <div className="absolute left-4 top-4 flex flex-col gap-1">
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.6 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.4 }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#1B998B', opacity: 0.2 }} />
                </div>

                <h3 
                  className="mb-1"
                  style={{
                    fontSize: 'clamp(11px, 1.4vw, 14px)',
                    color: '#AAAAAA',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    paddingLeft: 'clamp(16px, 1.25vw, 20px)',
                  }}
                >
                  Running low?
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(9px, 1.1vw, 11px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    lineHeight: '1.4',
                    paddingLeft: 'clamp(16px, 1.25vw, 20px)',
                    margin: 0,
                  }}
                >
                  You only notice at the wrong moment.
                </p>
              </motion.div>
            </div>

            {/* Notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl"
              style={{
                width: 'clamp(85px, 12vw, 120px)',
                height: 'clamp(20px, 2.8vw, 28px)',
                background: '#000000',
              }}
            />
          </div>
        </div>

      </div>

      {/* Motion blur ambiance - Enhanced Teal */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(27, 153, 139, 0.05) 0%, rgba(0, 47, 58, 0.03) 40%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Teal arc - left side, smaller */}
      <div className="absolute left-0 top-1/2 pointer-events-none" style={{ zIndex: 4, transform: 'translateY(-50%) scaleX(-1)' }}>
        {/* Heavily blurred base layer */}
        <img 
          src={arcImage} 
          alt="teal arc blur base" 
          className="h-[45vh]"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(50px) brightness(1.6) hue-rotate(160deg) saturate(1.5)',
            opacity: 0.5,
          }}
        />
        
        {/* Medium blur layer */}
        <img 
          src={arcImage} 
          alt="teal arc blur medium" 
          className="h-[45vh] absolute top-0 right-0"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(30px) brightness(1.4) hue-rotate(160deg) saturate(1.5)',
            opacity: 0.6,
          }}
        />
        
        {/* Soft blur overlay */}
        <img 
          src={arcImage} 
          alt="teal arc blur soft" 
          className="h-[45vh] absolute top-0 right-0"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.5,
            filter: 'blur(15px) brightness(1.2) hue-rotate(160deg) saturate(1.5)',
          }}
        />
      </div>
    </section>
  );
}