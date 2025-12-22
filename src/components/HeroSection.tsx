import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import marbleTexture from 'figma:asset/2d00f865631069f9d70237e84f9f12413b9b737c.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import heroVideo from '../assets/hero.mp4';
import { Navigation } from './Navigation';
import '../index.css';
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mobile devices
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video is playing
        })
        .catch((error) => {
          // Auto-play was prevented, try again on user interaction
          const playOnInteraction = () => {
            video.play().catch(() => {});
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('click', playOnInteraction, { once: true });
        });
    }

    // Ensure video continues playing when it pauses
    const handlePause = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('pause', handlePause);
    };
  }, []);
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
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none" style={{ overflow: 'hidden' }}>
        <video 
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
         
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ marginTop: 'clamp(-200px, -30vw, -80px)' }}>
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

        {/* Main Headline - Metallic Effect */}
        <div className="relative mb-6" style={{ isolation: 'isolate', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>
          {/* Base marble text layer - Peach metallic */}
          <motion.h1
            className="text-8xl text-center relative z-10"
            style={{
              backgroundImage: `url(${marbleTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 500,
              letterSpacing: '2px',
              willChange: 'opacity',
              filter: 'brightness(1.1) saturate(1.3) contrast(1.2) hue-rotate(-15deg)',
              fontSize: 'var(--font-size-heading)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Life in a Flow
          </motion.h1>

          {/* Slow shimmer overlay - Peach tones */}
          <motion.h1
            className="absolute inset-0 text-8xl text-center pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,218,185,0.4) 25%, rgba(255,182,193,0.6) 50%, rgba(255,218,185,0.4) 75%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 500,
              letterSpacing: '2px',
              backgroundSize: '200% 100%',
              zIndex: 12,
              willChange: 'background-position, opacity',
              fontSize: 'var(--font-size-heading)',
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
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              zIndex: 13,
              willChange: 'clip-path, opacity',
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
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                letterSpacing: '2px',
                filter: 'brightness(1.3) saturate(1.4) hue-rotate(-15deg)',
                fontSize: 'var(--font-size-heading)',
              }}
            >
              Life in a Flow
            </h1>
          </motion.div>

          {/* Electric ripple inside text - Peach tones */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              zIndex: 14,
              willChange: 'clip-path, opacity',
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
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                letterSpacing: '2px',
                filter: 'brightness(1.4) saturate(1.5) hue-rotate(-15deg)',
                fontSize: 'var(--font-size-heading)',
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
            fontFamily: 'var(--font-subtext)',
            letterSpacing: '2px',
            fontSize: 'var(--font-size-subheading)',
            lineHeight: '1.6',
            fontWeight: 400,
            marginBottom: 'clamp(40px, 5vw, 80px)',
            maxWidth: 'clamp(280px, 90vw, 640px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Everyday moments, finally moving together.
        </motion.p>
      </div>


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
    </div>
  );
}
