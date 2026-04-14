import React from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin } from 'lucide-react';
import { SECTIONS } from '../data';

export const Navigation = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[80px] px-6 md:px-15 flex items-center justify-between bg-[#09090b]/80 backdrop-blur-md border-t border-white/10 z-50">
      <div className="font-extrabold text-[14px] tracking-[-0.02em] hidden md:block">ODWAŻNIE.</div>
      <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-[11px] uppercase tracking-[0.1em] flex flex-col items-center gap-1 transition-colors whitespace-nowrap ${
                isActive ? 'text-white' : 'text-[#a1a1aa] hover:text-white/80'
              }`}
            >
              {section.title.split(' ')[0]}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="w-1 h-1 rounded-full bg-gradient-to-br from-[#ff4b2b] to-[#ff416c]"
                />
              )}
            </a>
          );
        })}
      </div>
      <div className="hidden md:flex gap-3">
        <Globe size={20} className="text-white" />
        <MapPin size={20} className="text-white" />
      </div>
    </nav>
  );
};
