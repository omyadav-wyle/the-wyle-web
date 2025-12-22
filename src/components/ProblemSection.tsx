import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, DollarSign } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="relative py-32 px-16" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Why Most Apps Are{' '}
            <span style={{ color: '#6ED8FF' }}>Stuck in the Past</span>
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle size={24} color="#6ED8FF" style={{ marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  Real-time data gaps
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    lineHeight: '1.6',
                  }}
                >
                  Traditional apps don't provide instant insights into what's happening in your daily life.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingDown size={24} color="#6ED8FF" style={{ marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  Zero intelligent insights
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    lineHeight: '1.6',
                  }}
                >
                  No understanding of your patterns, preferences, or needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <DollarSign size={24} color="#6ED8FF" style={{ marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  Wasted time = wasted opportunities
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#C5C6C7',
                    lineHeight: '1.6',
                  }}
                >
                  Traditional apps don't help you understand WHERE your time and energy is actually being consumed.
                </p>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '18px',
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#C5C6C7',
              lineHeight: '1.8',
            }}
          >
            Most apps are disconnected silos. They don't learn from you, adapt to your lifestyle, or connect the dots between different aspects of your life.
          </p>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(110, 216, 255, 0.05)',
              border: '1px solid rgba(110, 216, 255, 0.2)',
              boxShadow: '0 0 40px rgba(110, 216, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Futuristic Dashboard Mockup */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div
                  className="flex-1 rounded-lg p-4"
                  style={{
                    background: 'rgba(110, 216, 255, 0.1)',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                  }}
                >
                  <div className="h-3 rounded mb-2" style={{ background: 'rgba(110, 216, 255, 0.3)', width: '60%' }} />
                  <div className="h-2 rounded" style={{ background: 'rgba(110, 216, 255, 0.2)', width: '40%' }} />
                </div>
                <div
                  className="flex-1 rounded-lg p-4"
                  style={{
                    background: 'rgba(110, 216, 255, 0.1)',
                    border: '1px solid rgba(110, 216, 255, 0.3)',
                  }}
                >
                  <div className="h-3 rounded mb-2" style={{ background: 'rgba(110, 216, 255, 0.3)', width: '70%' }} />
                  <div className="h-2 rounded" style={{ background: 'rgba(110, 216, 255, 0.2)', width: '50%' }} />
                </div>
              </div>
              <div
                className="rounded-lg p-6"
                style={{
                  background: 'rgba(110, 216, 255, 0.08)',
                  border: '1px solid rgba(110, 216, 255, 0.2)',
                }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="h-8 rounded mb-2" style={{ background: 'rgba(110, 216, 255, 0.2)' }} />
                      <div className="h-2 rounded" style={{ background: 'rgba(110, 216, 255, 0.15)', width: '80%', margin: '0 auto' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glowing effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px rgba(110, 216, 255, 0.1)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

