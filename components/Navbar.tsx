
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="font-black text-2xl tracking-tighter italic">LIFE.CHURCH</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-500 transition-colors">Attend Online <span className="block text-[8px] text-yellow-500">Live Now</span></a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Media</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Locations</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Give</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Who We Are</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Worship</a>
        </div>

        {/* User Tools */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="hidden sm:inline">Log In</span>
          </button>
          <button className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
