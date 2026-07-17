import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data';
import { 
  Phone, 
  MessageSquare, 
  ArrowUp 
} from 'lucide-react';

interface FloatingControlsProps {
  setCurrentPage: (page: PageType) => void;
}

export default function FloatingControls({ setCurrentPage }: FloatingControlsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3.5">
      
      {/* Back to Top */}
      {showScroll && (
        <button
          id="scroll-to-top-button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 text-white shadow-xl hover:bg-slate-800 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 border border-slate-700/50 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Now */}
      <a
        id="floating-call-now-button"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-med-blue-600 text-white shadow-xl hover:bg-med-blue-700 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group relative border border-med-blue-500/20"
        aria-label="Call store"
      >
        <Phone className="w-5.5 h-5.5" />
        <span className="absolute right-14 scale-0 group-hover:scale-100 bg-slate-950 text-white text-xs font-mono py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap transition-all origin-right">
          Call Now: {BUSINESS_INFO.phoneFormatted}
        </span>
      </a>

      {/* Floating WhatsApp Order */}
      <button
        id="floating-whatsapp-order-button"
        onClick={() => {
          setCurrentPage('whatsapp-order');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200 group relative border border-emerald-400/20 animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Order on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        {/* Pulsing Outer Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 -z-10 animate-ping" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-950 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-lg whitespace-nowrap transition-all origin-right">
          Order via WhatsApp 💬
        </span>
      </button>

    </div>
  );
}
