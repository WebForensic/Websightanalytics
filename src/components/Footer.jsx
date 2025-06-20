import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-500 text-sm py-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© 2025 WebSight Analytics. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/terms" className="hover:text-white transition">Terms</a>
          <a href="/privacy" className="hover:text-white transition">Privacy</a>
          <a href="mailto:forensic.team@websightanalytics.com" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
