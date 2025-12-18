
import React from 'react';

interface CookieBannerProps {
  onClose: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="bg-[#121212] w-full max-w-4xl p-8 rounded-lg shadow-2xl relative border border-white/10">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="space-y-6">
          <p className="text-white/80 text-sm leading-relaxed">
            This website utilizes technologies such as cookies to enable essential site functionality, as well as for analytics, personalization, and targeted advertising. You may change your settings at any time or accept the default settings. You may close this banner to continue with only essential cookies. <a href="#" className="underline hover:text-white">Privacy Policy</a>
          </p>

          <div className="flex flex-wrap gap-6 items-center">
             <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded bg-white/20 border-transparent focus:ring-0" defaultChecked />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Targeted Advertising</span>
             </label>
             <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded bg-white/20 border-transparent focus:ring-0" defaultChecked />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Personalization</span>
             </label>
             <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded bg-white/20 border-transparent focus:ring-0" defaultChecked />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Analytics</span>
             </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={onClose} className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-xs">Save</button>
            <button onClick={onClose} className="flex-1 bg-white text-black hover:bg-white/90 font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-xs">Accept All</button>
            <button onClick={onClose} className="flex-1 border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-xs">Reject Non-Essential</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
