import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, Award } from 'lucide-react';

export default function BottomCTA({ onOpenModal }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-blue-950 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl shadow-red-600/20 relative overflow-hidden">
          
          {/* Background decorative blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-16 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-white/20 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-yellow-300">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Free Demo Seats Available This Week
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Achieve Your Dream <span className="text-yellow-300">IELTS Band Score</span>?
            </h2>

            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto leading-relaxed">
              Connect with India's finest IELTS and English counselors. Join our free demo class today and embark on your journey to top international universities or permanent residency!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenModal('Bottom Banner Book Now')}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-red-600 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Session Now</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </button>

              <a
                href="tel:+918284917080"
                className="w-full sm:w-auto bg-slate-950/50 hover:bg-slate-950 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl transition-colors border border-white/20 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <span>Call +91 82849 17080</span>
              </a>
            </div>

            <div className="pt-6 border-t border-red-500/40 flex flex-wrap items-center justify-center gap-6 text-xs text-red-100">
              <span>✓ Certified Trainers</span>
              <span>✓ 100% Free Initial Assessment</span>
              <span>✓ No Credit Card Required</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
