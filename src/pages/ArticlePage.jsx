import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import InnerPageLayout from '../components/layout/InnerPageLayout';
import { blogPosts } from '../data/blogData';
import { ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <InnerPageLayout title="Article Not Found" subtitle="We couldn't find the article you're looking for.">
        <div className="text-center py-20">
          <button onClick={() => navigate('/blog')} className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
            Back to News
          </button>
        </div>
      </InnerPageLayout>
    );
  }

  return (
    <InnerPageLayout 
      title={post.category} 
      subtitle={post.date}
    >
      <article className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8">
        
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand-red uppercase tracking-widest mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to News
        </Link>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <h1 className="text-3xl md:text-5xl font-black text-brand-dark leading-tight mb-8">
          {post.title}
        </h1>
        
        <div 
          className="text-gray-600 text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer of Article */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/src/assets/images/logo.png" alt="Foodie" className="h-10 object-contain" />
            <div>
              <p className="font-bold text-brand-dark text-sm">Written by Foodie Team</p>
              <p className="text-xs text-gray-400">Posted on {post.date}</p>
            </div>
          </div>
          <Link to="/blog" className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/30">
            Read More Articles
          </Link>
        </div>
      </article>
    </InnerPageLayout>
  );
}
