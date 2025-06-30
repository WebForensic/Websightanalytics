import React, { useState, useEffect, useRef } from 'react';

// LetterGlitch Component
const LetterGlitch = ({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  className = '',
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const lettersAndSymbols = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/',
    '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9'
  ];

  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);

    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;

      letters.current[index].char = getRandomChar();
      letters.current[index].color = getRandomColor();
    }
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d');
    resizeCanvas();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      resizeCanvas();
      animate();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [glitchSpeed, smooth]);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    overflow: 'hidden',
  };

  const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
  };

  const centerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
  };

  return (
    <div style={containerStyle} className={className}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {centerVignette && <div style={centerVignetteStyle}></div>}
    </div>
  );
};

// DecryptedText Component
const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'auto',
  onComplete,
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (animateOn === 'auto') {
      setIsAnimating(true);
    }
  }, [animateOn]);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const availableChars = characters.split('');

    const shuffleText = (originalText) => {
      return originalText
        .split('')
        .map((char) => {
          if (char === ' ') return ' ';
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    };

    if (isAnimating) {
      interval = setInterval(() => {
        setDisplayText(shuffleText(text));
        currentIteration++;
        if (currentIteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsAnimating(false);
          if (onComplete) onComplete();
        }
      }, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimating, text, speed, maxIterations, characters, onComplete]);

  return (
    <span className={parentClassName} {...props}>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => (
          <span key={index} className={isAnimating ? encryptedClassName : className}>
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

// FallingText Component (CSS animation version)
const FallingText = ({ text, onComplete, className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fallStyles, setFallStyles] = useState([]);

  useEffect(() => {
    // Pre-generate random rotations for each character
    const styles = text.split('').map(() => ({
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
    }));
    setFallStyles(styles);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 2500); // Wait for animation to complete
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes fallAnimation {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(400px) rotate(var(--rotation));
            opacity: 0.3;
          }
        }
        .falling-char {
          display: inline-block;
          animation: ${!isVisible ? 'fallAnimation 2s ease-in forwards' : 'none'};
        }
      `}</style>
      <div className={`${className}`}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="falling-char"
            style={{
              marginRight: char === ' ' ? '0.5em' : '0.1em',
              '--rotation': fallStyles[index] ? `${fallStyles[index].rotation}deg` : '0deg',
              animationDelay: !isVisible && fallStyles[index] ? `${index * 0.05 + fallStyles[index].delay}s` : '0s',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </>
  );
};

// Main WebSight Analytics Intro Component
const WebSightAnalyticsIntro = ({ onIntroComplete }) => {
  const [currentPhase, setCurrentPhase] = useState('glitch'); // glitch, decrypt, rotate, fall, enter
  const [rotatingWord, setRotatingWord] = useState('Analytics');
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const rotatingWords = ['Analytics', 'Metrics', 'Optimization', 'Diagnosis', 'Forensics'];

  useEffect(() => {
    // Phase 1: Glitch for 3 seconds (shortened for demo)
    const glitchTimer = setTimeout(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentPhase('decrypt');
        setFadeClass('opacity-100');
      }, 500);
    }, 3000);

    return () => clearTimeout(glitchTimer);
  }, []);

  useEffect(() => {
    if (currentPhase === 'rotate') {
      let wordIndex = 0;
      const rotateInterval = setInterval(() => {
        wordIndex = (wordIndex + 1) % rotatingWords.length;
        setRotatingWord(rotatingWords[wordIndex]);
      }, 1000);

      // After 5 seconds of rotation, start falling (shortened for demo)
      const fallTimer = setTimeout(() => {
        clearInterval(rotateInterval);
        setCurrentPhase('fall');
      }, 5000);

      return () => {
        clearInterval(rotateInterval);
        clearTimeout(fallTimer);
      };
    }
  }, [currentPhase]);

  const handleDecryptComplete = () => {
    setCurrentPhase('rotate');
  };

  const handleFallComplete = () => {
    setCurrentPhase('enter');
  };

  const handleEnterSite = () => {
    if (onIntroComplete) {
      onIntroComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {currentPhase === 'glitch' && (
        <div className={`w-full h-full transition-opacity duration-500 ${fadeClass}`}>
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
      )}

      {currentPhase === 'decrypt' && (
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-green-400 font-mono text-center transition-opacity duration-500 ${fadeClass}`}
        >
          <DecryptedText
            text="WebSight Analytics"
            speed={100}
            maxIterations={20}
            animateOn="auto"
            onComplete={handleDecryptComplete}
            className="text-green-400"
            encryptedClassName="text-blue-400"
          />
        </div>
      )}

      {currentPhase === 'rotate' && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-green-400 font-mono text-center"
        >
          <div>
            WebSight{' '}
            <span
              key={rotatingWord}
              className="inline-block transition-all duration-500 ease-in-out"
              style={{
                animation: 'fadeInUp 0.5s ease-out'
              }}
            >
              {rotatingWord}
            </span>
          </div>
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}

      {currentPhase === 'fall' && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-green-400 font-mono text-center"
        >
          <FallingText 
            text="WebSight Analytics" 
            onComplete={handleFallComplete}
          />
        </div>
      )}

      {currentPhase === 'enter' && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-green-400"
          style={{
            animation: 'scaleIn 1s ease-out'
          }}
        >
          <div
            className="px-8 py-4 border-2 border-green-400 rounded-lg text-2xl font-bold cursor-pointer bg-green-400 bg-opacity-10 hover:scale-105 transform transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 active:scale-95"
            onClick={handleEnterSite}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 40px #61dca3, 0 0 80px #61dca3';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px #61dca3';
            }}
            style={{
              animation: 'glow 2s infinite',
              boxShadow: '0 0 20px #61dca3',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span className="relative z-10">Enter Site</span>
            {/* Ripple effect overlay */}
            <div 
              className="absolute inset-0 bg-green-400 opacity-0 transition-opacity duration-200 hover:opacity-10"
              style={{
                background: 'radial-gradient(circle at center, rgba(97, 220, 163, 0.3) 0%, transparent 70%)'
              }}
            />
          </div>
          <style jsx>{`
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes glow {
              0%, 100% {
                box-shadow: 0 0 20px #61dca3;
              }
              50% {
                box-shadow: 0 0 40px #61dca3, 0 0 60px #61dca3;
              }
            }
            @keyframes sparkle {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <WebSightAnalyticsIntro onIntroComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black border-b border-green-400">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-green-400 font-mono">
            WebSight Analytics
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics Cards */}
          <div className="bg-gray-800 rounded-lg p-6 border border-green-400/30 hover:border-green-400 transition-colors">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Site Performance</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Load Time:</span>
                <span className="text-green-400">2.3s</span>
              </div>
              <div className="flex justify-between">
                <span>First Paint:</span>
                <span className="text-green-400">1.1s</span>
              </div>
              <div className="flex justify-between">
                <span>Core Web Vitals:</span>
                <span className="text-green-400">Good</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-green-400/30 hover:border-green-400 transition-colors">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Traffic Analytics</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Unique Visitors:</span>
                <span className="text-green-400">12,453</span>
              </div>
              <div className="flex justify-between">
                <span>Page Views:</span>
                <span className="text-green-400">28,901</span>
              </div>
              <div className="flex justify-between">
                <span>Bounce Rate:</span>
                <span className="text-green-400">24.7%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-green-400/30 hover:border-green-400 transition-colors">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Security Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>SSL Certificate:</span>
                <span className="text-green-400">Valid</span>
              </div>
              <div className="flex justify-between">
                <span>Security Score:</span>
                <span className="text-green-400">A+</span>
              </div>
              <div className="flex justify-between">
                <span>Vulnerabilities:</span>
                <span className="text-green-400">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button 
            onClick={() => setShowIntro(true)}
            className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition-colors"
          >
            View Intro Again
          </button>
          <button className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors">
            Generate Report
          </button>
          <button className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors">
            Run Diagnostics
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;