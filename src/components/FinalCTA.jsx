import StarBorder from './StarBorder';

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to See the Truth?</h2>
      <p className="text-gray-400 mb-8">
        Run a forensic-grade scan of your website in under 2 minutes.
      </p>

      <StarBorder>
        <button className="px-8 py-4 text-cyan-400 font-bold text-lg border border-cyan-400 rounded-lg bg-black hover:scale-105 transition duration-300">
          Initiate Scan
        </button>
      </StarBorder>
    </section>
  );
};

export default FinalCTA;
