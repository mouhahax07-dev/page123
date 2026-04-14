import React from 'react';
import { SECTIONS } from '../data';

export const ScrollHint = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="fixed right-6 md:right-15 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-40 hidden lg:flex">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              isActive ? 'h-5 bg-gradient-to-br from-[#ff4b2b] to-[#ff416c]' : 'h-1.5 bg-white/10 hover:bg-white/30'
            }`}
            aria-label={section.title}
          />
        );
      })}
    </div>
  );
};
