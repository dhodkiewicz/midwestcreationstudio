import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title text-center">About The Studio</h2>
                <div className="about-content">
                    <p>
                        Midwest Creation Studio is an independent software studio based in Green Bay, Wisconsin.
                        We design and build <strong>clean, reliable software</strong>—web platforms, accessibility
                        tools, and custom applications—for businesses and organizations that need it done right.
                    </p>
                    <p>
                        From accessibility-first products like Orien to polished sites for local organizations,
                        we take projects from concept to launch with a focus on craft, clarity, and lasting quality.
                        If you have something to build, let's talk.
                    </p>
                    <div className="contact-info">
                        <a href="mailto:midwestcreationstudio@gmail.com" className="contact-link">
                            midwestcreationstudio@gmail.com
                        </a>
                    </div>
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
        .contact-info {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--color-border);
        }
        .contact-link {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .contact-link:hover {
          color: var(--color-accent);
          text-shadow: 0 0 10px var(--color-accent);
        }
      `}</style>
        </section>
    );
};

export default About;
