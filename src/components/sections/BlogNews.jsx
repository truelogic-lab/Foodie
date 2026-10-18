import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { blogPosts } from '../../data/blogData';
import { ArrowRight } from 'lucide-react';

export default function BlogNews() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader 
        title="Our Latest Foods" 
        highlight="News" 
        subtitle="Stay up to date with the latest happenings in our kitchen. Discover new recipes, behind-the-scenes stories, and exclusive taste tests."
      />

      {/* Mobile: Horizontal Scroll | Desktop: Grid */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 md:pb-0 md:grid md:grid-cols-3 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {latestPosts.map((post) => (
          <div 
            key={post.id} 
            className="snap-center shrink-0 w-[75vw] sm:w-[45vw] md:w-full group cursor-pointer flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            
            <Link to={`/news/${post.id}`} className="w-full h-48 md:h-56 overflow-hidden block relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-brand-dark">
                {post.category}
              </div>
            </Link>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-red text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
              </div>

              <Link to={`/news/${post.id}`}>
                <h3 className="font-black text-lg text-brand-dark leading-tight mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-2">
                {post.excerpt}
              </p>

              <Link to={`/news/${post.id}`} className="mt-auto flex items-center gap-1.5 text-brand-dark font-bold text-[10px] uppercase tracking-wider group-hover:text-brand-red transition-colors">
                Read Article <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
