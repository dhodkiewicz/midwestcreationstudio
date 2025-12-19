import React, { useEffect } from 'react';
import './Orien.css';

// Assets
import keyboardImg from '../assets/orien/keyboard.png';
import splashImg from '../assets/orien/splash.png';
import medicalImg from '../assets/orien/medical.png';

const Orien = () => {
    useEffect(() => {
        document.title = "Orien | Free Eye-Tracking AAC for ALS";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Hands-free communication app for iOS. No head tracking required. Download for free.");
        }
    }, []);

    return (
        <div className="orien-page">
            {/* Hero Section */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block">
                        <div className="hero-content">
                            <h1 className="orien-h1">SPEAK WITH YOUR EYES.</h1>
                            <p className="orien-subhead">
                                The first 100% hands-free AAC platform for ALS and paralysis.
                                No head tracking required. Just your eyes.
                            </p>
                            <div className="cta-group">
                                <a href="https://apple.co/orien" target="_blank" rel="noopener noreferrer" className="app-store-button">
                                    <svg height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                                        <path d="M128.508 0H6.4918C2.90638 0 0 2.90638 0 6.4918V33.5082C0 37.0936 2.90638 40 6.4918 40H128.508C132.094 40 135 37.0936 135 33.5082V6.4918C135 2.90638 132.094 0 128.508 0Z" fill="black" />
                                        <path d="M17.0628 27.6432C17.1593 28.5273 17.8931 29.208 18.7946 29.208C19.8654 29.208 20.6277 28.384 20.6277 27.147C20.6277 25.9614 19.886 25.1065 18.8258 25.1065C17.9242 25.1065 17.1822 25.7744 17.0858 26.6585H17.043C17.2001 25.2678 17.6534 23.9458 17.6534 22.9566C17.6534 21.6575 16.899 20.8938 15.6888 20.8938C14.7171 20.8938 14.1207 21.4902 13.9142 22.1843H13.8415L13.7844 21.0506H12.0199V31.5H13.8829V26.2429C13.8829 25.1558 14.5428 24.3229 15.421 24.3229C15.9363 24.3229 16.2764 24.6631 16.2764 25.2604C16.2764 25.6833 16.1423 26.3129 15.967 27.0253L15.3582 29.4635C15.2241 29.9829 15.2651 30.5694 15.4716 31.0635C15.7503 31.7548 16.3917 32.2281 17.1245 32.2281C18.3031 32.2281 19.3444 31.3343 19.8291 30.1415C20.0658 29.5606 20.1999 28.8926 20.1999 28.2131C20.1999 25.9221 18.6636 24.1627 16.4815 24.1627C14.3792 24.1627 12.8344 25.8601 12.8344 28.1822C12.8344 30.4939 14.3792 32.2281 16.6358 32.2281C17.6346 32.2281 18.4287 31.8159 18.913 31.0831H18.9857L19.043 32.0415H20.8039V21.5H18.941V23.7029H18.8682C18.6723 23.0189 18.0645 22.3894 17.0628 22.3894C15.4419 22.3894 14.2155 23.7712 14.2155 25.6669C14.2155 27.5626 15.4419 28.9443 17.0628 28.9443C18.0645 28.9443 18.6723 28.3148 18.8682 27.6308H18.941V27.6432H17.0628ZM37.7554 28.5L35.2554 21.0506H33.2554L36.7554 31.5H38.7554L42.2554 21.0506H40.2554L37.7554 28.5ZM47.2554 26.5V21.0506H45.2554V31.5H47.2554V26.5ZM47.2554 26.5C47.2554 25.1 48.3554 24 49.7554 24C51.1554 24 52.2554 25.1 52.2554 26.5V31.5H54.2554V26.5C54.2554 24 52.2554 22 49.7554 22C47.2554 22 45.2554 24 45.2554 26.5V31.5H47.2554V26.5ZM66.7554 26.5V21.0506H64.7554V31.5H66.7554V26.5ZM66.7554 26.5C66.7554 25.1 67.8554 24 69.2554 24C70.6554 24 71.7554 25.1 71.7554 26.5V31.5H73.7554V26.5C73.7554 24 71.7554 22 69.2554 22C66.7554 22 64.7554 24 64.7554 26.5V31.5H66.7554V26.5ZM86.2554 26.5V21.0506H84.2554V31.5H86.2554V26.5ZM86.2554 26.5C86.2554 25.1 87.3554 24 88.7554 24C90.1554 24 91.2554 25.1 91.2554 26.5V31.5H93.2554V26.5C93.2554 24 91.2554 22 88.7554 22C86.2554 22 84.2554 24 84.2554 26.5V31.5H86.2554V26.5Z" fill="white" />
                                    </svg>
                                </a>
                                <div className="privacy-shield" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.14 7.75-7 8.99V12H5V6.3l7-3.11v8.8z" />
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>100% On-Device Processing. No video data leaves your phone.</span>
                                </div>
                            </div>
                        </div>
                        <div className="device-frame">
                            <img src={splashImg} alt="Orien Splash Screen" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Block 1: Overview */}
            <section className="orien-section" style={{ textAlign: 'center' }}>
                <div className="orien-container" style={{ maxWidth: '800px' }}>
                    <h2 className="orien-h2">The Operating System for Independence.</h2>
                    <p className="orien-body">
                        Orien is a native iOS accessibility platform designed to restore communication to individuals with ALS, spinal cord injuries, and severe motor impairments. Unlike traditional solutions that require expensive proprietary hardware, Orien harnesses the power of the iPhone’s TrueDepth camera system to turn eye movement into speech—instantly and accurately.
                    </p>
                </div>
            </section>

            {/* Content Block 2: Feature Breakdown Grid */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-grid">
                        {/* Feature A */}
                        <div className="feature-block reversed">
                            <div className="feature-content">
                                <span className="feature-label">Feature A</span>
                                <h2 className="orien-h2">Smart Gaze Typing</h2>
                                <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Zero Physical Interaction Required.</h3>
                                <p className="orien-body">Construct complex sentences or quick phrases using our latency-optimized optical keyboard.</p>
                                <ul className="tech-list">
                                    <li><strong>Drift Cancellation:</strong> Proprietary cursor stabilization ensures accurate key selection even with minor involuntary movement.</li>
                                    <li><strong>Text-to-Speech:</strong> Instant vocal output allows users to participate in conversations in real-time.</li>
                                    <li><strong>Predictive Assist:</strong> Intelligent layouts reduce eye strain by minimizing travel distance for common letters.</li>
                                </ul>
                            </div>
                            <div className="device-frame">
                                <img src={keyboardImg} alt="Orien Keyboard Interface" loading="lazy" />
                            </div>
                        </div>

                        {/* Feature B */}
                        <div className="feature-block">
                            <div className="feature-content">
                                <span className="feature-label">Feature B</span>
                                <h2 className="orien-h2">Critical Care Communication</h2>
                                <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Speak When It Matters Most.</h3>
                                <p className="orien-body">In medical environments, speed is vital. The "Needs" and "Feelings" modules bypass the keyboard, allowing users to broadcast urgent states—pain, thirst, discomfort, or affection—with a single glance.</p>
                                <ul className="tech-list">
                                    <li><strong>High-Contrast UI:</strong> Designed for visibility in low-light hospital settings.</li>
                                    <li><strong>One-Look Activation:</strong> No "dwelling" required for urgent categories; instant visual confirmation.</li>
                                </ul>
                            </div>
                            <div className="device-frame">
                                <img src={medicalImg} alt="Orien Medical Needs Menu" loading="lazy" />
                            </div>
                        </div>

                        {/* Feature C */}
                        <div className="feature-block reversed">
                            <div className="feature-content">
                                <span className="feature-label">Feature C</span>
                                <h2 className="orien-h2">Digital Sovereignty</h2>
                                <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Independent Digital Navigation.</h3>
                                <p className="orien-body">Orien extends beyond speech. Users can navigate their photo galleries, watch videos, and manage favorite contacts without caregiver intervention. It is not just a tool for speaking; it is a tool for autonomy.</p>
                            </div>
                            <div className="device-frame">
                                <img src={splashImg} alt="Orien App Interface" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Block 3: Technical Spec */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="tech-spec">
                        <h2 className="orien-h2" style={{ textAlign: 'center' }}>Engineered for the "Locked-In."</h2>
                        <p className="orien-body" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            Most market alternatives utilize Head Tracking, effectively requiring the user to use their nose as a joystick. This fails patients who have lost neck mobility.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <div className="tech-card">
                                <h3>No Neck Mobility Needed</h3>
                                <p className="orien-body">The device stays stationary. You stay stationary. Only your pupils move.</p>
                            </div>
                            <div className="tech-card">
                                <h3>Bed-Bound Optimized</h3>
                                <p className="orien-body">Works perfectly for users lying flat or in reclined wheelchairs.</p>
                            </div>
                            <div className="tech-card">
                                <h3>Privacy-First Architecture</h3>
                                <p className="orien-body">All optical processing happens on-device via Apple’s Neural Engine. No video feed ever leaves the phone. HIPAA compliant by design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Block 4: Developer Note */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="mission-container">
                        <h2 className="orien-h2">A Note from Midwest Creation Studio</h2>
                        <p className="mission-text">
                            "We believe that technology’s highest purpose is to serve the underserved. Orien was built in the Green Bay area, with a single mission: to democratize access to communication. No insurance approvals. No $15,000 hardware. Just code, compassion, and a voice for everyone."
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="orien-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                <div className="orien-container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="mailto:support@midwestcreationstudio.com" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Support</a>
                        <a href="/crappy-bird-privacy" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Privacy Policy</a>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2025 Midwest Creation Studio LLC.</p>
                </div>
            </footer>
        </div>
    );
};

export default Orien;
