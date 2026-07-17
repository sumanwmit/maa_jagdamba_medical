import { TIMELINE_EVENTS, BUSINESS_INFO } from '../data';
import { 
  Heart, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  User, 
  Calendar, 
  Store, 
  Quote 
} from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      title: "100% Integrity",
      text: "Every item we sell is verified from genuine pharmaceutical batches. We do not support mock supplies or substandard substitutes.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Patient Care First",
      text: "We deal with medicines, which means dealing with lives. Compassion and patient counseling guide our team.",
      icon: <Heart className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Affordable Access",
      text: "We ensure healthcare does not become a financial hazard, keeping our margins honest with consistent regular discounts.",
      icon: <Award className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <div id="about-view" className="space-y-20 py-10">
      
      {/* Page Header banner */}
      <section id="about-header" className="relative bg-gradient-to-br from-med-blue-950 to-slate-900 text-white py-16 rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-green uppercase">Established in 2018</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Business Story
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Maa Jagdamba Medical was founded with a foundational pledge: ensuring absolute clinical authenticity and reliable medication access for every family in Chariyari, Makhdumpur.
          </p>
        </div>
      </section>

      {/* Story Introduction & Mission/Vision */}
      <section id="about-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Serving our Neighbors with Pride & Trust
            </h2>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-5 leading-relaxed font-sans">
              <p>
                In 2018, we noticed that many residents in the Makhdumpur block of Bihar had to travel long distances to major cities just to find specific cardiac, diabetic, and respiratory medications. This delay was not just inconvenient; during emergencies, it was highly dangerous.
              </p>
              <p>
                <strong>Maa Jagdamba Medical</strong> was established at Chariyari to bridge this gap. We set up a fully air-cooled, systematically indexed pharmacy that houses thousands of verified, critical care drug molecules. 
              </p>
              <p>
                By stocking genuine multi-brand tablets, baby care diets, wellness supplements, and advanced orthotics locally, we have eliminated long hospital trips, saving our customers precious time and expenses.
              </p>
            </div>

            {/* Core Values Rows */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
                  <div className="mb-3">{val.icon}</div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">{val.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mission */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-md text-left space-y-4">
              <div className="w-10 h-10 rounded-lg bg-med-blue-500/10 text-med-blue-600 dark:bg-med-blue-500/20 dark:text-med-blue-400 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent-green" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To secure 100% authentic, cold-chain stabilized medications, baby wellness essentials, and orthopedic devices locally for the Makhdumpur block community, while ensuring empathetic counseling and transparent, affordable prices.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-md text-left space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center">
                <Eye className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To become the most recommended healthcare store in the Jehanabad district by setting benchmarks for clinical pharmacy storage, rapid WhatsApp medicine integration, and home diagnostic support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section id="about-timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-med-blue-500 uppercase tracking-widest">Chronicle of Growth</span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Our Journey</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-sans">
            How we grew from a small neighborhood shop into a pillar of health trust in Makhdumpur, Bihar.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 text-left space-y-12">
          {TIMELINE_EVENTS.map((evt, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Pin */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-med-blue-500 group-hover:bg-med-blue-500 transition-colors" />
              
              {/* Year Label left (on tablet+) */}
              <div className="hidden md:block absolute -left-28 top-0.5 text-right w-20 font-display font-black text-xl text-med-blue-500">
                {evt.year}
              </div>

              <div className="space-y-1.5">
                {/* Year tag mobile only */}
                <span className="inline-block md:hidden font-display font-black text-sm text-med-blue-500 font-mono">
                  {evt.year}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-sans">
                  {evt.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Message & Letter */}
      <section id="owner-message" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center text-left">
          
          {/* Left Avatar Icon Placeholder */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-med-blue-500 to-accent-green text-white flex items-center justify-center shrink-0 shadow-lg relative">
            <User className="w-12 h-12" />
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300 shadow border border-slate-100 dark:border-slate-800">
              Founder
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-4">
            <Quote className="w-8 h-8 text-slate-300 dark:text-slate-700 shrink-0" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
              A Personal Promise from {BUSINESS_INFO.ownerName}
            </h3>
            
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 italic leading-relaxed font-sans">
              <p>
                "At Maa Jagdamba Medical, we treat every customer not merely as a buyer, but as a family member who depends on us for their wellness. We understand that behind every medicine strip is an elderly parent wishing to walk, a baby needing nutrition, or a family battling an emergency."
              </p>
              <p>
                "That is why we never take shortcuts. We check batch numbers, keep sensitive items cold-stored, provide genuine tax bills, and respond to every WhatsApp request immediately. Our primary asset is your trust. Thank you for choosing us as your trusted partner."
              </p>
            </div>

            <div className="pt-2 font-mono text-xs">
              <span className="block font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.ownerName}</span>
              <span className="block text-slate-500 dark:text-slate-400">Director, {BUSINESS_INFO.name}</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
