import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SitePreloader } from './components/SitePreloader';
import { CartDrawer } from './components/CartDrawer';
import { SiteHeader } from './components/SiteHeader';
import { MobileNavigation } from './components/MobileNavigation';
import { SiteFooter } from './components/SiteFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { DiscreetStickyInquire } from './components/DiscreetStickyInquire';

import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { WeddingsCelebrationsPage } from './pages/WeddingsCelebrationsPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { InquirePage } from './pages/InquirePage';
import { FAQPage } from './pages/FAQPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleOpenMobileNav = useCallback(() => {
    setIsMobileNavOpen(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        {/* 1.5s Luxury Splash Preloader */}
        <SitePreloader />

        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFDFC] text-[#292A25] font-sans antialiased selection:bg-aqua-200 selection:text-aqua-950">
          
          {/* Main Site Header */}
          <SiteHeader
            onOpenMobileNav={handleOpenMobileNav}
            isMobileNavOpen={isMobileNavOpen}
          />

          {/* Slide-Over Shopping Cart Drawer */}
          <CartDrawer />

          {/* Mobile & Tablet Slide-Out Drawer Navigation */}
          <MobileNavigation
            isOpen={isMobileNavOpen}
            onClose={handleCloseMobileNav}
          />

          {/* Main Route Viewport */}
          <main className="flex-1 w-full" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route
                path="/weddings-celebrations"
                element={<WeddingsCelebrationsPage />}
              />
              <Route path="/story" element={<OurStoryPage />} />
              <Route path="/inquire" element={<InquirePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Mobile Discreet Sticky Inquire Pill */}
          <DiscreetStickyInquire />

          {/* Site Footer */}
          <SiteFooter />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
