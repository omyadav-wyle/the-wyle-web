import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import Lottie from 'lottie-react';
import waveLoopAnimation from '../assets/Wave Loop.json';
import '../index.css';
export function FragmentedReality() {
  const [mode, setMode] = useState<'chaos' | 'order'>('chaos');

  // Generate icon positions once using useMemo to prevent jitter on re-renders
  // 3 rows x 4 columns grid: 12 colored icons around a central WYLE hub
  const icons = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      // Chaos positions (randomized spread with large offsets)
      const cx = (Math.random() * 400) - 200;
      const cy = (Math.random() * 400) - 200;
      const cr = Math.random() * 360;

      // Order positions (3 rows x 4 columns grid)
      const col = i % 4; // 0, 1, 2, 3 (4 columns)
      const row = Math.floor(i / 4); // 0, 1, 2 (3 rows)
      const spacing = 80; // Distance between grid cells
      const ox = (col - 1.5) * spacing; // -120, -40, 40, 120
      const oy = (row - 1) * spacing; // -80, 0, 80

      // Color pattern: Left column (Teal), Second column (Jet Black), Third column (Yellow), Right column (Peach)
      const colors = ['#1B998B', '#002F3A', '#D5FF3F', '#FFB5A7'];
      const color = colors[col];

      return {
        id: i,
        chaos: { x: cx, y: cy, r: cr },
        order: { x: ox, y: oy, r: 0 },
        color: color,
      };
    });
  }, []);

  return (
    <section className="relative px-16" style={{ background: '#000000', paddingBottom: '0', overflow: 'hidden', paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)', minHeight: '80vh' }}>
      {/* Wave Loop Background Animation with Teal Theme - Section Only */}
      <div 
        className="absolute pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.3,
          filter: 'hue-rotate(160deg) saturate(1.2) brightness(0.7) contrast(1.1)',
          mixBlendMode: 'screen',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '100vw',
          height: '100%',
          transform: 'translateX(-50%)',
        }}
      >
        <Lottie
          animationData={waveLoopAnimation}
          loop={true}
          autoplay={true}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Section Header */}
      <h2 
        className="relative z-10 text-center mb-6"
        style={{
          fontSize: 'var(--font-size-heading-sm)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          letterSpacing: '1px',
          color: '#FFFFFF',
          marginTop: '0px',
          lineHeight: '1.2',
        }}
      >
        Fragmented by design
      </h2>
      <p 
        className="relative z-10 text-center max-w-2xl mx-auto"
        style={{
          fontSize: 'var(--font-size-body)',
          color: '#C5C6C7',
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          lineHeight: '1.6',
          marginBottom: '2rem',
        }}
      >
        Life is one flow. Your apps broke it into pieces.
      </p>
      
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Central Showcase Panel */}
        <div 
          className="relative h-[500px] w-full rounded-3xl overflow-hidden flex items-center justify-center transition-colors duration-700"
          style={{
            background: 'transparent',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Background Glow Effects */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              zIndex: 1,
              background: 'radial-gradient(circle at 50% 50%, rgba(27, 153, 139, 0.15) 0%, transparent 70%)',
            }}
            animate={{ opacity: mode === 'chaos' ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ 
              zIndex: 1,
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 47, 58, 0.2) 0%, rgba(27, 153, 139, 0.1) 50%, transparent 70%)',
            }}
            animate={{ opacity: mode === 'order' ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          {/* Central Hub (WYLE Core) - Same shape as icons, behind icons, only visible in Order mode */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 5 }}>
            <motion.div
              className="absolute rounded-xl flex items-center justify-center"
              initial={false}
              animate={{
                opacity: mode === 'order' ? 1 : 0,
                scale: mode === 'order' ? 1 : 0,
                x: -24, // Offset by half width to center (same as icons)
                y: -24, // Offset by half height to center (same as icons)
              }}
              transition={{ 
                duration: 0.7, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <span className="font-bold text-sm text-black font-sans tracking-tight">
                WYLE
              </span>
            </motion.div>
          </div>

          {/* Floating Icons Container - Centered */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 10 }}>
            {icons.map((icon) => (
              <motion.div
                key={icon.id}
                className="absolute rounded-xl flex items-center justify-center shadow-lg"
                style={{ 
                  width: '48px',
                  height: '48px',
                  backgroundColor: icon.color,
                  boxShadow: `0 0 20px ${icon.color}40`,
                  opacity: 1,
                }}
                initial={{
                  x: icon.order.x - 24, // Offset by half icon width to center
                  y: icon.order.y - 24, // Offset by half icon height to center
                  rotate: 0,
                }}
                animate={{
                  x: mode === 'chaos' ? icon.chaos.x - 24 : icon.order.x - 24,
                  y: mode === 'chaos' ? icon.chaos.y - 24 : icon.order.y - 24,
                  rotate: mode === 'chaos' ? icon.chaos.r : 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.34, 1.56, 0.64, 1], // Bouncy cubic-bezier
                }}
              >
                {/* Icon Visual (Simple pill shape) */}
                <div className="w-6 h-1.5 bg-white/80 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Interaction Toggle - Enhanced Bottom Control */}
          <div 
            className="absolute z-30"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '40px',
            }}
          >
            {/* Toggle Container with Enhanced Design */}
            <div 
              className="flex p-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <button
                onClick={() => setMode('chaos')}
                className={`relative px-10 py-4 rounded-full text-sm font-bold transition-all duration-300 font-sans ${
                  mode === 'chaos'
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
                style={{
                  minWidth: '120px',
                }}
              >
                {/* Background pill for active state */}
                {mode === 'chaos' && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: '#1B998B',
                      boxShadow: '0 0 30px rgba(27, 153, 139, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
                    }}
                    transition={{ 
                      type: "spring", 
                      bounce: 0.2, 
                      duration: 0.6 
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Fragmented</span>
                  {mode === 'chaos' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xs"
                    >
                      ⚡
                    </motion.span>
                  )}
                </span>
              </button>

              <button
                onClick={() => setMode('order')}
                className={`relative px-10 py-4 rounded-full text-sm font-bold transition-all duration-300 font-sans ${
                  mode === 'order'
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
                style={{
                  minWidth: '120px',
                }}
              >
                {mode === 'order' && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: '#002F3A',
                      boxShadow: '0 0 30px rgba(0, 47, 58, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
                    }}
                    transition={{ 
                      type: "spring", 
                      bounce: 0.2, 
                      duration: 0.6 
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Intent</span>
                  {mode === 'order' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xs"
                    >
                      ✨
                    </motion.span>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
