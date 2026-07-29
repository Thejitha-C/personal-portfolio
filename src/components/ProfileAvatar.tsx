import React, { useState } from 'react';
import { ZoomIn, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  size = 'hero',
  showBadge = true,
}) => {
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // List of candidate URLs to load user's actual portrait photo
  const photoSources = [
    PERSONAL_INFO.photoUrl,
    ...(PERSONAL_INFO.photoFallbackUrls || []),
  ];

  const currentPhoto = photoSources[fallbackIndex] || photoSources[0];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackIndex + 1 < photoSources.length) {
      // Try next fallback URL (e.g. alternative Google Drive CDN endpoints)
      setFallbackIndex((prev) => prev + 1);
    } else {
      // If all external links fail, show SVG vector fallback
      e.currentTarget.style.display = 'none';
      const fallbackEl = e.currentTarget.nextElementSibling;
      if (fallbackEl) fallbackEl.classList.remove('hidden');
    }
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    hero: 'w-48 h-48 sm:w-60 sm:h-60',
  };

  return (
    <>
      <div className={`relative group inline-block ${className}`}>
        {/* Glow backdrop ring */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:scale-105" />

        {/* Profile Card Container */}
        <div
          onClick={() => setIsZoomed(true)}
          className={`relative ${sizeClasses[size]} rounded-3xl overflow-hidden border-2 border-white/80 dark:border-slate-800 bg-slate-900 shadow-2xl flex items-center justify-center cursor-pointer`}
        >
          {/* Main Photo Image with onError Fallback chain */}
          <img
            src={currentPhoto}
            alt={`${PERSONAL_INFO.name} Portrait`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />

          {/* Detailed SVG Illustration Fallback (Matches Black Suit, White Shirt, Wireframe Glasses & Dark Beard) */}
          <div className="hidden w-full h-full bg-slate-950 flex-col items-center justify-center relative overflow-hidden text-slate-200">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Studio Backdrop */}
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#2a324b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#090d16" />
                </linearGradient>
              </defs>
              <rect width="200" height="200" fill="url(#bgGrad)" />

              {/* White Dress Shirt Collars */}
              <polygon points="100,135 80,180 120,180" fill="#ffffff" />
              <polygon points="85,130 100,165 70,150" fill="#f1f5f9" />
              <polygon points="115,130 100,165 130,150" fill="#e2e8f0" />

              {/* Black Suit Lapels & Jacket */}
              <path
                d="M 30,200 L 70,130 L 100,150 L 130,130 L 170,200 Z"
                fill="url(#suitGrad)"
              />
              <polygon points="70,130 88,175 60,175" fill="#0f172a" />
              <polygon points="130,130 112,175 140,175" fill="#0f172a" />

              {/* Neck & Face Base */}
              <rect x="88" y="110" width="24" height="28" fill="#d9a584" rx="4" />
              <path
                d="M 68,75 C 68,115 132,115 132,75 C 132,45 68,45 68,75 Z"
                fill="#e8b99b"
              />

              {/* Dark Hair & Hairstyle */}
              <path
                d="M 66,70 C 66,35 134,35 134,70 C 130,42 70,42 66,70 Z"
                fill="#1a1a1a"
              />
              <path
                d="M 72,52 C 90,38 120,40 132,56 C 120,44 88,44 72,52 Z"
                fill="#2d2d2d"
              />

              {/* Beard & Mustache */}
              <path
                d="M 72,82 C 72,118 128,118 128,82 C 122,108 78,108 72,82 Z"
                fill="#262626"
                opacity="0.9"
              />
              <path
                d="M 82,92 C 90,88 100,90 100,92 C 100,90 110,88 118,92 C 112,97 88,97 82,92 Z"
                fill="#1e1e1e"
              />

              {/* Eyeglasses (Wireframe) */}
              <rect
                x="74"
                y="68"
                width="22"
                height="16"
                rx="4"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
              />
              <rect
                x="104"
                y="68"
                width="22"
                height="16"
                rx="4"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
              />
              <line
                x1="96"
                y1="74"
                x2="104"
                y2="74"
                stroke="#64748b"
                strokeWidth="2"
              />
              <line
                x1="78"
                y1="70"
                x2="88"
                y2="80"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <line
                x1="108"
                y1="70"
                x2="118"
                y2="80"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Hover Overlay Zoom Icon */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
            <span className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors">
              <ZoomIn className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Verification Status Badge */}
        {showBadge && (
          <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-white dark:border-slate-800 rounded-full px-2.5 py-1 flex items-center gap-1 shadow-lg text-[10px] font-bold text-white">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>VERIFIED ENGINEER</span>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Photo Zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-2xl text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto}
              alt={PERSONAL_INFO.name}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl mx-auto border border-slate-800 shadow-md"
            />
            <div className="text-white space-y-1">
              <h3 className="font-bold text-lg">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-slate-400">{PERSONAL_INFO.title}</p>
            </div>
            <button
              onClick={() => setIsZoomed(false)}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-500 transition-colors shadow-sm"
            >
              Close View
            </button>
          </div>
        </div>
      )}
    </>
  );
};
