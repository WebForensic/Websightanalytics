import { useEffect, useState } from 'react';
import ClickSpark from './effects/ClickSpark';
import LetterGlitch from './effects/LetterGlitch';
import HyperSpeed from "./effects/HyperSpeed";
import Home from "./Home";
// Assuming Home.jsx contains the main site layout

function App() {
  const [phase, setPhase] = useState('glitch');

  useEffect(() => {
    const glitchTimer = setTimeout(() => {
      setPhase('hyperspeed');
    }, 10000); // 10 seconds of glitch

    const speedTimer = setTimeout(() => {
      setPhase('main');
    }, 18000); // 8 seconds of hyperspeed

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(speedTimer);
    };
  }, []);

  return (
    <div className="bg-black text-white w-full h-screen overflow-hidden">
      <ClickSpark />
      {phase === 'glitch' && <LetterGlitch />}
      {phase === 'hyperspeed' && <HyperSpeed />}
      {phase === 'main' && <Home />}
    </div>
  );
}

export default App;
