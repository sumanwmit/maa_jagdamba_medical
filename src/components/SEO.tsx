import { PageType } from '../types';
import { FAQS, BUSINESS_INFO } from '../data';

interface SEOProps {
  page: PageType;
}

export default function SEO({ page }: SEOProps) {
  // Title mapping
  const getPageTitle = () => {
    switch (page) {
      case 'home':
        return `${BUSINESS_INFO.name} | Trusted Pharmacy in Makhdumpur, Bihar`;
      case 'about':
        return `About Us | ${BUSINESS_INFO.name} Makhdumpur - Genuine Medicines`;
      case 'services':
        return `Our Medical Store Services | ${BUSINESS_INFO.name}`;
      case 'gallery':
        return `Pharmacy Store Gallery & Products | ${BUSINESS_INFO.name}`;
      case 'contact':
        return `Contact Us & Store Directions | ${BUSINESS_INFO.name}`;
      case 'whatsapp-order':
        return `Order Medicines Online via WhatsApp | ${BUSINESS_INFO.name}`;
      default:
        return BUSINESS_INFO.name;
    }
  };

  // Description mapping
  const getPageDescription = () => {
    switch (page) {
      case 'home':
        return `${BUSINESS_INFO.name} at Chariyari, Makhdumpur, Bihar provides 100% genuine medicines, surgical products, baby care, personal hygiene & diabetic care at best prices with WhatsApp order support.`;
      case 'about':
        return `Discover the mission, vision, timeline, and owner's message behind ${BUSINESS_INFO.name} in Chariyari, Makhdumpur, Bihar. Serving the community since 2018.`;
      case 'services':
        return `Explore professional pharmacy services offered by ${BUSINESS_INFO.name}: OTC & prescription medicines, orthopedic supports, diabetic diagnostics, and medical devices.`;
      case 'gallery':
        return `View high-quality photographs of ${BUSINESS_INFO.name} store interior, organized medicine shelves, medical devices, baby products, and customer care.`;
      case 'contact':
        return `Find phone number, physical address, interactive Google Map location, and business timings for ${BUSINESS_INFO.name} at Chariyari, Makhdumpur, Bihar.`;
      case 'whatsapp-order':
        return `Upload your doctor's prescription and order medicines on WhatsApp from ${BUSINESS_INFO.name}. Fast delivery & store pickup in Makhdumpur block.`;
      default:
        return BUSINESS_INFO.tagline;
    }
  };

  const title = getPageTitle();
  const description = getPageDescription();
  const keywords = "Maa Jagdamba Medical, Makhdumpur pharmacy, medical store Chariyari, buy genuine medicines Bihar, pharmacy Makhdumpur, chemist near Makhdumpur, medical shop Titaiganj, WhatsApp prescription order, baby care products, diabetic equipment, surgical supplies, Mukesh Kumar medical";
  const canonicalUrl = `https://maajagdambamedical.pages.dev/${page === 'home' ? '' : page}`;

  // Structured Data Schemas
  const pharmacySchema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": BUSINESS_INFO.name,
    "description": BUSINESS_INFO.tagline,
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660db0969?auto=format&fit=crop&w=800&q=80",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Makhdumpur - Sonwan - Hulasganj Rd, Chariyari",
      "addressLocality": "Makhdumpur",
      "addressRegion": "Bihar",
      "postalCode": "804422",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0118, // Representative coordinates for Chariyari/Makhdumpur region
      "longitude": 85.0024
    },
    "url": canonicalUrl,
    "logo": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      BUSINESS_INFO.locationUrl
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maajagdambamedical.pages.dev/"
      },
      ...(page !== 'home' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": page.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        "item": canonicalUrl
      }] : [])
    ]
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1587854692152-cbe660db0969?auto=format&fit=crop&w=1200&h=630&q=80" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1587854692152-cbe660db0969?auto=format&fit=crop&w=1200&h=630&q=80" />

      {/* Google Site Verification (stub placeholder) */}
      <meta name="google-site-verification" content="maa-jagdamba-medical-verification-token" />

      {/* Schema Markups injected to head */}
      <script type="application/ld+json">
        {JSON.stringify(pharmacySchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {page === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </>
  );
}
