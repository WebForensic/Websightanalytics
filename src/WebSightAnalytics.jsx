import React, { useState, useEffect, useRef } from 'react';
import LetterGlitch from './LetterGlitch';
import DecryptedText from './DecryptedText';
import FallingText from './FallingText';
import Particles from './Particles';
import ClickSpark from './ClickSpark';

const WebSightAnalytics = () => {
  const [sequence, setSequence] = useState('glitch');
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);
  
  // Sequence control
  useEffect(() => {
    if (sequence === 'glitch') {
      const timer = setTimeout(() => setSequence('decrypt'), 10000);
      return () => clearTimeout(timer);
    }
    
    if (sequence === 'decrypt') {
      const timer = setTimeout(() => {
        setSequence('website');
        setTimeout(() => setShowContent(true), 1000); // Fade in delay
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [sequence]);

  return (
    <div className="websight-container">
      {/* Sequence Effects */}
      <div className={`sequence-overlay ${sequence !== 'website' ? 'active' : 'fade-out'}`}>
        {sequence === 'glitch' && (
          <LetterGlitch 
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']} 
            className="full-screen"
          />
        )}
        
        {sequence === 'decrypt' && (
          <div className="decrypt-container">
            <DecryptedText 
              text="WebSight Analytics" 
              speed={50}
              maxIterations={10}
              sequential={true}
              revealDirection="center"
              useOriginalCharsOnly={true}
              animateOn="view"
              className="decrypted-text"
              encryptedClassName="encrypted-text"
            />
          </div>
        )}
      </div>
      
      {/* Main Website Content */}
      <div 
        ref={contentRef}
        className={`website-content ${showContent ? 'visible' : ''}`}
      >
        <Particles 
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#2b4539', '#61dca3', '#61b3dc']}
          className="particles-background"
        />
        
        <ClickSpark
          sparkColor="#61dca3"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          extraScale={1.0}
        >
          {/* Navigation */}
          <nav>
            <div className="logo">WebSightAnalytics</div>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#dossier">Evidence Dossier</a>
              <a href="#testimonials">Case Files</a>
            </div>
            <button className="cta-button">Get Forensic Audit</button>
          </nav>
          
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <FallingText
                text="Digital Forensics for Your Website"
                highlightWords={["Digital", "Forensics"]}
                trigger="auto"
                backgroundColor="transparent"
                gravity={1}
                fontSize="3.5rem"
                className="hero-heading"
              />
              <p>We perform forensic-grade audits to expose what your web team won't tell you: phantom work, revenue leaks, and compliance risks. No jargon. Just evidence.</p>
              <div className="hero-buttons">
                <button className="cta-button">Audit My Website</button>
                <button className="outline-button">See Sample Report</button>
              </div>
            </div>
          </section>
          
          {/* Rest of your website content would go here */}
          {/* ... */}
        </ClickSpark>
      </div>
    </div>
  );
};

export default WebSightAnalytics;
