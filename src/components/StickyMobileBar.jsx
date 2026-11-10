import React from 'react';
import { PhoneCall, Calendar, MessageCircle } from 'lucide-react';

export default function StickyMobileBar({ onOpenModal }) {
  return (
    <>
      {/* Floating WhatsApp Button (visible on all screens) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        <a
          href="https://wa.me/918284917080?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20IELTS%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white/20" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Sticky Bottom Bar on Mobile screens */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          
          <a
            href="tel:+918284917080"
            className="flex items-center justify-center gap-2 bg-slate-100 active:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Call Us Now</span>
          </a>

          <button
            onClick={() => onOpenModal('Sticky Mobile Bar')}
            className="flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white font-black py-2.5 px-3 rounded-xl text-xs shadow-md shadow-red-600/30 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Demo</span>
          </button>

        </div>
      </div>
    </>
  );
}
