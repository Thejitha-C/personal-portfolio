import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AnimatedRoleProps {
  className?: string;
  roles?: string[];
  intervalMs?: number;
}

export const AnimatedRole: React.FC<AnimatedRoleProps> = ({
  className = '',
  roles = PERSONAL_INFO.roles,
  intervalMs = 2800,
}) => {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const timer = setInterval(() => {
      // Start fade out
      setFadeState('out');

      // Change text at midpoint of transition
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFadeState('in');
      }, 350); // 350ms fade duration
    }, intervalMs);

    return () => clearInterval(timer);
  }, [roles, intervalMs]);

  const currentRole = roles[index] || roles[0];

  return (
    <div className={`inline-flex items-center overflow-hidden h-9 sm:h-10 ${className}`}>
      <span
        className={`inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-400 transition-all duration-300 transform ${
          fadeState === 'in'
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-2 scale-95'
        }`}
      >
        {currentRole}
      </span>
    </div>
  );
};
