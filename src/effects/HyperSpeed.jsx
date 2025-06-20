import React, { useEffect, useRef } from 'react';

const HyperSpeed = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 500 }, () => ({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * 1000,
      prevX: 0,
      prevY: 0,
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width / 2, canvas.height / 2);

      stars.forEach(star => {
        star.prevX = star.x / star.z * 200;
        star.prevY = star.y / star.z * 200;
        star.z -= 15;

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.z = 1000;
        }

        const x = star.x / star.z * 200;
        const y = star.y / star.z * 200;
        const size = (1 - star.z / 1000) * 2;
        const opacity = 1 - star.z / 1000;

        ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.8})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(star.prevX, star.prevY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center text-white font-mono">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse" 
              style={{textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'}}>
            ENTERING HYPERSPACE
          </h1>
          
          <div className="w-80 h-1 bg-white/20 rounded mx-auto mb-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded animate-loading shadow-lg shadow-cyan-400/50"></div>
          </div>
          
          <p className="text-xl text-cyan-400 animate-pulse">
            Preparing analytics dashboard...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading {
          animation: loading 8s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default HyperSpeed;