import React from 'react';
import { GraduationCap, BookOpen, Award, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function ExamSelector({ onSelectCategory, onOpenModal }) {
  const pathways = [
    {
      id: "academic",
      title: "IELTS Academic",
      target: "Undergrad & Postgrad Study Abroad",
      description: "Target Band 7.5 to 8.5 for admission to Ivy League, Russell Group, and Group of Eight universities.",
      icon: GraduationCap,
      color: "border-red-500 hover:border-red-600 bg-red-50/40 hover:bg-red-50/80 text-red-700",
      iconBg: "bg-red-600 text-white",
      badge: "Most In-Demand"
    },
    {
      id: "general",
      title: "IELTS General Training",
      target: "Canada PR & Australia Work Visa",
      description: "Designed to achieve CLB 9 & 10 (8777 formula: L:8, R:7, W:7, S:7) to maximize your immigration points.",
      icon: BookOpen,
      color: "border-blue-500 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-50/80 text-blue-900",
      iconBg: "bg-blue-800 text-white",
      badge: "CLB 9/10 Target"
    },
    {
      id: "pte",
      title: "PTE Academic",
      target: "AI-Powered English Exam",
      description: "Specialized practice software matching Pearson scoring algorithms with proven templates for 79+ score.",
      icon: Award,
      color: "border-slate-700 hover:border-slate-900 bg-slate-50 hover:bg-slate-100 text-slate-900",
      iconBg: "bg-slate-900 text-white",
      badge: "Fast Results"
    },
    {
      id: "spoken",
      title: "Spoken English & Fluency",
      target: "Global Communication & Careers",
      description: "Overcome hesitation, master British/Global pronunciation, and speak fluently in interviews and everyday life.",
      icon: Globe,
      color: "border-emerald-500 hover:border-emerald-600 bg-emerald-50/40 hover:bg-emerald-50/80 text-emerald-800",
      iconBg: "bg-emerald-600 text-white",
      badge: "Confidence"
    }
  ];

  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-600">Choose Your Goal</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1">
            Find the Right Program to Get Started with <span className="text-red-600">Gemini IELTS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Whether you want to study at a top global university, obtain permanent residency, or speak English with effortless confidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-white border-2 border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-red-600 mt-1">
                    {item.target}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#courses"
                    className="text-xs font-bold text-slate-800 hover:text-red-600 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                  </a>

                  <button
                    onClick={() => onOpenModal(`${item.title} Card`)}
                    className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    Free Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
