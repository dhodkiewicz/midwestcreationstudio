import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Midwest Creation Studio LLC. All rights reserved.</p>
        <p className="location">Green Bay, Wisconsin 🧀</p>
      </div>
      <style>{`
        .footer {
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--color-border);
          margin-top: var(--spacing-lg);
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .location {
          margin-top: var(--spacing-xs);
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
