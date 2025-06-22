// src/effects/DecryptedText.jsx
import React, { useState, useEffect } from 'react';

const DecryptedText = ({
  text = "WebSight Analytics",
  speed = 50,
  maxIterations = 10,
  sequential = true,
  revealDirection = "center",
  useOriginalCharsOnly = true,
  animateOn = "view",
  className = "",
  encryptedClassName = ""
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Character set for decryption effect
  const chars = useOriginalCharsOnly 
    ? text.split('').filter((c, i, a) => a.indexOf(c) === i)
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    
    if (ref.current && animateOn === "view") observer.observe(ref.current);
    if (animateOn === "auto") setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIteration = 0;
    const targetText = text;
    const textArr = new Array(targetText.length).fill('').map(() => chars[Math.floor(Math.random() * chars.length)]);
    
    const interval = setInterval(() => {
      setDisplayText(textArr.map((char, i) => {
        if (currentIteration > maxIterations && i < currentIteration - maxIterations) {
          return targetText[i];
        }
        return Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char;
      }).join(''));
      
      currentIteration++;
      if (currentIteration > text.length + maxIterations) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div 
      ref={ref}
      className={`${className} ${!isVisible ? encryptedClassName : ''}`}
      style={{ fontSize: '5rem', fontWeight: 'bold', textAlign: 'center' }}
    >
      {displayText}
    </div>
  );
};

export default DecryptedText;