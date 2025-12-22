import { motion, useScroll, useTransform } from 'motion/react';
import { AlertCircle, TrendingDown, DollarSign } from 'lucide-react';
import { useRef } from 'react';
import { describe } from 'node:test';
import '../index.css';
export function OtherApps() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Parallax transform for the dashboard
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const dashboardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  const problemPoints = [
    {
      // icon: AlertCircle,
      // title: 'Real-time data gaps',
      describe: '• Most apps only notice things after they’ve happened.',
    },
    {
      // icon: TrendingDown,
      // title: 'Zero intelligent insights',
      describe: '• They don’t learn your patterns. They don’t anticipate what’s next.',
    },
    {
      // icon: DollarSign,
      // title: 'Wasted time = wasted opportunities',
      describe: '• And they never show you where your time actually goes.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-16" style={{ background: '#000000', paddingTop: 'clamp(16px, 3vw, 128px)', paddingBottom: 'clamp(48px, 4vw, 128px)' }}>
      {/* paddingLeft: 'clamp(16px, 4vw, 64px)', paddingRight: 'clamp(16px, 4vw, 64px)' */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 5vw, 80px)' }}>
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            style={{
              fontSize: 'var(--font-size-heading-sm)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: '#FEFFFE',
              marginBottom: 'clamp(16px, 1.5vw, 24px)',
              lineHeight: '1.2',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Why Most Apps Are{' '}
            <span style={{ color: '#1B998B' }}>Stuck in the Past</span>
          </motion.h2>

          <div className="space-y-6 mb-8">
       {problemPoints.map((point) => (
    <motion.div
      key={point.describe} // use a unique key from the text itself
      className="flex"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span
        className="flex-shrink-0"
        style={{
          // display: 'inline-block',
          // width: '1.2em',
          // color: '#FEFFFE',
          // textAlign: 'right',
          // marginRight: '0.5em',
          fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
    color: '#FFFFFF',                            // accent color to stand out
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    // marginBottom: 'clamp(10px, 1vw, 16px)',
    // paddingLeft: 'clamp(16px, 4vw, 0px)',
    paddingRight: 'clamp(16px, 4vw, 0px)',
        }}
      >
        •
      </span>

      <div style={{ flex: 1 }}>
        <motion.h3
          style={{
            // fontSize: 'clamp(16px, 2vw, 20px)',
            // fontFamily: 'Poppins, sans-serif',
            // fontWeight: 600,
            // color: '#FEFFFE',
            // lineHeight: '1.6', // ensures multi-line spacing matches the bullet
            fontFamily:'var(--font-subtext)',
      fontWeight: 500,
    color: '#FFFFFF',                            // accent color to stand out
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    // marginBottom: 'clamp(10px, 1vw, 16px)',
    // paddingLeft: 'clamp(16px, 4vw, 0px)',
    // paddingRight: 'clamp(16px, 4vw, 0px)',
            
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {point.describe.replace(/^•\s*/, '')}
        </motion.h3>
      </div>
    </motion.div>
  ))}
          </div>

          <motion.p
            style={{
              fontSize: 'var(--font-size-subheading)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'rgba(254, 255, 254, 0.7)',
              lineHeight: '1.8',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your life ends up split across tools that were never meant to work together.
          </motion.p>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
          style={{ y: dashboardY, opacity: dashboardOpacity }}
        >
          {/* Futuristic Dashboard Mockup */}
          <div className="relative h-[400px] flex items-center justify-center" style={{ height: 'clamp(300px, 50vh, 400px)' }}>
            {/* Multiple floating notifications that merge into one */}
            {[
              { app: 'Slack', message: 'New message from team', time: '2m', color: '#1B998B', delay: 0, startX: -120, startY: -80 },
              { app: 'Gmail', message: 'Meeting scheduled for 3pm', time: '5m', color: '#1B998B', delay: 0.1, startX: 100, startY: -60 },
              { app: 'Instagram', message: 'johndoe liked your post', time: '8m', color: '#1B998B', delay: 0.2, startX: -80, startY: 60 },
              { app: 'Calendar', message: 'Event starts in 15 minutes', time: '12m', color: '#1B998B', delay: 0.3, startX: 110, startY: 80 },
              { app: 'LinkedIn', message: 'You appeared in 12 searches', time: '15m', color: '#1B998B', delay: 0.4, startX: 0, startY: -100 },
              { app: 'Notion', message: 'Task deadline approaching', time: '20m', color: '#1B998B', delay: 0.5, startX: -140, startY: 0 },
              { app: 'Spotify', message: 'New album from artist', time: '25m', color: '#1B998B', delay: 0.6, startX: 130, startY: 20 },
            ].map((notification, index) => (
              <motion.div
                key={index}
                className="absolute rounded-lg shadow-lg overflow-hidden"
                style={{
                  background: 'rgba(0, 47, 58, 0.9)',
                  border: '1px solid rgba(27, 153, 139, 0.3)',
                  minWidth: 'clamp(200px, 26vw, 260px)',
                  backdropFilter: 'blur(10px)',
                }}
                initial={{
                  x: notification.startX,
                  y: notification.startY,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: [notification.startX, notification.startX, 0, notification.startX],
                  y: [notification.startY, notification.startY, 0, notification.startY],
                  opacity: [0, 1, 1, 1, 0, 0],
                  scale: [0.8, 1, 1, 0.8, 0.3, 0.8],
                }}
                transition={{
                  duration: 5,
                  delay: notification.delay,
                  times: [0, 0.15, 0.5, 0.7, 0.85, 1],
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <div className="flex items-start gap-4 p-4">
                  {/* App Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: notification.color,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${notification.color}`,
                        `0 0 10px ${notification.color}50`,
                        `0 0 0px ${notification.color}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        color: '#000000',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {notification.app.substring(0, 2)}
                    </span>
                  </motion.div>

                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        style={{
                          fontSize: '12px',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          color: '#FEFFFE',
                          letterSpacing: '0.2px',
                        }}
                      >
                        {notification.app}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                          color: 'rgba(254, 255, 254, 0.4)',
                        }}
                      >
                        {notification.time}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                        color: 'rgba(254, 255, 254, 0.7)',
                        lineHeight: '1.4',
                        margin: 0,
                      }}
                    >
                      {notification.message}
                    </p>
                  </div>
                </div>

                {/* Accent line at bottom */}
                <div
                  className="h-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${notification.color} 0%, transparent 100%)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Unified notification that appears at the end */}
            <motion.div
              className="absolute rounded-xl shadow-2xl overflow-hidden"
              style={{
                background: 'rgba(0, 47, 58, 0.95)',
                border: '1.5px solid rgba(27, 153, 139, 0.5)',
                backdropFilter: 'blur(20px)',
                minWidth: 'clamp(260px, 34vw, 340px)',
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0, 0, 1, 1, 1, 0],
                scale: [0.5, 0.5, 0.5, 1, 1, 1, 0.5],
              }}
              transition={{
                duration: 5,
                delay: 2,
                times: [0, 0.4, 0.5, 0.6, 0.85, 0.95, 1],
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-20 h-20 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #1B998B 0%, #002F3A 100%)',
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 15px rgba(27, 153, 139, 0.4)',
                          '0 0 25px rgba(27, 153, 139, 0.6)',
                          '0 0 15px rgba(27, 153, 139, 0.4)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '16px',
                          fontFamily: 'Poppins, sans-serif',
                    // fontWeight: 400,
                          fontWeight: 700,
                          color: '#FEFFFE',
                          letterSpacing: '-1px',
                        }}
                      >
                        W
                      </span>
                    </motion.div>
                    <div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 500,
                          color: '#FEFFFE',
                          marginBottom: '2px',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        wyle
                      </div>
                      <div
                        style={{
                          fontSize: '10px',
                          fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                          color: 'rgba(254, 255, 254, 0.5)',
                        }}
                      >
                        now
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="px-4 py-2 rounded-full"
                    style={{
                      background: '#1B998B',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#000000',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    all unified
                  </motion.div>
                </div>

                <p
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    color: 'rgba(254, 255, 254, 0.8)',
                    lineHeight: '1.5',
                    margin: 0,
                    marginBottom: '12px',
                  }}
                >
                  Life is one flow. Your apps broke it into pieces.
                </p>

                <motion.div
                  className="h-1 rounded-full"
                  style={{
                    background: 'rgba(27, 153, 139, 0.2)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #1B998B 0%, #D5FF3F 100%)',
                    }}
                    animate={{
                      width: ['0%', '0%', '0%', '100%', '100%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      delay: 2,
                      times: [0, 0.4, 0.55, 0.7, 0.85, 0.95, 1],
                      ease: 'easeOut',
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </motion.div>
              </div>

              {/* Accent line at bottom */}
              <div
                className="h-1"
                style={{
                  background: 'linear-gradient(90deg, #1B998B 0%, #D5FF3F 100%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}