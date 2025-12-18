
import React from 'react';

const BibleAppSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2d2416] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-8 mb-16 lg:mb-0">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#ba2a25] rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
              <span className="text-white font-black text-xs uppercase text-center leading-none">Holy<br/>Bible</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">Bible App</h2>
          </div>
          
          <p className="text-white/80 text-xl leading-relaxed max-w-lg">
            Read or listen to the Bible, explore Bible Plans, create Prayers, study with Friends, and much more—all for free!
          </p>

          <div className="space-y-4">
            <button className="w-full sm:w-auto bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-colors uppercase tracking-widest text-xs">
              Download the Bible App
            </button>
            <div className="flex flex-col items-start pt-2">
               <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm uppercase font-bold tracking-widest italic">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 <span>Follow Life.Church in Bible App</span>
               </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          {/* Simulated Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[320px] h-[640px] bg-black rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white">
               {/* App UI Simulation */}
               <div className="h-full flex flex-col">
                  <div className="p-6 bg-gray-50 flex items-center justify-between border-b">
                    <div className="font-black text-sm italic">LIFE.CHURCH</div>
                    <div className="flex space-x-2">
                      <div className="w-12 h-6 bg-black rounded text-[10px] text-white flex items-center justify-center font-bold">Following</div>
                      <div className="w-12 h-6 border border-black rounded text-[10px] flex items-center justify-center font-bold">My Church</div>
                    </div>
                  </div>
                  <div className="flex-grow p-4 space-y-4 overflow-hidden">
                    <img src="https://picsum.photos/seed/app/600/800" alt="" className="w-full rounded-xl shadow-lg" />
                    <div className="space-y-2">
                       <h4 className="font-black text-xl">Featured Plan</h4>
                       <div className="bg-gray-100 h-32 rounded-xl"></div>
                    </div>
                  </div>
               </div>
            </div>
            {/* Dynamic Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl"></div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/10 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BibleAppSection;
