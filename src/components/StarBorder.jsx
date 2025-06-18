import { useEffect, useRef } from "react";

const StarBorder = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const border = ref.current;
    if (!border) return;

    const stars = [];
    const count = 20;
    const radius = 100;

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.style.position = "absolute";
      star.style.width = "3px";
      star.style.height = "3px";
      star.style.borderRadius = "50%";
      star.style.background = "#00fff7";
      star.style.opacity = "0.8";

      const angle = (2 * Math.PI * i) / count;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      star.style.transform = `translate(${x}px, ${y}px)`;
      border.appendChild(star);
      stars.push(star);
    }

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 5000;

      stars.forEach((star, i) => {
        const angle = (2 * Math.PI * i) / count + progress * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        star.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative inline-block">
      <div ref={ref} className="absolute inset-0 z-10 pointer-events-none" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default StarBorder;
