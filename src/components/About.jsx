import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title text-center">About The Studio</h2>
                <div className="about-content">
                    <p>
                        Midwest Creation Studio is a one-man software powerhouse based in Green Bay, Wisconsin.
                        Founded by an AI Implementation Engineer with a passion for retro gaming and clean code.
                    </p>
                    <p>
                        We build digital experiences that are simple, elegant, and undeniably EPIC.
                        Our mission is to bring the joy of classic arcade gaming to the modern web,
                        wrapped in professional-grade engineering.
                    </p>
                </div>
            </div>
            <style>{`
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.1rem;
        }
        .about-content p {
          margin-bottom: var(--spacing-sm);
        }
      `}</style>
        </section>
    );
};

export default About;
