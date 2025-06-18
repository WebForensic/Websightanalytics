import React from "react";

const MainSite = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-20 font-sans relative overflow-hidden">
      {/* Background Pulse Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-black opacity-40 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          WebSight Analytics
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Your website is leaking money. We find out why.
          Our forensic diagnostics uncover exactly what your developers and marketers missed — no guesswork, just evidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-sm md:text-base">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-400 transition">
            <h2 className="font-bold text-white mb-2">🚨 Crawl & Index Scan</h2>
            <p className="text-gray-300">See how your site appears to Google — and where it's failing to show up.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400 transition">
            <h2 className="font-bold text-white mb-2">🧠 Behavioral Forensics</h2>
            <p className="text-gray-300">Find out where users drop off, click dead zones, or bounce instantly — and why.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400 transition">
            <h2 className="font-bold text-white mb-2">🛠 Tech Stack Evaluation</h2>
            <p className="text-gray-300">Bloated themes, misconfigured analytics, and outdated plugins — exposed.</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="mailto:forensic.team@websightanalytics.com"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
          >
            Request Free Site Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSite;
