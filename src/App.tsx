import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { Sandbox3DSection } from './components/Sandbox3DSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiRepresentativeModal } from './components/AiRepresentativeModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'skills', 'projects', 'journey', 'sandbox', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white antialiased transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Hero Showcase Section */}
      <Hero
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Core Competencies & Skills */}
      <SkillsSection />

      {/* Featured Projects Portfolio */}
      <ProjectsSection />

      {/* Career & Education Journey Timeline */}
      <JourneySection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Interactive 3D WebGL Sandbox */}
      <Sandbox3DSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AiRepresentativeModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />
    </div>
  );
}
