import React, { useState, useRef, useEffect } from 'react';
import { BUSINESS_INFO } from '../data';
import { 
  MessageSquare, 
  Phone, 
  Upload, 
  CheckCircle, 
  FileText, 
  X, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface WhatsAppOrderFormProps {
  selectedMedicine: string;
  setSelectedMedicine: (med: string) => void;
}

export default function WhatsAppOrderForm({ selectedMedicine, setSelectedMedicine }: WhatsAppOrderFormProps) {
  // Form States
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineNames, setMedicineNames] = useState('');
  const [message, setMessage] = useState('');
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Immediate Emergency');
  const [orderMethod, setOrderMethod] = useState<'delivery' | 'pickup'>('delivery');

  // File Upload states (Supports Drag & Drop)
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Success Feedback
  const [submitted, setSubmitted] = useState(false);

  // Prefill medicine names if passed down from homepage search
  useEffect(() => {
    if (selectedMedicine) {
      setMedicineNames(selectedMedicine);
    }
  }, [selectedMedicine]);

  // Handle Drag Events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle Drop Event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Limit to images or PDFs
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        setPrescriptionFile(file);
      } else {
        alert("Please upload an image file (PNG/JPG) or a PDF prescription.");
      }
    }
  };

  // Handle Manual File Select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !mobileNumber || !medicineNames || (orderMethod === 'delivery' && !address)) {
      alert("Please fill in Name, Phone, Medicine List, and Delivery Address.");
      return;
    }

    setSubmitted(true);

    // Format WhatsApp message to mirror exactly what was requested in the prompt:
    const prescriptionFlag = prescriptionFile ? "Yes (Uploading Attachment)" : "No";
    
    const formattedMessage = `Hello Maa Jagdamba Medical,\n\nI want to place an order:\n\n*Customer Name:* ${customerName}\n*Phone:* ${mobileNumber}\n*Email:* ${email || 'Not Specified'}\n*Method:* ${orderMethod.toUpperCase()}\n*Address:* ${orderMethod === 'delivery' ? address : 'In-Store Pickup'}\n*Medicine Required:* ${medicineNames}\n*Prescription:* ${prescriptionFlag}\n*Preferred Timing:* ${preferredDeliveryTime}\n*Message:* ${message || 'Please prepare soon.'}`;
    
    const encoded = encodeURIComponent(formattedMessage);
    
    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  const resetForm = () => {
    setCustomerName('');
    setMobileNumber('');
    setEmail('');
    setAddress('');
    setMedicineNames('');
    setMessage('');
    setPrescriptionFile(null);
    setSelectedMedicine('');
    setSubmitted(false);
  };

  return (
    <div id="whatsapp-order-view" className="space-y-16 py-10">
      
      {/* View Header */}
      <section id="order-hero-header" className="relative bg-gradient-to-br from-med-blue-950 to-slate-900 text-white py-16 rounded-3xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-green uppercase">Prescription Dispatch Desk</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Order Medicines on WhatsApp
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Avoid standing in line. Easily fill in your name, delivery address, drug list, upload a picture of your prescription, and click send! Our staff compiles and ships immediately.
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <section id="order-form-container" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-left">
          
          {submitted ? (
            <div id="order-success" className="py-12 text-center space-y-5">
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white leading-tight">
                Order Package Generated!
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{customerName}</strong>! We are now redirecting you to WhatsApp to send the finalized medicine order.
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <p><strong>Required Medicines:</strong> {medicineNames}</p>
                <p><strong>Attachment Flag:</strong> {prescriptionFile ? 'Yes (Paper Uploaded)' : 'No'}</p>
                <p><strong>Fulfillment Mode:</strong> {orderMethod === 'delivery' ? `Home Delivery to ${address}` : 'Store Pickup'}</p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  id="reset-order-form-btn"
                  onClick={resetForm}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Place Another Order
                </button>
                <a
                  id="direct-call-now-success"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-med-blue-500 text-white hover:bg-med-blue-600 transition-colors flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendOrder} className="space-y-6">
              
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Prescription Order & Support Form
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  We match all orders against qualified pharmacists before packing.
                </p>
              </div>

              {/* Step 1: Client Vitals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="order-customer-name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Customer Name *
                  </label>
                  <input
                    id="order-customer-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ram Kumar"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="order-mobile-number" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    id="order-mobile-number"
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. 09934098161"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label htmlFor="order-email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  id="order-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ram.kumar@gmail.com"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                />
              </div>

              {/* Step 2: Medicine details */}
              <div>
                <label htmlFor="order-medicine-list" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Medicine Name & Required Quantities *
                </label>
                <textarea
                  id="order-medicine-list"
                  required
                  value={medicineNames}
                  onChange={(e) => setMedicineNames(e.target.value)}
                  placeholder="e.g.&#10;1. Dolo 650mg - 2 strips&#10;2. Volini Gel - 1 tube&#10;3. Glycomet 500mg - 3 strips"
                  rows={4}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm font-medium"
                />
              </div>

              {/* Step 3: Fulfillment mechanism */}
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                  Fulfillment Mode
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderMethod('delivery')}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      orderMethod === 'delivery'
                        ? 'border-med-blue-500 bg-med-blue-500/5 text-med-blue-600 dark:text-med-blue-400 font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🚀 Home Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMethod('pickup')}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      orderMethod === 'pickup'
                        ? 'border-med-blue-500 bg-med-blue-500/5 text-med-blue-600 dark:text-med-blue-400 font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🏪 In-Store Pickup
                  </button>
                </div>
              </div>

              {/* Address (conditional) */}
              {orderMethod === 'delivery' && (
                <div>
                  <label htmlFor="order-address" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Delivery Address *
                  </label>
                  <textarea
                    id="order-address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter complete home address with nearby landmark in Makhdumpur/Chariyari region"
                    rows={2}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                  />
                </div>
              )}

              {/* Step 4: File Uploader (Supports Drag and Drop / Manual selection) */}
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Upload Doctor's Prescription (PNG, JPG, PDF)
                </label>
                
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    dragActive 
                      ? 'border-med-blue-500 bg-med-blue-500/5' 
                      : 'border-slate-300 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                  />

                  {prescriptionFile ? (
                    <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 dark:bg-emerald-950/20 text-emerald-500">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate max-w-xs mx-auto">
                          {prescriptionFile.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {(prescriptionFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="px-3 py-1 bg-red-50 dark:bg-red-950/20 text-red-500 hover:bg-red-500 hover:text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        Remove File
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="inline-flex items-center justify-center p-3 text-slate-400 dark:text-slate-500">
                        <Upload className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Drag and drop prescription file here, or <span className="text-med-blue-500 hover:underline">browse files</span>
                      </p>
                      <p className="text-xs text-slate-400">
                        Supports JPEG, PNG, or PDF file up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Preferred timing & notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="order-preferred-time" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Preferred Delivery/Pickup Time
                  </label>
                  <select
                    id="order-preferred-time"
                    value={preferredDeliveryTime}
                    onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm font-medium"
                  >
                    <option value="Immediate Emergency">Immediate Emergency (ASAP)</option>
                    <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="order-extra-message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Extra Instructions / Notes
                  </label>
                  <input
                    id="order-extra-message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Ring doorbell, bring change for ₹500"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-med-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                <button
                  id="submit-order-form-btn"
                  type="submit"
                  className="flex-1 py-3.5 bg-accent-green hover:bg-accent-green-hover text-white font-bold rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Order via WhatsApp</span>
                </button>
                
                <a
                  id="call-order-form-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3.5 px-6 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <Phone className="w-4.5 h-4.5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Safety Alert callout */}
      <section id="order-safety-alert" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/30 flex items-start space-x-3 text-left">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-amber-800 dark:text-amber-400">
            <span className="block font-bold">Important Drug Compliance Note:</span>
            <p className="font-sans leading-relaxed">
              We operate strictly under the National Drug License Policy of India. Prescription medications (Schedule H, G, or H1) can only be compiled and shipped if a valid, current paper prescription written by a certified MBBS/MD doctor is uploaded. Self-medicating with critical drugs is dangerous.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
