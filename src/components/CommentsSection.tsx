import React, { useState } from 'react';
import { initialComments } from '../data';
import { Comment } from '../types';
import { motion } from 'motion/react';

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const added: Comment = {
      id: Date.now().toString(),
      author: "Convidado",
      text: newComment,
      date: "Agora"
    };

    setComments([...comments, added]);
    setNewComment('');
  };

  return (
    <div className="mt-8 border-t border-brand-dark pt-8">
      <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-brand-dark mb-6 italic">
        Comentários <span className="text-brand-orange">({comments.length})</span>
      </h3>

      <div className="space-y-4 mb-8">
        {comments.map((comment, i) => (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={comment.id} 
            className="border-l-2 border-brand-orange pl-3 py-1 bg-brand-dark/5"
          >
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider">{comment.author}</h4>
              <span className="text-brand-dark/60 font-serif italic text-[10px]">{comment.date}</span>
            </div>
            <p className="text-brand-dark text-sm leading-relaxed">{comment.text}</p>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-brand-dark pt-6">
        <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-brand-dark uppercase tracking-widest text-[10px]">Deixe sua opinião</h4>
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="O que achou do artigo?"
          className="w-full bg-transparent border border-brand-dark p-3 text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-orange transition resize-none h-24 mb-3 text-sm font-sans"
        />
        <div className="flex justify-end">
          <button 
            type="submit"
            disabled={!newComment.trim()}
            className="bg-brand-dark text-brand-light font-bold uppercase tracking-widest px-4 py-2 hover:bg-brand-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-[10px]"
          >
            Comentar
          </button>
        </div>
      </form>
    </div>
  );
}
