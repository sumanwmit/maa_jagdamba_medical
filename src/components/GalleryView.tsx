import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Layers 
} from 'lucide-react';
import { GalleryItem } from '../types';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter tabs mapping
  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'storefront', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Healthcare Products' },
    { id: 'equipment', label: 'Medical Devices' },
    { id: 'customers', label: 'Customers Care' }
  ];

  // Filtering logic
  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    // Find index of the item within the *filtered* list
    const index = filteredItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (dir: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    
    if (dir === 'next') {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    } else {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div id="gallery-view" className="space-y-16 py-10">
      
      {/* Gallery Header */}
      <section id="gallery-hero-header" className="relative bg-gradient-to-br from-med-blue-950 to-slate-900 text-white py-16 rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-green uppercase">Visual Tour</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Store Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Take a visual tour of Maa Jagdamba Medical. See our clean, structured pharmacy layout, authentic inventory shelves, and high-quality diagnostics gear.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section id="gallery-filters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`filter-tab-${tab.id}`}
              onClick={() => { setActiveFilter(tab.id); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-med-blue-500 text-white shadow-lg shadow-med-blue-500/15'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Image Grid */}
      <section id="gallery-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item)}
              className="break-inside-avoid bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in group"
            >
              {/* Image Container with Zoom */}
              <div className="relative overflow-hidden aspect-video sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500 max-h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Tag */}
                <span className="absolute top-3 left-3 text-[9px] font-mono font-bold bg-slate-900/80 text-white uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Copy details */}
              <div className="p-4 text-left">
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-slate-400">
            <Layers className="w-12 h-12 mx-auto mb-3 animate-bounce" />
            <p className="font-display font-semibold">No pictures found in this filter.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal Carousel */}
      {activeLightboxItem && (
        <div 
          id="gallery-lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button
            id="close-lightbox"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left arrow */}
          <button
            id="prev-lightbox-image"
            onClick={(e) => navigateLightbox('prev', e)}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Core content block */}
          <div 
            id="lightbox-card"
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center space-y-4"
          >
            {/* High-res Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 max-h-[70vh]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.alt}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Title and stats bottom */}
            <div className="text-center text-white max-w-xl space-y-1">
              <span className="text-[10px] font-mono font-bold text-accent-green uppercase tracking-widest block">
                {activeLightboxItem.category} | Image {lightboxIndex! + 1} of {filteredItems.length}
              </span>
              <h3 className="font-display font-bold text-lg">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            id="next-lightbox-image"
            onClick={(e) => navigateLightbox('next', e)}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}

    </div>
  );
}
