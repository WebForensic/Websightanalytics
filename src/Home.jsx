// src/Home.jsx
import React from 'react';
import AnalyticsHero from './components/AnalyticsHero.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnalyticsHero />
      {/* Other sections */}
    </div>
  );
};

export default Home;