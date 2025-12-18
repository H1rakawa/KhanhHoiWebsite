
import React from 'react';

const NextStepCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="bg-[#242424] p-8 rounded-sm group cursor-pointer hover:bg-[#2a2a2a] transition-colors border border-white/5 flex items-start space-x-6">
    <div className="flex-shrink-0 bg-[#333] p-4 rounded-sm text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const NextSteps: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight">
          Take Your Next Step
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <NextStepCard 
            title="Ask for Prayer" 
            desc="We'd love to pray with you." 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>} 
          />
          <NextStepCard 
            title="Join a LifeGroup" 
            desc="Find the people you can grow, laugh, and pray with." 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
          />
          <NextStepCard 
            title="Find More Next Steps" 
            desc="Discover the next step on your journey." 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" /></svg>} 
          />
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
