import waveImage from 'figma:asset/4b142bdeae94edb71a92fe97b1589a556638ab15.png';
import { motion } from 'framer-motion';

export function GradientWave() {
  return (
    <section className="relative" style={{ height: '600px', background: '#000000', overflow: 'hidden' }}>
      {/* Wavy gradient with blur */}
      <motion.img
        src={waveImage}
        alt="Gradient wave"
        className="absolute w-full"
        style={{
          opacity: 0.8,
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          height: 'auto',
        }}
        animate={{
          WebkitMaskImage: [
            'linear-gradient(90deg, transparent 0%, black 5%, black 15%, transparent 20%)',
            'linear-gradient(90deg, transparent 40%, black 45%, black 55%, transparent 60%)',
            'linear-gradient(90deg, transparent 80%, black 85%, black 95%, transparent 100%)',
            'linear-gradient(90deg, transparent 40%, black 45%, black 55%, transparent 60%)',
            'linear-gradient(90deg, transparent 0%, black 5%, black 15%, transparent 20%)',
          ],
          maskImage: [
            'linear-gradient(90deg, transparent 0%, black 5%, black 15%, transparent 20%)',
            'linear-gradient(90deg, transparent 40%, black 45%, black 55%, transparent 60%)',
            'linear-gradient(90deg, transparent 80%, black 85%, black 95%, transparent 100%)',
            'linear-gradient(90deg, transparent 40%, black 45%, black 55%, transparent 60%)',
            'linear-gradient(90deg, transparent 0%, black 5%, black 15%, transparent 20%)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}