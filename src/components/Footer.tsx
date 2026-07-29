import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <ProfileAvatar size="sm" showBadge={false} />
            <div className="text-left">
              <div className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-500">
                {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#sandbox" className="hover:text-white transition-colors">Sandbox</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built for high performance & 3D Web architecture.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-300 transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
