import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionData } from '../types';
import { SectionEffect } from './Effects';

// Added imageUrl to the destructured props below
export const ExpandableCard = ({ title, hook, steps, icon: Icon, index, id, theme, imageUrl }: SectionData & { index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative w-full rounded-[20px] p-6 flex flex-col transition-all duration-500 scroll-mt-24 overflow-hidden ${
        isExpanded 
          ? `border ${theme.bgClass} md:row-span-2 shadow-2xl shadow-black/50` 
          : 'bg-white/5 backdrop-blur-md border border-white/10'
      } ${theme.effectType === 'matrix-terminal' && isExpanded ? 'font-mono' : ''}`}
    >
      {isExpanded && <SectionEffect type={theme.effectType} />}

      {/* Label */}
      <div className={`text-[10px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2 relative z-10 ${isExpanded ? theme.textColor : 'text-[#a1a1aa]'}`}>
        <span className={`w-[30px] h-[1px] bg-gradient-to-br ${isExpanded ? theme.accentColor : 'from-[#ff4b2b] to-[#ff416c]'}`}></span>
        {String(index + 1).padStart(2, '0')} {title.split(' ')[0].toUpperCase()}
      </div>

      {/* Title */}
      <h2 className={`text-[20px] font-bold mb-3 relative z-10 text-white`}>
        {title}
      </h2>

      {/* Image Placeholder - UPDATED LOGIC HERE */}
      <AnimatePresence>
  {isExpanded && (
    <motion.div 
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      className="w-full aspect-video rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 relative z-10 backdrop-blur-sm"
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
        />
      ) : (
        <Icon size={32} className={theme.textColor} strokeWidth={1.5} />
      )}
    </motion.div>
  )}
</AnimatePresence>

      {/* Content Area */}
      <div className={`relative text-[14px] leading-[1.6] flex-1 flex flex-col z-10 ${isExpanded ? theme.textColor : 'text-[#a1a1aa]'}`}>
        <p className={isExpanded ? 'opacity-80' : ''}>{hook}</p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex flex-col gap-4"
            >
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="flex items-start gap-3 bg-black/20 p-3 rounded-lg border border-white/5 backdrop-blur-sm"
                  >
                    {StepIcon && <StepIcon size={18} className={`mt-0.5 shrink-0 opacity-80`} />}
                    <p className="text-white/90">{step.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient Fade (only when collapsed) */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#09090b]/80 to-transparent pointer-events-none" 
            />
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-4 pt-4 text-[12px] font-semibold uppercase tracking-[0.05em] flex items-center gap-1 transition-colors w-fit relative z-10 ${
          isExpanded ? 'text-white/50 hover:text-white' : 'text-[#ff416c] hover:text-[#ff4b2b]'
        }`}
      >
        {isExpanded ? 'Zwiń treść ↑' : 'Czytaj więcej →'}
      </button>
    </motion.div>
  );
};