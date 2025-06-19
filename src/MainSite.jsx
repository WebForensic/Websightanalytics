import React from 'react';

const MainSite = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-20 font-sans">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
      
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Most businesses don’t need a new website. They need to know where the
          current one is bleeding traffic, misreporting KPIs, or sabotaging conversions.
          We uncover the truth your “web guy” won’t.
        </p>
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-xl shadow hover:scale-105 transition-all">
          Run Your Audit
        </button>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Visibility Breakdown</h2>
          <p className="text-gray-400">
            Find out where your traffic is leaking, which cities you’re invisible in, and how much revenue is left on the table.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Conversion Blackhole</h2>
          <p className="text-gray-400">
            Identify the moments your visitors bounce—whether it's slow load time, bad UX, or misleading copy.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Technical Exposure</h2>
          <p className="text-gray-400">
            We scan for malware, indexing gaps, and silent vendor negligence—things your dev team won’t admit to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSite;
