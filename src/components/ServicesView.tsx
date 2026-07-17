import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { 
  FileSpreadsheet, 
  Pill, 
  HeartPulse, 
  Baby, 
  Sparkles, 
  Activity, 
  Scissors, 
  ShieldAlert, 
  Stethoscope, 
  X, 
  Check, 
  MessageSquare,
  CornerDownRight
} from 'lucide-react';
import { ServiceItem } from '../types';

export default function ServicesView() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Dynamic icon helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-med-blue-600 dark:text-med-blue-400" />;
      case 'Pills': return <Pill className="w-6 h-6 text-indigo-500" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-pink-500" />;
      case 'Baby': return <Baby className="w-6 h-6 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-rose-500" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-red-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-sky-500" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-500" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const handleServiceWhatsAppInquiry = (service: ServiceItem) => {
    const text = `Hello Maa Jagdamba Medical,\n\nI am viewing your services on your website and would like to inquire about:\n\n*Service:* ${service.title}\n*Details:* ${service.description}\n\nCan you please provide availability/information regarding this service?`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="services-view" className="space-y-16 py-10">
      
      {/* Services Header */}
      <section id="services-hero-header" className="relative bg-gradient-to-br from-med-blue-950 to-slate-900 text-white py-16 rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-green uppercase">Full Clinical Catalog</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Medical Store Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            We store an extensive inventory of certified prescription medications, baby health foods, sterile surgeries, and calibrated vital monitors under controlled temperature parameters.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <div 
              key={serv.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-xl dark:hover:border-slate-600 transition-all text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-800 shadow-inner">
                  {getIcon(serv.iconName)}
                </div>
                
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2.5">
                  {serv.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                  {serv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4">
                <button
                  id={`view-benefits-${serv.id}`}
                  onClick={() => setSelectedService(serv)}
                  className="text-xs font-bold text-med-blue-600 dark:text-med-blue-400 hover:underline inline-flex items-center space-x-1"
                >
                  <span>Read Detailed Benefits</span>
                  <CornerDownRight className="w-3.5 h-3.5" />
                </button>
                
                <button
                  id={`whatsapp-inquiry-${serv.id}`}
                  onClick={() => handleServiceWhatsAppInquiry(serv)}
                  className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Details Lightbox Modal */}
      {selectedService && (
        <div 
          id="service-details-modal" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
        >
          {/* Modal Card */}
          <div 
            id="service-modal-card"
            className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left border border-slate-100 dark:border-slate-800"
          >
            {/* Close button */}
            <button
              id="close-service-modal"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Header info */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-accent-green uppercase tracking-widest">Service Details</span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Content text */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold font-display text-slate-400 uppercase tracking-wider mb-2">Service Scope</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Benefits checklist */}
              <div>
                <h4 className="text-xs font-bold font-display text-slate-400 uppercase tracking-wider mb-3">Core Patient Benefits</h4>
                <ul className="space-y-2.5">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                        <Check className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-sans leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons inside lightbox */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
              <button
                id="modal-inquire-whatsapp"
                onClick={() => handleServiceWhatsAppInquiry(selectedService)}
                className="flex-1 py-3 px-4 rounded-xl font-bold bg-accent-green text-white hover:bg-accent-green-hover flex items-center justify-center space-x-2 transition-colors shadow-md shadow-accent-green/10"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Inquire via WhatsApp</span>
              </button>
              
              <button
                id="modal-close-btn"
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
