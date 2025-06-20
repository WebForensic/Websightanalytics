const AuditModules = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Forensic Audit Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Conversion Leak Detection", desc: "Pinpoint drop-offs in your user flow." },
          { title: "Performance Heatmap", desc: "See what slows your pages down." },
          { title: "Vendor Autopsy", desc: "Find out what you're really paying for." },
        ].map((tool, index) => (
          <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-cyan-400">{tool.title}</h3>
            <p className="text-gray-400 mt-3">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';

export default AuditModules;
