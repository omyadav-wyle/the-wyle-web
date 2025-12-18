import { motion } from 'motion/react';
import orbitImage from 'figma:asset/0f054b0bf7024d7a9a89c18133c81d3ff12f4ecc.png';

export function CloneWithConscience() {
  return (
    <section className="relative px-16" style={{ background: '#000000', paddingTop: '4rem', paddingBottom: '8rem' }}>
      {/* Heading */}
      <motion.h2
        className="text-center mb-6"
        style={{
          fontSize: '48px',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '1px',
          color: '#FFFFFF',
          marginTop: '0px',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Clone with <span style={{ color: '#C7A2FF' }}>Conscience</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-center max-w-2xl mx-auto"
        style={{
          fontSize: '16px',
          color: '#C5C6C7',
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: '1.6',
          marginBottom: '-150px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        It's not the food delivery, rides or groceries app. But it's something that quickly connects all of these things in the background.
      </motion.p>

      {/* Central Orbital System and Cards Container */}
      <div className="relative" style={{ height: '1000px' }}>
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '0' }}>
          {/* Central Orbital System */}
          <motion.div
            className="relative"
            style={{ width: '1000px', height: '1000px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
            
            {/* Orbital System Image */}
            <img
              src={orbitImage}
              alt="Orbital system"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                filter: 'brightness(1.3) contrast(1.1)',
              }}
            />
            
            {/* Additional center glow */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(199, 162, 255, 0.2) 0%, transparent 30%)',
                filter: 'blur(15px)',
              }}
            />

            {/* Particles around the circle */}
            {[...Array(120)].map((_, i) => {
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
            {[...Array(150)].map((_, i) => {
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
            {[...Array(180)].map((_, i) => {
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

            {/* Notification Boxes at Branch Tips */}
            {[
              // Top row
              { angle: 125, title: 'Tasks', subtitle: 'Completed today', distance: 460, offsetX: -190, offsetY: -270 },
              { angle: 55, title: 'Time', subtitle: 'Total time saved!', distance: 460, offsetX: 20, offsetY: -270 },
              
              // Middle row
              { angle: 175, title: 'Health', subtitle: 'Wellness tracked', distance: 460, offsetX: 30, offsetY: -70 },
              { angle: 5, title: 'Deliveries', subtitle: 'On the way', distance: 460, offsetX: -145, offsetY: -70 },
              
              // Bottom row
              { angle: 200, title: 'Money', subtitle: 'Total saved!', distance: 460, offsetY: -10 },
              { angle: 330, title: 'Rides', subtitle: 'Miles traveled', distance: 460, offsetX: -110, offsetY: 55 },
            ].map((item, i) => {
              const radian = (item.angle * Math.PI) / 180;
              const x = Math.cos(radian) * item.distance;
              const y = Math.sin(radian) * item.distance;
              
              return (
                <motion.div
                  key={`branch-box-${i}`}
                  className="absolute rounded-xl"
                  style={{
                    left: `calc(50% + ${x + (item.offsetX || 0)}px)`,
                    top: `calc(50% + ${y + (item.offsetY || 0)}px)`,
                    transform: 'translate(-50%, -50%)',
                    width: item.title === 'Tasks' || item.title === 'Time' ? '145px' : item.title === 'Health' ? '140px' : '120px',
                    background: 'rgba(25, 28, 38, 0.98)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '16px 18px',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    zIndex: 9999,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  <h3 
                    style={{
                      fontSize: '15px',
                      color: '#FFFFFF',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      marginBottom: '6px',
                      letterSpacing: '0.1px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '12px',
                      color: '#8B92A8',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      lineHeight: '1.4',
                      margin: 0,
                    }}
                  >
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}