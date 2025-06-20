import React from 'react';

const Pricing = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Pay for Truth — Not Promises
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto">
          No retainers. No fluff. Just forensic clarity and hard proof.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-12">
          {/* Plan 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-green-400">Visibility Scan</h3>
            <p className="text-4xl font-bold text-white">$250</p>
            <p className="text-gray-300">Quick clarity on site speed, SEO, and visibility gaps.</p>
          </div>

          {/* Plan 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md space-y-4 border-2 border-green-500">
            <h3 className="text-2xl font-semibold text-green-400">Vendor Autopsy</h3>
            <p className="text-4xl font-bold text-white">$500</p>
            <p className="text-gray-300">Get receipts. Find out what your team’s really been doing.</p>
          </div>

          {/* Plan 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-green-400">Vigilance Monitoring</h3>
            <p className="text-4xl font-bold text-white">$299/mo</p>
            <p className="text-gray-300">Ongoing oversight + alerts when traffic or performance slips.</p>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition">
            Start with a $250 Scan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
