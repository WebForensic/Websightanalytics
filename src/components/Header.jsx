import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-cyan-400">
          WebSight Analytics
        </h1>
        <nav className="space-x-6 text-sm">
          <a href="#audit" className="hover:text-cyan-300 transition">Audit</a>
          <a href="#insights" className="hover:text-cyan-300 transition">Insights</a>
          <a href="#testimonials" className="hover:text-cyan-300 transition">Proof</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
