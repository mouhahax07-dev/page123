import React from 'react';

export const GlitchEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none mix-blend-screen rounded-[20px]">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
    <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scanline"></div>
  </div>
);

export const MatrixEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none rounded-[20px]">
    <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.2)_0%,transparent_100%)]"></div>
    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
  </div>
);

export const VintageNoiseEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none sepia-[.3] rounded-[20px]">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
  </div>
);

export const DustParticlesEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none rounded-[20px]">
     <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
  </div>
);

export const FlashlightEffect = () => (
  <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none rounded-[20px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.15)_0%,transparent_70%)]"></div>
  </div>
);

export const SectionEffect = ({ type }: { type: string }) => {
  switch (type) {
    case 'glitch': return <GlitchEffect />;
    case 'matrix-terminal': return <MatrixEffect />;
    case 'vintage-noise': return <VintageNoiseEffect />;
    case 'dust-particles': return <DustParticlesEffect />;
    case 'flashlight': return <FlashlightEffect />;
    default: return null;
  }
};
