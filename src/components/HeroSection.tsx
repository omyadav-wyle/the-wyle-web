import { motion } from 'motion/react';
import marbleTexture from 'figma:asset/2d00f865631069f9d70237e84f9f12413b9b737c.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import heroVideo from '../assets/hero.mp4';
import { Navigation } from './Navigation';

export function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#000000' }}>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
           }}
      />

      {/* Top Navigation */}
      <Navigation />

      {/* Hero Video - Behind Text */}
      <video 
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: 'screen', opacity: 0.8 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-20">
        {/* SVG Filters for Internal Marble Texture */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            {/* Marble texture pattern */}
            <filter id="marbleTexture">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02 0.03"
                numOctaves="3"
                seed="5"
                result="turbulence"
              />
              <feColorMatrix
                in="turbulence"
                type="matrix"
                values="1 0 0 0 0.95
                        0.95 0 0 0 0.9
                        0.9 0 0.95 0 1
                        0 0 0 0.08 0"
                result="colorNoise"
              />
              <feComposite in="SourceGraphic" in2="colorNoise" operator="in" result="clipped" />
              <feBlend in="clipped" in2="SourceGraphic" mode="overlay" />
            </filter>
            
            {/* Lightning flash inside text */}
            <filter id="lightningFlash">
              <feColorMatrix
                type="matrix"
                values="1.3 0 0 0 0
                        0 1.1 0 0 0
                        0 0 1.4 0 0
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>

        {/* Main Headline - Contained Marble Effect */}
        <div className="relative mb-6">
          {/* Base marble text layer with image */}
          <motion.h1
            className="text-8xl text-center relative"
            style={{
              backgroundImage: `url(${marbleTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '2px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Life in a Flow
          </motion.h1>

          {/* Frosted glass overlay on the letters */}
          <h1
            className="absolute inset-0 text-8xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.25) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '2px',
              mixBlendMode: 'screen',
            }}
          >
            Life in a Flow
          </h1>

          {/* Slow shimmer overlay - stays inside text */}
          <motion.h1
            className="absolute inset-0 text-8xl text-center"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 75%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '2px',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['-200% 0%', '200% 0%', '200% 0%', '200% 0%', '200% 0%'],
              opacity: [0, 1, 0.9, 0.9, 0],
            }}
            transition={{
              backgroundPosition: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.083, 0.5, 0.75, 1],
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.083, 0.5, 0.75, 1],
                ease: "easeOut",
              },
            }}
          >
            Life in a Flow
          </motion.h1>

          {/* Lightning flash - only inside letterforms */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            }}
            animate={{
              clipPath: [
                'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
              ],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              clipPath: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.2, 0.75, 0.9, 1],
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.2, 0.75, 0.9, 1],
                ease: "easeOut",
              },
            }}
          >
            <h1
              className="text-8xl text-center"
              style={{
                backgroundImage: `url(${marbleTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '2px',
                filter: 'brightness(1.15)',
              }}
            >
              Life in a Flow
            </h1>
          </motion.div>

          {/* Electric ripple inside text */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            }}
            animate={{
              clipPath: [
                'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
              ],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              clipPath: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.533, 0.73, 0.9, 1],
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 12,
                repeat: Infinity,
                times: [0, 0.533, 0.73, 0.9, 1],
                ease: "easeOut",
              },
            }}
          >
            <h1
              className="text-8xl text-center"
              style={{
                backgroundImage: `url(${marbleTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '2px',
                filter: 'brightness(1.2) saturate(1.01)',
              }}
            >
              Life in a Flow
            </h1>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          className="text-white max-w-xl text-center mb-20 relative z-20"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '2px',
            fontSize: '18px',
            lineHeight: '1.6',
            fontWeight: '700',              // Bold
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          It's not a collection of apps. It's a calm, intelligently connected experience.
        </motion.p>
      </div>

      {/* Global bloom effect */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40"
           style={{
             background: 'radial-gradient(ellipse at 50% 45%, rgba(3,182,42,0.15) 0%, transparent 60%)',
           }}
      />

      {/* Purple flow - left side */}
      <div className="absolute pointer-events-none" style={{ left: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(20deg)' }}>
        <motion.img 
          src={imgPurpleFlow} 
          alt="purple flow" 
          className="h-[100vh]"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(3px)',
          }}
          animate={{
            opacity: [0.2, 0.9, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            times: [0, 0.3, 0.6, 1],
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>

      {/* Purple flow - right side */}
      <div className="absolute pointer-events-none" style={{ right: '-380px', top: '50%', zIndex: 1, transform: 'translateY(-50%) rotate(-20deg)' }}>
        <motion.img 
          src={imgPurpleFlow} 
          alt="purple flow" 
          className="h-[100vh]"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(3px)',
          }}
          animate={{
            opacity: [0.2, 0.3, 0.9, 0.4, 0.2],
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

      {/* Purple arc - behind navbar */}
      <div className="absolute pointer-events-none" style={{ zIndex: 1, top: '-45%', transform: 'translateX(-65%) rotate(-90deg)' }}>
        {/* Heavily blurred base layer */}
        <img 
          src={arcImage} 
          alt="purple arc blur base" 
          className="h-[105vh]"
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
          className="h-[105vh] absolute top-0 left-0"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(30px) brightness(1.4)',
            opacity: 0.5,
          }}
        />
        
        {/* Soft blur overlay */}
        <img 
          src={arcImage} 
          alt="purple arc blur soft" 
          className="h-[105vh] absolute top-0 left-0"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(15px) brightness(1.2)',
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
}
