import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';
import handImage from 'figma:asset/22ed4d14276b411b9dce2af250a2a23095a047e2.png';
import waveImage from 'figma:asset/1aac5d74c3a8da7e05fea7551c55919bdf99ce39.png';
import { Footer } from './Footer';
import React from 'react';

export function About() {
  const teamMembers = [
    {
      name: 'Sarah Al Massoudi',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      description: 'Visionary leader with 15+ years of experience building scalable platforms across emerging markets. Sarah drives wyle\'s strategic vision of invisible technology that seamlessly integrates into daily life.'
    },
    {
      name: 'Ahmed Naseeb',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      description: 'Engineering expert specializing in distributed systems and AI infrastructure. Ahmed leads the technical architecture that powers wyle\'s intelligent, adaptive platform across multiple services.'
    },
    {
      name: 'Amina Al-Saeed',
      role: 'Chief Product Officer',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      description: 'Product strategist focused on user-centric design and seamless experiences. Amina ensures every feature disappears into the background while delivering maximum value to users.'
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Design Officer',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      description: 'Design leader championing minimalist aesthetics and purposeful motion. Marcus crafts the calm, magnetic visual language that defines wyle\'s presence and user interactions.'
    },
    {
      name: 'Layla Mouawad',
      role: 'Chief Data Officer',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      description: 'Data scientist and privacy advocate pioneering ethical AI solutions. Layla ensures wyle\'s intelligent systems respect user privacy while delivering personalized, predictive experiences.'
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [previousActiveIndex, setPreviousActiveIndex] = React.useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = React.useState<typeof teamMembers[0] | null>(null);
  const [isScrollLocked, setIsScrollLocked] = React.useState(false);
  const [hasCompletedCarousel, setHasCompletedCarousel] = React.useState(false);
  
  const carouselSectionRef = React.useRef<HTMLElement>(null);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCardChange = (newIndex: number) => {
    if (newIndex === activeCardIndex) return;
    setIsTransitioning(true);
    setPreviousActiveIndex(activeCardIndex);
    setActiveCardIndex(newIndex);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 400);
  };

  // Scroll-jacking effect - FIXED TO ALLOW SMOOTH VERTICAL SCROLLING
  React.useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1200; // Reduced for better responsiveness
    let accumulatedDelta = 0;
    const scrollThreshold = 180; // Reduced threshold for smoother interaction
    let hasCompletedForward = false;
    let hasCompletedBackward = false;
    let rafId: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (!carouselSectionRef.current) return;

      // Only handle vertical scrolling - ignore horizontal
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return; // Allow horizontal scrolling to pass through
      }

      const rect = carouselSectionRef.current.getBoundingClientRect();
      
      // Only engage when carousel is ACTUALLY in viewport
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      // Active zone for scroll-jacking - more restrictive
      const isInActiveZone = rect.top < window.innerHeight - 150 && rect.bottom > 150;

      // If not in viewport, let scroll pass through naturally
      if (!isInViewport) {
        return;
      }

      const now = Date.now();
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Track completion states
      if (activeCardIndex === 5) hasCompletedForward = true;
      if (activeCardIndex === 0) hasCompletedBackward = true;

      // EXIT CONDITIONS - Allow scroll at boundaries
      const atBottomBoundary = activeCardIndex === 5;
      const atTopBoundary = activeCardIndex === 0;
      const canScrollDown = scrollingDown && (atBottomBoundary || hasCompletedForward);
      const canScrollUp = scrollingUp && (atTopBoundary || hasCompletedBackward);

      // If at boundaries, allow natural scrolling
      if (canScrollDown || canScrollUp) {
        accumulatedDelta = 0;
        // Reset completion flags when section scrolls far away
        if (canScrollDown && rect.top < -300) {
          hasCompletedForward = false;
        }
        if (canScrollUp && rect.bottom > window.innerHeight + 300) {
          hasCompletedBackward = false;
        }
        return; // Don't prevent default - let scroll happen naturally
      }

      // Only engage scroll-jacking if in active zone
      if (isInActiveZone) {
        // Check cooldown
        if (now - lastScrollTime < scrollCooldown) {
          accumulatedDelta = 0;
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Check if we can actually change cards
        const canChangeDown = scrollingDown && activeCardIndex < 5;
        const canChangeUp = scrollingUp && activeCardIndex > 0;

        // If we can't change cards, allow scroll to pass through
        if (!canChangeDown && !canChangeUp) {
          accumulatedDelta = 0;
          return;
        }

        // Prevent default only when we're actually going to change cards
        e.preventDefault();
        e.stopPropagation();

        // Use requestAnimationFrame for smoother updates
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(() => {
          // Accumulate scroll delta
          accumulatedDelta += Math.abs(e.deltaY);

          // Only trigger card change if scrolled enough
          if (accumulatedDelta >= scrollThreshold) {
            lastScrollTime = now;
            accumulatedDelta = 0;

            if (canChangeDown) {
              handleCardChange(activeCardIndex + 1);
            } else if (canChangeUp) {
              handleCardChange(activeCardIndex - 1);
            }
          }
          rafId = null;
        });
      } else {
        // Not in active zone - allow natural scrolling
        accumulatedDelta = 0;
      }
    };

    // Use capture phase to intercept scroll events before they bubble
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('wheel', handleWheel, { capture: true } as any);
    };
  }, [activeCardIndex]);

  const philosophyCards = [
    {
      title: 'Technology should feel invisible.',
      description: 'We believe technology should fade into the background, working quietly to simplify life without demanding attention.',
      icon: (
        <div className="relative w-20 h-20">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                borderRadius: '50% 40% 50% 40%',
                border: '2px solid rgba(139, 92, 246, 0.6)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )
    },
    {
      title: 'Intelligence should adapt, not interrupt.',
      description: 'Smart systems should respond naturally to your needs, anticipating challenges and adjusting in real time without distractions, alerts, or unnecessary input.',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 30;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(199, 162, 255, 0.9), rgba(139, 92, 246, 0.6))',
                  boxShadow: '0 0 10px rgba(199, 162, 255, 0.6)',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          <div 
            className="w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(199, 162, 255, 1), rgba(139, 92, 246, 0.8))',
              boxShadow: '0 0 15px rgba(199, 162, 255, 0.8)',
            }}
          />
        </div>
      )
    },
    {
      title: 'Design should create calm.',
      description: 'Thoughtful design brings clarity through space, balance, and gentle motion, creating environments that feel effortless and focused.',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                border: '2px solid rgba(139, 92, 246, 0.5)',
                borderRadius: '50%',
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                rotate: [i * 45, i * 45 + 360],
              }}
              transition={{
                duration: 8 - i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          <div 
            className="w-4 h-4 rounded-full relative z-10"
            style={{
              background: 'radial-gradient(circle, rgba(199, 162, 255, 1), rgba(139, 92, 246, 0.8))',
              boxShadow: '0 0 20px rgba(199, 162, 255, 0.8)',
            }}
          />
        </div>
      )
    },
    {
      title: 'Everything should connect seamlessly.',
      description: 'Your digital ecosystem should work as one unified experience, flowing from task to task without friction or fragmentation.',
      icon: (
        <div className="relative w-20 h-20">
          <svg className="absolute inset-0" width="80" height="80" viewBox="0 0 80 80">
            <motion.line
              x1="40" y1="20" x2="40" y2="60"
              stroke="rgba(139, 92, 246, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="20" y1="40" x2="60" y2="40"
              stroke="rgba(139, 92, 246, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          {[[40, 20], [40, 60], [20, 40], [60, 40], [40, 40]].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(199, 162, 255, 0.9), rgba(139, 92, 246, 0.7))',
                boxShadow: '0 0 10px rgba(199, 162, 255, 0.6)',
                left: `${pos[0]}px`,
                top: `${pos[1]}px`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )
    },
    {
      title: 'Privacy is non-negotiable.',
      description: 'Your data belongs to you. We build systems that protect your information while delivering intelligent, personalized experiences.',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg width="50" height="60" viewBox="0 0 50 60">
            <motion.path
              d="M 25 5 L 45 15 L 45 30 Q 45 50, 25 55 Q 5 50, 5 30 L 5 15 Z"
              stroke="rgba(139, 92, 246, 0.7)"
              strokeWidth="2"
              fill="rgba(139, 92, 246, 0.1)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute">
            <div 
              className="w-3 h-3 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(199, 162, 255, 1), rgba(139, 92, 246, 0.8))',
                boxShadow: '0 0 15px rgba(199, 162, 255, 0.8)',
              }}
            />
          </div>
        </div>
      )
    },
    {
      title: 'Simplicity is the ultimate sophistication.',
      description: 'Complex problems deserve elegant solutions. We strip away unnecessary layers to reveal what truly matters.',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${20 + i * 15}px`,
                height: `${20 + i * 15}px`,
                border: '1px solid rgba(139, 92, 246, 0.6)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          <div 
            className="w-2 h-2 rounded-full relative z-10"
            style={{
              background: 'radial-gradient(circle, rgba(199, 162, 255, 1), rgba(139, 92, 246, 0.9))',
              boxShadow: '0 0 15px rgba(199, 162, 255, 0.9)',
            }}
          />
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: '#000000' }}>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
           }}
      />

      {/* Top Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-16 pt-8">
        {/* Logo */}
        <Link to="/">
          <div className="text-white text-3xl tracking-tight" style={{ fontFamily: 'Varela Round, system-ui, sans-serif' }}>
            <img src={logoImage} alt="wyle" className="h-14" style={{ marginLeft: '-8px' }} />
          </div>
        </Link>

        {/* Center Navigation - Glassmorphism */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 px-10 py-4 rounded-full"
             style={{
               background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
               backdropFilter: 'blur(30px)',
               border: '1px solid rgba(255,255,255,0.15)',
               boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
             }}>
          <Link to="/" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Home</Link>
          <Link to="/services" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Services</Link>
          <Link to="/about" className="text-white text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>About</Link>
          <Link to="/contact" className="text-gray-400 text-sm transition-opacity hover:opacity-80" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '2px' }}>Contact</Link>
        </div>

        {/* Right - Contact us button */}
        <a 
          href="#contact"
          className="px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-80"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#FFFFFF',
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '1.5px',
          }}
        >
          Contact us
        </a>
      </nav>

      {/* Hero Section - The People Behind the Flow */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-16 text-center">
          <motion.h1
            className="mb-4"
            style={{
              fontSize: '64px',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '1px',
              lineHeight: '1.2',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The People Behind<br />the Flow
          </motion.h1>

          <motion.p
            style={{
              fontSize: '18px',
              color: '#A0A0A0',
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What if technology disappeared into the background
          </motion.p>

          {/* Horizontal flowing purple energy wave removed */}
          
          <div className="relative mt-24 h-64 overflow-visible">
            {/* Energy Wave Image - Animated reveal - flows horizontally, positioned higher */}
            <motion.div 
              className="absolute pointer-events-none z-30"
              style={{
                top: '10%',
                left: '15%',
                width: '100%',
                height: '360px',
                transform: 'translateY(-50%)',
              }}
              initial={{ clipPath: 'inset(0 0% 0 100%)' }}
              animate={{
                clipPath: ['inset(0 0% 0 100%)', 'inset(0 0% 0 0%)', 'inset(0 0% 0 0%)'],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                times: [0, 0.15, 1],
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <img
                src={waveImage}
                alt="energy wave"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                }}
              />
            </motion.div>

            {/* Hand - Static - positioned further to the left */}
            <div
              className="absolute pointer-events-none z-20"
              style={{
                top: '50%',
                left: '-15%',
                width: '650px',
                transform: 'translateY(-50%)',
              }}
            >
              <img 
                src={handImage}
                alt="hand"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="relative py-24 overflow-visible" ref={carouselSectionRef}>
        <div className="max-w-7xl mx-auto px-16">
          <motion.h2
            className="text-center mb-16"
            style={{
              fontSize: '42px',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Philosophy
          </motion.h2>

          {/* 3D Carousel Container with perspective */}
          <div 
            className="relative overflow-visible pb-12"
            style={{
              perspective: '2000px',
              perspectiveOrigin: 'center 40%',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              minHeight: '600px',
            }}
          >
            {/* Carousel track - Circular/Arc Layout - Centered with spacing */}
            <div className="relative flex items-center justify-center" style={{ height: '600px', willChange: 'transform', overflow: 'visible', margin: '0 auto' }}>
              {philosophyCards
                .map((card, index) => ({ card, index }))
                .map(({ card, index }) => {
                const isActive = index === activeCardIndex;
                const offset = index - activeCardIndex;
                
                // Semi-circle positioning parameters - more spacing between cards
                const radius = 750; // Increased radius for more gap between cards
                const maxAngle = 130; // Increased angle spread (65 degrees each side)
                const totalCards = philosophyCards.length;
                const angleStep = maxAngle / Math.max(totalCards - 1, 1); // Angle between cards
                
                // Calculate angle for this card (active card is at 0 degrees, centered)
                // Cards spread from -maxAngle/2 to +maxAngle/2
                const angle = (offset * angleStep);
                const angleRad = (angle * Math.PI) / 180;
                
                // Calculate semi-circular position
                // For a semi-circle: x is horizontal spread, z is depth (receding), y can have slight curve
                const xPos = Math.sin(angleRad) * radius;
                const zPos = (1 - Math.cos(angleRad)) * radius * 0.5; // Cards recede into background as they curve
                const yPos = (1 - Math.cos(angleRad)) * radius * 0.12; // Slight upward curve for visual appeal
                
                // Calculate rotation to face center (cards should face the viewer at center)
                const rotateY = -angle; // Rotate around Y axis to face center
                const rotateX = -Math.abs(angle) * 0.15; // Slight upward tilt for cards on sides
                
                // Scale and opacity based on distance from center
                const distanceFromCenter = Math.abs(offset);
                let scale = 1;
                let opacity = 1;
                let zIndex = 10;
                
                if (isActive) {
                  // Center card - active
                  scale = 1;
                  opacity = 1;
                  zIndex = 50;
                } else if (distanceFromCenter === 1) {
                  // Immediate neighbors - more visible with spacing
                  scale = 0.9;
                  opacity = 0.85;
                  zIndex = Math.round(40 + zPos * 0.1); // Higher z-index for cards closer to front
                } else if (distanceFromCenter === 2) {
                  // Second neighbors
                  scale = 0.8;
                  opacity = 0.7;
                  zIndex = Math.round(30 + zPos * 0.1);
                } else {
                  // Furthest cards
                  scale = 0.7;
                  opacity = 0.55;
                  zIndex = Math.round(20 + zPos * 0.1);
                }
                
                return (
                  <motion.div
                    key={index}
                    className="absolute cursor-pointer"
                    style={{
                      width: '440px',
                      left: '50%',
                      top: '50%',
                      zIndex: zIndex,
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                    }}
                    animate={{
                      x: xPos,
                      y: -yPos, // Negative for upward curve
                      rotateY: rotateY,
                      rotateX: rotateX,
                      scale: scale,
                      opacity: opacity,
                      z: -zPos, // Negative z for cards to recede into background
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                      mass: 0.8,
                    }}
                    whileHover={{
                      scale: isActive ? 1.05 : scale * 1.1,
                    }}
                    onClick={() => handleCardChange(index)}
                  >
                    <div
                      className="p-6 flex items-start gap-4"
                      style={{
                        minHeight: '240px',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        boxShadow: isActive 
                          ? '0 20px 60px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                          : '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                      }}
                    >
                      {/* Left - 3D Wireframe Icon */}
                      <div className="flex items-center justify-center" style={{ width: '90px', flexShrink: 0 }}>
                        {card.icon}
                      </div>

                      {/* Right - Text */}
                      <div className="flex-1">
                        <h3 
                          className="mb-3"
                          style={{
                            fontSize: '22px',
                            color: '#FFFFFF',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 600,
                            lineHeight: '1.3',
                          }}
                        >
                          {card.title}
                        </h3>

                        <p 
                          style={{
                            fontSize: '15px',
                            color: '#A0A0A0',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            lineHeight: '1.6',
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation dots - REMOVED */}
          </div>
        </div>
      </section>

      {/* Why Wyle Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="mb-6"
                style={{
                  fontSize: '48px',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                Why Wyle
              </h2>

              <p 
                style={{
                  fontSize: '20px',
                  color: '#A0A0A0',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  lineHeight: '1.8',
                }}
              >
                It's not the food delivery, rides or groceries app. But it's something that quietly connects all of these things in the background.
              </p>
            </motion.div>

            {/* Right - Glowing fragmented orb */}
            <motion.div
              className="relative h-96 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Core glow */}
              <div 
                className="absolute w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(199, 162, 255, 0.8) 0%, rgba(139, 92, 246, 0.4) 40%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Geometric shards */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const distance = 80 + (i % 3) * 20;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, rgba(199, 162, 255, 0.6), rgba(139, 92, 246, 0.3))',
                      border: '1px solid rgba(199, 162, 255, 0.4)',
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                      filter: 'blur(0.5px)',
                      willChange: 'transform, opacity',
                      transform: `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0) rotate(${i * 30}deg)`,
                    }}
                    animate={{
                      x: [x, x + Math.cos(angle) * 10, x],
                      y: [y, y + Math.sin(angle) * 10, y],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

              {/* Center core */}
              <div 
                className="relative w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(199, 162, 255, 0.9) 0%, rgba(139, 92, 246, 0.5) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 60px rgba(199, 162, 255, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.1)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-16 text-center">
          {/* Curved arc above */}
          <svg 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-12"
            width="400" 
            height="100" 
            viewBox="0 0 400 100"
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                <stop offset="50%" stopColor="#C7A2FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 80 Q 200 20, 350 80"
              stroke="url(#arcGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>

          <motion.h2
            className="mb-6"
            style={{
              fontSize: '48px',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>

          <motion.h3
            className="mb-8"
            style={{
              fontSize: '28px',
              color: '#C7A2FF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build an Operating System That You Don't Notice
          </motion.h3>

          <motion.p
            style={{
              fontSize: '18px',
              color: '#A0A0A0',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '1.9',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The best technology is the kind you barely notice. It doesn't force you to think about menus, logins, or switching between apps. It just flows. wyle is designed to work invisibly across every part of your life—rides, groceries, food, wellness, finances—creating a seamless, connected, and responsive experience, powered by intelligent design and systems that work effortlessly together. We're not here to make more things—we're here to make everything work as one.
          </motion.p>
        </div>
      </section>

      {/* The Minds Behind WYLE Section */}
      <section className="relative py-24 pb-32">
        <div className="max-w-7xl mx-auto px-16">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="mb-3"
              style={{
                fontSize: '48px',
                color: '#FFFFFF',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              The Minds Behind WYLE
            </h2>
            <p 
              style={{
                fontSize: '16px',
                color: '#A0A0A0',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Visionaries driving innovation and sustainable growth across the UAE
            </p>
          </motion.div>

          <div className="grid grid-cols-5 gap-6 mt-16">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: i % 2 === 0 ? 3 : -3,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedTeamMember(member)}
              >
                {/* Image container with glow */}
                <div className="relative mb-4 mx-auto" style={{ width: '140px', height: '140px' }}>
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(199, 162, 255, 0.3) 0%, transparent 70%)',
                      filter: 'blur(15px)',
                    }}
                  />
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect fill='%23181818' width='140' height='140'/%3E%3Ccircle cx='70' cy='50' r='20' fill='%23404040'/%3E%3Cpath d='M 30 110 Q 30 80, 70 80 Q 110 80, 110 110 L 110 140 L 30 140 Z' fill='%23404040'/%3E%3C/svg%3E"
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <h3 
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>

                <p 
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Team Member Detail Modal */}
      {selectedTeamMember && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-16"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTeamMember(null)}
        >
          <motion.div
            className="relative max-w-3xl w-full rounded-3xl p-10 flex gap-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 80px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTeamMember(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Left - Image */}
            <div 
              className="relative rounded-2xl p-4"
              style={{ 
                width: '220px', 
                flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(199, 162, 255, 0.4) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='260' viewBox='0 0 220 260'%3E%3Crect fill='%23181818' width='220' height='260'/%3E%3Ccircle cx='110' cy='80' r='38' fill='%23404040'/%3E%3Cpath d='M 45 210 Q 45 145, 110 145 Q 175 145, 175 210 L 175 260 L 45 260 Z' fill='%23404040'/%3E%3C/svg%3E"
                alt={selectedTeamMember.name}
                className="relative w-full h-auto rounded-2xl"
                style={{
                  border: '2px solid rgba(199, 162, 255, 0.3)',
                }}
              />
            </div>

            {/* Right - Info */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 
                className="mb-2"
                style={{
                  fontSize: '28px',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {selectedTeamMember.name}
              </h3>

              <p 
                className="mb-5"
                style={{
                  fontSize: '15px',
                  color: '#C7A2FF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '1px',
                }}
              >
                {selectedTeamMember.role}
              </p>

              <p 
                style={{
                  fontSize: '15px',
                  color: '#A0A0A0',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  lineHeight: '1.8',
                }}
              >
                {selectedTeamMember.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}