import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page section">
            <div className="container">
                <h1 className="page-title">Dash Pulse – Privacy Policy</h1>

                <div className="policy-content">
                    <section className="policy-section">
                        <h2>Data Collection</h2>
                        <p>Midwest Creation Studio does not collect personal data. We believe in your privacy.</p>
                        <ul>
                            <li>No accounts are required.</li>
                            <li>No emails are collected.</li>
                            <li>No passwords are stored.</li>
                            <li>Any username entered in-game is stored locally on your device only.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>Third-Party Services</h2>
                        <p>We use the following third-party services to enhance your gaming experience:</p>
                        <ul>
                            <li><strong>Apple Game Center:</strong> Used for global leaderboards.</li>
                            <li><strong>Google AdMob:</strong> Used to display advertisements.</li>
                        </ul>
                        <p>Any data collected by these third parties is governed by their own respective privacy policies.</p>
                    </section>

                    <section className="policy-section">
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at:</p>
                        <p><a href="mailto:midwestcreationstudio@gmail.com" className="contact-link">midwestcreationstudio@gmail.com</a></p>
                    </section>
                </div>
            </div>
            <style>{`
                .privacy-page {
                    padding-top: var(--spacing-xl);
                    min-height: 80vh;
                }
                .page-title {
                    font-size: 2.5rem;
                    margin-bottom: var(--spacing-lg);
                    text-align: center;
                    color: var(--color-primary);
                }
                .policy-content {
                    max-width: 800px;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.05);
                    padding: var(--spacing-lg);
                    border-radius: 12px;
                    border: 1px solid var(--color-border);
                }
                .policy-section {
                    margin-bottom: var(--spacing-lg);
                }
                .policy-section h2 {
                    font-size: 1.5rem;
                    margin-bottom: var(--spacing-md);
                    color: var(--color-secondary);
                }
                .policy-section ul {
                    list-style-type: disc;
                    padding-left: var(--spacing-lg);
                    margin-bottom: var(--spacing-md);
                }
                .policy-section li {
                    margin-bottom: var(--spacing-xs);
                    opacity: 0.9;
                }
                .policy-section p {
                    margin-bottom: var(--spacing-md);
                    line-height: 1.6;
                    opacity: 0.9;
                }
                .contact-link {
                    color: var(--color-primary);
                    text-decoration: none;
                }
                .contact-link:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
