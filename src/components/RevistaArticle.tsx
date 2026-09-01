import React from 'react';
import CommentsSection from './CommentsSection';

export default function RevistaArticle() {
  return (
    <article className="w-full h-full flex flex-col">
      {/* Title */}
      <div className="mb-8 border-b border-brand-dark pb-6">
        <p className="text-[10px] font-black uppercase text-brand-orange tracking-[0.3em] mb-4">Spotlight</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase text-brand-dark">
          Competidores estreia a nova pista de Skateboards
        </h1>
      </div>

      {/* Photo 1 (Context) */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-8 group overflow-hidden bg-gray-300">
        <img 
          src="https://web-assests.monsterenergy.com/mnst/959a6aeb-89bf-40eb-adb7-25783e235d11.png" 
          alt="Skater during sunset" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-700" 
        />
        <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter z-10">
          Cover Story: Concrete Waves
        </div>
      </div>

      <div className="text-brand-dark leading-relaxed font-sans max-w-2xl mx-auto w-full">
        <p className="text-lg md:text-xl font-bold mb-6 font-serif italic text-brand-dark/80">
          A cena local nunca esteve tão viva. Entre ladeiras e praças recém-reformadas, os finais de semana na cidade se tornaram uma verdadeira celebração da cultura do skateboard. Picos clássicos foram revitalizados e novas gerações de skatistas estão dominando a cena com um estilo revolucionário.
        </p>
        <p className="mb-8 text-sm">
          Muitos consideram que o esporte perdeu sua essência com a profissionalização excessiva e o formato olímpico, mas basta uma tarde pelos points não-oficiais da cidade para ver que o espírito DIY (Faça Você Mesmo) continua pulsando forte.
        </p>

        {/* Photo 2 (Close up) */}
        <div className="my-10 relative bg-gray-300 group">
          <img 
            src="https://www.gravedadzero.tv/wp-content/uploads/2015/10/nike-sls-super-crown-2015-04.jpg" 
            alt="Skateboard close up" 
            className="w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">
            Foto 2: Marcas de guerra
          </div>
        </div>

        <p className="mb-10 text-sm">
          Rodinhas gastas, shapes arranhados e trucks polidos pelo concreto. Cada centímetro do equipamento conta a história dos tombos e das manobras aterradas. Conversamos com lendas locais e os famigerados "groms" (a nova garotada de até 15 anos) para entender o que motiva essa febre.
        </p>

        {/* Two up Photos (3 and 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="relative group bg-gray-300">
            <img 
              src="https://www.routeone.co.uk/cdn/shop/files/001173233_1_1200x1200.jpg?v=1761122187" 
              alt="Group of skaters" 
              className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all"
            />
            <div className="absolute bottom-2 right-2 bg-brand-light text-brand-dark px-2 py-1 text-[8px] font-bold uppercase tracking-tighter">
              Foto 3: Sessão em família
            </div>
          </div>
          <div className="relative group bg-gray-300">
            <img 
              src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2014/05/20/1331652578800_2/nyjah-huston-fakie-front-blunt" 
              alt="Skateboard trick" 
              className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all"
            />
            <div className="absolute bottom-2 right-2 bg-brand-light text-brand-dark px-2 py-1 text-[8px] font-bold uppercase tracking-tighter">
              Foto 4: Flip indy
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black italic uppercase text-brand-dark mb-4">A evolução na fita de vídeo</h3>
        <p className="mb-8 text-sm">
          Na época das fitas VHS, a gente consumia o mesmo vídeo por meses até a fita arrebentar. Hoje, os takes são instantâneos, mas a magia de uma 'Video Part' inteira editada ainda possui seu valor. Confira as marretadas registradas pela nossa crew na última semana nas ruas do centro:
        </p>

        {/* Video Embed */}
        <div className="relative w-full aspect-video bg-brand-dark mb-10 flex items-center justify-center group overflow-hidden border border-brand-dark">
           <iframe 
             className="absolute inset-0 w-full h-full z-20"
             src="https://www.youtube.com/embed/F0l3WiRYRDk?si=SP7azEwWqgxVSQz5" 
             title="Skateboarding Video" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen 
           />
           <div className="absolute bottom-2 left-2 z-30 pointer-events-none bg-brand-orange text-white px-2 py-1 text-[10px] font-mono uppercase tracking-widest opacity-90">
             Video: Late Night Sessions 04:12
           </div>
        </div>

        <p className="mb-10 text-sm">
          Esse clipe resume bem. O nível técnico está em estratosfera, mas a resenha no meio fio bebendo um refri gelado ainda é a base da pirâmide dessa cultura.
        </p>

        {/* Photo 5 (Landscape) */}
        <div className="my-10 relative bg-gray-300 group overflow-hidden">
          <img 
            src="https://images.skatesonr.com/film_cover/2024/11/13/553796.jpg" 
            alt="Skatepark landscape" 
            className="w-full h-[400px] object-cover object-top filter grayscale group-hover:grayscale-0 transition-all"
          />
          <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">
            Foto 5: O santuário de concreto
          </div>
        </div>
      </div>

      <div className="border-t border-brand-dark pt-6 flex items-center justify-between pb-8 max-w-2xl mx-auto w-full">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1542466500-dccb2789cbbb?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80" alt="Author" className="w-10 h-10 rounded-full mr-4 grayscale" />
          <div>
            <p className="text-brand-dark font-bold text-xs uppercase tracking-wider">Escrito por Thiago 'Rato'</p>
            <p className="text-brand-dark/60 font-serif italic text-xs">Jornalista & Skatista</p>
          </div>
        </div>
        <div className="text-brand-dark flex gap-4 text-[10px] font-bold uppercase tracking-widest">
          <button className="hover:text-brand-orange transition border-b border-brand-dark hover:border-brand-orange">Compartilhar</button>
        </div>
      </div>

      {/* Comentários Section */}
      <div className="max-w-2xl mx-auto w-full">
        <CommentsSection />
      </div>
      
    </article>
  );
}
