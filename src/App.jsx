import React, { useState, useEffect } from 'react';
import LetterGlitch from "./effects/LetterGlitch";
import Header from '<div className="" />components./Header'; // Your nav/header component

const GLITCH_DURATION = 10000; // 10 seconds

const App = () => {
  const [showGlitch, setShowGlitch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlitch(false), GLITCH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans">
      {showGlitch ? (
        <div
          style={{
            position: 'fixed',
            zIndex: 9999,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '90vw', height: '60vh', maxWidth: 1000, maxHeight: 400, position: 'relative' }}>
            <LetterGlitch
              glitchColors={['#0ff', '#2b4539', '#61dca3', '#61b3dc']}
              glitchSpeed={40}
              smooth={true}
              centerVignette={false}
              outerVignette={true}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  letterSpacing: '0.09em',
                  color: '#0ff',
                  textShadow: '0 0 20px #0ff, 0 0 40px #000',
                  fontFamily: 'monospace',
                  opacity: 0.96,
                  userSelect: 'none',
                }}
              >
                WebSight Analytics
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main className="pt-24">
            <section className="max-w-4xl mx-auto text-center py-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                WebSight Analytics
              </h1>
              <p className="text-lg text-gray-300">
                Forensic web audits that expose what your “web team” missed. Is your website costing you money, or making it?
              </p>
            </section>
            {/* Add other homepage sections here */}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
