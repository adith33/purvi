import React from 'react';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import { Language } from '../translations';

interface TranslateButtonProps {
  currentLanguage: Language;
  onToggle: () => void;
  label: string;
  ariaLabel: string;
  className?: string;
}

export const TranslateButton: React.FC<TranslateButtonProps> = ({
  currentLanguage,
  onToggle,
  label,
  ariaLabel,
  className = '',
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.94 }}
      onClick={onToggle}
      aria-label={ariaLabel}
      className={`fixed top-[max(0.6rem,env(safe-area-inset-top))] left-[max(0.6rem,env(safe-area-inset-left))] sm:top-4 sm:left-4 z-[70] flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 min-h-[36px] sm:min-h-[44px] rounded-full glass-pink-strong border border-pink-300/80 shadow-md sm:shadow-lg shadow-pink-400/20 text-rose-950 hover:bg-white/95 transition-all duration-300 backdrop-blur-xl group cursor-pointer select-none touch-manipulation active:scale-95 ${className}`}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-pink-100/90 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Languages size={13} className="sm:w-[15px] sm:h-[15px]" />
      </div>

      {/* Compact on mobile, full label on desktop */}
      <span className="text-[11px] sm:text-sm font-medium tracking-tight whitespace-nowrap text-rose-900 group-hover:text-rose-950 font-sans-clean">
        <span className="sm:hidden">{currentLanguage === 'ar' ? 'EN' : 'عربي'}</span>
        <span className="hidden sm:inline">{label}</span>
      </span>
    </motion.button>
  );
};
