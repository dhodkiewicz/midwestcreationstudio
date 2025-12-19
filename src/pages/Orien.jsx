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
                                <a href="#" className="app-store-button">
                                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1314144000&h=79a5cc84c98f99e4ceae0a0589d81387" alt="Download on the App Store" style={{ height: '60px' }} />
                                </a>
                                <div className="privacy-shield" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.14 7.75-7 8.99V12H5V6.3l7-3.11v8.8z"/>
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
                            "We believe that technology’s highest purpose is to serve the underserved. Orien was built in Crivitz, WI, with a single mission: to democratize access to communication. No insurance approvals. No $15,000 hardware. Just code, compassion, and a voice for everyone."
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
