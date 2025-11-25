import React from 'react';

const games = [
  {
    id: 'crappy-bird',
    title: 'Crappy Bird',
    description: "Prepare for a flappin' good time! Navigate through retro-inspired obstacles in this addictive arcade classic reborn. Simple to play, impossible to master.",
    image: '/assets/crappy-bird-icon.jpg',
    tags: ['Arcade', 'Retro', 'Mobile'],
    action: { text: 'Coming Soon', link: '#', disabled: true }
  },
  {
    id: 'mariogod',
    title: 'Mariogod',
    description: "A parody of Mario meets C-suite corporate America grunge platformer. Battle through the corporate ladder in this unique, gritty take on the platforming genre.",
    image: '/assets/mariogod-screenshot.png',
    tags: ['Platformer', 'Parody', 'Web'],
    action: { text: 'Play Now', link: 'http://mariogod.vercel.app', disabled: false }
  }
];

const GameFeature = () => {
  return (
    <section id="games" className="game-feature section">
      <div className="container">
        <h2 className="section-title text-center">Featured Games</h2>
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-wrapper">
                <img src={game.image} alt={`${game.title} Icon`} className="game-image" />
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-tags">
                  {game.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {game.action.disabled ? (
                  <button className="btn btn-primary" disabled>{game.action.text}</button>
                ) : (
                  <a href={game.action.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {game.action.text}
                  </a>
                )}
              </div>
            </div>
          ))}
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
        .games-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
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
          transition: transform var(--transition-normal);
        }
        .game-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.1);
        }
        .game-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .game-image {
          max-width: 250px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          transition: transform var(--transition-normal);
          object-fit: cover;
        }
        .game-info {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          flex-wrap: wrap;
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
          /* Alternate layout for variety */
          .game-card:nth-child(even) {
            flex-direction: row-reverse;
          }
          .game-info {
            text-align: left;
            align-items: flex-start;
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
