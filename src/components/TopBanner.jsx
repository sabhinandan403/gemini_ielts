import React from 'react';
import { Phone, Gift, Calendar, MessageCircle } from 'lucide-react';

export default function TopBanner({ onOpenModal }) {
  return (
    <div className="bg-slate-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side: Offer */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center justify-center p-1 bg-red-600/30 text-red-400 rounded-full">
            <Gift className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium text-slate-200">
            Claim <strong className="text-red-400 font-bold">FREE Demo Class</strong> & 1:1 Band Score Diagnostic (Limited Slots)
          </span>
        </div>

        {/* Right Side: CTAs & Phone */}
        <div className="flex items-center gap-4 text-slate-300">
          <button
            onClick={() => onOpenModal('General Demo')}
            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a FREE Session</span>
          </button>

          <span className="text-slate-600 hidden md:inline">|</span>

          <a
            href="tel:+918284917080"
            className="hidden md:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span className="font-bold">+91 82849 17080</span>
          </a>

          <a
            href="https://wa.me/918284917080?text=Hi,%20I%20am%20interested%20in%20IELTS%20preparation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
