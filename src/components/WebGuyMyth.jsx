import React from 'react';

const WebGuyMyth = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          The Lie You’ve Been Sold About Websites
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
          70% of business owners pay someone to “manage” their website — but most can’t tell you what’s being managed.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-400">Why People Hire a “Web Guy”</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>They don’t speak tech and feel out of their depth</li>
              <li>They assume Google rewards “active” websites</li>
              <li>They’re told their site needs constant “maintenance”</li>
              <li>They believe SEO is some secret formula</li>
              <li>They want peace of mind — and overpay for it</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-400">What Web Guys Want You to Believe</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border border-gray-700">
                <thead>
                  <tr className="bg-gray-800 text-gray-400">
                    <th className="px-4 py-2">What They Say</th>
                    <th className="px-4 py-2">What It Actually Means</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-2">“We’re optimizing your SEO”</td>
                    <td className="px-4 py-2">Maybe updated a blog post once</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-2">“Improving your load speed”</td>
                    <td className="px-4 py-2">Ran PageSpeed Insights once</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-2">“You’re getting regular updates”</td>
                    <td className="px-4 py-2">Auto-plugin updates + invoice</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-2">“We track your analytics”</td>
                    <td className="px-4 py-2">They haven’t checked in months</td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="px-4 py-2">“You’re ranking well locally”</td>
                    <td className="px-4 py-2">For irrelevant keywords</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-white">So Why Even Have a Website?</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A website isn’t a brochure — it’s a 24/7 lead machine. If it's not ranking, converting, or even loading right… it’s not an asset. It’s a liability with a monthly invoice.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-center text-xl font-semibold">
          <p>
            If your site isn’t ranking, converting, or even loading right —<br />
            it’s not a website. It’s a liability with a monthly invoice.
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition">
            Run the Audit Your Web Guy Hopes You Don’t
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebGuyMyth;
