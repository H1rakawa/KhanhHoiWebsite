
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-16 bg-[#1a2e1a] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow">
           <path id="circlePathTop" d="M 250, 250 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" fill="transparent" />
           <text className="text-[12px] font-bold fill-yellow-500 uppercase tracking-[0.2em]">
             <textPath href="#circlePathTop">
               "14 Glory to God in the highest, and on earth peace among those with whom he is pleased"
             </textPath>
           </text>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow-reverse">
           <path id="circlePathBottom" d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" fill="transparent" />
           <text className="text-[10px] font-bold fill-yellow-500 uppercase tracking-[0.2em]">
             <textPath href="#circlePathBottom">
               "For behold, I bring you good news of great joy that will be for all the people. 11 For unto you is born this day"
             </textPath>
           </text>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Script Logo */}
        <div className="mb-8">
           <h1 className="text-yellow-400 text-8xl md:text-9xl lg:text-[12rem] font-script drop-shadow-xl select-none">
             Christmas
           </h1>
           <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] mt-[-2rem] md:mt-[-3rem] text-sm md:text-xl">
             @Life.Church
           </p>
        </div>

        {/* Content */}
        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
            December 23-24
          </h2>
          
          <div className="flex flex-col items-center space-y-4">
            <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors uppercase font-bold text-sm tracking-widest">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Find Your Closest Location</span>
            </button>

            <div className="w-full max-w-md relative">
              <select className="w-full bg-[#2a2a2a] text-white border border-white/20 rounded-sm px-4 py-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 uppercase font-bold text-sm tracking-widest">
                <option>Choose a Location</option>
                <option>Oklahoma City - Central</option>
                <option>Tulsa - Downtown</option>
                <option>Dallas - Fort Worth</option>
                <option>Attend Online</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pine branch decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/4 opacity-40">
        <img src="https://picsum.photos/seed/pine/800/800" alt="" className="w-full grayscale brightness-50 mix-blend-screen" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 80s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
