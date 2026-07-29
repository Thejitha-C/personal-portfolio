import React, { useState } from 'react';
import { ArrowUpRight, Bot, Download, ShoppingBag, Monitor, UserCheck, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import { ThreeCanvas } from './ThreeCanvas';
import { ProfileAvatar } from './ProfileAvatar';
import { AnimatedRole } from './AnimatedRole';

interface HeroProps {
  onOpenAiModal: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiModal, onOpenResumeModal }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="overview" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Ambient background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Heading & Display Typography */}
            <div className="space-y-2">
              <span className="block text-xl lg:text-2xl font-serif text-slate-600 dark:text-slate-400 font-normal tracking-wide">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold pt-1">
                <span className="text-slate-700 dark:text-slate-300 font-sans">I am a</span>
                <AnimatedRole className="text-xl sm:text-2xl lg:text-3xl font-extrabold" />
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Explore My Work CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Ask AI Representative CTA */}
              <button
                onClick={onOpenAiModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-2xs hover:-translate-y-0.5 group"
              >
                <Sparkles className="w-4 h-4 text-indigo-500 group-hover:rotate-12 transition-transform" />
                <span>Ask AI Representative</span>
              </button>

              {/* Download CV CTA */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors group"
              >
                <Download className="w-4 h-4 text-slate-500 group-hover:translate-y-0.5 transition-transform" />
                <span className="underline underline-offset-4">Download My CV</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column: Interactive Seamless 3D Stars Canvas & Floating Portrait */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]">
            {/* Background 3D Stars Canvas - Area confined to right side with soft edge blending */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none">
              <ThreeCanvas shape="stars" colorHex="#3b82f6" density={1400} />
              {/* Radial subtle ambient glow behind portrait */}
              <div className="absolute inset-0 bg-radial from-blue-600/15 via-transparent to-transparent blur-2xl opacity-70" />
            </div>

            {/* Seamless Content Wrapper (No card border/background) */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative z-10 w-full h-full flex flex-col items-center justify-between p-2 py-4 sm:p-6 transition-transform duration-200 ease-out gap-6"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Top Floating Badges */}
              <div className="w-full flex items-center justify-between gap-2 px-2">
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-md text-blue-400 dark:text-blue-300 border border-blue-500/30 shadow-sm font-bold">
                  FULL-STACK DEV
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md text-emerald-600 dark:text-emerald-300 text-xs font-semibold shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Sri Lanka</span>
                </div>
              </div>

              {/* Main Hero Portrait Frame & Dynamic Role */}
              <div className="my-auto flex flex-col items-center justify-center text-center py-2">
                <ProfileAvatar size="hero" showBadge={true} />
                <div className="mt-4 text-center space-y-1">
                  <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight font-sans block">
                    {PERSONAL_INFO.name}
                  </span>
                  <AnimatedRole className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 h-6" />
                </div>
              </div>

              {/* Bottom Tech Pills Bar */}
              <div className="w-full bg-slate-900/70 dark:bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-slate-700/50 shadow-lg text-white space-y-1 text-center sm:text-left">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Full-Stack & E-Commerce Specialist
                </div>
                <div className="text-xs text-slate-300 font-medium leading-relaxed">
                  WordPress • Elementor • React • Three.js • Modern WebGL
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Metrics Counter Bar at bottom of Hero */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          {METRICS.map((metric, idx) => {
            const icons = [ShoppingBag, Monitor, UserCheck, Star];
            const IconComponent = icons[idx] || Star;
            return (
              <div
                key={metric.label}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {metric.sublabel}
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
