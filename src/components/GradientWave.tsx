import waveImage from 'figma:asset/4b142bdeae94edb71a92fe97b1589a556638ab15.png';
import '../index.css';
export function GradientWave() {
  return (
    <section className="relative" style={{ height: '600px', background: '#000000', overflow: 'hidden' }}>
      {/* Wavy gradient */}
      <img
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
      />
    </section>
  );
}