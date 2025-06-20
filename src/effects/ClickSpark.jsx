import React, { useEffect, useState } from 'react';

const ClickSpark = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSpark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setSparks(prev => [...prev, newSpark]);
      
      // Remove spark after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(spark => spark.id !== newSpark.id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: spark.x,
            top: spark.y,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="spark-particle"
              style={{
                '--angle': `${(360 / 8) * i}deg`,
                '--delay': `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}
      
      <style jsx>{`
        .spark {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        
        .spark-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0);
          border-radius: 50%;
          animation: sparkle 0.6s ease-out forwards;
          animation-delay: var(--delay);
          transform: rotate(var(--angle));
        }
        
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: rotate(var(--angle)) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle)) translateY(-30px) scale(0);
          }
        }
      `}</style>
    </>
  );
};

export default ClickSpark;