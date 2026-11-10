import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageCircle
} from 'lucide-react';

export default function LeadModal({ isOpen, onClose, initialContext = 'General' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    courseType: 'IELTS Academic',
    ieltsType: 'Academic',
    currentStatus: 'Student',
    examTimeline: 'Within 2 Months',
    targetBand: '7.5'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialContext.toLowerCase().includes('general')) {
      setFormData(prev => ({ ...prev, courseType: 'IELTS General Training', ieltsType: 'General Training' }));
    } else if (initialContext.toLowerCase().includes('pte')) {
      setFormData(prev => ({ ...prev, courseType: 'PTE Academic' }));
    } else if (initialContext.toLowerCase().includes('spoken')) {
      setFormData(prev => ({ ...prev, courseType: 'Spoken English' }));
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast submission & confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Decorative/Offer Panel (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-br from-red-600 via-red-700 to-blue-950 p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Free 1-on-1 Consultation
                </div>

                <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                  Book Your Free 1:1 <span className="text-yellow-300">Counseling Session</span> with Our Master Trainer
                </h3>

                <p className="text-xs text-red-100 leading-relaxed">
                  Join over 5,000+ candidates who transformed their scores. Receive instant diagnostic evaluation and a personalized roadmap to Band 8.0+.
                </p>

                <div className="space-y-2.5 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Writing Evaluation (Task 1 or 2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>15-min Live Speaking Mock Test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Cambridge 2026 Vocab & Idiom Bank</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-red-500/50 flex items-center gap-2 text-xs text-red-100">
                <ShieldCheck className="w-5 h-5 text-yellow-300 shrink-0" />
                <span>100% Confidential • Zero Spam Guarantee</span>
              </div>
            </div>

            {/* Right Form Panel (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-8">
              <div className="mb-5">
                <h4 className="text-xl font-black text-slate-900">
                  Register for Free Demo Class
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our academic counselor will schedule your slot.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abhinandan Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-24 px-2 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-red-600"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>

                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10 digit WhatsApp number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-red-600 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Exam Course Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Exam
                    </label>
                    <select
                      value={formData.courseType}
                      onChange={(e) => setFormData({ ...formData, courseType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-red-600 cursor-pointer"
                    >
                      <option value="IELTS Academic">IELTS Academic</option>
                      <option value="IELTS General Training">IELTS General</option>
                      <option value="PTE Academic">PTE Academic</option>
                      <option value="Spoken English">Spoken English</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Score
                    </label>
                    <select
                      value={formData.targetBand}
                      onChange={(e) => setFormData({ ...formData, targetBand: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-red-600 cursor-pointer"
                    >
                      <option value="8.5">Band 8.5+</option>
                      <option value="8.0">Band 8.0</option>
                      <option value="7.5">Band 7.5</option>
                      <option value="7.0">Band 7.0</option>
                      <option value="CLB 10">CLB 10 (PR)</option>
                      <option value="79+">PTE 79+</option>
                    </select>
                  </div>
                </div>

                {/* Dynamic Questions (ForeignPrep format) */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Status
                    </label>
                    <select
                      value={formData.currentStatus}
                      onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800"
                    >
                      <option value="Student">College Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Recent Graduate">Recent Graduate</option>
                      <option value="School Student">High School</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Exam Timeline
                    </label>
                    <select
                      value={formData.examTimeline}
                      onChange={(e) => setFormData({ ...formData, examTimeline: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800"
                    >
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Within 2 Months">Within 2 Months</option>
                      <option value="Within 3-6 Months">Within 3-6 Months</option>
                      <option value="Not Decided">Not Decided Yet</option>
                    </select>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Scheduling Free Slot...</span>
                  ) : (
                    <>
                      <span>Confirm Free Slot & Get Study Kit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        ) : (
          /* Confirmation / Success Screen */
          <div className="p-8 sm:p-12 text-center max-w-lg mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-in zoom-in duration-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                Booking Confirmed!
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                You're All Set, {formData.name || 'Friend'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We have received your demo request for <strong className="text-red-600">{formData.courseType}</strong>. Our lead IELTS mentor will call you on <strong className="text-slate-900">{formData.countryCode} {formData.phone}</strong> within 15 minutes to confirm your preferred time slot.
              </p>
            </div>

            {/* Starter Kit Download Bonus */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold text-slate-900">
                  Cambridge 2026 IELTS Starter Kit
                </div>
                <div className="text-[11px] text-slate-500">
                  High-yield vocabulary bank, writing templates & speaking cue cards (PDF)
                </div>
              </div>
              <a
                href="#download-kit"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Cambridge 2026 IELTS Starter Kit (PDF) download initiated!");
                }}
                className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold text-xs p-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918284917080?text=Hi,%20I%20just%20booked%20a%20free%20IELTS%20demo%20for%20${formData.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
