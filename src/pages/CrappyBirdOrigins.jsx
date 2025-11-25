import React from 'react';
import { Link } from 'react-router-dom';

const CrappyBirdOrigins = () => {
    return (
        <div className="crappy-bird-page">
            <section className="hero-section">
                <div className="container text-center">
                    <div className="logo-placeholder">
                        <img src="/assets/crappy-bird-icon.jpg" alt="Crappy Bird: Origins Logo" className="game-logo" />
                    </div>
                    <h1 className="game-title">Crappy Bird: <span className="highlight">Origins</span></h1>
                    <p className="tagline">Clean. Simple. Stupidly Addictive.</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary" disabled>Download Now (Coming Soon)</button>
                    </div>
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title text-center">Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">⚡ Fast, fun, one-tap gameplay</div>
                        <div className="feature-card">🌀 Crazy obstacles that change every run</div>
                        <div className="feature-card">👾 Retro pixel-art inspired by arcade classics</div>
                        <div className="feature-card">🏆 Global high scores & competitive leaderboards</div>
                        <div className="feature-card">🎨 Unlockable themes, challenges & extra chaos</div>
                        <div className="feature-card">🕹️ Smooth physics, tight controls & satisfying “near misses”</div>
                        <div className="feature-card">📶 No WiFi? No problem — play offline anytime</div>
                        <div className="feature-card">💎 Optional revives + remove ads upgrade</div>
                    </div>
                </div>
            </section>

            <section className="section origin-story-section">
                <div className="container">
                    <div className="story-content">
                        <h2 className="section-title">The Origin Story</h2>
                        <p>Crappy Bird has one job: <strong>stay alive.</strong></p>
                        <p>But between alien invasions, dimension portals, and gravity acting like it’s drunk… he’s gonna need your help. Every run is different, and every tap could be “the one.”</p>
                    </div>
                </div>
            </section>

            <section className="section why-love-section">
                <div className="container text-center">
                    <h2 className="section-title">Why You'll Love It</h2>
                    <p className="love-text">Quick runs. Easy to learn. Stupidly addictive.</p>
                    <p className="love-text">Perfect for breaks, boredom, late nights, and proving to your friends you’re better than them.</p>
                    <p className="final-cta">Got what it takes to keep this panicked pixel pigeon alive?</p>
                    <button className="btn btn-primary btn-large" disabled>Download Crappy Bird: Origins</button>
                </div>
            </section>

            <section className="section links-section">
                <div className="container text-center">
                    <div className="legal-links">
                        <Link to="/crappy-bird-privacy" className="legal-link">Privacy Policy</Link>
                        <span className="separator">•</span>
                        <Link to="/crappy-bird-age-suitability" className="legal-link">Age Suitability</Link>
                    </div>
                </div>
            </section>

            <style>{`
        .crappy-bird-page {
            padding-top: var(--spacing-lg);
        }
        .hero-section {
            padding: var(--spacing-xl) 0;
            background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
        }
        .game-logo {
            width: 150px;
            height: 150px;
            border-radius: 30px;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
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
            margin-bottom: var(--spacing-lg);
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-md);
        }
        .feature-card {
            background: rgba(255, 255, 255, 0.05);
            padding: var(--spacing-md);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 1.1rem;
            transition: transform var(--transition-fast);
        }
        .feature-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
        }
        .origin-story-section {
            background: rgba(0, 0, 0, 0.3);
        }
        .story-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.6;
        }
        .why-love-section {
            padding: var(--spacing-xl) 0;
        }
        .love-text {
            font-size: 1.5rem;
            margin-bottom: var(--spacing-sm);
        }
        .final-cta {
            font-size: 1.2rem;
            margin: var(--spacing-lg) 0;
            font-weight: 700;
            color: var(--color-primary);
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

export default CrappyBirdOrigins;
