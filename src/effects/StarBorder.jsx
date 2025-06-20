import React, { useEffect } from 'react';

const StarBorder = ({ children }) => {
  useEffect(() => {
    const numStars = 150;
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    container.style.zIndex = 0;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = '2px';
      star.style.height = '2px';
      star.style.background = 'white';
      star.style.borderRadius = '50%';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random().toFixed(2);
      star.style.animation = `twinkle ${3 + Math.random() * 2}s infinite ease-in-out`;
      container.appendChild(star);
    }

    const wrapper = document.getElementById('star-border-wrapper');
    if (wrapper) wrapper.appendChild(container);

    return () => {
      if (wrapper && container.parentNode === wrapper) {
        wrapper.removeChild(container);
      }
    };
  }, []);

  return (
    <div id="star-border-wrapper" style={{ position: 'relative', zIndex: 10 }}>
      {children}
    </div>
  );
};

export default StarBorder;
