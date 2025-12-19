import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="container text-center">
                <div className="scene">
                    <div className="pacman-sad">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                    </div>
                    <div className="ghost">
                        <div className="eyes">
                            <div className="eye-left"></div>
                            <div className="eye-right"></div>
                        </div>
                        <div className="skirt"></div>
                    </div>
                </div>

                <h1 className="error-code">404</h1>
                <h2 className="error-message">Level Not Found</h2>
                <p className="error-description">
                    Looks like you glitched out of bounds. This area hasn't been generated yet.
                </p>

                <Link to="/" className="btn btn-primary">Return to Base</Link>
            </div>

            <style>{`
                .not-found-page {
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--spacing-xl) 0;
                    overflow: hidden;
                }
                
                .scene {
                    position: relative;
                    height: 200px;
                    margin-bottom: var(--spacing-lg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 50px;
                }

                /* Sad Pacman */
                .pacman-sad {
                    width: 100px;
                    height: 100px;
                    background: #FFD700;
                    border-radius: 50%;
                    position: relative;
                    transform: rotate(-15deg);
                }

                .pacman-sad .eye {
                    position: absolute;
                    top: 25px;
                    right: 30px;
                    width: 12px;
                    height: 12px;
                    background: #000;
                    border-radius: 50%;
                }
                
                /* Teardrop */
                .pacman-sad .eye::after {
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: 2px;
                    width: 6px;
                    height: 10px;
                    background: #00F3FF;
                    border-radius: 50%;
                    animation: tearDrop 2s infinite;
                }

                .pacman-sad .mouth {
                    position: absolute;
                    top: 60px;
                    right: 10px;
                    width: 40px;
                    height: 20px;
                    border-top: 4px solid #000;
                    border-radius: 50% 50% 0 0;
                    transform: rotate(10deg);
                }

                /* Ghost */
                .ghost {
                    width: 80px;
                    height: 90px;
                    background: var(--color-primary); /* Cyan ghost */
                    border-radius: 40px 40px 0 0;
                    position: relative;
                    animation: float 3s ease-in-out infinite;
                    box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
                }

                .ghost .eyes {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    padding-top: 25px;
                }

                .ghost .eye-left, .ghost .eye-right {
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    border-radius: 50%;
                    position: relative;
                }

                .ghost .eye-left::after, .ghost .eye-right::after {
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: 4px; /* Looking left at pacman */
                    width: 8px;
                    height: 8px;
                    background: #000;
                    border-radius: 50%;
                }

                .ghost .skirt {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 15px;
                    display: flex;
                }
                
                /* Simple CSS skirt using radial gradients or clip-path would be better, 
                   but let's use a simple clip-path for the wavy bottom */
                .ghost {
                    clip-path: polygon(
                        0% 100%, 0% 0%, 100% 0%, 100% 100%,
                        83% 90%, 66% 100%, 50% 90%, 33% 100%, 17% 90%
                    );
                }

                .error-code {
                    font-size: 6rem;
                    font-weight: 900;
                    color: var(--color-secondary);
                    text-shadow: 0 0 20px var(--color-secondary);
                    margin: 0;
                    line-height: 1;
                }

                .error-message {
                    font-size: 2rem;
                    margin-bottom: var(--spacing-md);
                    color: var(--color-text);
                }

                .error-description {
                    font-size: 1.2rem;
                    opacity: 0.7;
                    margin-bottom: var(--spacing-lg);
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @keyframes tearDrop {
                    0% { transform: translateY(0) scale(1); opacity: 0.8; }
                    100% { transform: translateY(20px) scale(0.5); opacity: 0; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
};

export default NotFound;
