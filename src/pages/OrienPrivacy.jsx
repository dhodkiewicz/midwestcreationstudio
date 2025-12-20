import React, { useEffect } from 'react';
import './Orien.css';

const OrienPrivacy = () => {
    useEffect(() => {
        document.title = "Orien | Privacy Policy";
    }, []);

    return (
        <div className="orien-page">
            <div className="orien-container" style={{ padding: '8rem 2rem' }}>
                <div className="tech-spec" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="orien-h1">Orien Privacy Policy</h1>
                    <p className="orien-body" style={{ opacity: 0.7 }}>Last updated: December 19, 2025</p>

                    <div style={{ marginTop: '3rem' }}>
                        <h2 className="orien-h2">Overview</h2>
                        <p className="orien-body">
                            Orien is a hands-free interaction application designed to provide alternative input and navigation methods on iOS devices. User privacy is a core design principle of Orien. The app is built to function without collecting, storing, or transmitting personal data.
                        </p>
                        <p className="orien-body">
                            Orien does not sell user data, track users, or use analytics or advertising services.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Data Collection</h2>
                        <p className="orien-body">Orien does not collect any personal data.</p>
                        <p className="orien-body">Specifically, Orien does not collect or store:</p>
                        <ul className="tech-list">
                            <li>Names</li>
                            <li>Email addresses</li>
                            <li>Phone numbers</li>
                            <li>Contacts</li>
                            <li>Messages or message content</li>
                            <li>Photos or videos</li>
                            <li>Usage analytics</li>
                            <li>Device identifiers</li>
                            <li>Location data</li>
                        </ul>
                        <p className="orien-body">All interactions occur locally on the user’s device.</p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Camera Usage</h2>
                        <p className="orien-body">
                            Orien requires access to the device camera solely to enable hands-free interaction through real-time facial and eye-based input.
                        </p>
                        <ul className="tech-list">
                            <li>Camera data is processed entirely on-device</li>
                            <li>No images or video are recorded</li>
                            <li>No camera data is stored</li>
                            <li>No camera data is transmitted off-device</li>
                        </ul>
                        <p className="orien-body">Camera access is never used for identification, recognition, or biometric profiling.</p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Photos & Videos Access</h2>
                        <p className="orien-body">
                            If the user grants permission, Orien may access the device’s photo and video library in order to allow hands-free viewing and navigation.
                        </p>
                        <ul className="tech-list">
                            <li>Orien does not upload, store, or analyze photos or videos</li>
                            <li>Media access is governed by standard iOS permission dialogs</li>
                            <li>Media remains entirely on the user’s device</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Messaging & Communication</h2>
                        <p className="orien-body">Orien allows users to compose text messages hands-free.</p>
                        <ul className="tech-list">
                            <li>Message content is created locally on the device</li>
                            <li>Orien does not send messages automatically</li>
                            <li>Message content is not stored, logged, or transmitted by Orien</li>
                            <li>Sending messages relies on system-level iOS actions initiated by the user</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Contacts</h2>
                        <p className="orien-body">If enabled by the user, Orien may display contacts for hands-free selection.</p>
                        <ul className="tech-list">
                            <li>Orien does not store or export contact data</li>
                            <li>Contacts are accessed only through iOS-provided APIs</li>
                            <li>Contact data is not shared with Orien servers (Orien has none)</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">On-Device Processing</h2>
                        <p className="orien-body">All Orien functionality operates locally on the user’s device.</p>
                        <ul className="tech-list">
                            <li>No cloud processing</li>
                            <li>No external servers</li>
                            <li>No third-party analytics or tracking SDKs</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Third-Party Services</h2>
                        <p className="orien-body">Orien does not integrate with:</p>
                        <ul className="tech-list">
                            <li>Advertising networks</li>
                            <li>Analytics providers</li>
                            <li>Data brokers</li>
                            <li>Social media SDKs</li>
                        </ul>
                        <p className="orien-body" style={{ fontStyle: 'italic', opacity: 0.8 }}>
                            If optional Pro features are introduced in the future (e.g., web browsing), this policy will be updated accordingly before release.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Data Retention</h2>
                        <p className="orien-body">
                            Because Orien does not collect or store user data, there is no data retention period.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Security</h2>
                        <p className="orien-body">
                            Orien relies on iOS system-level security and permission controls. All access to sensitive device features (camera, photos, contacts) is governed by iOS permission prompts and user consent.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Children’s Privacy</h2>
                        <p className="orien-body">
                            Orien does not knowingly collect personal data from children under the age of 13. Because Orien does not collect personal data from any users, no special data handling is required.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Changes to This Policy</h2>
                        <p className="orien-body">
                            If Orien’s functionality changes in a way that affects user privacy, this Privacy Policy will be updated accordingly. Any changes will be reflected on this page with an updated revision date.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Contact</h2>
                        <p className="orien-body">If you have questions about this Privacy Policy, you may contact:</p>
                        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <p className="orien-body" style={{ margin: 0 }}>
                                <strong>Midwest Creation Studio LLC</strong><br />
                                <a href="mailto:midwestcreationstudio@gmail.com" style={{
                                    color: 'inherit',
                                    overflowWrap: 'anywhere',
                                    fontSize: '0.95em'
                                }}>midwestcreationstudio@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="orien-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="orien-container" style={{ textAlign: 'center' }}>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2025 Midwest Creation Studio LLC. Orien was built in the Green Bay area.</p>
                </div>
            </footer>
        </div>
    );
};

export default OrienPrivacy;
