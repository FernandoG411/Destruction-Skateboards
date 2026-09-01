import React from 'react';

export function Agenda() {
  const events = [
    { date: '15 AGO', title: 'Campeonato Amador de Skate', location: 'Pista Pública, São Paulo' },
    { date: '22 AGO', title: 'Video Premiere: Street Dreams', location: 'Cine Skate, Rio de Janeiro' },
    { date: '05 SET', title: 'Go Skateboarding Day', location: 'Praça Roosevelt, São Paulo' },
    { date: '12 SET', title: 'Workshop de Fotografia de Skate', location: 'Galeria 360, Curitiba' },
    { date: '20 OUT', title: 'Encontro Old School', location: 'Bowl do Parque, Belo Horizonte' },
  ];

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16">
      <header className="mb-12 border-b border-brand-dark pb-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 italic">
          AGENDA
        </h1>
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-brand-dark/70">
          Próximos eventos, campeonatos e sessões.
        </p>
      </header>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="border border-brand-dark p-6 hover:bg-brand-orange hover:text-white transition-colors group cursor-pointer bg-white">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div className="font-sans text-3xl font-black italic group-hover:text-white text-brand-orange w-32 shrink-0">
                {event.date}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">{event.title}</h3>
                <p className="font-mono text-xs uppercase font-bold mt-1 group-hover:text-white/80 text-brand-dark/70">{event.location}</p>
              </div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest border border-current px-4 py-2 group-hover:bg-white group-hover:text-brand-orange text-center whitespace-nowrap">
                Ver Detalhes
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
