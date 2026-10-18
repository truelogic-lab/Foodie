import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <InnerPageLayout 
      title="Latest News" 
      subtitle="Stay up to date with the latest happenings in our kitchen."
    >
      <section className="w-full py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col">
              
              <Link to={`/news/${post.id}`} className="w-full h-64 overflow-hidden mb-6 block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </Link>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-brand-red text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
              </div>

              <Link to={`/news/${post.id}`}>
                <h3 className="font-black text-2xl text-brand-dark leading-tight mb-3 group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <Link to={`/news/${post.id}`} className="mt-auto flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-wider group-hover:text-brand-red transition-colors">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
