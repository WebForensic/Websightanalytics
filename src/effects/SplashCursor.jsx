import { useEffect } from "react";

const SplashCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = 9999;
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "background 0.2s ease-out";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.background = "radial-gradient(circle, #00fff7 20%, transparent 80%)";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default SplashCursor;
