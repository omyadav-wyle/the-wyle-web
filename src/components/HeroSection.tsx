import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import marbleTexture from 'figma:asset/2d00f865631069f9d70237e84f9f12413b9b737c.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import { Navigation } from './Navigation';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    const startTime = Date.now();
    const cycleDuration = 12000; // Total cycle duration: 12 seconds
    const disconnectedDuration = 3000; // Disconnected phase: 3 seconds
    const connectingDuration = 2000; // Connecting phase: 2 seconds
    const connectedDuration = 4000; // Connected phase: 4 seconds
    const disconnectingDuration = 2000; // Disconnecting phase: 2 seconds
    // Delay between cycles is built into the cycle duration

    // Node structure for the flow network
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      connections: number[];
      connectionProgress: number;
    }

    let nodes: Node[] = [];

    function initializeNodes() {
      if (!canvas) return;
      nodes = [];
      const nodeCount = 30;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const textAreaRadius = 250; // Keep nodes away from center text area
      
      for (let i = 0; i < nodeCount; i++) {
        let x, y;
        let attempts = 0;
        
        // Distribute nodes across the canvas, avoiding center text area
        do {
          // Spread nodes more evenly across the entire canvas
          const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
          
          switch (side) {
            case 0: // Top area
              x = Math.random() * canvas.width;
              y = Math.random() * (canvas.height * 0.3);
              break;
            case 1: // Right area
              x = canvas.width * 0.7 + Math.random() * (canvas.width * 0.3);
              y = Math.random() * canvas.height;
              break;
            case 2: // Bottom area
              x = Math.random() * canvas.width;
              y = canvas.height * 0.7 + Math.random() * (canvas.height * 0.3);
              break;
            case 3: // Left area
              x = Math.random() * (canvas.width * 0.3);
              y = Math.random() * canvas.height;
              break;
            default:
              x = Math.random() * canvas.width;
              y = Math.random() * canvas.height;
          }
          
          // Check if position is too close to center (text area)
          attempts++;
        } while (attempts < 50 && Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) < textAreaRadius);
        
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.4 + 0.3,
          connections: [],
          connectionProgress: 0
        });
      }

      // Create connection network (only used after connection phase)
      const maxConnectionDistance = 300; // Limit connection distance to avoid long lines
      nodes.forEach((node) => {
        node.connections = [];
        // Connect to 2-4 nearest neighbors within reasonable distance
        const connections = 2 + Math.floor(Math.random() * 3);
        const distances = nodes.map((otherNode, idx) => ({
          idx,
          dist: Math.sqrt(Math.pow(otherNode.x - node.x, 2) + Math.pow(otherNode.y - node.y, 2))
        }))
        .filter(d => d.dist < maxConnectionDistance && d.dist > 0); // Filter by distance
        
        distances.sort((a, b) => a.dist - b.dist);
        
        for (let j = 0; j < connections && j < distances.length; j++) {
          node.connections.push(distances[j].idx);
        }
      });
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize nodes on resize
      initializeNodes();
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const time = elapsed * 0.001;

      // Calculate cycle position (looping)
      const cyclePosition = (elapsed % cycleDuration) / 1000;
      
      // Determine current phase
      let phase: 'disconnected' | 'connecting' | 'connected' | 'disconnecting' | 'delay';
      let connectionProgress = 0;
      
      if (cyclePosition < disconnectedDuration / 1000) {
        phase = 'disconnected';
        connectionProgress = 0;
      } else if (cyclePosition < (disconnectedDuration + connectingDuration) / 1000) {
        phase = 'connecting';
        connectionProgress = (cyclePosition - disconnectedDuration / 1000) / (connectingDuration / 1000);
      } else if (cyclePosition < (disconnectedDuration + connectingDuration + connectedDuration) / 1000) {
        phase = 'connected';
        connectionProgress = 1;
      } else if (cyclePosition < (disconnectedDuration + connectingDuration + connectedDuration + disconnectingDuration) / 1000) {
        phase = 'disconnecting';
        const disconnectingStart = (disconnectedDuration + connectingDuration + connectedDuration) / 1000;
        connectionProgress = 1 - ((cyclePosition - disconnectingStart) / (disconnectingDuration / 1000));
      } else {
        phase = 'delay';
        connectionProgress = 0;
      }
      
      const isDisconnecting = phase === 'disconnecting';
      const isDisconnected = phase === 'disconnected' || phase === 'delay';

      // Update node positions (only when disconnected or disconnecting)
      if (isDisconnected || isDisconnecting) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const textAreaRadius = 250;
        
        nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          
          // Push away from center text area
          const distFromCenter = Math.sqrt(Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2));
          if (distFromCenter < textAreaRadius) {
            const angle = Math.atan2(node.y - centerY, node.x - centerX);
            const pushForce = (textAreaRadius - distFromCenter) / textAreaRadius * 2;
            node.vx += Math.cos(angle) * pushForce;
            node.vy += Math.sin(angle) * pushForce;
          }
          
          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
          
          // Keep in bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));
          
          // Limit velocity
          const maxVel = 0.5;
          node.vx = Math.max(-maxVel, Math.min(maxVel, node.vx));
          node.vy = Math.max(-maxVel, Math.min(maxVel, node.vy));
        });
      }

      // Draw connections with flowing waves (only when connecting or connected)
      if (connectionProgress > 0) {
        nodes.forEach((node) => {
          node.connections.forEach(connectedIdx => {
            const connectedNode = nodes[connectedIdx];
            if (!connectedNode) return;

            const dx = connectedNode.x - node.x;
            const dy = connectedNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            // Only draw if connection is progressing
            const connectionAlpha = Math.min(connectionProgress, 1);
            if (connectionAlpha < 0.01) return;

            // Create flowing wave along the connection
            ctx.beginPath();
            const segments = Math.floor(distance / 5);
            const waveAmplitude = 8 * connectionAlpha;
            const waveSpeed = time * 0.5;
            
            for (let s = 0; s <= segments; s++) {
              const t = s / segments;
              const progress = t * connectionProgress; // Connection animation
              const x = node.x + dx * progress;
              const y = node.y + dy * progress;
              
              // Add wave effect perpendicular to the line
              const perpAngle = angle + Math.PI / 2;
              const waveOffset = Math.sin(t * Math.PI * 4 - waveSpeed) * waveAmplitude * (1 - Math.abs(t - 0.5) * 2);
              
              const finalX = x + Math.cos(perpAngle) * waveOffset;
              const finalY = y + Math.sin(perpAngle) * waveOffset;
              
              if (s === 0) {
                ctx.moveTo(finalX, finalY);
              } else {
                ctx.lineTo(finalX, finalY);
              }
            }

            // Create gradient along the connection with reduced opacity
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
            gradient.addColorStop(0, `rgba(192, 132, 252, ${0.12 * connectionAlpha})`);
            gradient.addColorStop(0.5, `rgba(0, 212, 255, ${0.15 * connectionAlpha})`);
            gradient.addColorStop(1, `rgba(157, 78, 221, ${0.12 * connectionAlpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Add subtle glow effect
            ctx.shadowBlur = 6;
            ctx.shadowColor = `rgba(192, 132, 252, ${0.15 * connectionAlpha})`;
            ctx.stroke();
            ctx.shadowBlur = 0;
          });
        });
      }

      // Draw nodes (dots) with reduced opacity
      nodes.forEach((node) => {
        // Node grows slightly when connecting
        const nodeSize = node.size * (1 + connectionProgress * 0.2);
        const nodeOpacity = node.opacity * 0.2 * (0.5 + connectionProgress * 0.3);

        // Draw glow with reduced opacity
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 3);
        gradient.addColorStop(0, `rgba(192, 132, 252, ${nodeOpacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(0, 212, 255, ${nodeOpacity * 0.25})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw node
        ctx.fillStyle = `rgba(192, 132, 252, ${nodeOpacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle inner highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity * 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x - nodeSize * 0.3, node.y - nodeSize * 0.3, nodeSize * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
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

      {/* Wave Flow Canvas - Behind Text */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
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
            fontFamily: 'Georgia, serif',  // Changed from Quattrocento
            letterSpacing: '2px',           // Reduced from 3.5px
            fontSize: '18px',               // Increased from 16px
            lineHeight: '1.6',              // Better readability
            fontWeight: '400',              // Add weight control
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
