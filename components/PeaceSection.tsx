
import React from 'react';

const PeaceSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#fdfaf5] overflow-hidden">
      {/* Curved Text Heading */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-[-20px] md:mb-[-40px]">
          <svg viewBox="0 0 500 200" className="w-full max-w-lg mx-auto">
            <path id="curve" d="M 50, 150 A 200, 200 0 0, 1 450, 150" fill="transparent" />
            <text className="curved-text text-3xl md:text-5xl fill-[#1a2e1a]">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Peace Begins Here
              </textPath>
            </text>
          </svg>
        </div>

        <div className="relative z-10 space-y-8 px-4 mt-8">
          <p className="text-[#1a2e1a]/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Peace came first to people who needed it most. Shepherds in the dark. Then heaven broke through. This Christmas, experience the peace that transforms. Let's celebrate Christmas together.
          </p>

          <button className="bg-black text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 uppercase tracking-widest text-sm">
            Find a Service Time
          </button>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-1/4 left-10 text-yellow-500/20">
         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
      <div className="absolute bottom-1/4 right-10 text-yellow-500/20">
         <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
    </section>
  );
};

export default PeaceSection;
