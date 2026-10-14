import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface ClickHereHintProps {
  onClick?: () => void;
  language?: 'ar' | 'en';
  text?: string;
  className?: string;
  delay?: number;
  darkBg?: boolean;
}

export const ClickHereHint: React.FC<ClickHereHintProps> = ({
  onClick,
  language = 'en',
  text,
  className = '',
  delay = 0.2,
  darkBg = false,
}) => {
  const isAr = language === 'ar';
  const defaultText = isAr ? 'دوسي هنا ⬆' : 'Click here ⬆';
  const label = text || defaultText;

  const content = (
    <>
      <ArrowUp className={`w-3.5 h-3.5 shrink-0 animate-bounce ${darkBg ? 'text-pink-300' : 'text-pink-500'}`} />
      <span className="tracking-wide font-medium">{label}</span>
      <ArrowUp className={`w-3.5 h-3.5 shrink-0 animate-bounce ${darkBg ? 'text-pink-300' : 'text-pink-500'}`} />
    </>
  );

  if (onClick) {
    return (
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        aria-label={label}
        className={`mt-2.5 min-h-[38px] px-3.5 py-1.5 rounded-full flex items-center justify-center gap-1.5 text-xs sm:text-sm font-sans-clean cursor-pointer touch-manipulation active:scale-95 transition-all shadow-sm select-none pointer-events-auto [-webkit-tap-highlight-color:transparent] ${
          darkBg
            ? 'bg-pink-950/60 border border-pink-500/40 text-pink-200 hover:bg-pink-900/60 backdrop-blur-md'
            : 'glass-pink border border-pink-200/90 text-pink-600 hover:bg-white/80'
        } ${className}`}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`mt-2.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-sans-clean select-none pointer-events-none ${
        darkBg ? 'text-pink-200/90' : 'text-pink-600'
      } ${className}`}
    >
      {content}
    </motion.div>
  );
};
