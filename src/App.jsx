import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import TestimonialPage from './pages/TestimonialPage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'
import PromoPopup from './components/ui/PromoPopup'
import ToastNotification from './components/ui/ToastNotification'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PromoPopup />
        <ToastNotification />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
