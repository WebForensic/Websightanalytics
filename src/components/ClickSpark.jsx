import React from 'react';
// Updated ClickSpark Component with toggle, sound, and section color variants
import { useRef, useEffect, useCallback, useState } from "react";

const sparkSounds = [
  new Audio("/sounds/spark1.mp3"),
  new Audio("/sounds/spark2.mp3")
];

const sectionColors = {
  default: "#fff",
  hero: "#94f9e5",
  about: "#f0c674",
  contact: "#f56c6c"
};

const ClickSpark = ({
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const startTimeRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  const getSparkColor = () => {
    const section = document.elementFromPoint(window.innerWidth / 2, window.scrollY + 100)?.dataset?.section;
    return sectionColors[section] || sectionColors.default;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(parent);
    resizeCanvas();

    return () => ro.disconnect();
  }, []);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear": return t;
        case "ease-in": return t * t;
        case "ease-in-out": return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default: return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationId;
    const draw = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = spark.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [sparkSize, sparkRadius, duration, easeFunc, extraScale]);

  const handleClick = (e) => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();

    const sparkColor = getSparkColor();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
      color: sparkColor
    }));

    sparksRef.current.push(...newSparks);
    sparkSounds[Math.floor(Math.random() * sparkSounds.length)]?.play?.();
  };

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <button
        onClick={() => setEnabled(!enabled)}
        className="absolute top-2 right-2 z-50 text-xs px-2 py-1 bg-black text-white rounded shadow"
      >
        Spark: {enabled ? "On" : "Off"}
      </button>
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 select-none pointer-events-none"
      />
      {children}
    </div>
  );
};

export default ClickSpark;
