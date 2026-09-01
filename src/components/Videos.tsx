import React from 'react';

export function Videos() {
  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <header className="mb-12 border-b border-brand-dark pb-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 italic">
          VÍDEOS
        </h1>
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-brand-dark/70">
          As últimas produções, vídeo partes e coberturas de eventos.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-video bg-brand-dark border border-brand-dark group overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full z-20"
              src="https://www.youtube.com/embed/F0l3WiRYRDk?si=SP7azEwWqgxVSQz5" 
              title="Nyjah Huston part" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            ></iframe>
          </div>
          <div>
             <h3 className="text-2xl font-bold uppercase tracking-tighter">Fade to Black</h3>
             <p className="font-mono text-xs uppercase text-brand-dark/70">12 Ago 2026 • Street</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-video bg-brand-dark border border-brand-dark group overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full z-20"
              src="https://www.youtube.com/embed/S2i43l2X3R0" 
              title="Thrasher Magazine Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            ></iframe>
          </div>
          <div>
             <h3 className="text-2xl font-bold uppercase tracking-tighter">Skate and Destroy</h3>
             <p className="font-mono text-xs uppercase text-brand-dark/70">05 Set 2026 • Park</p>
          </div>
        </div>
      </div>
    </div>
  );
}
