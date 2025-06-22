// src/effects/ClickSpark.jsx
import React, { useRef, useEffect } from "react";
import "./ClickSpark.css"; // Ensure this CSS file exists if needed

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  children,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create sparks
      sparksRef.current = [];
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * sparkRadius,
          vy: (Math.random() - 0.5) * sparkRadius,
          life: duration,
          size: sparkSize * (0.5 + Math.random()),
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let allDead = true;

        sparksRef.current.forEach((spark, index) => {
          if (spark.life > 0) {
            allDead = false;
            spark.life -= 16; // Approx 60fps frame time
            spark.x += spark.vx;
            spark.y += spark.vy;
            spark.vy += 0.2; // Gravity effect

            ctx.fillStyle = sparkColor;
            ctx.beginPath();
            ctx.arc(spark.x, spark.y, spark.size * (spark.life / duration), 0, Math.PI * 2);
            ctx.fill();
          } else {
            sparksRef.current.splice(index, 1);
          }
        });

        if (!allDead) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    canvas.addEventListener("click", handleClick);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} className="click-spark-canvas" style={{ position: "absolute", top: 0, left: 0, zIndex: 400 }} />
      {children}
    </div>
  );
};

export default ClickSpark;