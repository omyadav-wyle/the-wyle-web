import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/f8de8f3738c5bcb97304e439ce6aaac268588795.png';
import imgImagePhotoroom31 from 'figma:asset/b71720d98208b4e5c7a3fb51e1fe19a867d4a4d1.png';
import imgImagePhotoroom331 from 'figma:asset/5bfaf652f06693a14ff0a9c0d49ea94baaff9784.png';
import imgImagePhotoroom34 from 'figma:asset/49fcb8454b67f191bf46472aabbffdb807b7a30f.png';
import imgImagePhotoroom35 from 'figma:asset/277c230f7e5017bbbad9cf38dfe00ac4f1e03c1d.png';
import imgPurpleFlow from 'figma:asset/ce5a05e25e4ed19cbb4fd661fce25c8291906644.png';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import '../index.css';
export function Services() {
  return (
    <div className="bg-black relative w-full min-h-screen overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Purple vapor behind service cards - top right (Wyle Bites area) */}
      <div className="absolute top-[500px] left-[-350px] w-[700px] h-[500px] opacity-50 pointer-events-none">
        <motion.img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover rotate-[-15deg] scale-150" 
          src={imgPurpleFlow}
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

      {/* Purple vapor behind service cards - bottom left (Wyle Groceries area) */}
      <div className="absolute top-[1000px] left-[-150px] w-[650px] h-[450px] opacity-45 pointer-events-none">
        <motion.img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover rotate-[-25deg] scale-150" 
          src={imgPurpleFlow}
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

      {/* Purple vapor behind service cards - bottom right (Wyle Groceries area) */}
      <div className="absolute top-[900px] right-[-100px] w-[700px] h-[500px] opacity-50 pointer-events-none">
        <motion.img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover rotate-[20deg] scale-150" 
          src={imgPurpleFlow}
          animate={{
            opacity: [0.2, 0.3, 0.5, 0.8, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.65, 0.8, 1],
            ease: [0.4, 0, 0.2, 1],
            delay: 0.6,
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] opacity-40 pointer-events-none">
        <motion.img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover rotate-[-20deg] scale-150" 
          src={imgImagePhotoroom31}
          animate={{
            opacity: [0.2, 0.3, 0.5, 0.9, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.65, 0.8, 1],
            ease: [0.4, 0, 0.2, 1],
            delay: 0.75,
          }}
        />
      </div>

      {/* Navigation */}
    <Navigation/>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-16 overflow-hidden">
        {/* Purple wave background - top right corner */}
        <div className="absolute top-[-30px] right-[0px] w-[600px] h-[340px] opacity-50 pointer-events-none">
          <motion.img 
            alt="" 
            className="absolute inset-0 w-full h-full object-contain rotate-[-30deg]" 
            src={imgImagePhotoroom31}
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

        {/* Second purple wave - continuation */}
        <div className="absolute top-[150px] right-[360px] w-[650px] h-[370px] opacity-50 pointer-events-none">
          <motion.img 
            alt="" 
            className="absolute inset-0 w-full h-full object-contain rotate-[-30deg]" 
            src={imgImagePhotoroom31}
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

        <div className="max-w-7xl mx-auto">
          <h1
            style={{
              fontSize: '56px',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.5px',
              lineHeight: '1.2',
              marginBottom: '16px',
            }}
          >
            Not Features but<br />Experiences
          </h1>

          <p
            style={{
              fontSize: '16px',
              color: '#999999',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.2px',
              lineHeight: '1.5',
            }}
          >
            Each one designed to disappear into your day.
          </p>
        </div>
      </section>

      {/* Wyle Bites Card */}
      <section className="relative py-8 px-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 flex items-center gap-0"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Left Column - Text */}
            <div className="flex-1 pr-12">
              <h2 
                style={{
                  fontSize: '48px',
                  color: '#F2E6F5',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                Wyle Bites
              </h2>
              
              <p 
                style={{
                  fontSize: '24px',
                  color: '#8F8C91',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  marginBottom: '40px',
                  letterSpacing: '0px',
                }}
              >
                Food, Without the Friction
              </p>

              <p 
                style={{
                  fontSize: '18px',
                  color: '#8F8C91',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginBottom: '80px',
                  letterSpacing: '0px',
                }}
              >
                Food becomes part of your flow,<br />
                not a task you manage. We give you your 30 mins back.
              </p>

              {/* Divider line */}
              <div className="relative" style={{ maxWidth: '380px' }}>
                <div 
                  style={{
                    width: '100%',
                    height: '4px',
                    background: '#686262',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '55%',
                    height: '4px',
                    background: 'white',
                  }}
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div 
              style={{
                width: '1px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.15)',
                margin: '0 40px',
              }}
            />

            {/* Right Column - Network graphic */}
            <div className="flex-shrink-0 relative" style={{ width: '300px', height: '300px' }}>
              {/* Network background */}
              <img 
                alt="" 
                className="absolute inset-0 w-full h-full object-contain" 
                src={imgImagePhotoroom331}
              />
              
              {/* Bowl icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  alt="" 
                  className="w-[180px] h-auto" 
                  src={imgImagePhotoroom34}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wyle Groceries Card */}
      <section className="relative py-8 px-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 flex items-center gap-0"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Left Column - Network graphic */}
            <div className="flex-shrink-0 relative" style={{ width: '300px', height: '300px' }}>
              {/* Network background */}
              <img 
                alt="" 
                className="absolute inset-0 w-full h-full object-contain" 
                src={imgImagePhotoroom331}
              />
              
              {/* Grocery bag icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  alt="" 
                  className="w-[160px] h-auto" 
                  src={imgImagePhotoroom35}
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div 
              style={{
                width: '1px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.15)',
                margin: '0 40px',
              }}
            />

            {/* Right Column - Text */}
            <div className="flex-1 pl-12">
              <h2 
                style={{
                  fontSize: '48px',
                  color: '#F2E6F5',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                Wyle Groceries
              </h2>
              
              <p 
                style={{
                  fontSize: '24px',
                  color: '#8F8C91',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  marginBottom: '40px',
                  letterSpacing: '0px',
                }}
              >
                Shopping That Thinks Ahead
              </p>

              <p 
                style={{
                  fontSize: '18px',
                  color: '#8F8C91',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginBottom: '80px',
                  letterSpacing: '0px',
                }}
              >
                WYLE Groceries knows what runs out<br />
                before you do.
              </p>

              {/* Divider line */}
              <div className="relative" style={{ maxWidth: '380px' }}>
                <div 
                  style={{
                    width: '100%',
                    height: '4px',
                    background: '#686262',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '55%',
                    height: '4px',
                    background: 'white',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This is WYLE Section */}
      <section className="relative py-24 px-16 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between">
            {/* Left - Text content */}
            <div className="flex-1 max-w-[700px]">
              <h2 
                style={{
                  fontSize: '36px',
                  color: '#F2E6F5',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  marginBottom: '24px',
                  letterSpacing: '-0.3px',
                }}
              >
                This is WYLE
              </h2>

              <p 
                style={{
                  fontSize: '22px',
                  color: '#EEE3F3',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginBottom: '40px',
                  letterSpacing: '0px',
                }}
              >
                We're not building apps; we're creating an intelligent layer for life that removes noise, reduces effort, and restores calm. WYLE isn't something you use — it's something you live with.
              </p>

              <a
                href="#learn-more"
                className="inline-block px-12 py-4 rounded-lg transition-opacity hover:opacity-80"
                style={{
                  background: 'linear-gradient(152.797deg, rgb(70, 42, 127) 20.086%, rgba(36, 27, 54, 0.6) 87.135%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(70, 42, 127, 0.5)',
                  boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.25)',
                  color: '#F5D6D6',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '22px',
                  fontWeight: 500,
                  letterSpacing: '0px',
                  textDecoration: 'none',
                }}
              >
                Learn More
              </a>
            </div>

            {/* Right - Purple flow graphic */}
            <div className="absolute -right-[400px] top-1/2 transform -translate-y-1/2 -rotate-[24deg] w-[1200px] h-[1100px] pointer-events-none">
              <motion.img 
                alt="" 
                className="w-full h-full object-contain opacity-70" 
                src={imgPurpleFlow}
                animate={{
                  opacity: [0.2, 0.3, 0.5, 0.8, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.25, 0.5, 0.65, 0.8, 1],
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}