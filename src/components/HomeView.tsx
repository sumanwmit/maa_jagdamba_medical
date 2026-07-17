import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  BUSINESS_INFO, 
  HERO_IMAGE_PATH, 
  SERVICES, 
  CATEGORIES, 
  WHY_CHOOSE_US, 
  TRUST_METRICS, 
  WORKING_PROCESS, 
  TESTIMONIALS, 
  FAQS 
} from '../data';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Search, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Clock, 
  ShieldCheck, 
  CornerDownRight, 
  HelpCircle, 
  Activity, 
  Plus, 
  Heart,
  Calendar,
  Layers, Disc, Droplet, Syringe, Cpu, Sparkles, Smile, Baby, Shield, Accessibility, HeartPulse
} from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedMedicineForOrder: (med: string) => void;
}

// Popular sample medicines for interactive search
const SAMPLE_MEDICINES = [
  { name: "Paracetamol 650mg (Dolo)", category: "Tablets", purpose: "Fever & Pain Relief", brand: "Micro Labs", price: "₹30 per strip" },
  { name: "Metformin 500mg (Glycomet)", category: "Tablets", purpose: "Diabetic Care / Blood Sugar", brand: "USV Pvt Ltd", price: "₹25 per strip" },
  { name: "Amoxicillin 500mg (Mox)", category: "Capsules", purpose: "Prescription Antibiotic", brand: "Sun Pharma", price: "₹110 per strip" },
  { name: "Pantoprazole 40mg (Pantocid)", category: "Tablets", purpose: "Acidity & Gastric Relief", brand: "Alkem", price: "₹85 per strip" },
  { name: "Digene Gel Mint (200ml)", category: "Syrups & Liquids", purpose: "Acidity & Gas Relief", brand: "Abbott", price: "₹140 per bottle" },
  { name: "Volini Pain Relief Spray", category: "Clinical Skincare", purpose: "Joint & Muscle Pain Relief", brand: "Sun Pharma", price: "₹190 per piece" },
  { name: "Becosules Multivitamin", category: "Capsules", purpose: "Vitamin B-Complex Supplement", brand: "Pfizer", price: "₹50 per strip" },
  { name: "Limcee Vitamin C 500mg", category: "Tablets", purpose: "Immunity Booster Chewable", brand: "Abbott", price: "₹28 per strip" },
  { name: "MamyPoko Pants Diapers (L)", category: "Baby Care Essentials", purpose: "Baby Diapering", brand: "Unicharm", price: "₹699 per pack" },
  { name: "Himalaya Gentle Baby Wipes", category: "Baby Care Essentials", purpose: "Baby Hygiene & Care", brand: "Himalaya", price: "₹180 per pack" },
  { name: "Accu-Chek Active Sugar Monitor", category: "Medical Devices", purpose: "Blood Glucose Diagnostics", brand: "Roche", price: "₹1599 per kit" },
  { name: "Omron Hem-7120 BP Monitor", category: "Medical Devices", purpose: "Automated Blood Pressure Monitor", brand: "Omron", price: "₹2200 per monitor" },
  { name: "Crepe Bandage (6cm x 4m)", category: "Orthopedic Support", purpose: "Sprains & Orthopedic Support", brand: "Dynamic", price: "₹120 per roll" },
  { name: "Dettol Liquid Antiseptic (500ml)", category: "Personal Hygiene", purpose: "Wound Disinfection & First Aid", brand: "Reckitt Benckiser", price: "₹225 per bottle" }
];

export default function HomeView({ setCurrentPage, setSelectedMedicineForOrder }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof SAMPLE_MEDICINES>([]);
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Search filter
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const filtered = SAMPLE_MEDICINES.filter(med => 
        med.name.toLowerCase().includes(query.toLowerCase()) ||
        med.category.toLowerCase().includes(query.toLowerCase()) ||
        med.purpose.toLowerCase().includes(query.toLowerCase()) ||
        med.brand.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleQuickInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) {
      alert("Please fill in your Name and Mobile Number to submit inquiry.");
      return;
    }
    setInquirySubmitted(true);
    setTimeout(() => {
      // Create WhatsApp message for quick inquiry
      const text = `Hello Maa Jagdamba Medical,\n\nI have a quick inquiry from your website:\nName: ${inquiryName}\nPhone: ${inquiryPhone}\nMessage: ${inquiryMessage || 'Interested in genuine medicines.'}`;
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 800);
  };

  const handleOrderMedicine = (medName: string) => {
    setSelectedMedicineForOrder(medName);
    setCurrentPage('whatsapp-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  // Helper to render lucide icon dynamically
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-med-blue-500" />;
      case 'Disc': return <Disc className="w-5 h-5 text-indigo-500" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-sky-500" />;
      case 'Syringe': return <Syringe className="w-5 h-5 text-red-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-500" />;
      case 'Baby': return <Baby className="w-5 h-5 text-pink-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-500" />;
      case 'Accessibility': return <Accessibility className="w-5 h-5 text-purple-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-cyan-500" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div id="home-view" className="space-y-20">
      
      {/* 1. HERO SECTION & MEDICINE SEARCH BOX */}
      <section 
        id="hero-section" 
        className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-slate-900 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE_PATH} 
            alt="Maa Jagdamba Medical Store Hero" 
            className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-accent-green/20 border border-accent-green/30 px-3.5 py-1.5 rounded-full text-accent-green dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">100% Genuine Certified Drugs</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                Maa Jagdamba <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  Medical Store
                </span>
              </h1>

              <p className="font-display text-lg sm:text-xl font-medium text-slate-300">
                Your Trusted Pharmacy in Tekari & Makhdumpur
              </p>

              <p className="text-base text-slate-400 max-w-xl font-sans leading-relaxed">
                Providing authenticated prescription medicines, general healthcare essentials, sterile surgical supplies, baby products, personal hygiene and diabetic care devices at highly discounted pricing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  id="hero-call-now"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center space-x-2 bg-med-blue-500 hover:bg-med-blue-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-med-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <button
                  id="hero-whatsapp-order"
                  onClick={() => setCurrentPage('whatsapp-order')}
                  className="inline-flex items-center space-x-2 bg-accent-green hover:bg-accent-green-hover text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-accent-green/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>

                <a
                  id="hero-get-directions"
                  href={BUSINESS_INFO.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-5 py-3.5 rounded-xl border border-slate-700/50 transition-all hover:text-white"
                >
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>Directions to Store</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Medicine Search & Interactive Utility */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 dark:bg-slate-900/95 rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-md">
                
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                  Search Local Medicine Stock
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 font-sans">
                  Check availability of premium tablets, diagnostic monitors, and capsules.
                </p>

                {/* Medicine Search Box */}
                <div className="relative mb-5" id="medicine-search-box-container">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    id="medicine-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search Dolo, BP Monitor, Metformin..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm font-medium transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => { setSearchQuery(''); setSearchResults([]); }}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Live Search Results Drawer */}
                <div className="min-h-[220px] max-h-[300px] overflow-y-auto space-y-2.5 pr-1">
                  {searchQuery.trim().length === 0 ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                      <Activity className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-700 mb-2.5 animate-pulse" />
                      <p className="text-xs font-medium">Type a drug or equipment name above.</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-[280px] mx-auto">
                        {['Dolo 650', 'BP Monitor', 'Baby Wipes', 'Metformin'].map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => { setSearchQuery(chip); handleSearchChange({ target: { value: chip } } as any); }}
                            className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 font-mono px-2 py-1 rounded-md"
                          >
                            +{chip}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider mb-2">
                        {searchResults.length} Match(es) Found In Stock ✔
                      </p>
                      {searchResults.map((med, idx) => (
                        <div 
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3 text-left hover:border-med-blue-500/30 transition-all group"
                        >
                          <div className="space-y-1">
                            <span className="inline-block text-[9px] font-mono font-bold bg-med-blue-500/10 text-med-blue-600 dark:bg-med-blue-500/20 dark:text-med-blue-400 px-1.5 py-0.5 rounded uppercase">
                              {med.category}
                            </span>
                            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                              {med.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-none">
                              Use: {med.purpose}
                            </p>
                            <p className="text-[10px] text-slate-400 font-mono">
                              Brand: {med.brand} | <span className="text-slate-600 dark:text-slate-300 font-bold">{med.price}</span>
                            </p>
                          </div>
                          
                          <button
                            onClick={() => handleOrderMedicine(med.name)}
                            className="bg-accent-green hover:bg-accent-green-hover text-white text-[11px] font-bold p-2 rounded-lg shrink-0 flex items-center justify-center transition-all shadow-md active:scale-95 group-hover:scale-105"
                            title="Add to WhatsApp Order"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                      <p className="text-xs font-medium">No direct match found for "{searchQuery}".</p>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-[240px] mx-auto leading-relaxed">
                        However, we carry thousands of pharmaceutical products. Submit a prescription directly via WhatsApp!
                      </p>
                      <button
                        onClick={() => setCurrentPage('whatsapp-order')}
                        className="mt-4 inline-flex items-center space-x-1 bg-accent-green hover:bg-accent-green-hover text-white text-xs font-bold px-3 py-2 rounded-lg shadow-md"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send Prescription Now</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why Choose Maa Jagdamba Medical?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base sm:text-lg">
            Our priority is your family's health. We work relentlessly to deliver authenticity, fair prices, and local support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700/50 hover:-translate-y-1 hover:shadow-xl dark:hover:border-slate-600 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-med-blue-500 font-mono tracking-wide uppercase">
                  <span>Guaranteed Service</span>
                  <CornerDownRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TRUST METRICS BOARD */}
      <section id="trust-metrics" className="bg-gradient-to-r from-med-blue-600 to-accent-green text-white py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {metric.value}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-100 font-sans tracking-wide uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR DETAILED SERVICES PANEL */}
      <section id="our-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
          <div className="text-left max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Pharmacy Services
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-base font-sans">
              From authorized high-value prescriptions to emergency medical monitors, we provide specialized catalog solutions.
            </p>
          </div>
          <button
            onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-sm font-bold text-med-blue-500 hover:text-med-blue-600 shrink-0 inline-flex items-center space-x-1"
          >
            <span>View All Detailed Services</span>
            <CornerDownRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700/50 hover:shadow-lg dark:hover:border-slate-600 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-med-blue-500/10 text-med-blue-600 dark:bg-med-blue-500/20 dark:text-med-blue-400 flex items-center justify-center mb-5 font-bold">
                  <Activity className="w-5 h-5 text-accent-green" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 font-sans">
                  {service.description}
                </p>
              </div>
              
              <button
                onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-med-blue-500 dark:hover:text-med-blue-400 flex items-center space-x-1"
              >
                <span>Read Benefits</span>
                <CornerDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED CATEGORIES SECTION */}
      <section id="featured-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-slate-50 dark:bg-slate-800/30 py-16 rounded-3xl border border-slate-100 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Explore Medicine Categories
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">
            We store an extensive inventory of clinical supplies organized systematically. Choose a category to browse.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all text-left flex items-start space-x-3.5 group"
            >
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 shrink-0 group-hover:scale-110 transition-transform">
                {renderCategoryIcon(cat.iconName)}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-med-blue-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-400 font-sans leading-tight">
                  {cat.description}
                </p>
                <span className="inline-block font-mono text-[10px] font-bold text-accent-green dark:text-emerald-400 uppercase">
                  {cat.itemCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WORKING PROCESS SECTION */}
      <section id="working-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How to Get Your Medicines
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">
            Getting genuine prescription medications is completely hassle-free in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 -z-10" />

          {WORKING_PROCESS.map((proc, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-med-blue-500 text-med-blue-600 dark:text-med-blue-400 font-display font-bold text-xl shadow-lg shadow-med-blue-500/10 hover:bg-med-blue-500 hover:text-white transition-all duration-300">
                <span>{proc.step}</span>
              </div>
              
              <div className="space-y-1.5 px-4">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {proc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS (MIN 6) */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why Customers Trust Us
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">
            Read direct stories and feedback from families in Chariyari, Makhdumpur, and Titaiganj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((rev) => (
            <div 
              key={rev.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-slate-100/80 dark:border-slate-700/50 hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600 flex flex-col justify-between transition-all text-left"
            >
              <div className="space-y-4">
                {/* Stars and Rating */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-sans">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {rev.name}
                  </h4>
                  <span className="block text-[11px] text-slate-400 font-sans">
                    {rev.role} | {rev.location}
                  </span>
                </div>
                <div className="font-mono text-[9px] text-slate-400 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Google Reviews Summary */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 px-4 py-2 rounded-xl text-xs text-amber-800 dark:text-amber-400">
            <span className="font-bold">Google Reviews Score:</span>
            <div className="flex items-center text-amber-500 shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-mono font-bold">5.0 / 5.0 (Based on local reviews)</span>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (10 ACCORDIONS) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">
            Clear, honest answers about medical store rules, prescriptions, payments, and WhatsApp ordering.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left font-display font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className="shrink-0 p-1 rounded-full bg-slate-100 dark:bg-slate-800">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans text-left">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. QUICK INQUIRY FORM */}
      <section id="quick-inquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row gap-10 items-center">
          
          {/* Left info column */}
          <div className="md:w-1/2 space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">
              Have a Quick Question?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Enter your mobile number and ask about medicine availability, orthopedic braces, or surgical bulk rates. We respond immediately!
            </p>
            <div className="pt-2 font-mono text-xs text-slate-400">
              <span className="block">📞 Direct helpline: {BUSINESS_INFO.phoneFormatted}</span>
              <span className="block">📍 Chariyari, Makhdumpur, Bihar</span>
            </div>
          </div>

          {/* Right form column */}
          <form onSubmit={handleQuickInquirySubmit} className="md:w-1/2 w-full space-y-4 text-left">
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input
                id="inquiry-name"
                type="text"
                required
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="Enter full name"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="inquiry-phone" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                required
                value={inquiryPhone}
                onChange={(e) => setInquiryPhone(e.target.value)}
                placeholder="Enter 10-digit mobile"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Message / Medicine Requirement
              </label>
              <textarea
                id="inquiry-message"
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Ask about Dolo 650, surgical items, baby diapers..."
                rows={3}
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
              />
            </div>

            <button
              id="submit-quick-inquiry"
              type="submit"
              disabled={inquirySubmitted}
              className="w-full py-3 bg-med-blue-500 hover:bg-med-blue-600 disabled:bg-slate-300 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 text-sm"
            >
              {inquirySubmitted ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
            </button>
          </form>

        </div>
      </section>

      {/* 10. GOOGLE MAP SECTION */}
      <section id="google-map-section" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 text-left space-y-5">
              <div className="inline-block px-3 py-1 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold tracking-wider uppercase font-mono">
                Store Location
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Visit Us at Chariyari
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-sans leading-relaxed">
                We are conveniently located on the busy <strong>Makhdumpur - Sonwan - Hulasganj Road</strong>, making it extremely easy for patients in Makhdumpur block to fetch urgent medicines.
              </p>
              
              <div className="space-y-3.5 pt-2 text-sm">
                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.addressFull}</span>
                </div>
                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">Open 7 Days a Week:</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Mon-Sat: 8 AM - 10 PM | Sun: 9 AM - 4 PM</span>
                  </div>
                </div>
              </div>

              <a
                id="maps-direction-btn"
                href={BUSINESS_INFO.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-bold bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 px-5 py-3 rounded-xl transition-all shadow"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Open Google Maps</span>
              </a>
            </div>

            <div className="lg:col-span-8 w-full h-[360px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative">
              <iframe
                title="Maa Jagdamba Medical Interactive Map"
                src="https://maps.google.com/maps?q=Maa%20Jagdamba%20Medical%20Chariyari%20Makhdumpur%20Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section id="contact-cta" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-med-blue-700 to-accent-green rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Abstract Backdrop rings */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-20 -translate-y-20 -z-0" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 -translate-x-20 translate-y-20 -z-0" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Need Medicines Urgently?
            </h2>
            <p className="text-slate-100 text-sm sm:text-base max-w-lg mx-auto font-sans">
              Don't compromise on your health. Connect with Makhdumpur's trusted medical store right now.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                id="cta-call"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 text-sm"
              >
                <Phone className="w-5 h-5 text-med-blue-600" />
                <span>Call Us Now: {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                id="cta-whatsapp"
                onClick={() => {
                  setCurrentPage('whatsapp-order');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 bg-slate-950 text-white hover:bg-slate-900 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 text-sm"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
