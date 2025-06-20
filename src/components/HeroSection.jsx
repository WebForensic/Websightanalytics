import React from 'react';

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
      WebSight Analytics
    </h1>
    <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
      Every click leaves a trace. We decode the why behind your web data.
    </p>
    <div className="mt-8">
      <a
        href="#audit"
        className="inline-block bg-cyan-400 text-black font-bold px-6 py-3 rounded hover:bg-cyan-300 transition duration-200"
      >
        Run My Site Audit
      </a>
    </div>
  </section>
);

export default HeroSection;
