import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  MessageSquare,
  Award
} from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Name and Mobile Number are required to submit.");
      return;
    }
    
    // Simulate API or client submission
    setSubmitted(true);
    
    // Trigger direct formatted WhatsApp message for inquiry
    const text = `Hello Maa Jagdamba Medical,\n\nI have submitted a contact inquiry on your website:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Message:* ${message || 'Interested in health products.'}`;
    const encoded = encodeURIComponent(text);
    
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div id="contact-view" className="space-y-16 py-10">
      
      {/* Contact Header */}
      <section id="contact-hero-header" className="relative bg-gradient-to-br from-med-blue-950 to-slate-900 text-white py-16 rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-green uppercase">Get In Touch</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact & Directions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Need high-value cardiovascular medicines, surgical supplies, or customized orthotics? Find our physical location or message us directly.
          </p>
        </div>
      </section>

      {/* Main Dual Grid */}
      <section id="contact-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Timings */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">
              Store Contact Information
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Walk into our store in Chariyari, Makhdumpur for immediate medical consulting and pharmaceutical retail with standard discounts.
            </p>

            {/* Address, Phone, Email stack */}
            <div className="space-y-4">
              {/* Address card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 text-red-500 shrink-0">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1 text-sm">
                  <span className="block font-bold text-slate-900 dark:text-white font-display">Physical Address</span>
                  <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{BUSINESS_INFO.addressFull}</p>
                  <a 
                    href={BUSINESS_INFO.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-med-blue-500 hover:underline inline-block mt-1"
                  >
                    Get GPS Directions on Maps
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-med-blue-50 dark:bg-med-blue-950/20 text-med-blue-500 shrink-0">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1 text-sm">
                  <span className="block font-bold text-slate-900 dark:text-white font-display">Call Helpline</span>
                  <p className="text-slate-500 dark:text-slate-400 font-sans leading-none">{BUSINESS_INFO.phoneFormatted}</p>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-bold text-med-blue-500 hover:underline inline-block mt-1"
                  >
                    Click to Dial Store Directly
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 shrink-0">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1 text-sm">
                  <span className="block font-bold text-slate-900 dark:text-white font-display">Email Address</span>
                  <p className="text-slate-500 dark:text-slate-400 font-sans truncate max-w-[280px]">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Operating Hours card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-left">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-accent-green" />
                <span>Weekly Working Hours</span>
              </h3>
              
              <div className="space-y-2.5 text-sm font-sans text-slate-600 dark:text-slate-300">
                <div className="flex justify-between border-b border-slate-200/50 dark:border-slate-800 pb-2">
                  <span>Monday - Saturday:</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">08:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">09:00 AM - 04:00 PM</span>
                </div>
              </div>

              <div className="mt-5 flex items-start space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 p-3 rounded-xl text-xs">
                <Award className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-sans leading-relaxed">Emergency medicine request is supported on Sundays too! Message our WhatsApp line.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">
              
              {submitted ? (
                <div id="contact-success" className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you, {name}! We are now opening WhatsApp to send your inquiry details directly to our staff. We will reply instantly.
                  </p>
                  
                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      id="reset-contact-form"
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      Fill Form Again
                    </button>
                    <a
                      id="success-direct-whatsapp"
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`Hello, I filled the contact form. Name: ${name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-accent-green text-white hover:bg-accent-green-hover transition-colors inline-flex items-center space-x-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Send Direct Online Message
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mb-4">
                    Fill in your details below. Fields marked with (*) are required.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Mukesh Kumar"
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 09934098161"
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Message / Inquiry Detail *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please write medicine names, dosages required, or any query regarding home delivery..."
                      rows={4}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                    />
                  </div>

                  <button
                    id="submit-contact-form"
                    type="submit"
                    className="w-full py-3.5 bg-med-blue-500 hover:bg-med-blue-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 text-sm"
                  >
                    Send message via WhatsApp
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Google Map Section for absolute visual completion */}
      <section id="contact-full-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative">
          <iframe
            title="Maa Jagdamba Medical Large Directions Map"
            src="https://maps.google.com/maps?q=Maa%20Jagdamba%20Medical%20Chariyari%20Makhdumpur%20Bihar&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}
