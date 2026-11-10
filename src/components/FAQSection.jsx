import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';

export default function FAQSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-red-600">Got Questions?</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our IELTS online coaching, 1:1 demo sessions, mock tests, and band guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2">
                      <span className="text-red-600 font-extrabold text-sm">{index + 1}.</span>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Support Card on Right (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-md sticky top-24">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900">
                Still Have Questions?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Can't find the answer you're looking for? Speak directly with our senior educational advisor today.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="tel:+918284917080"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-red-400" />
                <span>Call: +91 82849 17080</span>
              </a>

              <a
                href="https://wa.me/918284917080?text=Hi,%20I%20have%20questions%20about%20IELTS%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp an Advisor</span>
              </a>

              <button
                onClick={() => onOpenModal('FAQ Side Help Card')}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-red-600/20"
              >
                <span>Request a Callback</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
