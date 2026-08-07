import { PageType } from '../types';
import { BUSINESS_INFO } from '../data';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  Clock, 
  PlusCircle, 
  ChevronRight, 
  ShieldAlert 
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onScrollToSection: (sectionId: string) => void;
  currentPage: PageType;
}

export default function Footer({ setCurrentPage, onScrollToSection, currentPage }: FooterProps) {
  const handleQuickLink = (pageId: any, isSection = false) => {
    if (isSection) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          onScrollToSection(pageId);
        }, 100);
      } else {
        onScrollToSection(pageId);
      }
    } else {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Business Brand & Tagline */}
          <div id="footer-column-about" className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-med-blue-500 to-accent-green text-white shadow-md">
                <PlusCircle className="w-5 h-5" />
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="pt-2 space-y-3 font-mono text-xs">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-med-blue-500" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank" 
                rel="noreferrer noopener"
                className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Instant Support</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4 text-med-blue-500" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer-column-links" className="space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide border-l-2 border-accent-green pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', id: 'home' as const, section: false },
                { label: 'About Us', id: 'about' as const, section: false },
                { label: 'Our Services', id: 'services' as const, section: false },
                { label: 'Gallery', id: 'gallery' as const, section: false },
                { label: 'Testimonials', id: 'testimonials' as const, section: true },
                { label: 'Frequently Asked Questions', id: 'faq' as const, section: true },
                { label: 'Contact Us', id: 'contact' as const, section: false }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleQuickLink(link.id, link.section)}
                    className="flex items-center space-x-1 hover:text-white hover:translate-x-1 transition-all duration-200 text-slate-400 text-left"
                  >
                    <ChevronRight className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div id="footer-column-services" className="space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide border-l-2 border-accent-green pl-3">
              Pharmacy Sections
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                'Prescription Medicines',
                'General & OTC Medicines',
                'Health Supplements',
                'Baby Care Products',
                'Medical Devices & Monitors',
                'Surgical & First Aid Essentials'
              ].map((service, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-med-blue-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleQuickLink('whatsapp-order')}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-accent-green hover:bg-accent-green-hover text-white px-3 py-1.5 rounded-md transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Create WhatsApp Order</span>
              </button>
            </div>
          </div>

          {/* Working Hours & Map preview */}
          <div id="footer-column-hours" className="space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide border-l-2 border-accent-green pl-3">
              Store Timings
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-300">Mon - Sat:</span>
                  <span className="block font-mono text-xs">08:00 AM - 10:00 PM</span>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-300">Sunday:</span>
                  <span className="block font-mono text-xs">09:00 AM - 04:00 PM</span>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-medium text-slate-300">{BUSINESS_INFO.addressShort}</span>
                  <a 
                    href={BUSINESS_INFO.locationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-med-blue-400 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
                  >
                    <span>Get GPS Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Small embedded google map for location validation */}
        <div id="footer-map-embed" className="w-full h-40 rounded-xl overflow-hidden border border-slate-800 mb-10 shadow-inner">
          <iframe
            title="Maa Jagdamba Medical Location Map"
            src="https://maps.google.com/maps?q=Maa%20Jagdamba%20Medical%20Chariyari%20Makhdumpur%20Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Bar: Legal disclaimer & copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. {' '}
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </p>
            <p className="mt-1 flex items-center justify-center md:justify-start space-x-1 text-[10px] text-slate-600">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Certified under Drug License regulations of Bihar State Pharmacy Council.</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <button 
              onClick={() => { alert("Privacy Policy\n\nYour privacy is highly valuable to us. Maa Jagdamba Medical does not share or sell prescription uploads, mobile numbers, or home addresses with any third party. Your medical data is strictly used to fulfill your specific drug orders."); }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => { alert("Terms & Conditions\n\n1. Prescription medicines require a valid doctor prescription upload.\n2. All return or exchanges require a cash invoice within 7 days.\n3. The WhatsApp ordering mechanism acts as a courier/pickup dispatch helper, not direct telemedicine prescribing."); }}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => { alert("Medical Disclaimer\n\nAll content and products listed on this website are for general informational purposes. They are not substitutes for professional clinical consultation, diagnosis, or targeted hospital treatments. Always consume pharmaceutical medications strictly as directed by a licensed doctor."); }}
              className="hover:text-white transition-colors text-slate-500"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
