const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          WebSight Analytics
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Every click leaves a trace. We decode the why behind your web data.
        </p>
        <button className="mt-8 px-6 py-3 bg-cyan-500 text-black font-bold rounded-full shadow-xl hover:scale-105 transition">
          Start Scan
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
