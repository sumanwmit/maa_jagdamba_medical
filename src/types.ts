export type PageType = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';


export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon name matching lucide icons
  longDescription: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'customers' | 'storefront';
  image: string;
  alt: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  location: string;
  locationUrl: string;
  addressShort: string;
  addressFull: string;
  ownerName: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  itemCount: string;
}
