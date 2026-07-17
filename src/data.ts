import heroImg from './assets/images/pharmacy_hero_banner_1783754610436.jpg';
import { 
  BusinessInfo, 
  ServiceItem, 
  GalleryItem, 
  TestimonialItem, 
  FAQItem, 
  CategoryItem 
} from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Maa Jagdamba Medical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  phone: "09934098161",
  phoneFormatted: "+91 99340 98161",
  whatsapp: "919934098161",
  whatsappFormatted: "+91 99340 98161",
  email: "maajagdambamedical.chariyari@gmail.com",
  location: "3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Makhdumpur, Bihar 804422, India",
  locationUrl: "https://maps.google.com/?q=Maa+Jagdamba+Medical+Chariyari+Makhdumpur",
  addressShort: "Chariyari, Makhdumpur, Bihar",
  addressFull: "3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Makhdumpur, Bihar 804422 (Near Titaiganj)",
  ownerName: "Mukesh Kumar"
};

export const HERO_IMAGE_PATH = heroImg;

export const SERVICES: ServiceItem[] = [
  {
    id: "presc-meds",
    title: "Prescription Medicines",
    description: "Vast inventory of critical care & maintenance drugs, managed under expert supervision.",
    iconName: "FileSpreadsheet",
    longDescription: "We stock a comprehensive range of chronic and acute prescription medications covering cardiovascular health, diabetes, orthopedics, gastroenterology, pulmonology, and critical care. Our licensed staff ensures precise matching and guidelines adherence.",
    benefits: ["100% authentic storage standards", "Assistance in explaining dosage & side-effects", "Special storage for temperature-sensitive drugs like Insulin"]
  },
  {
    id: "gen-meds",
    title: "General & OTC Medicines",
    description: "Everyday health remedies, cold & cough medicine, analgesics, and essential vitamins.",
    iconName: "Pills",
    longDescription: "Find relief for daily health issues. We store certified, safe Over-the-Counter medicines for fever, cold, acidity, digestion, and pain management from reliable national manufacturers.",
    benefits: ["Trusted pharmaceutical brands only", "Accessible advice on safe self-medication", "Complete range of pain relief sprays and gels"]
  },
  {
    id: "health-supp",
    title: "Health Supplements",
    description: "Vitamins, immunity boosters, calcium, multivitamin capsules, and protein formulations.",
    iconName: "HeartPulse",
    longDescription: "Support your modern wellness goals with our premium dietary supplements. We have organic multivitamin tablets, joint support formulations, calcium supplements, and premium whey/soy proteins.",
    benefits: ["Boost daily energy and strength", "Certified safe formulations", "Products designed for pediatric, adult, and geriatric care"]
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Infant milk formulas, skin-friendly baby wipes, gentle lotions, and premium baby diapers.",
    iconName: "Baby",
    longDescription: "Ensure your little one's safety and soft skin with top-tier baby care brands. We supply certified baby cereals, hypoallergenic wipes, baby shampoo, protective diaper creams, and comfortable pants.",
    benefits: ["Safe, toxin-free certified skin products", "A-grade international diaper brands", "Nutrition consultation on infant milk powders"]
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Skin protection, hair nourishment, certified oral care, soaps, and daily hygiene products.",
    iconName: "Sparkles",
    longDescription: "Step up your daily hygiene and aesthetic wellness with premium personal care products. We supply dermatologically-tested face washes, clinical skin creams, organic oral hygiene, and antibacterial body care.",
    benefits: ["Certified skin-friendly ingredients", "Wide collection of clinical cosmetics", "Protection against bacterial/fungal infections"]
  },
  {
    id: "med-equip",
    title: "Medical Equipment & Devices",
    description: "Digital blood pressure monitors, premium glucometers, nebulizers, and digital thermometers.",
    iconName: "Activity",
    longDescription: "Take control of your vitals from the comfort of your home. We stock highly calibrated electronic diagnostic tools, including easy-to-use blood pressure cuffs, blood sugar monitors, and portable inhalers/nebulizers.",
    benefits: ["Accurate home diagnostic results", "Brand warranty supported devices", "Live demo on how to run and calibrate monitors"]
  },
  {
    id: "surgical-supplies",
    title: "Surgical Supplies",
    description: "Bandages, syringes, surgical tape, dressing pads, disposables, and clinic-ready supplies.",
    iconName: "Scissors",
    longDescription: "Professional-grade surgical items for hospital, clinic, or home postoperative recovery. We carry high-absorption gauze pads, sterile syringes, adhesive medical tapes, and disposable gloves.",
    benefits: ["Sterile and contamination-free packaging", "Affordable bulk pricing for clinics", "Meets strict national drug standards"]
  },
  {
    id: "first-aid",
    title: "First Aid Products",
    description: "Disinfectants, antiseptic solutions, cotton rolls, burn gels, and quick-wound dressing kits.",
    iconName: "ShieldAlert",
    longDescription: "Stay ready for emergencies at home, school, or workspace. Our first-aid products include antiseptic washes, immediate burn relief gels, cotton rolls, and pre-packaged instant bandage kits.",
    benefits: ["Crucial for workplace and domestic emergency readiness", "Long shelf-life materials", "Compact kit options to fit vehicles and backpacks"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    description: "Insulin syringes, low-GI foods, testing strips, and customized foot care creams for diabetics.",
    iconName: "Activity",
    longDescription: "Comprehensive management products for diabetic patients. From insulin preservation support, continuous monitoring strips, to specialized diabetic dietary supplements and neuropathy foot creams.",
    benefits: ["Guaranteed freshness and accuracy of testing strips", "Supportive diabetic nutrition advice", "Reliable stock availability year-round"]
  },
  {
    id: "healthcare-essentials",
    title: "Healthcare Essentials",
    description: "Premium sanitizers, highly protective face masks, vaporizers, and immune boosters.",
    iconName: "Stethoscope",
    longDescription: "Equip yourself with the tools required to fight seasonal allergies and airborne pathogens. We supply N95/surgical face masks, clinical sanitizers, herbal immunity elixirs, and steam vaporizers.",
    benefits: ["High particulate filtration masks", "Moisturizing skin-safe hand disinfectants", "Holistic health support for family care"]
  }
];

export const CATEGORIES: CategoryItem[] = [
  { id: "tablets", name: "Tablets", iconName: "Layers", description: "Allopathic & therapeutic daily tablet formulations", itemCount: "500+ Items" },
  { id: "capsules", name: "Capsules", iconName: "Disc", description: "Gelatin & veggie-caps for medicine & vitamins", itemCount: "300+ Items" },
  { id: "syrups", name: "Syrups & Liquids", iconName: "Droplet", description: "Cough, digestive, pediatric, and tonic syrups", itemCount: "200+ Items" },
  { id: "injection", name: "Injections & Vials", iconName: "Syringe", description: "Sterile injectables and vaccination support", itemCount: "80+ Items" },
  { id: "equipment", name: "Medical Devices", iconName: "Cpu", description: "BP monitors, sugar meters, nebulizers", itemCount: "50+ Items" },
  { id: "protein", name: "Protein Supplements", iconName: "Activity", description: "Body growth, recovery and meal replacements", itemCount: "60+ Items" },
  { id: "vitamins", name: "Vitamins & Minerals", iconName: "Sparkles", description: "Daily tablets for skin, bones, and vitality", itemCount: "150+ Items" },
  { id: "skincare", name: "Clinical Skincare", iconName: "Smile", description: "Ointments, moisturizing creams, sunscreens", itemCount: "120+ Items" },
  { id: "baby", name: "Baby Care Essentials", iconName: "Baby", description: "Diapers, infant formulas, gentle washes", itemCount: "140+ Items" },
  { id: "hygiene", name: "Personal Hygiene", iconName: "Shield", description: "Sanitary pads, hand washes, disinfectants", itemCount: "110+ Items" },
  { id: "ortho", name: "Orthopedic Support", iconName: "Accessibility", description: "Crepe bandages, knee braces, lumbar belts", itemCount: "70+ Items" },
  { id: "diabetic", name: "Diabetic Care", iconName: "HeartPulse", description: "Sugar-free foods, insulin, test strips", itemCount: "90+ Items" }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Medicines",
    description: "Every strip, tablet, and equipment we sell is sourced directly from licensed pharma distributors with clear serial tracks.",
    iconName: "ShieldCheck",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Experienced Pharmacy Staff",
    description: "Our knowledgeable pharmacy professionals are certified to guide you on safe dosages, interactions, and generic alternatives.",
    iconName: "UserCheck",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
  },
  {
    title: "Affordable & Fair Prices",
    description: "We offer genuine healthcare at honest pricing, backed by consistent year-round discounts on monthly chronic medications.",
    iconName: "Tag",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
  },
  {
    title: "Prompt & Fast Service",
    description: "Your health is precious. Our systematically sorted inventory helps retrieve your medications within minutes, reducing store wait-time.",
    iconName: "Zap",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "Prescription & OTC Stocks",
    description: "From critical cardiac care, diabetes regulators, to general fever, cough, and first aid solutions, we maintain complete coverage.",
    iconName: "FileText",
    color: "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
  },
  {
    title: "Genuine Baby & Personal Care",
    description: "Keep your skin safe and kids healthy. We store trusted pediatric formulas, skin cosmetics, and complete diapering ranges.",
    iconName: "Heart",
    color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
  },
  {
    title: "Trusted Local Pharmacy",
    description: "Deeply rooted in Bihar, Makhdumpur community. We understand your families and are dedicated to your wellbeing as neighbors.",
    iconName: "MapPin",
    color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    title: "Easy WhatsApp Support",
    description: "No more long queues! Simply take a picture of your prescription, text us on WhatsApp, and pick it up or request delivery.",
    iconName: "MessageSquare",
    color: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
  }
];

export const TRUST_METRICS = [
  { value: "100%", label: "Genuine Medicines Sourced" },
  { value: "15,000+", label: "Happy Customers Served" },
  { value: "12+", label: "Product Categories Maintained" },
  { value: "5+ Star", label: "Average Local Rating" }
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Visit Our Store",
    description: "Walk into Maa Jagdamba Medical at Chariyari, Makhdumpur with your family's health queries."
  },
  {
    step: "02",
    title: "Share Prescription",
    description: "Show your prescription to our licensed pharmacist or share a snapshot instantly over WhatsApp."
  },
  {
    step: "03",
    title: "Get Genuine Medicines",
    description: "Our staff immediately fetches and double-checks batch numbers, expiry dates, and proper dosages."
  },
  {
    step: "04",
    title: "Easy & Digital Payment",
    description: "Pay conveniently using cash, PhonePe, Google Pay, BHIM UPI, or cards with a genuine GST bill."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Anil Kumar",
    rating: 5,
    comment: "Best medical store in Makhdumpur! They always have genuine medicines which are hard to find elsewhere. Mukesh-ji is very polite, understands prescriptions perfectly and guides nicely on correct dosage.",
    date: "June 24, 2026",
    location: "Makhdumpur Bazar",
    role: "Regular Customer"
  },
  {
    id: "rev-2",
    name: "Priya Ranjan",
    rating: 5,
    comment: "I order my elderly mother's monthly diabetes and heart medicines through WhatsApp order form of Maa Jagdamba Medical. The service is incredibly fast, and they offer a genuine discount. It saves me so much trouble!",
    date: "July 02, 2026",
    location: "Chariyari Village",
    role: "School Teacher"
  },
  {
    id: "rev-3",
    name: "Dr. Rajesh Singh",
    rating: 5,
    comment: "As a healthcare professional, authenticity of medications is my top priority. I always recommend my patients in Makhdumpur area to buy from Maa Jagdamba Medical. Their clinical storage standards are exceptional.",
    date: "May 18, 2026",
    location: "Titaiganj",
    role: "General Physician"
  },
  {
    id: "rev-4",
    name: "Sunita Devi",
    rating: 5,
    comment: "Maa Jagdamba Medical is my go-to shop for baby milk formulas, premium diapers and baby lotions. All products are authentic and 100% genuine. The shop is clean, orderly, and very easy to access.",
    date: "June 15, 2026",
    location: "Hulasganj Road",
    role: "Mother of 1-Year Old"
  },
  {
    id: "rev-5",
    name: "Vikas Yadav",
    rating: 5,
    comment: "Clean and modern pharmacy in Makhdumpur block. Extremely helpful and friendly staff. They retrieve medicines within seconds using systematic codes. Best thing is they accept digital payments like GPay seamlessly.",
    date: "June 30, 2026",
    location: "Sonwan",
    role: "Tech Professional"
  },
  {
    id: "rev-6",
    name: "Md. Khalid",
    rating: 5,
    comment: "Very reliable and supportive medical shop. During a recent family emergency, they arranged specific surgical equipment and orthopedics braces within just three hours. Truly a lifesaver in Chariyari area.",
    date: "April 12, 2026",
    location: "Makhdumpur Block",
    role: "Business Owner"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the store timings for Maa Jagdamba Medical?",
    answer: "Our physical store at Chariyari is open Monday to Saturday from 8:00 AM to 10:00 PM, and on Sundays from 9:00 AM to 4:00 PM. Emergency support is also available via call."
  },
  {
    id: "faq-2",
    question: "Are all your medicines 100% genuine and authenticated?",
    answer: "Absolutely. Authenticity is our primary promise. We source 100% of our pharmaceutical stocks, surgical equipment, baby products, and health supplements directly from licensed, certified pharma distributors with valid GST invoices and clear batch verification."
  },
  {
    id: "faq-3",
    question: "How can I order medicines using WhatsApp?",
    answer: "It's extremely simple! Go to our WhatsApp Order page, fill out your name, address, list of required medicines, upload a clear picture of your doctor's prescription, and click 'Send'. This automatically formats the details and opens WhatsApp so you can submit your order instantly."
  },
  {
    id: "faq-4",
    question: "Is a medical prescription compulsory for buying medicines?",
    answer: "For schedule H, H1, and G prescription medications (such as critical cardiac medicines, hormones, antibiotics, or certain pain relievers), a valid doctor's prescription is legally required. However, for standard OTC (Over-The-Counter) remedies, wellness supplements, personal care, and baby care products, you can buy them directly."
  },
  {
    id: "faq-5",
    question: "Do you offer home delivery in the Makhdumpur and Chariyari region?",
    answer: "Yes, we offer convenient local home delivery within Makhdumpur, Chariyari, Titaiganj, and adjacent villages for regular monthly medicines and orders above ₹500. For orders further away, we offer express store pickup—where your order is packaged and kept ready for you."
  },
  {
    id: "faq-6",
    question: "What is your policy on medicine returns or exchanges?",
    answer: "We accept returns/exchanges of unused, sealed, and undamaged medicine strips or healthcare devices within 7 days of purchase, provided you present the original cash bill. Please note that temperature-sensitive cold-storage items (like Insulin vials) and surgical items cannot be returned to maintain health safety."
  },
  {
    id: "faq-7",
    question: "Do you keep diabetic care equipment like Glucometers and test strips?",
    answer: "Yes! We maintain an extensive range of diabetic care devices. We supply digital glucometers from leading brands, authentic compatible test strips, lancets, insulin pens, syringes, and low-GI health supplements."
  },
  {
    id: "faq-8",
    question: "What payment options do you support at your store?",
    answer: "We support a complete suite of payment options for a hassle-free checkout: Cash, BHIM UPI (PhonePe, Google Pay, Paytm), major Debit/Credit Cards, and online net banking transfers."
  },
  {
    id: "faq-9",
    question: "Can I subscribe to a monthly package for regular chronic medicines?",
    answer: "Yes! We offer a specialized 'Chronic Care Refill' program. Share your list of regular medicines once, and we will package, discount, and deliver/notify you before your stock finishes every month."
  },
  {
    id: "faq-10",
    question: "Do you provide a proper GST bill for mediclaim or tax purpose?",
    answer: "Yes, we provide authentic GST compliance retail invoices showing complete batch numbers, expiry dates, HSN codes, and taxation breakdowns which are fully eligible for insurance reimbursement or corporate claims."
  }
];

export const TIMELINE_EVENTS = [
  { year: "2018", title: "The Humble Beginning", text: "Maa Jagdamba Medical was founded in Makhdumpur (Chariyari) with a simple goal: bringing authentic, hard-to-find clinical medicines locally at affordable costs." },
  { year: "2020", title: "COVID-19 Frontline Service", text: "Stood strong during the pandemic, operating 24/7 to supply surgical masks, clinical sanitizers, vaporizers, and essential antivirals under safety guidelines." },
  { year: "2022", title: "Digital Upgrade", text: "Introduced instant WhatsApp prescription sharing, computerized inventory search, and simplified digital payments for rapid checkout." },
  { year: "2024", title: "Expanding Healthcare", text: "Added dedicated sections for certified surgical tools, high-end orthopedic braces, specialized pediatric diets, and cosmetic healthcare lines." },
  { year: "2026", title: "The Trustworthy Pillar", text: "Celebrating years of serving over 15,000+ happy families in Makhdumpur, Bihar with pristine reviews and 100% genuine medical supply guarantee." }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Store Exterior",
    category: "storefront",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660db0969?auto=format&fit=crop&w=800&q=80",
    alt: "Maa Jagdamba Medical Store Front",
    description: "Our welcoming and spacious medical store located on Makhdumpur-Sonwan Rd, Chariyari."
  },
  {
    id: "gal-2",
    title: "Organized Medicine Shelves",
    category: "shelves",
    image: "https://images.unsplash.com/photo-1631549916768-4119b255f946?auto=format&fit=crop&w=800&q=80",
    alt: "Systematically Arranged Medicine Shelves",
    description: "Highly structured pharmacy shelves indexed alphabetically for prompt prescription compilation."
  },
  {
    id: "gal-3",
    title: "Healthcare Products Row",
    category: "products",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    alt: "Genuine Health Products and OTC",
    description: "A wide display of genuine over-the-counter medicines, digestives, and vitamins."
  },
  {
    id: "gal-4",
    title: "Professional Diagnostic Devices",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Digital Blood Pressure and Blood Sugar Devices",
    description: "Accurate, clinically calibrated blood pressure cuffs, nebulizers, and digital sugar testers."
  },
  {
    id: "gal-5",
    title: "Vitamins and Wellness Row",
    category: "products",
    image: "https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?auto=format&fit=crop&w=800&q=80",
    alt: "Premium Multi-Vitamins and Minerals",
    description: "Nutrition formulations, protein drinks, and mineral capsules for full-body wellness."
  },
  {
    id: "gal-6",
    title: "Warm Customer Care",
    category: "customers",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    alt: "Pharmacist serving a patient",
    description: "Our pharmacists providing careful consultation regarding safe medication dosage."
  },
  {
    id: "gal-7",
    title: "Baby Care & Infant Nutrition",
    category: "products",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=800&q=80",
    alt: "Premium Baby Care Products",
    description: "Dermatologist-recommended baby soaps, skin lotions, milk foods, and soft baby diapers."
  },
  {
    id: "gal-8",
    title: "Personal Skincare Corner",
    category: "products",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    alt: "Dermatological Skincare Formulations",
    description: "Organic hand sanitizers, medicated face cleansers, hair treatment oils, and skincare items."
  },
  {
    id: "gal-9",
    title: "Emergency Oxygen & Nebulizers",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    alt: "Nebulization equipment and supplies",
    description: "Essential healthcare equipment ready to assist in pediatric asthma and emergency care."
  }
];
