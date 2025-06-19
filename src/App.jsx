import React from 'react';
import ClickSpark from './effects/ClickSpark';
import LetterGlitch from './effects/LetterGlitch';
import HeroSection from './components/HeroSection';
import AuditModules from './components/AuditModules';
import InsightStrip from './components/InsightStrip';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full relative overflow-hidden font-sans">
      <ClickSpark
        sparkColor="#00ffff"
        sparkSize={5}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
        easing="ease-out"
        extraScale={1.0}
      >
        {/* Intro Glitch Overlay */}
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <LetterGlitch glitchSpeed={40} centerVignette={true} />
        </motion.div>

        {/* Main Site Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7, duration: 1 }}
        >
          <HeroSection />
          <AuditModules />
          <InsightStrip />
          <Testimonials />
          <FinalCTA />
        </motion.div>
      </ClickSpark>
    </div>
  );
};

export default App;
