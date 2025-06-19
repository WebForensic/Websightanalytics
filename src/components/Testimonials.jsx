const Testimonials = () => {
  const feedback = [
    { name: "Marcus L.", quote: "They exposed the holes in our site in 24 hours. Unreal." },
    { name: "Tasha V.", quote: "My dev told me one thing. This showed the truth. Game over." },
    { name: "Dr. K.", quote: "We recovered 12k in refund credits after the vendor autopsy report." },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-900 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">Client Reports</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedback.map((f, idx) => (
          <div key={idx} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-300">"{f.quote}"</p>
            <p className="mt-4 text-cyan-400 font-semibold">– {f.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
