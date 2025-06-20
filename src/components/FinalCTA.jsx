import React from 'react';

const FinalCTA = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Still Not Sure? Let the Data Speak.
        </h2>
        <p className="text-lg text-gray-300">
          If your site isn’t showing up, converting, or paying you back — something’s broken. We’ll find it.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition">
            Run a $250 Visibility Scan
          </button>
          <a href="mailto:forensic.team@websightanalytics.com" className="border border-white hover:border-green-500 hover:text-green-400 py-3 px-6 rounded-xl transition">
            Email Our Forensic Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
