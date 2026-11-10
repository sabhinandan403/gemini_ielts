import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Heart
} from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-24 sm:pb-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-red-600/30">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  GEMINI <span className="text-red-500">IELTS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Online Learning Platform
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Premier online English language testing prep platform dedicated to helping aspirants crack IELTS, PTE, and Spoken English. Offering personalized coaching, authentic mock tests, and 1:1 expert guidance.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Helpline: <a href="tel:+918284917080" className="text-white font-bold hover:text-red-400">+91 82849 17080</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>Email: <a href="mailto:info@gemini-ielts.com" className="text-white hover:text-red-400">info@gemini-ielts.com</a></span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                f
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                in
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                yt
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                ig
              </a>
            </div>
          </div>

          {/* Test Prep Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Test Preparation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">IELTS Academic (Band 8+ Target)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">IELTS General Training (Canada PR)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">IELTS 30-Day Express Booster</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">1:1 Speaking & Writing Elite</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">PTE Academic Comprehensive</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-red-400 transition-colors">Spoken English & Global Fluency</a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Resources & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-red-400 transition-colors">Band Score Calculator</a>
              </li>
              <li>
                <a href="#results" className="hover:text-red-400 transition-colors">Student Results & Scores</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">Why Choose Gemini</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-red-400 transition-colors">FAQs & Admissions</a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('Footer Free Demo')} 
                  className="text-red-400 hover:text-red-300 font-bold transition-colors cursor-pointer text-left"
                >
                  Book Free Demo Class
                </button>
              </li>
            </ul>
          </div>

          {/* Registered Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  4th Floor, Tech Innovation Campus, 18th Cross Rd, BTM Layout 1st Stage, Bengaluru, Karnataka 560068, India.
                </span>
              </div>
              <div className="pt-2">
                <span className="text-slate-300 font-bold block">Support Hours:</span>
                <span>Monday - Saturday: 8:00 AM - 10:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-500 leading-relaxed">
          <strong className="text-slate-400 font-bold">Disclaimer: </strong>
          IELTS is a registered trademark of the University of Cambridge ESOL, the British Council, and IDP Education Australia. PTE is a registered trademark of Pearson PLC. Gemini IELTS is an independent educational training provider and is not officially affiliated with or endorsed by Cambridge, British Council, IDP, or Pearson. All materials are used purely for educational reference.
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Gemini IELTS. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Cancellation & Refund</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
