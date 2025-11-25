import React from 'react';

const CrappyBirdPrivacy = () => {
    return (
        <section className="section privacy-policy">
            <div className="container">
                <h1>Privacy Policy for Crappy Bird: Origins</h1>
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

                <p>Crappy Bird: Origins (“the App”) is developed and published by Midwest Creation Studio LLC. This Privacy Policy explains how the App collects, uses, and handles data.</p>

                <p>We are committed to protecting your privacy and being transparent about our data practices. If you have any questions, contact us at: <a href="mailto:midwestcreationstudio@gmail.com">midwestcreationstudio@gmail.com</a></p>

                <h2>Information We Collect</h2>
                <p>The App collects the following types of data to support gameplay, app functionality, analytics, and advertising.</p>

                <ul>
                    <li><strong>Device ID:</strong> Used for app operations, analytics, and to deliver relevant ads.</li>
                    <li><strong>User ID:</strong> A unique identifier used for game progress, leaderboards, and analytics.</li>
                    <li><strong>Product Interaction:</strong> Information about how you use the App (buttons tapped, game sessions, menus used). Used to improve gameplay and identify popular features.</li>
                    <li><strong>Other Usage Data:</strong> General gameplay behaviors, such as session length, score attempts, retry counts, and feature usage.</li>
                    <li><strong>Crash Data:</strong> Crash logs and errors to help identify bugs and improve stability.</li>
                    <li><strong>Performance Data:</strong> Loading times, frame rate performance, and in-app technical metrics.</li>
                    <li><strong>Other Diagnostic Data:</strong> Technical information necessary for troubleshooting and ensuring the App works correctly.</li>
                    <li><strong>Advertising Data:</strong> Anonymous data used by third-party ad networks (such as Google AdMob) to deliver ads, measure performance, and prevent fraud.</li>
                </ul>

                <p>None of this data includes personal information such as your name, address, phone number, or email unless you voluntarily provide it through support communication.</p>

                <h2>How We Use This Information</h2>
                <p>We use collected data for the following purposes:</p>
                <ul>
                    <li>To operate and maintain the App</li>
                    <li>To improve game performance and fix bugs</li>
                    <li>To understand how players use the App</li>
                    <li>To provide personalized or contextual advertising</li>
                    <li>To measure ad effectiveness</li>
                    <li>To prevent fraud and maintain platform security</li>
                </ul>
                <p>We do not sell personal information.</p>

                <h2>Third-Party Services</h2>
                <p>The App uses the following third-party providers, which may collect and process data according to their own privacy policies:</p>
                <ul>
                    <li><strong>Google AdMob (Advertising):</strong> Used to display ads and measure ad performance. AdMob may collect device identifiers, ad interaction data, and approximate location. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Learn more</a></li>
                    <li><strong>Apple App Analytics:</strong> Used to measure overall App performance and engagement. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
                </ul>
                <p>The App may use additional analytics or crash-reporting tools, but only in accordance with App Store requirements.</p>

                <h2>Children’s Privacy</h2>
                <p>The App is not directed to children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe such data has been collected, contact us and we will delete it.</p>

                <h2>Data Retention</h2>
                <p>We retain gameplay data, analytics data, and advertising identifiers only as long as necessary to provide service, comply with legal requirements, and improve the App.</p>

                <h2>Your Rights</h2>
                <p>Depending on your region, you may have the right to:</p>
                <ul>
                    <li>Request deletion of your data</li>
                    <li>Request a copy of your data</li>
                    <li>Opt out of personalized advertising</li>
                </ul>
                <p>To request any of these, contact: <a href="mailto:midwestcreationstudio@gmail.com">midwestcreationstudio@gmail.com</a></p>
                <p>In the App, personalized ads can also be disabled using Apple’s “Limit Ad Tracking” features in device settings.</p>

                <h2>Security</h2>
                <p>We implement industry-standard security practices to protect your data. No system is perfectly secure, but we work to safeguard information from unauthorized access.</p>

                <h2>Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted here with an updated “Last Updated” date.</p>

                <h2>Contact Us</h2>
                <p>For questions or concerns, contact:</p>
                <p>
                    Midwest Creation Studio LLC<br />
                    Email: <a href="mailto:midwestcreationstudio@gmail.com">midwestcreationstudio@gmail.com</a>
                </p>
            </div>
            <style>{`
        .privacy-policy {
            padding-top: var(--spacing-xl);
            color: var(--color-text);
        }
        .privacy-policy h1 {
            font-size: 2.5rem;
            margin-bottom: var(--spacing-md);
            color: var(--color-primary);
        }
        .privacy-policy h2 {
            font-size: 1.8rem;
            margin-top: var(--spacing-lg);
            margin-bottom: var(--spacing-sm);
            color: var(--color-secondary);
        }
        .privacy-policy p, .privacy-policy ul {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: var(--spacing-sm);
            opacity: 0.9;
        }
        .privacy-policy ul {
            list-style-type: disc;
            padding-left: var(--spacing-lg);
        }
        .privacy-policy li {
            margin-bottom: 0.5rem;
        }
        .privacy-policy a {
            color: var(--color-accent);
            text-decoration: underline;
        }
      `}</style>
        </section>
    );
};

export default CrappyBirdPrivacy;
