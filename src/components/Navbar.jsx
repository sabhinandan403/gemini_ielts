import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Globe, 
  Calculator, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export default function Navbar({ onOpenModal, onToggleMobileMenu, isMobileMenuOpen }) {
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md shadow-red-500/20 text-white font-extrabold text-xl group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                GEMINI <span className="text-red-600">IELTS</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-900">
                Official Test Prep
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#home" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              Home
            </a>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdown(true)}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-red-600 py-2 transition-colors cursor-pointer"
                onClick={() => setCoursesDropdown(!coursesDropdown)}
              >
                <span>Online Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdown ? 'rotate-180 text-red-600' : ''}`} />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full -left-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    <a
                      href="#courses"
                      onClick={() => setCoursesDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-red-600 flex items-center gap-1.5">
                          IELTS Academic
                          <span className="text-[10px] bg-red-100 text-red-700 font-extrabold px-1.5 py-0.5 rounded">Band 8+</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">For university admissions in UK, Canada, USA, AUS</p>
                      </div>
                    </a>

                    <a
                      href="#courses"
                      onClick={() => setCoursesDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-blue-800 flex items-center gap-1.5">
                          IELTS General Training
                          <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.5 rounded">CLB 9/10</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">For Canada Express Entry PR & Australia Skilled Migration</p>
                      </div>
                    </a>

                    <a
                      href="#courses"
                      onClick={() => setCoursesDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-slate-900">PTE Academic</div>
                        <p className="text-xs text-slate-500 mt-0.5">Fast-track AI mock practice with 79+ guaranteed score</p>
                      </div>
                    </a>

                    <a
                      href="#courses"
                      onClick={() => setCoursesDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-emerald-700">Spoken English Fluency</div>
                        <p className="text-xs text-slate-500 mt-0.5">Hesitation removal, pronunciation & corporate fluency</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#calculator" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-red-600" />
              <span>Band Calculator</span>
            </a>

            <a 
              href="#results" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              Results
            </a>

            <a 
              href="#why-us" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              Why Us
            </a>

            <a 
              href="#faqs" 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918284917080"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-900 font-bold text-sm px-3 py-2 rounded-lg transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>+91 82849 17080</span>
            </a>

            <button
              onClick={() => onOpenModal('Navbar Free Demo')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book FREE Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenModal('Mobile Top CTA')}
              className="bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-lg shadow-md"
            >
              Free Demo
            </button>

            <button
              onClick={onToggleMobileMenu}
              className="p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
