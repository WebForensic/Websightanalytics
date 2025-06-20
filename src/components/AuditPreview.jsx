import React from 'react';

const AuditPreview = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          What Does a WebSight Audit Look Like?
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto">
          These aren’t fluff reports. Every audit is built like a legal case file — so you can hold your team (or yourself) accountable.
        </p>

        <div className="grid md:grid-cols-2 gap-10 pt-12">
          <div className="space-y-4">
            <img src="/sample-audit-1.png" alt="Audit Screenshot 1" className="rounded-xl shadow-lg w-full" />
            <p className="text-gray-400 text-sm">SEO breakdown with crawl errors and index gaps flagged.</p>
          </div>
          <div className="space-y-4">
            <img src="/sample-audit-2.png" alt="Audit Screenshot 2" className="rounded-xl shadow-lg w-full" />
            <p className="text-gray-400 text-sm">Conversion map showing visitor drop-off points and friction zones.</p>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition">
            Request a Sample Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuditPreview;
