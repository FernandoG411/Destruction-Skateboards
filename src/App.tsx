import { useState } from 'react';
import Navbar from './components/Navbar';
import RevistaArticle from './components/RevistaArticle';
import FeedLocal from './components/FeedLocal';
import NewsSection from './components/NewsSection';
import { Videos } from './components/Videos';
import { Agenda } from './components/Agenda';

export default function App() {
  const [currentPage, setCurrentPage] = useState('revista');

  const renderContent = () => {
    switch (currentPage) {
      case 'videos':
        return <Videos />;
      case 'agenda':
        return <Agenda />;
      case 'revista':
      default:
        return <RevistaArticle />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans flex flex-col selection:bg-brand-orange selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* Hero Banner */}
      <div className="w-full max-w-[1440px] mx-auto border-x border-b border-brand-dark">
        <div className="relative w-full h-[40vh] md:h-[60vh] bg-brand-dark overflow-hidden group">
          <img 
            src="https://i.ytimg.com/vi/U4i0BuF4Gyg/hqdefault.jpg" 
            alt="Hero Header" 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
          <div className="absolute top-6 left-6 bg-brand-light text-brand-dark px-3 py-1 text-[10px] font-bold uppercase tracking-widest z-10 border border-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            Exclusive
          </div>
        </div>
      </div>

      {/* Magazine Content Wrapper */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-brand-dark border-x border-brand-dark relative">
        
        {/* Left Column: Article (8 columns) */}
        <div className="col-span-1 lg:col-span-8 bg-brand-light flex flex-col p-6 lg:p-12 lg:pb-24">
          {renderContent()}
        </div>

        {/* Right Column: Interactive Skate Feed & News (4 columns) */}
        <aside className="col-span-1 lg:col-span-4 bg-brand-dark text-white flex flex-col h-full lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <NewsSection />
          <FeedLocal />
        </aside>

      </main>

      {/* Footer / Bottom Rail */}
      <footer className="h-12 border-t border-brand-dark bg-brand-light px-6 md:px-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-dark z-10 w-full max-w-[1440px] mx-auto border-x">
        <div className="hidden md:flex gap-6">
          <span className="hover:text-brand-orange cursor-pointer transition">Features</span>
          <span className="hover:text-brand-orange cursor-pointer transition">Locals Only</span>
          <span className="hover:text-brand-orange cursor-pointer transition">Hardware</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
          <span>Online Hub: Live</span>
        </div>
      </footer>
    </div>
  );
}

