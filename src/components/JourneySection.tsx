import React, { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Download, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

interface JourneySectionProps {
  onOpenResumeModal: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onOpenResumeModal }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'exp-1': true, // Keep latest expanded by default
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="journey" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3 text-left">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              CAREER & EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              A track record of growth, learning, and delivering measurable value through technology and business engineering.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-8">
          {TIMELINE.map((item) => {
            const isExpanded = !!expandedItems[item.id];
            const isExp = item.type === 'experience';

            return (
              <div key={item.id} className="relative pl-8 sm:pl-10 group">
                {/* Node Dot Icon */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${
                  isExp
                    ? 'bg-blue-50 dark:bg-slate-800 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'bg-emerald-50 dark:bg-slate-800 border-emerald-600 text-emerald-600 dark:text-emerald-400'
                }`}>
                  {isExp ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 p-5 sm:p-6 space-y-4 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-2xs">
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer gap-2"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        {item.status && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-blue-700 dark:text-blue-400 mt-0.5 flex items-center gap-2">
                        <span>{item.company}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                        {item.period}
                      </span>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Tags Pill Bar */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accordion Bullet Details */}
                  {isExpanded && (
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
