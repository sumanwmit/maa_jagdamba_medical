import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import FloatingControls from './components/FloatingControls';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { PageType } from './types';
import { BUSINESS_INFO } from './data';
import { X, ShieldAlert, BadgeInfo } from 'lucide-react';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // Selected medicine prefill channel from Home search to WhatsApp Order form
  const [selectedMedicine, setSelectedMedicine] = useState<string>('');

  // Dark Mode preference persisted in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('maajagdamba_theme_dark');
    return saved ? JSON.parse(saved) : false;
  });

  // Custom IFrame-safe dialog modal to replace window.alert
  const [appModal, setAppModal] = useState<{ title: string; content: string } | null>(null);

  // Apply dark class to root document element
  useEffect(() => {
    localStorage.setItem('maajagdamba_theme_dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll helper for internal homepage anchors (e.g., Testimonials, FAQ)
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Safe global trigger to display policy or license terms inside custom dialog
  const triggerAppModal = (title: string, content: string) => {
    setAppModal({ title, content });
  };

  // Render view depending on routing selection
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            setCurrentPage={setCurrentPage} 
            setSelectedMedicineForOrder={setSelectedMedicine} 
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      case 'whatsapp-order':
        return (
          <WhatsAppOrderForm 
            selectedMedicine={selectedMedicine} 
            setSelectedMedicine={setSelectedMedicine} 
          />
        );
      default:
        return <HomeView setCurrentPage={setCurrentPage} setSelectedMedicineForOrder={setSelectedMedicine} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased flex flex-col justify-between transition-colors duration-300">
      
      {/* 1. SEO Head Injector (React 19 Native Hoisting) */}
      <SEO page={currentPage} />

      {/* 2. Top Notification Bar for emergencies */}
      <div id="announcement-banner" className="bg-gradient-to-r from-med-blue-600 to-accent-green text-white py-2 px-4 text-center text-xs font-semibold font-display tracking-wide relative z-50 flex items-center justify-center space-x-1.5 shadow-sm">
        <ShieldAlert className="w-4 h-4 shrink-0 animate-pulse text-yellow-300" />
        <span>✨ Call/WhatsApp order helpline available 24/7 for urgent clinical needs: <strong>{BUSINESS_INFO.phoneFormatted}</strong></span>
      </div>

      {/* 3. Sticky Header Navbar */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onScrollToSection={handleScrollToSection}
      />

      {/* 4. Active Main Page View Layout */}
      <main id="main-content-layout" className="flex-grow pt-16 pb-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {renderActiveView()}
        </div>
      </main>

      {/* 5. Custom Reusable Policy Dialog Modal (100% Sandbox/IFrame Friendly) */}
      {appModal && (
        <div 
          id="global-alert-dialog" 
          className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setAppModal(null)}
        >
          <div 
            id="global-dialog-box"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-slate-100 dark:border-slate-800 text-left"
          >
            <button
              id="close-global-dialog"
              onClick={() => setAppModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="flex items-center space-x-3 mb-4 text-med-blue-600 dark:text-med-blue-400">
              <BadgeInfo className="w-6 h-6 shrink-0" />
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {appModal.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-line">
              {appModal.content}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
              <button
                id="global-dialog-acknowledge"
                onClick={() => setAppModal(null)}
                className="px-5 py-2.5 rounded-xl font-bold bg-med-blue-500 hover:bg-med-blue-600 text-white transition-all shadow-md text-xs sm:text-sm"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Comprehensive Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onScrollToSection={handleScrollToSection}
        currentPage={currentPage}
      />

      {/* 7. Floating Dial, WhatsApp, and Scroll-to-Top nodes */}
      <FloatingControls setCurrentPage={setCurrentPage} />

    </div>
  );
}
