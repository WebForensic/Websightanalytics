// GlitchHero.jsx
import React, { useEffect, useState } from 'react';
import './GlitchHero.css';

const GlitchHero = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 4000); // 4s then show MainSite

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="glitch-container">
      <h1 className="glitch" data-text="WebSight Analytics">
        WebSight Analytics
      </h1>
    </div>
  );
};

import React from 'react';

export default GlitchHero;
