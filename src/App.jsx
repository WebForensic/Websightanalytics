import React, { useEffect, useState } from 'react';

import ClickSpark from './effects/ClickSpark';
import LetterGlitch from './effects/LetterGlitch';
import HyperSpeed from './effects/HyperSpeed';

import Particles from './effects/Particles';
import StarBorder from './effects/StarBorder';

import AnalyticsHero from './components/AnalyticsHero';
import AuditPreview from './components/AuditPreview';
import WhatYourePayingFor from './components/WhatYourePayingFor';
import WebGuyMyth from './components/WebGuyMyth';
import WhatWeDo from './components/WhatWeDo';
import WhoThisIsFor from './components/WhoThisIsFor';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [phase, setPhase] = useState('glitch'); // 'glitch' → 'hyperspeed' → 'main'

  useEffect(() => {
    const glitchTimer = setTimeout(() => setPhase('hyperspeed'), 10000); // 10s glitch
    const hyperspeedTimer = setTimeout(() => setPhase('main'), 13500); // 3.5s hyper

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(hyperspeedTimer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-hidden">
      <ClickSpark />
      <Particles className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

      {phase === 'glitch' && <LetterGlitch />}
      {phase === 'hyperspeed' && <HyperSpeed />}

      {phase === 'main' && (
        <StarBorder>
          <div className="relative z-10">
            <AnalyticsHero />
            <AuditPreview />
            <WhatYourePayingFor />
            <WebGuyMyth />
            <WhatWeDo />
            <WhoThisIsFor />
            <FinalCTA />
            <Footer />
          </div>
        </StarBorder>
      )}
    </div>
  );
}

export default App;
