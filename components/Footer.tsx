
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white">
      {/* Resource Bar */}
      <div className="bg-[#1a1a1a] border-b border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/80 font-medium">Get free resources for your church through Life.Church Open Network.</p>
          <button className="bg-white/10 hover:bg-white text-white hover:text-black transition-all font-bold px-8 py-3 rounded uppercase tracking-widest text-xs border border-white/10">
            Explore Open Network
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Branding & Main Links */}
          <div className="space-y-6">
            <div className="font-black text-2xl italic tracking-tighter">LIFE.CHURCH</div>
            <p className="text-white/50 text-xs">
              Attend <a href="#" className="text-white hover:underline">Life.Church Online</a> or a <a href="#" className="text-white hover:underline">Life.Church location</a>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <a href="#" className="hover:text-white transition-colors">Watch</a>
              <a href="#" className="hover:text-white transition-colors">Locations</a>
              <a href="#" className="hover:text-white transition-colors">Give</a>
              <a href="#" className="hover:text-white transition-colors">Tools</a>
              <a href="#" className="hover:text-white transition-colors">For Churches</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Shop</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-colors flex items-center justify-center">
                 <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
               </div>
             ))}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] text-white/40 font-bold uppercase tracking-widest">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Vulnerability Disclosure Program</a>
            <a href="#" className="hover:text-white">Cookie Preferences</a>
          </div>
          <p>© 2024-2025 Life.Church. All rights reserved.</p>
        </div>

        {/* Related Content */}
        <div className="mt-12 bg-black/40 p-6 rounded text-[10px] uppercase tracking-[0.2em] flex flex-wrap gap-x-8 gap-y-4">
          <span className="text-white/20">Related Content:</span>
          <a href="#" className="text-white/60 hover:text-white">Prayers for Strength</a>
          <a href="#" className="text-white/60 hover:text-white">Example Prayers for Healing</a>
          <a href="#" className="text-white/60 hover:text-white">How to Study the Bible</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
