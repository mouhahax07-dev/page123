import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExpandableCard } from './components/ExpandableCard';
import { Navigation } from './components/Navigation';
import { ScrollHint } from './components/ScrollHint';
import { SECTIONS } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -40% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-[#ff4b2b]/30 selection:text-white pb-[100px] relative flex flex-col">
      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <Hero />
      
      <main className="px-6 md:px-15 relative z-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-row-dense items-start">
          {SECTIONS.map((section, index) => (
            <ExpandableCard key={section.id} {...section} index={index} />
          ))}
        </div>
      </main>

      <ScrollHint activeSection={activeSection} />
      <Navigation activeSection={activeSection} />
    </div>
  );
}
