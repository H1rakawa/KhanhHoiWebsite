
import React from 'react';

const NewToLife: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-center bg-black py-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="https://picsum.photos/seed/stage/1920/1080" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">New to Life.Church?</h2>
        <p className="text-white/90 text-xl leading-relaxed mb-12">
          Here you'll find a safe place to explore your beliefs and connect with others. Wherever you are in life, you're welcome here.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-[#2a2a2a] text-white border border-white/20 font-bold py-4 px-10 rounded hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
            Learn More About Us
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white hover:text-yellow-400 transition-colors uppercase font-bold tracking-widest text-xs">
            <span>Attend Life.Church Online</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewToLife;
