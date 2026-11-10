import React, { useState } from 'react';
import { courses } from '../data/coursesData';
import { 
  Check, 
  Star, 
  Clock, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Calendar 
} from 'lucide-react';

export default function CoursesGrid({ onOpenModal }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'ielts' | 'pte' | 'spoken'

  const filteredCourses = courses.filter((c) => {
    if (filter === 'all') return true;
    if (filter === 'ielts') return c.id.startsWith('ielts');
    if (filter === 'pte') return c.id.startsWith('pte');
    if (filter === 'spoken') return c.id.startsWith('spoken');
    return true;
  });

  return (
    <section id="courses" className="py-16 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-600">Our Signature Programs</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1">
            Turn Your Dreams into Reality with <span className="text-red-600">Gemini IELTS</span> Courses
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Structured batches, verified Cambridge test kits, and rigorous personalized feedback tailored for your specific target score.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Programs ({courses.length})
            </button>
            <button
              onClick={() => setFilter('ielts')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'ielts'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              IELTS (Academic & General)
            </button>
            <button
              onClick={() => setFilter('pte')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'pte'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              PTE Academic
            </button>
            <button
              onClick={() => setFilter('spoken')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'spoken'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Spoken English Fluency
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 border-b border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 text-[11px]">({course.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {course.title}
                </h3>
                
                <div className="text-xs font-bold text-blue-900">
                  {course.type}
                </div>

                {/* Course Metadata pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg">
                    <FileText className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                    <span className="truncate">{course.mockTests}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Curriculum Features
                </div>

                <ul className="space-y-2.5">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-[11px] text-red-900 font-medium mt-4">
                  <strong className="font-extrabold text-red-700">Best for:</strong> {course.popularFor}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 sm:p-7 bg-slate-50 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => onOpenModal(`Course: ${course.title}`)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md shadow-red-600/20 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo Class</span>
                </button>

                <button
                  onClick={() => onOpenModal(`Syllabus: ${course.title}`)}
                  className="w-full bg-white hover:bg-slate-100 text-slate-700 font-bold py-2 px-3 rounded-lg text-xs border border-slate-200 transition-colors text-center"
                >
                  Download Complete 2026 Syllabus (PDF)
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
