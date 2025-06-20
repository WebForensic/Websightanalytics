import React from 'react';

const WhatYourePayingFor = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          What Exactly Are You Paying For?
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          Most businesses have a website. Most have a web guy. Few know what they're actually getting.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-400">What You <span className="underline">Think</span> You're Paying For</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>SEO that actually ranks</li>
              <li>Fast-loading, secure site</li>
              <li>Clean analytics & ROI reporting</li>
              <li>A team that’s optimizing every month</li>
              <li>More calls, leads, and sales</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-400">What You’re <span className="underline">Actually</span> Getting</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="text-red-500">✘</span> Blog posts that don’t rank</li>
              <li><span className="text-red-500">✘</span> Plugin updates & vague emails</li>
              <li><span className="text-red-500">✘</span> Broken analytics tags</li>
              <li><span className="text-red-500">✘</span> Vanity metrics (bounce rate, anyone?)</li>
              <li><span className="text-red-500">✘</span> Slow pages, no conversions, no accountability</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-center text-xl font-semibold">
          <p>
            If you’re paying monthly for web work, and can’t clearly point to what it’s <span className="italic">doing</span> — <br />
            you’re not paying for results.<br />
            You’re paying for silence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition">
            Run a Web Risk Audit
          </button>
          <button className="border border-white hover:border-green-500 hover:text-green-400 py-3 px-6 rounded-xl transition">
            See a Real Audit Example
          </button>
          <button className="border border-white hover:border-blue-500 hover:text-blue-400 py-3 px-6 rounded-xl transition">
            Schedule a 10-Minute Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYourePayingFor;
