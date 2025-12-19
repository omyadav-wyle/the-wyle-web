import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import ecosystemCircle from '../assets/ecosystem-circle.svg';
import { Wallet, Activity, CheckCircle2, Clock, Package, Car } from 'lucide-react';

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
      subtitle: 'Total saved!',
      icon: Wallet,
      color: '#10b981',
      value: '$1.2k',
      position: 'top'
    },
    {
      title: 'Health',
      subtitle: 'Wellness tracked',
      icon: Activity,
      color: '#ec4899',
      value: '98%',
      position: 'middle'
    },
    {
      title: 'Tasks',
      subtitle: 'Completed today',
      icon: CheckCircle2,
      color: '#22c55e',
      value: '12',
      position: 'bottom'
    },
  ];

  // Right side cards (stacked vertically)
  const rightCards = [
    {
      title: 'Rides',
      subtitle: 'Miles traveled',
      icon: Car,
      color: '#8b5cf6',
      value: '45mi',
      position: 'top'
    },
    {
      title: 'Deliveries',
      subtitle: 'On the way',
      icon: Package,
      color: '#f59e0b',
      value: '3',
      position: 'middle'
    },
    {
      title: 'Time',
      subtitle: 'Total time saved!',
      icon: Clock,
      color: '#3b82f6',
      value: '2.5h',
      position: 'bottom'
    },
  ];

  return (
    <section ref={sectionRef} className="relative px-16" style={{ background: '#000000', paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Heading */}
      <motion.h2
        className="text-center mb-4"
        style={{
          fontSize: '40px',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '1px',
          color: '#FFFFFF',
          marginTop: '0px',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Clone with <span style={{ color: '#C7A2FF' }}>Conscience</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-center max-w-2xl mx-auto"
        style={{
          fontSize: '15px',
          color: '#C5C6C7',
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: '1.45',
          marginBottom: '1rem',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        It's not the food delivery, rides or groceries app. But it's something that quickly connects all of these things in the background.
      </motion.p>

      {/* Central Orbital System and Cards Container */}
      <div ref={containerRef} className="relative" style={{ height: '700px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="relative flex items-center justify-center" style={{ height: '100%' }}>
          {/* Left Side Cards: start centered on the circle and animate outward on scroll */}
          <div className="absolute inset-0" style={{ zIndex: 20 }}>
            {leftCards.map((item, i) => {
              const IconComponent = item.icon;
              // responsive final offset so cards move from center to a side position
              const baseFinalX = measured && containerDimensions.width
                ? -Math.min(500, Math.max(300, Math.floor(containerDimensions.width / 2 - 180)))
                : 0;
              const finalX = baseFinalX; // final X offset to the left of center (pushed farther)
              const finalY = (i - 1) * 260; // increased vertical spacing from center to avoid overlap

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
                    width: '200px',
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
                      background: 'linear-gradient(135deg, rgba(25, 28, 38, 0.95) 0%, rgba(15, 18, 28, 0.98) 100%)',
                      border: `1px solid rgba(199, 162, 255, 0.15)`,
                      padding: '24px',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: `rgba(199, 162, 255, 0.4)`,
                      boxShadow: `0 16px 50px rgba(199, 162, 255, 0.2), 0 0 20px ${item.color}40`,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`, border: `1px solid ${item.color}30` }}>
                      <IconComponent size={24} color={item.color} />
                    </div>

                    <div style={{ fontSize: '36px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px', letterSpacing: '-0.5px' }}>{item.value}</div>

                    <h3 style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, marginBottom: '4px', letterSpacing: '0.2px' }}>{item.title}</h3>

                    <p style={{ fontSize: '12px', color: '#8B92A8', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1.4', margin: 0 }}>{item.subtitle}</p>
                  </motion.div>
                </div>
              );
            })}

          </div>

          {/* Central Orbital System */}
          <div className="relative" style={{ width: '520px', height: '520px', flexShrink: 0 }}>
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
                  background: 'radial-gradient(circle, rgba(168, 139, 255, 0.25) 0%, rgba(110, 216, 255, 0.12) 30%, transparent 50%)',
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
                  background: 'radial-gradient(circle at center, rgba(199, 162, 255, 0.2) 0%, transparent 30%)',
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
                      background: '#6ED8FF',
                      boxShadow: '0 0 4px #6ED8FF',
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
          <div className="absolute inset-0" style={{ zIndex: 20 }}>
            {rightCards.map((item, i) => {
              const IconComponent = item.icon;

              const baseFinalX = measured && containerDimensions.width
                ? Math.min(500, Math.max(300, Math.floor(containerDimensions.width / 2 - 180)))
                : 0;
              const finalX = baseFinalX; // final X offset to the right of center (pushed farther)
              // const finalY = (i - 1) * 200;
              const finalY = (i - 1) * 260;

              const xRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalX]);
              const yRaw = useTransform(scrollYProgress, [0, 0.5], [0, finalY]);
              const scaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
              const x = useSpring(xRaw, { stiffness: 80, damping: 30, mass: 1 });
              const y = useSpring(yRaw, { stiffness: 80, damping: 30, mass: 1 });
              const scale = useSpring(scaleRaw, { stiffness: 90, damping: 26, mass: 1 });
              const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

              return (
                <div key={`right-card-wrap-${i}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <motion.div
                    className="rounded-2xl cursor-pointer group"
                    style={{
                      x,
                      y,
                      opacity,
                      scale,
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(25, 28, 38, 0.95) 0%, rgba(15, 18, 28, 0.98) 100%)',
                      border: `1px solid rgba(199, 162, 255, 0.15)`,
                      padding: '24px',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: `rgba(199, 162, 255, 0.4)`,
                      boxShadow: `0 12px 40px rgba(199, 162, 255, 0.2), 0 0 20px ${item.color}40`,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`, border: `1px solid ${item.color}30` }}>
                      <IconComponent size={24} color={item.color} />
                    </div>

                    <div style={{ fontSize: '36px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px', letterSpacing: '-0.5px' }}>{item.value}</div>

                    <h3 style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, marginBottom: '4px', letterSpacing: '0.2px' }}>{item.title}</h3>

                    <p style={{ fontSize: '12px', color: '#8B92A8', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1.4', margin: 0 }}>{item.subtitle}</p>

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
            preserveAspectRatio="none"
          >
            {/* Left side wave connections */}
            {leftCards.map((_, i) => {
              // Center of the container (orbital system is always centered)
              const centerX = containerDimensions.width / 2;
              const centerY = containerDimensions.height / 2;

              // Card positions - left side cards
              const cardWidth = 200;
              const cardGap = 32;
              const cardHeight = 200; // Approximate card height
              const cardX = cardWidth / 2; // Center of card from left edge
              const cardY = centerY + (i - 1) * (cardHeight + cardGap); // Vertical spacing from center

              const midX = (centerX + cardX) / 2;
              const waveAmplitude = 40;

              // Create smooth wave path using quadratic bezier
              const wavePath = `M ${centerX} ${centerY} Q ${midX - waveAmplitude} ${centerY + waveAmplitude * (i % 2 === 0 ? 1 : -1)} ${midX} ${(centerY + cardY) / 2} T ${cardX} ${cardY}`;

              return (
                <g key={`left-wave-${i}`}>
                  <motion.path
                    d={wavePath}
                    fill="none"
                    stroke={`rgba(199, 162, 255, 0.25)`}
                    strokeWidth="2"
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

              // Card positions - right side cards
              const cardWidth = 200;
              const cardGap = 32;
              const cardHeight = 200;
              const cardX = containerDimensions.width - (cardWidth / 2); // Center of card from right edge
              const cardY = centerY + (i - 1) * (cardHeight + cardGap);

              const midX = (centerX + cardX) / 2;
              const waveAmplitude = 40;

              // Create smooth wave path
              const wavePath = `M ${centerX} ${centerY} Q ${midX + waveAmplitude} ${centerY + waveAmplitude * (i % 2 === 0 ? -1 : 1)} ${midX} ${(centerY + cardY) / 2} T ${cardX} ${cardY}`;

              return (
                <g key={`right-wave-${i}`}>
                  <motion.path
                    d={wavePath}
                    fill="none"
                    stroke={`rgba(199, 162, 255, 0.25)`}
                    strokeWidth="2"
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