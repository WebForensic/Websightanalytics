import React, { useEffect, useState } from 'react';

const LetterGlitch = () => {
  const [text, setText] = useState('');
  const targetText = 'WEBSIGHT ANALYTICS';
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  useEffect(() => {
    let iteration = 0;
    
    const interval = setInterval(() => {
      setText(targetText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join(''));
      
      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-container">
      <div className="glitch-text" data-text={text}>
        {text}
      </div>
      
      <div className="subtitle">
        Initializing advanced analytics...
      </div>
      
      <style jsx>{`
        .glitch-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: radial-gradient(circle at center, #001122 0%, #000000 100%);
          font-family: 'Courier New', monospace;
        }
        
        .glitch-text {
          font-size: clamp(2rem, 8vw, 6rem);
          font-weight: bold;
          text-align: center;
          position: relative;
          color: #00ff00;
          text-shadow: 
            0 0 5px #00ff00,
            0 0 10px #00ff00,
            0 0 15px #00ff00,
            0 0 20px #00ff00;
          animation: flicker 0.15s infinite linear alternate;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          animation: glitch-anim-1 0.5s infinite linear alternate-reverse;
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch-text::after {
          animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
          color: #0000ff;
          z-index: -2;
        }
        
        .subtitle {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #00aa00;
          text-align: center;
          animation: pulse 2s infinite;
        }
        
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 24%, 55% {
            opacity: 0.4;
          }
        }
        
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.5deg);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.4deg);
          }
          10% {
            clip: rect(85px, 9999px, 140px, 0);
            transform: skew(0.1deg);
          }
          15% {
            clip: rect(65px, 9999px, 119px, 0);
            transform: skew(0.6deg);
          }
          20% {
            clip: rect(26px, 9999px, 187px, 0);
            transform: skew(0.1deg);
          }
          25% {
            clip: rect(144px, 9999px, 190px, 0);
            transform: skew(0.5deg);
          }
          30% {
            clip: rect(76px, 9999px, 83px, 0);
            transform: skew(0.3deg);
          }
          35% {
            clip: rect(31px, 9999px, 100px, 0);
            transform: skew(1deg);
          }
          40% {
            clip: rect(69px, 9999px, 73px, 0);
            transform: skew(0.4deg);
          }
          45% {
            clip: rect(155px, 9999px, 174px, 0);
            transform: skew(0.2deg);
          }
          50% {
            clip: rect(147px, 9999px, 179px, 0);
            transform: skew(0.8deg);
          }
          55% {
            clip: rect(26px, 9999px, 187px, 0);
            transform: skew(0.6deg);
          }
          60% {
            clip: rect(31px, 9999px, 100px, 0);
            transform: skew(0.2deg);
          }
          65% {
            clip: rect(144px, 9999px, 190px, 0);
            transform: skew(0.4deg);
          }
          70% {
            clip: rect(76px, 9999px, 83px, 0);
            transform: skew(0.3deg);
          }
          75% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.7deg);
          }
          80% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.1deg);
          }
          85% {
            clip: rect(85px, 9999px, 140px, 0);
            transform: skew(0.5deg);
          }
          90% {
            clip: rect(65px, 9999px, 119px, 0);
            transform: skew(0.2deg);
          }
          95% {
            clip: rect(69px, 9999px, 73px, 0);
            transform: skew(0.8deg);
          }
          100% {
            clip: rect(155px, 9999px, 174px, 0);
            transform: skew(0.3deg);
          }
        }
        
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(65px, 9999px, 119px, 0);
            transform: skew(0.2deg);
          }
          5% {
            clip: rect(144px, 9999px, 190px, 0);
            transform: skew(0.7deg);
          }
          10% {
            clip: rect(31px, 9999px, 100px, 0);
            transform: skew(0.4deg);
          }
          15% {
            clip: rect(147px, 9999px, 179px, 0);
            transform: skew(0.1deg);
          }
          20% {
            clip: rect(69px, 9999px, 73px, 0);
            transform: skew(0.6deg);
          }
          25% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.3deg);
          }
          30% {
            clip: rect(85px, 9999px, 140px, 0);
            transform: skew(0.8deg);
          }
          35% {
            clip: rect(155px, 9999px, 174px, 0);
            transform: skew(0.2deg);
          }
          40% {
            clip: rect(26px, 9999px, 187px, 0);
            transform: skew(0.5deg);
          }
          45% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.1deg);
          }
          50% {
            clip: rect(76px, 9999px, 83px, 0);
            transform: skew(0.4deg);
          }
          55% {
            clip: rect(65px, 9999px, 119px, 0);
            transform: skew(0.7deg);
          }
          60% {
            clip: rect(144px, 9999px, 190px, 0);
            transform: skew(0.3deg);
          }
          65% {
            clip: rect(31px, 9999px, 100px, 0);
            transform: skew(0.6deg);
          }
          70% {
            clip: rect(147px, 9999px, 179px, 0);
            transform: skew(0.2deg);
          }
          75% {
            clip: rect(69px, 9999px, 73px, 0);
            transform: skew(0.5deg);
          }
          80% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.8deg);
          }
          85% {
            clip: rect(85px, 9999px, 140px, 0);
            transform: skew(0.1deg);
          }
          90% {
            clip: rect(155px, 9999px, 174px, 0);
            transform: skew(0.4deg);
          }
          95% {
            clip: rect(26px, 9999px, 187px, 0);
            transform: skew(0.7deg);
          }
          100% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.3deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .glitch-text {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LetterGlitch;