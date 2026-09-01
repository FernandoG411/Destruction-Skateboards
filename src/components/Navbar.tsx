import React, { useState } from 'react';
import { Menu, Skull, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  setPage?: (page: string) => void;
}

export default function Navbar({ currentPage = 'revista', setPage = () => {} }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative border-b border-brand-dark bg-brand-light z-50 pt-6 pb-4 w-full max-w-[1440px] mx-auto border-x">
      <div className="px-6 md:px-8 flex items-baseline justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => handleNavClick('revista')}>
          <Skull className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" />
          <div className="flex flex-col uppercase">
            <span className="text-2xl md:text-5xl font-black tracking-tighter leading-none italic text-brand-dark">
              DESTRUCTION<span className="text-brand-orange">SKATEBOARDS</span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-brand-dark/60 mt-1">
              ENVOLVES
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-baseline text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark">
          <button onClick={() => handleNavClick('revista')} className={`${currentPage === 'revista' ? 'border-b-2 border-brand-orange pb-0.5 text-brand-orange' : 'hover:text-brand-orange transition'} uppercase font-bold tracking-widest`}>Revista</button>
          <button onClick={() => handleNavClick('agenda')} className={`${currentPage === 'agenda' ? 'border-b-2 border-brand-orange pb-0.5 text-brand-orange' : 'hover:text-brand-orange transition'} uppercase font-bold tracking-widest`}>Agenda</button>
          <button onClick={() => handleNavClick('videos')} className={`${currentPage === 'videos' ? 'border-b-2 border-brand-orange pb-0.5 text-brand-orange' : 'hover:text-brand-orange transition'} uppercase font-bold tracking-widest`}>Vídeos</button>
          <button className="hover:text-brand-orange transition uppercase font-bold tracking-widest">Lodge</button>
          <button className="bg-brand-dark text-brand-light font-bold uppercase tracking-wider px-4 py-1.5 text-[10px] hover:bg-brand-orange transition-colors duration-300 ml-4">
            Assinar
          </button>
        </div>

        <div className="flex flex-row items-center gap-4 md:hidden z-50">
          <button 
            className="text-brand-dark hover:text-brand-orange"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-light border-b border-brand-dark flex flex-col p-6 gap-6 md:hidden z-40 shadow-xl">
          <button onClick={() => handleNavClick('revista')} className={`${currentPage === 'revista' ? 'text-brand-orange' : 'text-brand-dark'} uppercase font-black text-2xl tracking-tighter text-left`}>Revista</button>
          <button onClick={() => handleNavClick('agenda')} className={`${currentPage === 'agenda' ? 'text-brand-orange' : 'text-brand-dark'} uppercase font-black text-2xl tracking-tighter text-left`}>Agenda</button>
          <button onClick={() => handleNavClick('videos')} className={`${currentPage === 'videos' ? 'text-brand-orange' : 'text-brand-dark'} uppercase font-black text-2xl tracking-tighter text-left`}>Vídeos</button>
          <button className="text-brand-dark uppercase font-black text-2xl tracking-tighter text-left">Lodge</button>
          <button className="bg-brand-dark text-brand-light font-bold uppercase tracking-wider px-4 py-3 text-sm hover:bg-brand-orange transition-colors duration-300 w-full text-center mt-4">
            Assinar
          </button>
        </div>
      )}
    </nav>
  );
}
