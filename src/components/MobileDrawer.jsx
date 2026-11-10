import React, { useState } from 'react';
import { 
  X, 
  ChevronDown, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Globe, 
  Calculator, 
  Phone, 
  MessageCircle, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose, onOpenModal }) {
  const [coursesOpen, setCoursesOpen] = useState(true);

  if (!isOpen) return null;

  const handleLinkClick = (anchor) => {
    onClose();
    if (anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative ml-auto w-5/6 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-base">
              G
            </div>
            <span className="font-extrabold text-slate-900 text-lg">
              GEMINI <span className="text-red-600">IELTS</span>
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Nav List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          <button
            onClick={() => {
              onClose();
              onOpenModal('Mobile Drawer Free Session');
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a FREE Demo Session</span>
          </button>

          <nav className="space-y-1">
            <button
              onClick={() => handleLinkClick('#home')}
              className="w-full text-left font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </button>

            {/* Courses accordion */}
            <div>
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="w-full flex items-center justify-between font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>Online Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180 text-red-600' : ''}`} />
              </button>

              {coursesOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1">
                  <button
                    onClick={() => handleLinkClick('#courses')}
                    className="w-full flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-red-600 p-2 rounded-lg hover:bg-red-50"
                  >
                    <GraduationCap className="w-4 h-4 text-red-600" />
                    <span>IELTS Academic (Band 8+)</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('#courses')}
                    className="w-full flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50"
                  >
                    <BookOpen className="w-4 h-4 text-blue-800" />
                    <span>IELTS General (PR CLB 10)</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('#courses')}
                    className="w-full flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100"
                  >
                    <Award className="w-4 h-4 text-slate-900" />
                    <span>PTE Academic (AI Software)</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('#courses')}
                    className="w-full flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 p-2 rounded-lg hover:bg-emerald-50"
                  >
                    <Globe className="w-4 h-4 text-emerald-600" />
                    <span>Spoken English Fluency</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('#calculator')}
              className="w-full flex items-center gap-2 font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <Calculator className="w-4 h-4 text-red-600" />
              <span>Band Score Calculator</span>
            </button>

            <button
              onClick={() => handleLinkClick('#results')}
              className="w-full text-left font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Student Results & Band 8.5+
            </button>

            <button
              onClick={() => handleLinkClick('#why-us')}
              className="w-full text-left font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleLinkClick('#faqs')}
              className="w-full text-left font-semibold text-slate-800 hover:text-red-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Frequently Asked Questions
            </button>
          </nav>

          <hr className="border-slate-100" />

          {/* Quick Contact buttons in drawer */}
          <div className="space-y-2">
            <a
              href="tel:+918284917080"
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call: +91 82849 17080</span>
            </a>

            <a
              href="https://wa.me/918284917080?text=Hi,%20I%20am%20interested%20in%20IELTS%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            British Council & IDP Aligned Training
          </p>
        </div>

      </div>
    </div>
  );
}
