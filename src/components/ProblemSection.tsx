import { motion, useScroll, useTransform } from 'motion/react';
import { AlertCircle, TrendingDown, DollarSign } from 'lucide-react';
import { useRef } from 'react';
import '../index.css';
export function ProblemSection() {
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
      icon: AlertCircle,
      title: 'Real-time data gaps',
      description: 'Traditional apps don\'t provide instant insights into what\'s happening in your daily life.',
    },
    {
      icon: TrendingDown,
      title: 'Zero intelligent insights',
      description: 'No understanding of your patterns, preferences, or needs.',
    },
    {
      icon: DollarSign,
      title: 'Wasted time = wasted opportunities',
      description: 'Traditional apps don\'t help you understand WHERE your time and energy is actually being consumed.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-16" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            style={{
              fontSize: '48px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: '#FFFFFF',
              marginBottom: '24px',
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
            {problemPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
              >
                <motion.div
                  style={{ marginTop: '4px', flexShrink: 0 }}
                  whileInView={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15 + 0.3,
                    ease: 'easeInOut'
                  }}
                >
                  <point.icon size={24} color="#1B998B" />
                </motion.div>
                <div>
                  <motion.h3
                    style={{
                      fontSize: '20px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {point.title}
                  </motion.h3>
                  <motion.p
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
                      color: '#C5C6C7',
                      lineHeight: '1.6',
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {point.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            style={{
              fontSize: '18px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              color: '#C5C6C7',
              lineHeight: '1.8',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Most apps are disconnected silos. They don't learn from you, adapt to your lifestyle, or connect the dots between different aspects of your life.
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
          <motion.div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(192, 132, 252, 0.05)',
              border: '1px solid rgba(192, 132, 252, 0.2)',
              boxShadow: '0 0 40px rgba(192, 132, 252, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            whileInView={{
              boxShadow: [
                '0 0 40px rgba(27, 153, 139, 0.1)',
                '0 0 60px rgba(27, 153, 139, 0.2)',
                '0 0 40px rgba(27, 153, 139, 0.1)',
              ],
            }}
            viewport={{ once: true }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Futuristic Dashboard Mockup */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-lg p-4"
                    style={{
                      background: 'rgba(192, 132, 252, 0.1)',
                      border: '1px solid rgba(192, 132, 252, 0.3)',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <motion.div
                      className="h-3 rounded mb-2"
                      style={{ background: 'rgba(27, 153, 139, 0.3)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 1 ? '60%' : '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    />
                    <motion.div
                      className="h-2 rounded"
                      style={{ background: 'rgba(27, 153, 139, 0.2)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 1 ? '40%' : '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="rounded-lg p-6"
                style={{
                  background: 'rgba(192, 132, 252, 0.08)',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    >
                    <motion.div
                      className="h-8 rounded mb-2"
                      style={{ 
                        background: 'rgba(27, 153, 139, 0.2)',
                        transformOrigin: 'bottom'
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                    />
                      <motion.div
                        className="h-2 rounded"
                        style={{ background: 'rgba(192, 132, 252, 0.15)', width: '80%', margin: '0 auto' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.1, ease: 'easeOut' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Animated Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px rgba(27, 153, 139, 0.1)',
              }}
              animate={{
                boxShadow: [
                  'inset 0 0 60px rgba(27, 153, 139, 0.1)',
                  'inset 0 0 80px rgba(27, 153, 139, 0.15)',
                  'inset 0 0 60px rgba(27, 153, 139, 0.1)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
