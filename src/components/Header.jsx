import React, { useEffect, useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <span className="logo-text">MCS</span>
                </div>
                <nav className="nav">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </div>
            <style>{`
        .header {
          padding: var(--spacing-sm) 0;
          background-color: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--color-border);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-primary);
          text-shadow: 0 0 5px var(--color-primary);
        }
        .theme-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color var(--transition-fast);
        }
        .theme-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
        </header>
    );
};

export default Header;
