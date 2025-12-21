import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import ecosystemCircle from '../assets/ecosystem-circle.svg';

export function CloneWithConscience() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [measured, setMeasured] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
        setMeasured(true);
      } else {
        setContainerDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);



  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']

  });

  // Update container dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Parallax and opacity transforms
  const orbitalScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const orbitalOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  // Left side cards (stacked vertically)
  const leftCards = [
    {
      title: 'Money',
      subtitle: 'Awareness',
      position: 'top'
    },
    {
      title: 'Health',
      subtitle: 'Balance',
      position: 'middle'
    },
    {
      title: 'Tasks',
      subtitle: 'Momentum',
      position: 'bottom'
    },
  ];

  // Right side cards (stacked vertically)
  const rightCards = [
    {
      title: 'Travel',
      subtitle: 'Movement',
      position: 'top'
    },
    {
      title: 'Orders',
      subtitle: 'Completion',
      position: 'middle'
    },
    {
      title: 'Time',
      subtitle: 'Space',
      position: 'bottom'
    },
  ];

  return (
    <section ref={sectionRef} className="relative px-16" style={{ background: '#000000', paddingTop: 'clamp(32px, 2vw, 32px)', paddingBottom: 'clamp(32px, 2vw, 32px)', paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' }}>
      {/* Heading */}
      <motion.h2
        className="text-center mb-4"
        style={{
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          letterSpacing: '1px',
          color: '#FFFFFF',
          marginTop: '0px',
          marginBottom: 'clamp(12px, 1.5vw, 16px)',
          paddingLeft: 'clamp(16px, 4vw, 0px)',
          paddingRight: 'clamp(16px, 4vw, 0px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Clone with <span style={{ color: '#1B998B' }}>Conscience</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-center max-w-2xl mx-auto mb-2"
        style={{
          fontSize: 'clamp(13px, 1.5vw, 15px)',
          color: '#C5C6C7',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          lineHeight: '1.45',
          marginBottom: 'clamp(8px, 0.5vw, 8px)',
          paddingLeft: 'clamp(16px, 4vw, 0px)',
          paddingRight: 'clamp(16px, 4vw, 0px)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Built to move with your life, not over it.
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-center max-w-2xl mx-auto"
        style={{
          fontSize: 'clamp(13px, 1.5vw, 15px)',
          color: '#C5C6C7',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          lineHeight: '1.45',
          marginBottom: 'clamp(16px, 1vw, 16px)',
          paddingLeft: 'clamp(16px, 4vw, 0px)',
          paddingRight: 'clamp(16px, 4vw, 0px)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Designed to support you. Not replace you.
      </motion.p>

      {/* Central Orbital System and Cards Container */}
      <div ref={containerRef} className="relative" style={{ height: 'clamp(500px, 70vh, 700px)', maxWidth: 'clamp(320px, 90vw, 1200px)', margin: '0 auto', overflow: 'hidden' }}>
        <div className="relative flex items-center justify-center" style={{ height: '100%', overflow: 'hidden' }}>
          {/* Left Side Cards: start centered on the circle and animate outward on scroll */}
          <div className="absolute inset-0" style={{ zIndex: 20, overflow: 'hidden' }}>
            {leftCards.map((item, i) => {
              // Responsive card width - balanced size for mobile to prevent overlap
              const cardWidth = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(120, Math.min(150, containerDimensions.width * 0.35)) // Reduced from 0.38 to 0.35
                  : Math.max(140, Math.min(200, containerDimensions.width * 0.4))
                : 200;
              
              // Estimate card height (approximate based on padding and text)
              const cardHeight = measured && containerDimensions.width < 640 ? 70 : 80;
              
              // Calculate circle size for offset calculation
              const circleSize = measured && containerDimensions.width < 640
                ? Math.min(160, containerDimensions.width * 0.35) // Reduced from 180/0.38
                : measured && containerDimensions.width < 1024
                ? Math.min(280, containerDimensions.width * 0.38)
                : 380;
              const circleRadius = circleSize / 2;
              
              // Responsive final offset - ensure proper padding from screen edges
              const padding = measured && containerDimensions.width < 640 ? 24 : 16; // Increased padding
              // More conservative max offset to prevent going out of screen
              const maxOffset = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.26 // Reduced from 0.28
                    )
                  : Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.35
                    )
                : 200;
              
              // Calculate minimum offset based on circle size + card half-width + larger gap to prevent overlap
              const gap = measured && containerDimensions.width < 640 ? 25 : 30; // Increased gap from 18 to 25
              const minOffset = circleRadius + (cardWidth / 2) + gap;
              
              // Use the smaller of minOffset or maxOffset to ensure cards stay in frame
              const baseFinalX = -Math.min(Math.max(minOffset, 0), maxOffset);
              
              // Push middle cards (i === 1) slightly further away from center, but stay within bounds
              const middleCardOffset = measured && containerDimensions.width < 640 
                ? (i === 1 ? 15 : 0) // Middle card gets 15px extra offset on mobile
                : (i === 1 ? 20 : 0); // Middle card gets 20px extra offset on desktop
              
              // Ensure the offset doesn't push cards out of screen
              const finalX = Math.max(
                baseFinalX - middleCardOffset, // Subtract because baseFinalX is negative for left side
                -maxOffset // Don't exceed maxOffset
              );
              
              // Responsive vertical spacing - increased to prevent card overlap
              const verticalSpacing = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(
                      cardHeight + 20, // Card height + gap between cards
                      Math.min(
                        140, 
                        Math.min(containerDimensions.width * 0.13, containerDimensions.height * 0.16) // Increased spacing
                      )
                    )
                  : Math.max(
                      120, 
                      Math.min(
                        220, 
                        Math.min(containerDimensions.width * 0.15, containerDimensions.height * 0.2)
                      )
                    )
                : 180;
              const finalY = (i - 1) * verticalSpacing; // increased vertical spacing from center to avoid overlap

              // raw transforms driven by scroll progress (0 = centered, 1 = at final position)
              const xRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalX]);
              const yRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalY]);
              const scaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
              // smooth the motion with springs for a natural easing both scrolling down and up
              const x = useSpring(xRaw, { stiffness: 80, damping: 30, mass: 1 });
              const y = useSpring(yRaw, { stiffness: 80, damping: 30, mass: 1 });
              const scale = useSpring(scaleRaw, { stiffness: 90, damping: 26, mass: 1 });
              const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

              return (
                <div
                  key={`left-card-wrap-${i}`}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `${cardWidth}px`,
                    maxWidth: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'auto',
                  }}
                >
                  <motion.div
                    className="rounded-2xl cursor-pointer group"
                    style={{
                      x,
                      y,
                      opacity,
                      scale,
                      width: '100%',
                      background: 'rgba(0, 47, 58, 0.25)',
                      border: `1px solid rgba(27, 153, 139, 0.2)`,
                      padding: 'clamp(16px, 1.5vw, 24px)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                  
                  >
                    <h3 style={{ fontSize: 'clamp(12px, 1.6vw, 16px)', color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontWeight: 500, marginBottom: 'clamp(4px, 0.25vw, 4px)', letterSpacing: '0.2px' }}>{item.title}</h3>

                    <p style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', color: '#C5C6C7', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '1.4', margin: 0 }}>{item.subtitle}</p>
                  </motion.div>
                </div>
              );
            })}

          </div>

          {/* Central Orbital System - Smaller on mobile to prevent overlap */}
          <div 
            className="relative" 
            style={{ 
              width: measured && containerDimensions.width < 640 
                ? 'clamp(130px, 35vw, 160px)' 
                : measured && containerDimensions.width < 1024
                ? 'clamp(200px, 40vw, 300px)'
                : 'clamp(250px, 35vw, 380px)', 
              height: measured && containerDimensions.width < 640 
                ? 'clamp(130px, 35vw, 160px)' 
                : measured && containerDimensions.width < 1024
                ? 'clamp(200px, 40vw, 300px)'
                : 'clamp(250px, 35vw, 380px)', 
              flexShrink: 0 
            }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                scale: orbitalScale,
                opacity: orbitalOpacity
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Outer glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle, rgba(27, 153, 139, 0.25) 0%, rgba(0, 47, 58, 0.12) 30%, transparent 50%)',
                  filter: 'blur(35px)',
                  transform: 'scale(1.05)',
                }}
              />

              {/* Ecosystem Circle SVG */}
              <img
                src={ecosystemCircle}
                alt="Ecosystem circle"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                }}
              />

              {/* Additional center glow */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(27, 153, 139, 0.2) 0%, transparent 30%)',
                  filter: 'blur(15px)',
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Particles around the circle */}
              {[...Array(80)].map((_, i) => {
                const angle = (i * 360) / 120;
                const distance = 145 + Math.random() * 15; // Random distance between 145-160
                const randomOffsetX = (Math.random() - 0.5) * 20; // Random horizontal scatter
                const randomOffsetY = (Math.random() - 0.5) * 20; // Random vertical scatter
                const baseX = Math.cos((angle * Math.PI) / 180) * distance + randomOffsetX - 15;
                const baseY = Math.sin((angle * Math.PI) / 180) * distance + randomOffsetY + 5;
                const driftX = (Math.random() - 0.5) * 8;
                const driftY = (Math.random() - 0.5) * 8;
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: '#1B998B',
                      boxShadow: '0 0 4px #1B998B',
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [baseX, baseX + driftX, baseX],
                      y: [baseY, baseY + driftY, baseY],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      x: {
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      y: {
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                );
              })}

              {/* Medium particles */}
              {[...Array(100)].map((_, i) => {
                const angle = (i * 360) / 150;
                const distance = 140 + Math.random() * 18;
                const randomOffsetX = (Math.random() - 0.5) * 22;
                const randomOffsetY = (Math.random() - 0.5) * 22;
                const baseX = Math.cos((angle * Math.PI) / 180) * distance + randomOffsetX - 15;
                const baseY = Math.sin((angle * Math.PI) / 180) * distance + randomOffsetY + 5;
                const driftX = (Math.random() - 0.5) * 6;
                const driftY = (Math.random() - 0.5) * 6;
                return (
                  <motion.div
                    key={`particle-med-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: '0.75px',
                      height: '0.75px',
                      background: '#6ED8FF',
                      boxShadow: '0 0 3px #6ED8FF',
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [baseX, baseX + driftX, baseX],
                      y: [baseY, baseY + driftY, baseY],
                      opacity: [0.25, 0.7, 0.25],
                    }}
                    transition={{
                      x: {
                        duration: 3.5 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      y: {
                        duration: 3.5 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 2.5 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                );
              })}

              {/* Small particles */}
              {[...Array(120)].map((_, i) => {
                const angle = (i * 360) / 180;
                const distance = 148 + Math.random() * 20;
                const randomOffsetX = (Math.random() - 0.5) * 25;
                const randomOffsetY = (Math.random() - 0.5) * 25;
                const baseX = Math.cos((angle * Math.PI) / 180) * distance + randomOffsetX - 15;
                const baseY = Math.sin((angle * Math.PI) / 180) * distance + randomOffsetY + 5;
                const driftX = (Math.random() - 0.5) * 10;
                const driftY = (Math.random() - 0.5) * 10;
                return (
                  <motion.div
                    key={`particle-sm-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: '0.5px',
                      height: '0.5px',
                      background: '#6ED8FF',
                      boxShadow: '0 0 2px #6ED8FF',
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [baseX, baseX + driftX, baseX],
                      y: [baseY, baseY + driftY, baseY],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      x: {
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      y: {
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                );
              })}

            </motion.div>
          </div>

          {/* Right Side Cards: mirror of left side, start centered and animate outward to the right */}
          <div className="absolute inset-0" style={{ zIndex: 20, overflow: 'hidden' }}>
            {rightCards.map((item, i) => {
              // Responsive card width - balanced size for mobile to prevent overlap
              const cardWidth = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(120, Math.min(150, containerDimensions.width * 0.35)) // Reduced from 0.38 to 0.35
                  : Math.max(140, Math.min(200, containerDimensions.width * 0.4))
                : 200;
              
              // Estimate card height (approximate based on padding and text)
              const cardHeight = measured && containerDimensions.width < 640 ? 70 : 80;
              
              // Calculate circle size for offset calculation
              const circleSize = measured && containerDimensions.width < 640
                ? Math.min(160, containerDimensions.width * 0.35) // Reduced from 180/0.38
                : measured && containerDimensions.width < 1024
                ? Math.min(280, containerDimensions.width * 0.38)
                : 380;
              const circleRadius = circleSize / 2;
              
              // Responsive final offset - ensure proper padding from screen edges
              const padding = measured && containerDimensions.width < 640 ? 24 : 16; // Increased padding
              // More conservative max offset to prevent going out of screen
              const maxOffset = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.26 // Reduced from 0.28
                    )
                  : Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.35
                    )
                : 200;
              
              // Calculate minimum offset based on circle size + card half-width + larger gap to prevent overlap
              const gap = measured && containerDimensions.width < 640 ? 25 : 30; // Increased gap from 18 to 25
              const minOffset = circleRadius + (cardWidth / 2) + gap;
              
              // Use the smaller of minOffset or maxOffset to ensure cards stay in frame
              const baseFinalX = Math.min(Math.max(minOffset, 0), maxOffset);
              
              // Push middle cards (i === 1) slightly further away from center, but stay within bounds
              const middleCardOffset = measured && containerDimensions.width < 640 
                ? (i === 1 ? 15 : 0) // Middle card gets 15px extra offset on mobile
                : (i === 1 ? 20 : 0); // Middle card gets 20px extra offset on desktop
              
              // Ensure the offset doesn't push cards out of screen
              const finalX = Math.min(
                baseFinalX + middleCardOffset, // Add because baseFinalX is positive for right side
                maxOffset // Don't exceed maxOffset
              );
              
              // Responsive vertical spacing - increased to prevent card overlap
              const verticalSpacing = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(
                      cardHeight + 20, // Card height + gap between cards
                      Math.min(
                        140, 
                        Math.min(containerDimensions.width * 0.13, containerDimensions.height * 0.16) // Increased spacing
                      )
                    )
                  : Math.max(
                      120, 
                      Math.min(
                        220, 
                        Math.min(containerDimensions.width * 0.15, containerDimensions.height * 0.2)
                      )
                    )
                : 180;
              const finalY = (i - 1) * verticalSpacing;

              const xRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalX]);
              const yRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalY]);
              const scaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
              const x = useSpring(xRaw, { stiffness: 80, damping: 30, mass: 1 });
              const y = useSpring(yRaw, { stiffness: 80, damping: 30, mass: 1 });
              const scale = useSpring(scaleRaw, { stiffness: 90, damping: 26, mass: 1 });
              const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

              return (
                <div key={`right-card-wrap-${i}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: `${cardWidth}px`, maxWidth: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <motion.div
                    className="rounded-2xl cursor-pointer group"
                    style={{
                      x,
                      y,
                      opacity,
                      scale,
                      width: '100%',
                      background: 'rgba(0, 47, 58, 0.25)',
                      border: `1px solid rgba(27, 153, 139, 0.2)`,
                      padding: 'clamp(16px, 1.5vw, 24px)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    
                  >
                    <h3 style={{ fontSize: 'clamp(12px, 1.6vw, 16px)', color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontWeight: 500, marginBottom: 'clamp(4px, 0.25vw, 4px)', letterSpacing: '0.2px' }}>{item.title}</h3>

                    <p style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', color: '#C5C6C7', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '1.4', margin: 0 }}>{item.subtitle}</p>

                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Wave Connection Lines */}
          <svg
            className="absolute pointer-events-none"
            style={{
              zIndex: 1,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
            viewBox={`0 0 ${containerDimensions.width} ${containerDimensions.height}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left side wave connections */}
            {leftCards.map((_, i) => {
              // Center of the container (orbital system is always centered)
              const centerX = containerDimensions.width / 2;
              const centerY = containerDimensions.height / 2;

              // Use the same responsive calculations as the cards
              const cardWidth = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(120, Math.min(150, containerDimensions.width * 0.35)) // Match card width
                  : Math.max(140, Math.min(200, containerDimensions.width * 0.4))
                : 200;
              
              // Estimate card height
              const cardHeight = measured && containerDimensions.width < 640 ? 70 : 80;
              
              // Calculate circle size for offset calculation
              const circleSize = measured && containerDimensions.width < 640
                ? Math.min(160, containerDimensions.width * 0.35) // Match circle size
                : measured && containerDimensions.width < 1024
                ? Math.min(280, containerDimensions.width * 0.38)
                : 380;
              const circleRadius = circleSize / 2;
              
              // Responsive final offset - ensure proper padding from screen edges
              const padding = measured && containerDimensions.width < 640 ? 24 : 16; // Match padding
              // More conservative max offset to prevent going out of screen
              const maxOffset = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.26 // Match max offset
                    )
                  : Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.35
                    )
                : 200;
              
              // Calculate minimum offset based on circle size + card half-width + larger gap
              const gap = measured && containerDimensions.width < 640 ? 25 : 30; // Match gap
              const minOffset = circleRadius + (cardWidth / 2) + gap;
              
              // Use the smaller of minOffset or maxOffset to ensure cards stay in frame
              const baseFinalX = -Math.min(Math.max(minOffset, 0), maxOffset);
              
              // Push middle cards (i === 1) slightly further away from center, but stay within bounds
              const middleCardOffset = measured && containerDimensions.width < 640 
                ? (i === 1 ? 15 : 0) // Middle card gets 15px extra offset on mobile
                : (i === 1 ? 20 : 0); // Middle card gets 20px extra offset on desktop
              
              // Ensure the offset doesn't push cards out of screen
              const finalX = Math.max(
                baseFinalX - middleCardOffset, // Subtract because baseFinalX is negative for left side
                -maxOffset // Don't exceed maxOffset
              );
              
              // Responsive vertical spacing - increased to prevent card overlap
              const verticalSpacing = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(
                      cardHeight + 20, // Card height + gap between cards
                      Math.min(
                        140, 
                        Math.min(containerDimensions.width * 0.13, containerDimensions.height * 0.16) // Match spacing
                      )
                    )
                  : Math.max(
                      120, 
                      Math.min(
                        220, 
                        Math.min(containerDimensions.width * 0.15, containerDimensions.height * 0.2)
                      )
                    )
                : 180;
              
              const finalY = (i - 1) * verticalSpacing;

              // Card position (matching the card's final position)
              const cardX = centerX + finalX; // Actual card center X position
              const cardY = centerY + finalY; // Actual card center Y position

              // Calculate midpoint for smooth curve
              const midX = (centerX + cardX) / 2;
              const midY = (centerY + cardY) / 2;
              
              // Responsive wave amplitude
              const waveAmplitude = Math.min(40, containerDimensions.width * 0.08);

              // Create smooth wave path using quadratic bezier
              const wavePath = `M ${centerX} ${centerY} Q ${midX - waveAmplitude} ${midY + waveAmplitude * (i % 2 === 0 ? 1 : -1)} ${midX} ${midY} T ${cardX} ${cardY}`;

              return (
                <g key={`left-wave-${i}`}>
                  <motion.path
                    d={wavePath}
                    fill="none"
                    stroke={`rgba(27, 153, 139, 0.25)`}
                    strokeWidth={Math.max(1, Math.min(2, containerDimensions.width / 400))}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 + i * 0.15, ease: 'easeOut' }}
                  />
                </g>
              );
            })}

            {/* Right side wave connections */}
            {rightCards.map((_, i) => {
              // Center of the container
              const centerX = containerDimensions.width / 2;
              const centerY = containerDimensions.height / 2;

              // Use the same responsive calculations as the cards
              const cardWidth = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(120, Math.min(150, containerDimensions.width * 0.35)) // Match card width
                  : Math.max(140, Math.min(200, containerDimensions.width * 0.4))
                : 200;
              
              // Estimate card height
              const cardHeight = measured && containerDimensions.width < 640 ? 70 : 80;
              
              // Calculate circle size for offset calculation
              const circleSize = measured && containerDimensions.width < 640
                ? Math.min(160, containerDimensions.width * 0.35) // Match circle size
                : measured && containerDimensions.width < 1024
                ? Math.min(280, containerDimensions.width * 0.38)
                : 380;
              const circleRadius = circleSize / 2;
              
              // Responsive final offset - ensure proper padding from screen edges
              const padding = measured && containerDimensions.width < 640 ? 24 : 16; // Match padding
              // More conservative max offset to prevent going out of screen
              const maxOffset = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.26 // Match max offset
                    )
                  : Math.min(
                      containerDimensions.width / 2 - cardWidth / 2 - padding,
                      containerDimensions.width * 0.35
                    )
                : 200;
              
              // Calculate minimum offset based on circle size + card half-width + larger gap
              const gap = measured && containerDimensions.width < 640 ? 25 : 30; // Match gap
              const minOffset = circleRadius + (cardWidth / 2) + gap;
              
              // Use the smaller of minOffset or maxOffset to ensure cards stay in frame
              const baseFinalX = Math.min(Math.max(minOffset, 0), maxOffset);
              
              // Push middle cards (i === 1) slightly further away from center, but stay within bounds
              const middleCardOffset = measured && containerDimensions.width < 640 
                ? (i === 1 ? 15 : 0) // Middle card gets 15px extra offset on mobile
                : (i === 1 ? 20 : 0); // Middle card gets 20px extra offset on desktop
              
              // Ensure the offset doesn't push cards out of screen
              const finalX = Math.min(
                baseFinalX + middleCardOffset, // Add because baseFinalX is positive for right side
                maxOffset // Don't exceed maxOffset
              );
              
              // Responsive vertical spacing - increased to prevent card overlap
              const verticalSpacing = measured && containerDimensions.width
                ? containerDimensions.width < 640
                  ? Math.max(
                      cardHeight + 20, // Card height + gap between cards
                      Math.min(
                        140, 
                        Math.min(containerDimensions.width * 0.13, containerDimensions.height * 0.16) // Match spacing
                      )
                    )
                  : Math.max(
                      120, 
                      Math.min(
                        220, 
                        Math.min(containerDimensions.width * 0.15, containerDimensions.height * 0.2)
                      )
                    )
                : 180;
              
              const finalY = (i - 1) * verticalSpacing;

              // Card position (matching the card's final position)
              const cardX = centerX + finalX; // Actual card center X position
              const cardY = centerY + finalY; // Actual card center Y position

              // Calculate midpoint for smooth curve
              const midX = (centerX + cardX) / 2;
              const midY = (centerY + cardY) / 2;
              
              // Responsive wave amplitude
              const waveAmplitude = Math.min(40, containerDimensions.width * 0.08);

              // Create smooth wave path
              const wavePath = `M ${centerX} ${centerY} Q ${midX + waveAmplitude} ${midY + waveAmplitude * (i % 2 === 0 ? -1 : 1)} ${midX} ${midY} T ${cardX} ${cardY}`;

              return (
                <g key={`right-wave-${i}`}>
                  <motion.path
                    d={wavePath}
                    fill="none"
                    stroke={`rgba(27, 153, 139, 0.25)`}
                    strokeWidth={Math.max(1, Math.min(2, containerDimensions.width / 400))}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 + i * 0.15, ease: 'easeOut' }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}