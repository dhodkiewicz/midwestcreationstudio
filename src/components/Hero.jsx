import React from 'react';

const Hero = () => {
    return (
        <section className="hero section text-center">
            <div className="container">
                <div className="hero-content">
                    <div className="logo-container">
                        <img src="/assets/mcs-logo-neon.jpg" alt="Midwest Creation Studio Neon Logo" className="hero-logo" />
                    </div>
                    <h1 className="hero-title">Midwest Creation Studio</h1>
                    <p className="hero-subtitle">Clean. Simple. Elegant. <span className="highlight">EPIC.</span></p>
                    <div className="hero-actions">
                        <a href="#games" className="btn btn-primary">Our Games</a>
                        <a href="#about" className="btn btn-outline">About Us</a>
                    </div>
                </div>
            </div>
            <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
        }
        .hero-logo {
          max-width: 300px;
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
          margin-bottom: var(--spacing-md);
          transition: transform var(--transition-normal);
        }
        .hero-logo:hover {
          transform: scale(1.05) rotate(2deg);
        }
        .hero-title {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-xs);
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
        }
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-md);
          opacity: 0.9;
        }
        .highlight {
          color: var(--color-accent);
          font-weight: 700;
          text-shadow: 0 0 10px var(--color-accent);
        }
        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          justify-content: center;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
