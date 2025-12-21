import mapImage from 'figma:asset/08a5d57fa2f996c773f2e4076fa36024a0b87ad6.png';

export function MapSection() {
  return (
    <section className="relative" style={{ background: '#000000' }}>
      <div className="relative" style={{ height: '500px', overflow: 'hidden' }}>
        {/* Map Image */}
        <a
          href="https://maps.app.goo.gl/cyX8V3suKxunWiH17"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full block transition-opacity hover:opacity-90"
          style={{ cursor: 'pointer' }}
          aria-label="Open location in Google Maps"
        >
          <img
            src={mapImage}
            alt="World map"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
            }}
          />
        </a>
        
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '100px',
            background: 'linear-gradient(to bottom, #000000, transparent)',
          }}
        />
        
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '100px',
            background: 'linear-gradient(to top, #000000, transparent)',
          }}
        />
      </div>
    </section>
  );
}