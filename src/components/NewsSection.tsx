import React from 'react';
import { initialNews } from '../data';
import { ChevronRight } from 'lucide-react';

export default function NewsSection() {
  return (
    <section className="p-6 border-b border-white/10 bg-brand-dark text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[10px] font-black uppercase text-brand-orange tracking-[0.3em]">
          Novidades
        </h3>
        <button className="flex items-center text-brand-orange hover:text-white font-bold text-[10px] uppercase tracking-widest transition">
           Ver todas <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <ul className="space-y-6">
        {initialNews.map((news) => (
          <li key={news.id} className="group cursor-pointer flex gap-4 items-start">
            <div className="w-16 h-16 shrink-0 overflow-hidden bg-brand-dark filter grayscale group-hover:grayscale-0 transition-all">
              <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] font-serif italic text-gray-400 mb-1">{news.date} — {news.category}</p>
              <h4 className="text-sm font-bold leading-tight group-hover:text-brand-orange transition-colors">
                {news.title}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
