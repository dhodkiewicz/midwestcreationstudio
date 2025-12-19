import React from 'react';
import { Link } from 'react-router-dom';

const DashPulse = () => {
    return (
        <div className="dash-pulse-page">
            <section className="hero-section">
                <div className="container text-center">
                    <div className="logo-placeholder">
                        <img src="/assets/dash_pulse.png" alt="Dash Pulse Logo" className="game-logo" />
                    </div>
                    <h1 className="game-title">Dash <span className="highlight">Pulse</span></h1>
                    <p className="tagline">Neon-soaked rhythm survival.</p>
                    <p className="hero-description">
                        Dash Pulse is a high-octane arcade survival game blending precision physics, rhythm-reactive visuals, and intense color-matching gameplay. Every run is fast, chaotic, and unforgiving — built for players who crave flow and mastery.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary" disabled>Download Dash Pulse (iOS) (Coming Soon)</button>
                    </div>
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title text-center">Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>⚡ Fast, high-intensity arcade survival</h3>
                            <p>Tight gravity physics designed for short, adrenaline-charged runs.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎵 Audio-reactive visuals & haptics</h3>
                            <p>The world pulses in sync with music and player momentum.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎨 Color-matching smash mechanics</h3>
                            <p>Match your polarity to glowing obelisks to break through obstacles.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🌀 Rift Mode procedural chaos</h3>
                            <p>Distorted dimensions with accelerated spawns and unpredictable geometry.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🏆 Global leaderboards via Game Center</h3>
                            <p>Compete for high scores against players worldwide.</p>
                        </div>
                        <div className="feature-card">
                            <h3>📱 Offline-first gameplay</h3>
                            <p>No connection required to play.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section origin-story-section">
                <div className="container">
                    <div className="story-content">
                        <h2 className="section-title">THE PULSE</h2>
                        <p>Dash Pulse is about control inside chaos.</p>
                        <p>Survive long enough to build energy, unleash Sonic Dash, and tear through impossible patterns. Every session is different. Every mistake is final. The longer you stay alive, the harder the world fights back.</p>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2 className="section-title">Ready to Dash?</h2>
                    <button className="btn btn-primary btn-large" disabled>Download Dash Pulse (iOS)</button>
                </div>
            </section>

            <section className="section links-section">
                <div className="container text-center">
                    <div className="legal-links">
                        <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                        <span className="separator">•</span>
                        <Link to="/age-suitability" className="legal-link">Age Suitability</Link>
                    </div>
                </div>
            </section>

            <style>{`
        .dash-pulse-page {
            padding-top: var(--spacing-lg);
        }
        .hero-section {
            padding: var(--spacing-xl) 0;
            background: radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%);
        }
        .game-logo {
            width: 150px;
            height: 150px;
            border-radius: 30px;
            box-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
            margin-bottom: var(--spacing-md);
        }
        .game-title {
            font-size: 3rem;
            margin-bottom: var(--spacing-sm);
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .highlight {
            color: var(--color-accent);
            text-shadow: 0 0 10px var(--color-accent);
        }
        .tagline {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: var(--spacing-md);
            color: var(--color-secondary);
        }
        .hero-description {
            max-width: 700px;
            margin: 0 auto var(--spacing-lg);
            font-size: 1.1rem;
            line-height: 1.6;
            opacity: 0.8;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing-md);
        }
        .feature-card {
            background: rgba(255, 255, 255, 0.05);
            padding: var(--spacing-md);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: transform var(--transition-fast);
        }
        .feature-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--color-primary);
        }
        .feature-card h3 {
            font-size: 1.2rem;
            margin-bottom: var(--spacing-xs);
            color: var(--color-primary);
        }
        .feature-card p {
            font-size: 1rem;
            opacity: 0.8;
        }
        .origin-story-section {
            background: rgba(0, 0, 0, 0.3);
            padding: var(--spacing-xl) 0;
        }
        .story-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.6;
        }
        .cta-section {
            padding: var(--spacing-xl) 0;
        }
        .btn-large {
            font-size: 1.2rem;
            padding: 1rem 2rem;
        }
        .links-section {
            padding: var(--spacing-lg) 0;
            border-top: 1px solid var(--color-border);
        }
        .legal-links {
            display: flex;
            justify-content: center;
            gap: var(--spacing-md);
            font-size: 0.9rem;
        }
        .legal-link {
            color: var(--color-text);
            opacity: 0.7;
            text-decoration: none;
            transition: opacity var(--transition-fast);
        }
        .legal-link:hover {
            opacity: 1;
            text-decoration: underline;
        }
        .separator {
            opacity: 0.3;
        }
      `}</style>
        </div>
    );
};

export default DashPulse;
