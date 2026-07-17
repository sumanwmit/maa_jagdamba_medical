import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  PlusCircle 
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  onScrollToSection
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', type: 'page' as const },
    { id: 'about', label: 'About Us', type: 'page' as const },
    { id: 'services', label: 'Services', type: 'page' as const },
    { id: 'gallery', label: 'Gallery', type: 'page' as const },
    { id: 'testimonials', label: 'Testimonials', type: 'section' as const },
    { id: 'faq', label: 'FAQ', type: 'section' as const },
    { id: 'contact', label: 'Contact', type: 'page' as const },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.type === 'page') {
      setCurrentPage(item.id as PageType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // It's a home page section
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for page change to render before scrolling
        setTimeout(() => {
          onScrollToSection(item.id);
        }, 100);
      } else {
        onScrollToSection(item.id);
      }
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-header shadow-md py-3 border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-white/90 dark:bg-slate-900/90 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button 
            id="logo-button"
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-2.5 text-left group transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-med-blue-500 to-accent-green text-white shadow-md shadow-med-blue-500/20 group-hover:shadow-lg group-hover:shadow-accent-green/30 transition-all">
              <PlusCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="block font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[10px] font-mono font-medium tracking-wide text-accent-green dark:text-emerald-400 mt-0.5 uppercase">
                PHARMACY & MEDICAL STORE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isPageActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isPageActive
                      ? 'bg-med-blue-500/10 text-med-blue-600 dark:bg-med-blue-500/20 dark:text-med-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Call Now button */}
            <a
              id="header-call-button"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-med-blue-500 text-med-blue-600 hover:bg-med-blue-500 hover:text-white transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp button */}
            <button
              id="header-whatsapp-button"
              onClick={() => setCurrentPage('whatsapp-order')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-green hover:bg-accent-green-hover text-white transition-all duration-200 shadow-md shadow-accent-green/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Actions: Dark Mode + Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5.5 h-5.5 text-amber-400" /> : <Moon className="w-5.5 h-5.5" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-overlay"
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 max-w-sm bg-white dark:bg-slate-900 p-6 shadow-2xl transition-transform duration-300 transform border-l border-slate-100 dark:border-slate-800 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <PlusCircle className="w-6 h-6 text-accent-green" />
            <span className="font-display font-bold text-slate-900 dark:text-white">Menu</span>
          </div>
          <button
            id="close-mobile-menu"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav id="mobile-nav-list" className="space-y-2 mb-8">
          {navItems.map((item) => {
            const isPageActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  isPageActive
                    ? 'bg-med-blue-500/10 text-med-blue-600 dark:bg-med-blue-500/20 dark:text-med-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons inside Drawer */}
        <div className="space-y-3.5 pt-6 border-t border-slate-100 dark:border-slate-800">
          <a
            id="mobile-drawer-call-button"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-bold bg-med-blue-500 text-white shadow-lg shadow-med-blue-500/10 hover:bg-med-blue-600 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <button
            id="mobile-drawer-whatsapp-button"
            onClick={() => { setMobileMenuOpen(false); setCurrentPage('whatsapp-order'); }}
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-bold bg-accent-green text-white shadow-lg shadow-accent-green/10 hover:bg-accent-green-hover transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Order via WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
