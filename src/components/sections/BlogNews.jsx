import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { blogPosts } from '../../data/blogData';
import { ArrowRight } from 'lucide-react';

export default function BlogNews() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader 
        title="Our Latest Foods" 
        highlight="News" 
        subtitle="Stay up to date with the latest happenings in our kitchen. Discover new recipes, behind-the-scenes stories, and exclusive taste tests."
      />

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {latestPosts.map((post) => (
          <div 
            key={post.id} 
            className="snap-center shrink-0 w-[70vw] sm:w-[40vw] md:w-full group cursor-pointer flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            
            {/* Image Container with Red Background & Watermark */}
            <Link to={`/news/${post.id}`} className="w-full aspect-[4/3] overflow-hidden relative flex items-center justify-center p-3 block" style={{ background: 'radial-gradient(circle at center, #FCE4E6 0%, #E31837 100%)' }}>
              
              {/* Watermark */}
              <span className="absolute inset-0 flex items-center justify-center text-[60px] font-black text-white/30 uppercase tracking-tighter rotate-[-15deg] pointer-events-none select-none">
                Foodie
              </span>

              <img 
                src={post.image} 
                alt={post.title} 
                loading="lazy"
                className="w-[80%] h-[80%] object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out relative z-10" 
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest text-brand-dark shadow-sm z-20">
                {post.category}
              </div>
            </Link>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-red text-[9px] font-bold uppercase tracking-widest">{post.date}</span>
              </div>

              <Link to={`/news/${post.id}`}>
                <h3 className="font-black text-base text-brand-dark leading-tight mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <Link to={`/news/${post.id}`} className="mt-auto flex items-center gap-1.5 text-brand-dark font-bold text-[9px] uppercase tracking-wider group-hover:text-brand-red transition-colors">
                Read Article <ArrowRight size={10} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
