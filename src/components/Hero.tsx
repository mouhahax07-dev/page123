import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <header className="pt-10 pb-5 px-6 md:px-15 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-[40px] md:text-[56px] font-black uppercase tracking-[-0.04em] leading-[0.9] mb-2">
          Odważnie.<br />
          <span className="bg-gradient-to-br from-[#ff4b2b] to-[#ff416c] text-transparent bg-clip-text">
            Pomimo utrapienia.
          </span>
        </h1>
      </motion.div>
    </header>
  );
};
