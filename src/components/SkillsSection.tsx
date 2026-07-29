import React, { useState } from 'react';
import {
  Atom, Box, Code2, Server, Layers, Palette, FileCode, Terminal,
  Database, GitBranch, Globe, Cpu, HardDrive, ShoppingCart, ArrowRight
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: '3d', label: '3D & Graphics' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'ecommerce', label: 'E-Commerce & WordPress' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Box': return Box;
      case 'Code2': return Code2;
      case 'Server': return Server;
      case 'Layers': return Layers;
      case 'Palette': return Palette;
      case 'FileCode': return FileCode;
      case 'Terminal': return Terminal;
      case 'Database': return Database;
      case 'GitBranch': return GitBranch;
      case 'Globe': return Globe;
      case 'Cpu': return Cpu;
      case 'HardDrive': return HardDrive;
      case 'ShoppingCart': return ShoppingCart;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3 text-left">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              CORE COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical Mastery & 3D Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              I engineer clean, scalable solutions using modern web standards, interactive 3D WebGL frameworks, and full-stack e-commerce architecture.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>View Related Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <div
                key={skill.id}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col items-center justify-between text-center"
              >
                {/* Level Badge - Top Right */}
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600/80 shadow-2xs">
                    {skill.level}%
                  </span>
                </div>

                {/* Big Centered Logo Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center p-4 shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300 my-2">
                  {skill.logoUrl ? (
                    <img
                      src={skill.logoUrl}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-xs"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallbackEl = e.currentTarget.nextElementSibling;
                        if (fallbackEl) fallbackEl.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <IconComponent
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${skill.logoUrl ? 'hidden' : ''}`}
                    style={{ color: skill.color }}
                  />
                </div>

                {/* Skill Title & Description */}
                <div className="w-full space-y-1.5 mt-2">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[2.5rem] flex items-center justify-center">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 px-0.5">
                    <span>Proficiency</span>
                    <span className="font-mono" style={{ color: skill.color }}>
                      {skill.level}/100
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/80 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-700">
                    <div
                      className="h-full rounded-full transition-all duration-700 shadow-xs"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
