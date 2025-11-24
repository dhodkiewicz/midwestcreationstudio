import React from 'react';

const GameFeature = () => {
    return (
        <section id="games" className="game-feature section">
            <div className="container">
                <h2 className="section-title text-center">Featured Game</h2>
                <div className="game-card">
                    <div className="game-image-wrapper">
                        <img src="/assets/crappy-bird-icon.jpg" alt="Crappy Bird Game Icon" className="game-image" />
                    </div>
                    <div className="game-info">
                        <h3 className="game-title">Crappy Bird</h3>
                        <p className="game-description">
                            Prepare for a flappin' good time! Navigate through retro-inspired obstacles in this addictive arcade classic reborn.
                            Simple to play, impossible to master.
                        </p>
                        <div className="game-tags">
                            <span className="tag">Arcade</span>
                            <span className="tag">Retro</span>
                            <span className="tag">Mobile</span>
                        </div>
                        <button className="btn btn-primary" disabled>Coming Soon</button>
                    </div>
                </div>
            </div>
            <style>{`
        .game-feature {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-lg);
          color: var(--color-secondary);
          text-shadow: 0 0 10px var(--color-secondary);
        }
        .game-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
          background: rgba(255, 255, 255, 0.05);
          padding: var(--spacing-md);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          backdrop-filter: blur(5px);
        }
        .game-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .game-image {
          max-width: 250px;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          transition: transform var(--transition-normal);
        }
        .game-image:hover {
          transform: translateY(-10px);
        }
        .game-info {
          flex: 1;
          text-align: center;
        }
        .game-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }
        .game-description {
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }
        .game-tags {
          display: flex;
          gap: var(--spacing-xs);
          justify-content: center;
          margin-bottom: var(--spacing-md);
        }
        .tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (min-width: 768px) {
          .game-card {
            flex-direction: row;
            text-align: left;
            padding: var(--spacing-lg);
          }
          .game-info {
            text-align: left;
          }
          .game-tags {
            justify-content: flex-start;
          }
        }
      `}</style>
        </section>
    );
};

export default GameFeature;
