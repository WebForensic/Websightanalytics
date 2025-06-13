
import React from "react";
import ReactDOM from "react-dom/client";
import TrueFocus from "./TrueFocus";
import LetterGlitch from "./LetterGlitch";
import "./TrueFocus.css";
import "./LetterGlitch.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
    <TrueFocus 
      sentence="Digital Forensic Audit"
      manualMode={false}
      blurAmount={5}
      borderColor="yellow"
      animationDuration={2}
      pauseBetweenAnimations={1}
    />
  </>
);
