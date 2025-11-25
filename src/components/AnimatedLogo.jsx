import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="logo-scene">
      <div className="cube-wrapper">
        <div className="cube">
          <div className="face front">
            <div className="eye-outer">
              <div className="eye-inner">
                <div className="pupil"></div>
              </div>
            </div>
          </div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>

        {/* Ring moved inside cube-wrapper to follow entrance animation */}
        <div className="ring-wrapper">
          <div className="ring"></div>
          <div className="sparkle s1"></div>
          <div className="sparkle s2"></div>
          <div className="sparkle s3"></div>
        </div>
      </div>

      <style>{`
        .logo-scene {
          width: 200px;
          height: 200px;
          perspective: 1000px;
          position: relative;
          margin: 0 auto var(--spacing-md);
          transform-style: preserve-3d; /* Enforce 3D context for Firefox */
        }

        /* Cube Wrapper for Entrance Animation */
        .cube-wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          animation: rollIn 2s ease-out forwards, float 6s ease-in-out infinite 2s;
        }

        /* The Cube */
        .cube {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -50px;
          margin-left: -50px;
          transform-style: preserve-3d;
          transform: rotateX(-15deg) rotateY(25deg);
        }

        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid var(--color-primary);
          background: rgba(0, 0, 0, 0.85);
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.1) inset;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: visible; /* Show inside of cube too */
          /* Ensure faces don't get flattened */
          transform-style: preserve-3d;
        }

        /* Face Positioning */
        .front  { transform: translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        /* The Eye (CSS Shapes) */
        .eye-outer {
          width: 60px;
          height: 30px;
          background: #fff;
          border-radius: 50%; /* Ellipse */
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          overflow: hidden;
          animation: blink 4s infinite;
        }

        .eye-inner {
          width: 24px;
          height: 24px;
          background: var(--color-accent); /* Red/Pink iris */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 5px var(--color-accent);
          animation: lookAround 8s infinite;
        }

        .pupil {
          width: 10px;
          height: 10px;
          background: #000;
          border-radius: 50%;
        }

        /* The Ring */
        .ring-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 240px;
          height: 240px;
          transform: translate(-50%, -50%) rotateX(70deg) rotateY(10deg);
          transform-style: preserve-3d;
          pointer-events: none; /* Let clicks pass through to cube if needed */
        }

        .ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          /* Synth wave gradient border */
          background: conic-gradient(
            from 0deg, 
            transparent 0%, 
            var(--color-secondary) 20%, 
            var(--color-primary) 50%, 
            var(--color-secondary) 80%, 
            transparent 100%
          );
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #fff calc(100% - 4px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #fff calc(100% - 4px));
          animation: spinRing 3s linear infinite;
          filter: drop-shadow(0 0 5px var(--color-secondary));
        }
        
        /* Sparkles */
        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px white, 0 0 20px var(--color-primary);
          opacity: 0;
        }

        .s1 { width: 4px; height: 4px; top: 0; left: 50%; animation: sparkleOrbit 3s linear infinite; }
        .s2 { width: 3px; height: 3px; bottom: 10%; right: 10%; animation: sparkleOrbit 3s linear infinite 1s; }
        .s3 { width: 5px; height: 5px; top: 40%; left: 0; animation: sparklePulse 2s ease-in-out infinite; }

        /* Animations */
        @keyframes rollIn {
          0% {
            transform: translateX(-200%) rotateZ(-360deg) scale(0.1);
            opacity: 0;
          }
          60% {
             transform: translateX(20%) rotateZ(20deg) scale(1.1);
             opacity: 1;
          }
          100% {
            transform: translateX(0) rotateZ(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spinRing {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        @keyframes blink {
          0%, 48%, 52%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }

        @keyframes lookAround {
          0%, 20% { transform: translate(0, 0); }
          25%, 45% { transform: translate(-8px, 0); } /* Look Left */
          50%, 70% { transform: translate(8px, -2px); } /* Look Right Up */
          75%, 95% { transform: translate(0, 5px); } /* Look Down */
          100% { transform: translate(0, 0); }
        }

        @keyframes sparkleOrbit {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); opacity: 0; }
        }

        @keyframes sparklePulse {
          0%, 100% { transform: scale(0.5); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        @media (min-width: 768px) {
            .logo-scene {
                width: 300px;
                height: 300px;
            }
            .cube {
                width: 150px;
                height: 150px;
                margin-top: -75px;
                margin-left: -75px;
            }
            .face {
                width: 150px;
                height: 150px;
            }
            .front  { transform: translateZ(75px); }
            .back   { transform: rotateY(180deg) translateZ(75px); }
            .right  { transform: rotateY(90deg) translateZ(75px); }
            .left   { transform: rotateY(-90deg) translateZ(75px); }
            .top    { transform: rotateX(90deg) translateZ(75px); }
            .bottom { transform: rotateX(-90deg) translateZ(75px); }
            
            .ring-wrapper {
                width: 360px;
                height: 360px;
            }
            .s1 { animation-name: sparkleOrbitLarge; }
        }

        @keyframes sparkleOrbitLarge {
          0% { transform: rotate(0deg) translateX(180px) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
