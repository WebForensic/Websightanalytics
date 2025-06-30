import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// FallingText Component (simplified version)
const FallingText = ({ text, onComplete, className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`falling-text ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={isVisible ? {} : { 
            y: 300, 
            rotate: Math.random() * 360,
            opacity: 0.7
          }}
          transition={{ 
            duration: 2,
            delay: index * 0.1,
            ease: "easeIn"
          }}
          style={{
            display: 'inline-block',
            marginRight: char === ' ' ? '0.5em' : '0.1em'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

// Main WebSight Analytics Intro Component
const WebSightAnalyticsIntro = () => {
  const [currentPhase, setCurrentPhase] = useState('glitch'); // glitch, decrypt, rotate, fall, enter
  const [rotatingWord, setRotatingWord] = useState('Analytics');

  const rotatingWords = ['Analytics', 'Metrics', 'Optimization', 'Diagnosis', 'Forensics'];

  useEffect(() => {
    // Phase 1: Glitch for 10 seconds
    const glitchTimer = setTimeout(() => {
      setCurrentPhase('decrypt');
    }, 10000);

    return () => clearTimeout(glitchTimer);
  }, []);

  useEffect(() => {
    if (currentPhase === 'rotate') {
      let wordIndex = 0;
      const rotateInterval = setInterval(() => {
        wordIndex = (wordIndex + 1) % rotatingWords.length;
        setRotatingWord(rotatingWords[wordIndex]);
      }, 1000);

      // After 15 seconds of rotation, start falling
      const fallTimer = setTimeout(() => {
        clearInterval(rotateInterval);
        setCurrentPhase('fall');
      }, 15000);

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

  return (
    <div className="websight-intro" style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      backgroundColor: '#000',
      overflow: 'hidden'
    }}>
      <AnimatePresence mode="wait">
        {currentPhase === 'glitch' && (
          <motion.div
            key="glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: '100%', height: '100%' }}
          >
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
          </motion.div>
        )}

        {currentPhase === 'decrypt' && (
          <motion.div
            key="decrypt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#61dca3',
              fontFamily: 'monospace',
              textAlign: 'center'
            }}
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
          </motion.div>
        )}

        {currentPhase === 'rotate' && (
          <motion.div
            key="rotate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#61dca3',
              fontFamily: 'monospace',
              textAlign: 'center'
            }}
          >
            <div>WebSight{' '}
              <motion.span
                key={rotatingWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'inline-block' }}
              >
                {rotatingWord}
              </motion.span>
            </div>
          </motion.div>
        )}

        {currentPhase === 'fall' && (
          <motion.div
            key="fall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#61dca3',
              fontFamily: 'monospace',
              textAlign: 'center'
            }}
          >
            <FallingText 
              text="WebSight Analytics" 
              onComplete={handleFallComplete}
            />
          </motion.div>
        )}

        {currentPhase === 'enter' && (
          <motion.div
            key="enter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#61dca3'
            }}
          >
            <motion.div
              animate={{ 
                boxShadow: ['0 0 20px #61dca3', '0 0 40px #61dca3', '0 0 20px #61dca3'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                padding: '2rem 4rem',
                border: '2px solid #61dca3',
                borderRadius: '10px',
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: 'rgba(97, 220, 163, 0.1)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter Site
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebSightAnalyticsIntro;