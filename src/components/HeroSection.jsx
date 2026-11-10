import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Award, 
  Users, 
  Clock, 
  TrendingUp,
  Play
} from 'lucide-react';

export default function HeroSection({ onOpenModal }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
              <span>Official 2026 Cambridge Pattern Prep • Target Band 7.5+</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Best <span className="text-red-600 underline decoration-red-300 decoration-wavy decoration-2">IELTS Online Coaching</span> for Band 8.0+
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Join India's most trusted test preparation platform. Personalized 1:1 speaking mock interviews, rigorous line-by-line essay corrections, and live interactive daily classes led by certified master trainers.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Certified Master Trainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Daily 1:1 Speaking Mocks</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Flexible Morning/Evening Batches</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Target Band Score Guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onOpenModal('Hero Free Demo')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book a FREE 1:1 Demo Class</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 font-bold text-base px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Band Calculator</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                    +5k
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-800 ml-1">4.9/5</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Over 5,000+ IELTS test takers</span>
                </div>
              </div>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-blue-800" />
                <div>
                  <div className="text-xs font-bold text-slate-900">British Council & IDP</div>
                  <div className="text-[11px] text-slate-500">Curriculum Aligned</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Fast Consultation Box */}
          <div className="lg:col-span-5 relative">
            
            {/* Red Accent Hero Box (Signature ForeignPrep style) */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-red-600/30 relative overflow-hidden border border-red-500">
              
              {/* Background badge pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-48 h-48" />
              </div>

              <div className="relative z-10 space-y-6">
                
                {/* Floating pill */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Expert Consultation
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Unlock Your IELTS Success with a Free 1:1 Demo!
                  </h3>
                  <p className="text-red-100 text-xs sm:text-sm mt-2 leading-relaxed">
                    Get an instant band diagnostic, review 2026 exam trends, and map out your path to top universities or permanent residency.
                  </p>
                </div>

                {/* White Consultation Card inside */}
                <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Talk to Our IELTS Advisor</span>
                      <span className="text-lg font-black text-slate-900">+91 82849 17080</span>
                    </div>
                    <a
                      href="tel:+918284917080"
                      className="w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                      aria-label="Call directly"
                    >
                      <PhoneCall className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free evaluation of 1 writing task</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>15-min live speaking mock interview</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Personalized Band 7.5+ study schedule</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenModal('Hero Card Book Now')}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free Slot Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Trust Stat line */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-red-500/50">
                  <div>
                    <div className="text-xl font-black text-white">8.0+</div>
                    <div className="text-[10px] text-red-100 uppercase tracking-wider">Avg Band</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">96%</div>
                    <div className="text-[10px] text-red-100 uppercase tracking-wider">First Pass</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">1:1</div>
                    <div className="text-[10px] text-red-100 uppercase tracking-wider">Mentoring</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
