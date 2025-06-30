import React from 'react';
import LetterGlitch from './components/LetterGlitch';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div>
  );
}

export default App;
