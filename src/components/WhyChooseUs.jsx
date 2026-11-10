import React from 'react';
import { 
  FileCheck2, 
  MessageSquare, 
  Clock, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Headphones,
  BookCheck,
  Check
} from 'lucide-react';

export default function WhyChooseUs({ onOpenModal }) {
  const pillars = [
    {
      number: "01",
      title: "Comprehensive English & IELTS Preparation",
      description: "Step-by-step master lessons covering all 4 modules (Listening, Reading, Writing & Speaking) with proprietary Cambridge strategies to conquer difficult academic texts and rapid audio transitions.",
      icon: BookCheck,
      color: "border-red-500",
      iconBg: "bg-red-50 text-red-600"
    },
    {
      number: "02",
      title: "1-on-1 Daily Live Speaking Interviews",
      description: "No robotic practice. Practice live 1:1 with certified IELTS examiners who simulate the exact test room atmosphere, pinpoint fluency gaps, and coach you on idiomatic language and natural pronunciation.",
      icon: MessageSquare,
      color: "border-blue-600",
      iconBg: "bg-blue-50 text-blue-700"
    },
    {
      number: "03",
      title: "Line-by-Line Writing Task 1 & 2 Marking",
      description: "Receive detailed, color-coded feedback on every essay within 24 hours. We evaluate your Task Response, Coherence & Cohesion, Lexical Resource, and Grammatical Range with official band score criteria.",
      icon: FileCheck2,
      color: "border-slate-800",
      iconBg: "bg-slate-100 text-slate-800"
    },
    {
      number: "04",
      title: "Flexible Timings & 100% Accountability",
      description: "Early morning (7 AM) and late evening (9 PM) batches for busy students and working professionals. Missed a session? Access HD cloud recordings, vocabulary flashcards, and homework 24/7.",
      icon: Clock,
      color: "border-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-700"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-red-600">The Gemini Advantage</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1">
            Join <span className="text-red-600">Gemini IELTS</span>: Here's Why!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We don't believe in generic lectures. Our data-backed teaching methodology has helped over 5,000+ candidates secure Band 7.5 and above in their very first attempt.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.number}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${item.iconBg}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-red-600 tracking-wider">STEP {item.number}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ForeignPrep-Style Middle Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Free Demo Available
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              Experience Our Teaching Style with Zero Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Attend a live class, receive a free diagnostic band scorecard, and speak directly with our senior British Council certified trainer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenModal('Why Us Banner Free Demo')}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book FREE Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+918284917080"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors border border-white/20 text-center"
            >
              Call Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
