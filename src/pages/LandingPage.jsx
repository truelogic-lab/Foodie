import React from 'react';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import CategoryBar from '../components/sections/CategoryBar';
import PromoBanners from '../components/sections/PromoBanners';
import AboutSection from '../components/sections/AboutSection';
import DeliveryInfo from '../components/sections/DeliveryInfo';
import ProductGrid from '../components/sections/ProductGrid';
import Testimonials from '../components/sections/Testimonials';
import BlogNews from '../components/sections/BlogNews';
import Gallery from '../components/sections/Gallery';
import Reveal from '../components/ui/Reveal';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden">
      <TopBar />
      <Navbar />
      
      <Hero />
      
      <Reveal direction="zoom" delay={0}>
        <CategoryBar />
      </Reveal>

      <Reveal direction="left" delay={100}>
        <PromoBanners />
      </Reveal>

      <Reveal direction="right" delay={100}>
        <AboutSection />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <DeliveryInfo />
      </Reveal>

      <Reveal direction="zoom" delay={100}>
        <ProductGrid />
      </Reveal>

      <Reveal direction="right" delay={100}>
        <Testimonials />
      </Reveal>

      <Reveal direction="left" delay={100}>
        <BlogNews />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <Gallery />
      </Reveal>

      <Footer />
    </div>
  );
}
