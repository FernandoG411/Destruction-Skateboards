import React, { useState } from 'react';
import { initialPosts } from '../data';
import { FeedPost } from '../types';
import { MapPin, MessageCircle, Heart, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeedLocal() {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: FeedPost = {
      id: Date.now().toString(),
      author: "Você (Visitante)",
      authorHandle: "@visitante",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
      content: newPostContent,
      timeAgo: "Agora mesmo",
      likes: 0
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLike = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <section className="flex-1 flex flex-col p-6 bg-brand-dark text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[10px] font-black uppercase text-brand-orange tracking-[0.3em]">Local Feed</h3>
        <span className="flex items-center text-brand-orange text-[10px] font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
          AO VIVO
        </span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto mb-6 pr-2">
        {posts.map((post, index) => (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={post.id} 
            className={`border-l pl-3 py-1 ${index === 0 ? 'border-brand-orange' : 'border-gray-600'}`}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] font-bold">{post.authorHandle}</p>
              <p className="text-[10px] font-serif italic text-gray-400">{post.timeAgo}</p>
            </div>
            <p className="text-xs text-gray-300 leading-snug mb-2">{post.content}</p>
            <div className="flex items-center gap-4 text-gray-500">
              <button 
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1 text-[10px] font-bold hover:text-brand-orange transition"
              >
                <Heart className="w-3 h-3" /> {post.likes}
              </button>
              <button className="flex items-center gap-1 text-[10px] font-bold hover:text-white transition">
                <MessageCircle className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handlePost} className="mt-auto pt-4 border-t border-white/10 flex flex-col">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Diga algo..."
          className="w-full bg-white/5 border border-transparent focus:border-brand-orange p-3 text-xs text-white placeholder-gray-500 uppercase tracking-widest focus:outline-none transition resize-none h-20 mb-2 font-sans"
        />
        <div className="flex justify-between items-center relative">
          <button type="button" className="text-gray-500 hover:text-brand-orange transition flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest">
            <MapPin className="w-3 h-3" /> Pico
          </button>
          <button 
            type="submit"
            disabled={!newPostContent.trim()}
            className="text-[10px] text-white font-bold uppercase tracking-widest hover:text-brand-orange transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            POST
          </button>
        </div>
      </form>
    </section>
  );
}
