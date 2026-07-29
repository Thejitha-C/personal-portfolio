import React, { useState, useEffect } from 'react';
import { Search, Command, Bot, Download, Mail, Layers, Code, User, ArrowRight, X } from 'lucide-react';
import { SKILLS, PROJECTS } from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiModal: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenAiModal,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'ai-rep',
      title: 'Ask AI Representative',
      subtitle: 'Ask about skills, background, or availability',
      icon: Bot,
      handler: () => {
        onClose();
        onOpenAiModal();
      },
    },
    {
      id: 'resume',
      title: 'View & Download CV',
      subtitle: 'Official PDF Resume for Thejitha Chanupathi',
      icon: Download,
      handler: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      id: 'sec-overview',
      title: 'Go to Overview',
      subtitle: 'Hero section & key background',
      icon: User,
      handler: () => {
        onClose();
        window.location.hash = '#overview';
      },
    },
    {
      id: 'sec-skills',
      title: 'Go to Core Competencies',
      subtitle: 'React, Three.js, E-Commerce, PHP, Node.js',
      icon: Code,
      handler: () => {
        onClose();
        window.location.hash = '#skills';
      },
    },
    {
      id: 'sec-projects',
      title: 'Go to Featured Projects',
      subtitle: 'Eteon Solutions, Orchi-Flora, Systems Optimization',
      icon: Layers,
      handler: () => {
        onClose();
        window.location.hash = '#projects';
      },
    },
    {
      id: 'sec-contact',
      title: 'Contact Thejitha',
      subtitle: 'Email or phone details',
      icon: Mail,
      handler: () => {
        onClose();
        window.location.hash = '#contact';
      },
    },
  ];

  const filteredActions = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 rounded font-mono border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => {
              const IconComp = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={action.handler}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {action.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {action.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-slate-500">
              No matching commands found for "{query}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span className="font-mono">Thejitha Chanupathi Portfolio</span>
        </div>
      </div>
    </div>
  );
};
