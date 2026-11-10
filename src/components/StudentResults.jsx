import React, { useState } from 'react';
import { testimonials, statistics } from '../data/testimonialsData';
import { Award, Star, Quote, Play, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StudentResults({ onOpenModal }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoCards = [
    {
      id: "v1",
      title: "From Band 6.0 to 8.5 in 45 Days!",
      student: "Aarav Mehta • Admit: UBC Canada",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      band: "Band 8.5"
    },
    {
      id: "v2",
      title: "How I Scored 8.0 in Speaking First Try",
      student: "Simran Kaur • Admit: Manchester UK",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      band: "Band 8.0"
    },
    {
      id: "v3",
      title: "Canada PR CLB 10 Strategy Secrets",
      student: "Vikram Malhotra • Express Entry",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      band: "CLB 10"
    },
    {
      id: "v4",
      title: "PTE 86/90 in 3 Weeks with AI Scoring",
      student: "Neha Patel • Admit: Melbourne AUS",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      band: "PTE 86"
    }
  ];

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-red-600">Verified Test Reports</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1">
            Join <span className="text-red-600">5K+ Students</span> Who Turned Dreams into Achievements!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Inspect genuine scorecard breakdowns from our students who secured admissions to top global universities and permanent residency.
          </p>
        </div>

        {/* 4 Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statistics.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-red-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-red-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Student Testimonial Scorecards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border-2 border-slate-100 hover:border-slate-300 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                
                {/* Top: Student Profile & Band Pill */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-600"
                    />
                    <div>
                      <h4 className="font-black text-slate-900 text-base">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.exam}</p>
                      <p className="text-xs font-bold text-blue-900 mt-0.5">{item.destination}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-block bg-red-600 text-white font-black text-sm px-3 py-1 rounded-xl shadow-xs">
                      {item.overallScore}
                    </span>
                    <span className="block text-[10px] text-emerald-600 font-bold uppercase mt-1">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Score breakdown bar */}
                <div className="grid grid-cols-4 gap-2 bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">Listening</span>
                    <span className="text-sm font-black text-slate-900">{item.scores.L}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">Reading</span>
                    <span className="text-sm font-black text-slate-900">{item.scores.R}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">Writing</span>
                    <span className="text-sm font-black text-red-600">{item.scores.W}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">Speaking</span>
                    <span className="text-sm font-black text-blue-800">{item.scores.S}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-red-200 absolute -top-1 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-slate-600 relative z-10 italic leading-relaxed pl-3">
                    "{item.quote}"
                  </p>
                </div>

              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Official Test Report Form Verified
                </span>
                <span className="font-semibold text-slate-600">{item.program}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section (ForeignPrep hallmark) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Watch Our Students Share Their Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real candidates, real strategies, and genuine score certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoCards.map((video) => (
              <div 
                key={video.id}
                onClick={() => onOpenModal(`Video Story: ${video.student}`)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-slate-900 aspect-video sm:aspect-square flex flex-col justify-end p-4"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.student} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 text-left">
                  <span className="bg-red-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase">
                    {video.band}
                  </span>
                  <h4 className="text-white font-bold text-sm mt-1 line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-slate-300 text-[11px] truncate mt-0.5">
                    {video.student}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
