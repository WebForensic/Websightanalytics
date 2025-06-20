import React from "react";

const AnalyticsHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-black opacity-40 z-0"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          See Beyond the Surface.
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-300">
          WebSight Analytics gives you forensic visibility into every click, pixel, and behavioral fingerprint on your site.
        </p>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <span className="text-sm text-cyan-400">Forensic Clarity. Military Precision.</span>
      </div>
    </section>
  );
};



export default AnalyticsHero;
