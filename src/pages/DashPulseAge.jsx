import React from 'react';

const DashPulseAge = () => {
    return (
        <section className="section age-suitability">
            <div className="container text-center">
                <h1>Age Suitability</h1>
                <div className="rating-badge">4+</div>
                <h2>Rated 4+</h2>
                <p className="description">
                    <strong>Dash Pulse</strong> is designed to be safe and fun for everyone.
                </p>

                <div className="details">
                    <div className="detail-item">
                        <span className="icon">🚫</span>
                        <span>No Violence</span>
                    </div>
                    <div className="detail-item">
                        <span className="icon">🚫</span>
                        <span>No Profanity</span>
                    </div>
                    <div className="detail-item">
                        <span className="icon">🚫</span>
                        <span>No Mature Themes</span>
                    </div>
                    <div className="detail-item">
                        <span className="icon">✅</span>
                        <span>Family Friendly</span>
                    </div>
                </div>

                <p className="note">
                    This app contains no objectionable material and is suitable for all ages.
                </p>
            </div>
            <style>{`
        .age-suitability {
            padding-top: var(--spacing-xl);
            min-height: 60vh;
            display: flex;
            align-items: center;
        }
        .rating-badge {
            font-size: 4rem;
            font-weight: 700;
            background: var(--color-primary);
            color: #000;
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            margin: 0 auto var(--spacing-md);
            box-shadow: 0 0 20px var(--color-primary);
        }
        .age-suitability h1 {
            margin-bottom: var(--spacing-md);
            color: var(--color-text);
        }
        .age-suitability h2 {
            color: var(--color-secondary);
            margin-bottom: var(--spacing-md);
        }
        .description {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto var(--spacing-lg);
        }
        .details {
            display: flex;
            justify-content: center;
            gap: var(--spacing-lg);
            flex-wrap: wrap;
            margin-bottom: var(--spacing-lg);
        }
        .detail-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.1rem;
            background: rgba(255, 255, 255, 0.05);
            padding: 0.5rem 1rem;
            border-radius: 50px;
        }
        .note {
            opacity: 0.7;
            font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default DashPulseAge;
