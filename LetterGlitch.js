
import { useEffect, useState } from "react";
import "./LetterGlitch.css";

const LetterGlitch = ({ glitchSpeed = 100, centerVignette = false, outerVignette = true, smooth = false }) => {
  const [glitchText, setGlitchText] = useState("WebSight Analytics");

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const interval = setInterval(() => {
      setGlitchText(
        glitchText.split("").map(() => (Math.random() < 0.5 ? chars[Math.floor(Math.random() * chars.length)] : " ")).join("")
      );
    }, glitchSpeed);
    return () => clearInterval(interval);
  }, [glitchText, glitchSpeed]);

  return (
    <div className={\`glitch-container \${centerVignette ? "center-vignette" : ""} \${outerVignette ? "outer-vignette" : ""} \${smooth ? "smooth" : ""}\`}>
      <h1 className="glitch-text">{glitchText}</h1>
    </div>
  );
};

export default LetterGlitch;
