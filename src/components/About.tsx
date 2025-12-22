import { motion } from 'motion/react';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { useRef, useState, useEffect, useCallback } from 'react';
import arvindImage from '../assets/arvind.webp';
import amruthaImage from '../assets/amrutha.png';
import azmatImage from '../assets/azmat.png';
import aboutHeroVideo from '../assets/about_hero.mp4';
import '../index.css';
export function About() {
  const teamMembers = [
    {
      name: 'Aravindh Sreekanthan',
      role: 'Founder & CEO',
      image: arvindImage,
      linkedin: 'https://www.linkedin.com/in/aravindh-sreekanthan'
    },
    {
      name: 'Amrutha Veluthakal',
      role: 'CPO & Chief of Staff',
      image: amruthaImage,
      linkedin: 'https://www.linkedin.com/in/v-amrutha-/'
    },
    {
      name: 'Azmat Ali',
      role: 'VP, Marketing & Innovation',
      image: azmatImage,
      linkedin: 'https://www.linkedin.com/in/azmatali/'
    }
  ];

  const philosophyCards = [
    {
      title: 'Life comes first. Always.',
      description: 'If something doesn\'t make life feel better, calmer, or more human, it doesn\'t belong here.',
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50% 40% 50% 40%',
                border: '2px solid rgba(27, 153, 139, 0.6)',
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
      ),
    },
    {
      title: 'The best systems disappear.',
      description: 'Calm isn\'t added. It\'s what remains when unnecessary effort is removed.',
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 30;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(27, 153, 139, 0.9), rgba(0, 47, 58, 0.6))',
                  boxShadow: '0 0 10px rgba(27, 153, 139, 0.6)',
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
              background: 'radial-gradient(circle, rgba(27, 153, 139, 1), rgba(0, 47, 58, 0.8))',
              boxShadow: '0 0 15px rgba(27, 153, 139, 0.8)',
            }}
          />
        </div>
      ),
    },
    {
      title: 'We think long, even when it\'s inconvenient.',
      description: 'What lasts is built slowly, with responsibility for what comes next.',
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                border: '2px solid rgba(27, 153, 139, 0.5)',
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
              background: 'radial-gradient(circle, rgba(27, 153, 139, 1), rgba(0, 47, 58, 0.8))',
              boxShadow: '0 0 20px rgba(27, 153, 139, 0.8)',
            }}
          />
        </div>
      ),
    }
  ];

  // Interactive Card Component with Cursor Tracking
  function InteractiveCard({ card, index }: { card: typeof philosophyCards[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isHovered, setIsHovered] = useState(false);
    const animationFrameRef = useRef<number | undefined>(undefined);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x, y });
      });
    }, []);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
      setMousePosition({ x: 0.5, y: 0.5 });
    }, []);

    useEffect(() => {
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, []);

    // Calculate 3D perspective transform
    const rotateX = (mousePosition.y - 0.5) * 10; // Max 5 degrees
    const rotateY = (0.5 - mousePosition.x) * 10; // Max 5 degrees

    // Calculate shine gradient position
    const shineX = mousePosition.x * 100;
    const shineY = mousePosition.y * 100;

    return (
      <motion.div
        ref={cardRef}
        className="h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          className="h-full flex flex-col overflow-hidden"
          style={{
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(27, 153, 139, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: isHovered
              ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-10px)`
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {/* Shine effect overlay */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle 300px at ${shineX}% ${shineY}%, rgba(27, 153, 139, 0.15) 0%, transparent 70%)`,
                opacity: 1,
                transition: 'opacity 0.3s ease',
                zIndex: 1,
              }}
            />
          )}

          {/* Image area at top */}
          <div
            className="relative overflow-hidden"
            style={{
              height: '200px',
              minHeight: '200px',
              background: 'linear-gradient(135deg, rgba(27, 153, 139, 0.1), rgba(0, 47, 58, 0.05))',
            }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {card.image}
            </motion.div>
          </div>

          {/* Content section */}
          <div className="flex-1 flex flex-col p-6 text-center" style={{ zIndex: 2, position: 'relative' , paddingLeft:'clamp(16px, 4vw, 24px)', paddingRight:'clamp(16px, 4vw, 24px)'}}>
            <motion.h3
              className="mb-3"
              style={{
                // fontSize: 'clamp(20px, 2.5vw, 24px)',
                color: isHovered ? '#FFFFFF' : '#FFFFFF',
                fontFamily: 'var(--font-subtext)',
                fontSize:'var(--font-size-subheading)',
                fontWeight: 500,
                lineHeight: '1.3',
                letterSpacing: '0.3px',
                transition: 'color 0.3s ease',
                textAlign: 'center',
                marginTop: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {card.title}
            </motion.h3>

            <motion.p
              className="mb-6 flex-1"
              style={{
                // fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: isHovered ? '#C0C0C0' : '#B0B0B0',
                fontFamily:   'var(--font-body)',
                fontSize:'var(--font-size-body)',
                fontWeight: 400,
                lineHeight: '1.7',
                letterSpacing: '0.2px',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {card.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

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
      <Navigation/>

      {/* Teal arc - behind navbar */}
      <div className="absolute pointer-events-none" style={{ zIndex: 1, top: '-45%', transform: 'translateX(-65%) rotate(-90deg)' }}>
        {/* Heavily blurred base layer */}
        <img 
          src={arcImage} 
          alt="teal arc blur base" 
          className="h-[105vh]"
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
          className="h-[105vh] absolute top-0 left-0"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(30px) brightness(1.4) hue-rotate(160deg) saturate(1.5)',
            opacity: 0.5,
          }}
        />
        
        {/* Soft blur overlay */}
        <img 
          src={arcImage} 
          alt="teal arc blur soft" 
          className="h-[105vh] absolute top-0 left-0"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(15px) brightness(1.2) hue-rotate(160deg) saturate(1.5)',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative" style={{ paddingTop: 'clamp(0px, 24vw, 128px)', paddingBottom: 'clamp(40px, 6vw, 80px)', minHeight: '100vh', overflow: 'hidden', isolation: 'isolate', position: 'relative', marginBottom: 0 }}>
        {/* Background Video - about_hero.mp4 */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <video
            src={aboutHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            style={{
              objectFit: 'cover',
              objectPosition: 'center bottom',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </div>

        {/* Dark Teal overlay - reduced opacity for better video visibility */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'linear-gradient(135deg, rgba(0, 47, 58, 0.2) 0%, rgba(0, 47, 58, 0.1) 50%, rgba(0, 47, 58, 0.2) 100%)',
            mixBlendMode: 'multiply',
          }}
        />
        
        {/* Bright Turquoise highlight overlay - reduced opacity */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(27, 153, 139, 0.15) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Additional teal gradient for depth - reduced opacity */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'linear-gradient(180deg, rgba(0, 47, 58, 0.1) 0%, transparent 30%, transparent 70%, rgba(0, 47, 58, 0.15) 100%)',
            mixBlendMode: 'color',
          }}
        />

        {/* Global bloom effect - Teal - reduced opacity */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse at 50% 45%, rgba(27, 153, 139, 0.1) 0%, transparent 60%)',
          }}
        />

        {/* Gradient fade at bottom to blend with next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            zIndex: 1,
            height: '200px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-16 text-center" style={{ marginTop: 'clamp(-40px, -5vw, -20px)', zIndex: 10 }}>
          <motion.h1
            className="mb-4"
            style={{
              // fontSize: '64px',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(36px, 8vw, 96px)',
              letterSpacing: '1px',
              lineHeight: '1.2',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Behind every flow is intent
          </motion.h1>

          <motion.p
            style={{
              fontSize: 'var(--font-size-subheading)',
              color: '#A0A0A0',
              fontFamily: 'var(--font-subtext)',
              fontWeight: 400,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We started by paying attention.
          </motion.p>

        </div>
      </section>

      {/* What We Won't Compromise On Section */}
      <section className="relative" style={{ background: 'transparent', paddingTop: 'clamp(80px, 12vw, 120px)', paddingBottom: 'clamp(40px, 5vw, 64px)', zIndex: 10, isolation: 'isolate' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' }}>
          <motion.h2
            className="text-center mb-16"
            style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
              background: 'transparent',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              marginTop: '0px',
              position: 'relative',
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Won't Compromise On
          </motion.h2>

          {/* Responsive Grid Layout */}
          <div
                      style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 350px), 1fr))',
              gap: 'clamp(24px, 3vw, 32px)',
              maxWidth: '1200px',
              margin: '4rem auto 0',
              padding: '0 clamp(8px, 1vw, 16px)',
            }}
          >
            {philosophyCards.map((card, index) => (
              <InteractiveCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What We're Here To Do Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Teal flow - left side */}
        <div className="absolute pointer-events-none" style={{ left: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(20deg)' }}>
          <motion.img 
            src={imgPurpleFlow} 
            alt="teal flow" 
            className="h-[100vh]"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(3px) hue-rotate(160deg) saturate(1.5)',
            }}
            animate={{
              opacity: [0.1, 0.4, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.3, 0.6, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </div>

        {/* Teal flow - right side */}
        <div className="absolute pointer-events-none" style={{ right: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(-20deg)' }}>
          <motion.img 
            src={imgPurpleFlow} 
            alt="teal flow" 
            className="h-[100vh]"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(3px) hue-rotate(160deg) saturate(1.5)',
            }}
            animate={{
              opacity: [0.1, 0.15, 0.4, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.2, 0.5, 0.7, 1],
              ease: [0.4, 0, 0.2, 1],
              delay: 0.3,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-16 text-center relative z-10">
          {/* Curved arc above */}
          <motion.svg 
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              width: '800px',
              height: '140px',
              marginTop: '-100px',
              marginBottom: '40px',
            }}
            viewBox="0 0 800 140"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002F3A" stopOpacity="0" />
                <stop offset="50%" stopColor="#1B998B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#002F3A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 120 Q 400 25, 750 120"
              stroke="url(#arcGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                pathLength: [1, 1.03, 1],
                opacity: [1, 0.85, 1],
                strokeWidth: [3, 3.5, 3],
              }}
              transition={{
                pathLength: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                strokeWidth: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                default: {
                  duration: 1.5,
                  ease: "easeOut",
                },
              }}
            />
          </motion.svg>

          <motion.h2
            className="mb-6"
            style={{
              fontSize: 'var(--font-size-heading-sm)',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
              paddingTop: '60px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We're Here To Do
          </motion.h2>

          <motion.h3
            className="mb-8"
            style={{
              fontSize: 'var(--font-size-subheading)',
              color: '#1B998B',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build what life quietly asks for.
          </motion.h3>

          <motion.p
            style={{
              fontSize: 'var(--font-size-body)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              lineHeight: '1.9',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The most meaningful things don't demand attention. They support the day without interrupting it. We're here to remove friction, not add choice. To reduce noise, not introduce more. Not to build more things. But to help everything work together, naturally.
          </motion.p>
        </div>
      </section>

      {/* The Stewards Section */}
      <section className="relative py-6
       pb-24 overflow-hidden">
        {/* Teal flow - left side */}
        <div className="absolute pointer-events-none" style={{ left: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(20deg)' }}>
          <motion.img 
            src={imgPurpleFlow} 
            alt="teal flow" 
            className="h-[100vh]"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(3px) hue-rotate(160deg) saturate(1.5)',
            }}
            animate={{
              opacity: [0.1, 0.4, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.3, 0.6, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </div>

        {/* Teal flow - right side */}
        <div className="absolute pointer-events-none" style={{ right: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(-20deg)' }}>
          <motion.img 
            src={imgPurpleFlow} 
            alt="teal flow" 
            className="h-[100vh]"
            style={{
              mixBlendMode: 'screen',
              filter: 'blur(3px) hue-rotate(160deg) saturate(1.5)',
            }}
            animate={{
              opacity: [0.1, 0.15, 0.4, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.2, 0.5, 0.7, 1],
              ease: [0.4, 0, 0.2, 1],
              delay: 0.3,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-16 relative z-10" style={{ paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' }}>
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="mb-2"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.5px',
                marginBottom: 'clamp(4px, 0.5vw, 8px)',
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
              }}
            >
              The Stewards
            </h2>
            <p 
              style={{
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                color: '#A0A0A0',
                fontFamily: 'var(--font-subtext)',
              fontWeight: 400,
                letterSpacing: '0.5px',
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
              }}
            >
              A small group, building with patience and care.
            </p>
          </motion.div>

          <div className="flex justify-center items-start mt-16" style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: 'clamp(320px, 90vw, 1200px)', margin: 'clamp(32px, 4vw, 64px) auto 0', gap: 'clamp(16px, 2vw, 32px)', alignItems: 'stretch' }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                  flex: '1 1 auto',
                  width: 'clamp(280px, calc(33.333% - 22px), 300px)',
                  maxWidth: 'calc(100% - 32px)',
                  minWidth: 'clamp(250px, 90vw, 300px)',
                  cursor: member.linkedin ? 'pointer' : 'default',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: i % 2 === 0 ? 3 : -3,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => {
                  if (member.linkedin) {
                    window.open(member.linkedin, '_blank');
                  }
                }}
              >
                {/* Image container with glow */}
                <div className="relative mb-4 mx-auto" style={{ width: 'clamp(100px, 14vw, 140px)', height: 'clamp(100px, 14vw, 140px)' }}>
                  {member.image && (
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(27, 153, 139, 0.3) 0%, transparent 70%)',
                      filter: 'blur(15px)',
                    }}
                  />
                  )}
                  {member.image ? (
                  <img 
                      src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                  ) : (
                    <div 
                      className="relative w-full h-full rounded-2xl"
                      style={{
                        background: '#181818',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                  )}
                </div>

                <h3 
                  style={{
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    marginBottom: 'clamp(4px, 0.25vw, 4px)',
                  }}
                >
                  {member.name}
                </h3>

                <p 
                  style={{
                    fontSize: 'clamp(12px, 1.3vw, 13px)',
                    color: '#808080',
                    fontFamily: 'var(--font-body)',
              fontWeight: 400,
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
    </div>
  );
}