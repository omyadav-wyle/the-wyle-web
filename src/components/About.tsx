import { motion } from 'motion/react';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import arcImage from 'figma:asset/76dc61042518dfc0d7cf9464d788e73f27058498.png';
import Lottie from 'lottie-react';
import backgroundLinesWave from '../assets/background lines wave.json';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export function About() {
  const teamMembers = [
    {
      name: 'Aravindh Sreekanthan',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: 'https://www.linkedin.com/in/aravindh-sreekanthan'
    },
    {
      name: 'Amrutha Veluthakal',
      role: 'CPO & Chief of Staff',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: 'https://www.linkedin.com/in/amrutha-veluthakal'
    },
    {
      name: 'Azmat Ali',
      role: 'VP of Marketing & Innovation',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: 'https://www.linkedin.com/in/azmatali/'
    }
  ];

  const philosophyCards = [
    {
      title: 'Life comes first. Always.',
      description: 'If something doesn\'t make life feel better, calmer, or more human, it doesn\'t belong here.',
      icon: (
        <div className="relative w-20 h-20">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
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
      )
    },
    {
      title: 'The best systems disappear.',
      description: 'Calm isn\'t added. It\'s what remains when unnecessary effort is removed.',
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
      )
    },
    {
      title: 'We think long, even when it\'s inconvenient.',
      description: 'What lasts is built slowly, with responsibility for what comes next.',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Lines Wave Animation - Full Hero Section - Horizontal Flow */}
        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 0,
            opacity: 0.5,
            filter: 'hue-rotate(160deg) saturate(1.5) brightness(0.9) contrast(1.2)',
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
            animationData={backgroundLinesWave}
            loop={true}
            autoplay={true}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-16 text-center">
          <motion.h1
            className="mb-4"
            style={{
              fontSize: '64px',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 500,
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
              fontSize: '18px',
              color: '#A0A0A0',
              fontFamily: 'Fredoka, system-ui, sans-serif',
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
      <section className="relative py-24 overflow-visible">
        <div className="max-w-7xl mx-auto px-16">
          <motion.h2
            className="text-center mb-16"
            style={{
              fontSize: '42px',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Won't Compromise On
          </motion.h2>

          {/* Cards - Horizontal Layout */}
          <div className="flex flex-col md:flex-row gap-8 mt-16 justify-center items-stretch" style={{ maxWidth: '1200px', margin: '4rem auto 0' }}>
            {philosophyCards.map((card, index) => (
                  <motion.div
                    key={index}
                className="flex-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                    whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                    }}
                  >
                    <div
                  className="p-8 h-full flex flex-col"
                      style={{
                    minHeight: '320px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
                        backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '28px',
                    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Icon - Centered at top */}
                  <div className="flex items-center justify-center mb-6" style={{ minHeight: '100px' }}>
                        {card.icon}
                      </div>

                  {/* Text - Below icon */}
                  <div className="flex-1 flex flex-col justify-center text-center">
                        <h3 
                      className="mb-4"
                          style={{
                        fontSize: '24px',
                            color: '#FFFFFF',
                        fontFamily: 'Fredoka, system-ui, sans-serif',
                        fontWeight: 500,
                            lineHeight: '1.3',
                        letterSpacing: '0.3px',
                          }}
                        >
                          {card.title}
                        </h3>

                        <p 
                          style={{
                        fontSize: '16px',
                        color: '#B0B0B0',
                        fontFamily: 'Fredoka, system-ui, sans-serif',
                        fontWeight: 400,
                        lineHeight: '1.7',
                        letterSpacing: '0.2px',
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
          <svg 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-12"
            width="400" 
            height="100" 
            viewBox="0 0 400 100"
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002F3A" stopOpacity="0" />
                <stop offset="50%" stopColor="#1B998B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#002F3A" stopOpacity="0" />
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
              fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.5px',
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
              fontSize: '28px',
              color: '#1B998B',
              fontFamily: 'Fredoka, system-ui, sans-serif',
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
              fontSize: '18px',
              color: '#FFFFFF',
              fontFamily: 'Fredoka, system-ui, sans-serif',
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
      <section className="relative py-24 pb-32 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-16 relative z-10">
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
                fontFamily: 'Fredoka, system-ui, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              The Stewards
            </h2>
            <p 
              style={{
                fontSize: '16px',
                color: '#A0A0A0',
                fontFamily: 'Fredoka, system-ui, sans-serif',
              fontWeight: 400,
                letterSpacing: '0.5px',
              }}
            >
              A small group, building with patience and care.
            </p>
          </motion.div>

          <div className="flex flex-row justify-center items-start gap-8 mt-16" style={{ flexWrap: 'nowrap', maxWidth: '1200px', margin: '4rem auto 0' }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                  flex: '1',
                  minWidth: '250px',
                  maxWidth: '300px',
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
                <div className="relative mb-4 mx-auto" style={{ width: '140px', height: '140px' }}>
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(27, 153, 139, 0.3) 0%, transparent 70%)',
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
                    fontFamily: 'Fredoka, system-ui, sans-serif',
                    fontWeight: 500,
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>

                <p 
                  style={{
                    fontSize: '13px',
                    color: '#808080',
                    fontFamily: 'Fredoka, system-ui, sans-serif',
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