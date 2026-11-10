import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Award, ArrowRight, CheckCircle2, Info } from 'lucide-react';

export default function BandScoreCalculator({ onOpenModal }) {
  const [examType, setExamType] = useState('academic'); // 'academic' | 'general'
  const [listeningScore, setListeningScore] = useState(32); // 0 - 40
  const [readingScore, setReadingScore] = useState(30); // 0 - 40
  const [writingBand, setWritingBand] = useState(7.0);
  const [speakingBand, setSpeakingBand] = useState(7.5);

  // Official IELTS Listening Conversion (Academic & General are identical)
  const getListeningBand = (score) => {
    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 32) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 26) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 18) return 5.5;
    if (score >= 16) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4.0;
    if (score >= 6) return 3.5;
    return 3.0;
  };

  // Official IELTS Reading Conversion (Academic vs General differ)
  const getReadingBand = (score, type) => {
    if (type === 'academic') {
      if (score >= 39) return 9.0;
      if (score >= 37) return 8.5;
      if (score >= 35) return 8.0;
      if (score >= 33) return 7.5;
      if (score >= 30) return 7.0;
      if (score >= 27) return 6.5;
      if (score >= 23) return 6.0;
      if (score >= 19) return 5.5;
      if (score >= 15) return 5.0;
      if (score >= 13) return 4.5;
      if (score >= 10) return 4.0;
      if (score >= 6) return 3.5;
      return 3.0;
    } else {
      // General Training requires higher raw score
      if (score === 40) return 9.0;
      if (score === 39) return 8.5;
      if (score >= 37) return 8.0;
      if (score === 36) return 7.5;
      if (score >= 34) return 7.0;
      if (score >= 32) return 6.5;
      if (score >= 30) return 6.0;
      if (score >= 27) return 5.5;
      if (score >= 23) return 5.0;
      if (score >= 19) return 4.5;
      if (score >= 15) return 4.0;
      if (score >= 12) return 3.5;
      return 3.0;
    }
  };

  // Official IELTS rounding rule:
  // e.g. 6.25 -> 6.5, 6.75 -> 7.0, 6.125 -> 6.0, 6.375 -> 6.5, 6.875 -> 7.0
  const listeningBand = useMemo(() => getListeningBand(listeningScore), [listeningScore]);
  const readingBand = useMemo(() => getReadingBand(readingScore, examType), [readingScore, examType]);

  const overallBand = useMemo(() => {
    const rawAverage = (listeningBand + readingBand + writingBand + speakingBand) / 4;
    const decimal = rawAverage - Math.floor(rawAverage);

    if (decimal < 0.25) {
      return Math.floor(rawAverage);
    } else if (decimal < 0.75) {
      return Math.floor(rawAverage) + 0.5;
    } else {
      return Math.ceil(rawAverage);
    }
  }, [listeningBand, readingBand, writingBand, speakingBand]);

  // CEFR & Level insights
  const getInsight = (band) => {
    if (band >= 8.5) {
      return {
        level: "CEFR C2 - Expert User",
        description: "Fluent, accurate and near-native. Eligible for Top 10 Ivy League, Oxford, Cambridge, and Medical Council registrations.",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200"
      };
    } else if (band >= 7.5) {
      return {
        level: "CEFR C1 - Very Good User",
        description: "Meets entry requirements for 99% of global universities (Canada, UK, USA, Australia) and maximum CLB 10 points for Canada PR.",
        color: "text-blue-800 bg-blue-50 border-blue-200"
      };
    } else if (band >= 6.5) {
      return {
        level: "CEFR B2 - Competent User",
        description: "Meets standard undergrad and several postgrad thresholds. With 2-3 weeks of structured coaching, you can easily bridge to Band 7.5+.",
        color: "text-amber-800 bg-amber-50 border-amber-200"
      };
    } else {
      return {
        level: "CEFR B1 - Modest User",
        description: "Requires structured vocabulary and grammatical foundation classes. Our Comprehensive Masterclass is highly recommended for you.",
        color: "text-red-700 bg-red-50 border-red-200"
      };
    }
  };

  const insight = getInsight(overallBand);

  return (
    <section id="calculator" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            <span>Official Cambridge Scoring Formula</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Interactive <span className="text-red-600">IELTS Band Score</span> Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Enter your practice test raw scores below to calculate your estimated overall Band Score and explore your university & visa eligibility.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Test Selector Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-100/70 p-2 sm:p-3 gap-2">
            <button
              onClick={() => setExamType('academic')}
              className={`flex-1 py-3 px-4 rounded-xl font-black text-sm transition-all cursor-pointer ${
                examType === 'academic'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              IELTS Academic (Higher Study Abroad)
            </button>
            <button
              onClick={() => setExamType('general')}
              className={`flex-1 py-3 px-4 rounded-xl font-black text-sm transition-all cursor-pointer ${
                examType === 'general'
                  ? 'bg-blue-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              IELTS General Training (PR & Migration)
            </button>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Listening Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    Listening Raw Score (0 - 40)
                  </span>
                  <span className="font-black text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md text-xs">
                    {listeningScore} / 40 = Band {listeningBand.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={listeningScore}
                  onChange={(e) => setListeningScore(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>0 (Band 2.0)</span>
                  <span>23 (Band 6.0)</span>
                  <span>30 (Band 7.0)</span>
                  <span>35 (Band 8.0)</span>
                  <span>40 (Band 9.0)</span>
                </div>
              </div>

              {/* Reading Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    Reading Raw Score (0 - 40)
                  </span>
                  <span className="font-black text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-md text-xs">
                    {readingScore} / 40 = Band {readingBand.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={readingScore}
                  onChange={(e) => setReadingScore(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>0 (Band 2.0)</span>
                  <span>{examType === 'academic' ? '23 (Band 6.0)' : '30 (Band 6.0)'}</span>
                  <span>{examType === 'academic' ? '30 (Band 7.0)' : '34 (Band 7.0)'}</span>
                  <span>{examType === 'academic' ? '35 (Band 8.0)' : '37 (Band 8.0)'}</span>
                  <span>40 (Band 9.0)</span>
                </div>
              </div>

              {/* Writing & Speaking Selectors */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Writing Expected Band
                  </label>
                  <select
                    value={writingBand}
                    onChange={(e) => setWritingBand(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-sm focus:outline-red-600 cursor-pointer"
                  >
                    {[5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                      <option key={b} value={b}>Band {b.toFixed(1)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Speaking Expected Band
                  </label>
                  <select
                    value={speakingBand}
                    onChange={(e) => setSpeakingBand(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-sm focus:outline-red-600 cursor-pointer"
                  >
                    {[5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                      <option key={b} value={b}>Band {b.toFixed(1)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 text-slate-600 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Official IELTS rounding rule applies: Average scores ending in .25 round UP to the nearest half band; scores ending in .75 round UP to the whole band.
                </span>
              </div>

            </div>

            {/* Right Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-red-600/20 rounded-full blur-2xl" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                Calculated Result
              </span>

              {/* Giant Overall Band Number */}
              <div className="my-3">
                <div className="text-6xl sm:text-7xl font-black text-white tracking-tight">
                  {overallBand.toFixed(1)}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                  Overall Band Score
                </div>
              </div>

              {/* 4 Module summary pill */}
              <div className="grid grid-cols-4 gap-2 bg-white/10 rounded-xl p-2.5 text-xs font-bold my-4">
                <div>
                  <div className="text-[10px] text-slate-400">L</div>
                  <div className="text-white">{listeningBand.toFixed(1)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">R</div>
                  <div className="text-white">{readingBand.toFixed(1)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">W</div>
                  <div className="text-white">{writingBand.toFixed(1)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">S</div>
                  <div className="text-white">{speakingBand.toFixed(1)}</div>
                </div>
              </div>

              {/* Eligibility badge */}
              <div className={`p-3 rounded-xl border text-xs font-medium text-left mb-5 ${insight.color}`}>
                <div className="font-extrabold">{insight.level}</div>
                <div className="text-[11px] mt-1 opacity-90 leading-relaxed">{insight.description}</div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenModal(`Calculator Result Band ${overallBand.toFixed(1)}`)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get 1:1 Plan to Reach Band 8.5+</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
