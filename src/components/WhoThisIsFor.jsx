import React from 'react';

const WhoThisIsFor = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Who This Is For
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          If you're paying someone to manage your website but don’t know what they’re doing — this is for you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left pt-12">
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">🛠 Small Business Owners</h3>
            <p className="text-gray-300">You pay a “web guy” monthly and want to know what you’re actually getting.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">🛒 E-Commerce Brands</h3>
            <p className="text-gray-300">You’re running ads, but your site’s bounce rate is killing conversions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">🏢 Local Service Businesses</h3>
            <p className="text-gray-300">You should be ranking #1 for your city — but you’re buried behind competitors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
