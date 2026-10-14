import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface LearnedItem {
  id: string;
  tag: string;
  teaser: string;
  reveal: string;
  emoji: string;
}

interface ThingsAboutFarhaProps {
  badge: string;
  title: string;
  tapHint: string;
  items: LearnedItem[];
}

export const ThingsAboutFarha: React.FC<ThingsAboutFarhaProps> = ({
  badge,
  title,
  tapHint,
  items,
}) => {
  // Automatically pop out / expand messages as they scroll into view
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="relative min-h-[85dvh] py-20 sm:py-24 px-4 max-w-lg mx-auto flex flex-col items-center">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-pink-300/25 via-rose-200/20 to-pink-200/25 blur-3xl pointer-events-none" />

      {/* Lotus Badge Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-3"
      >
        <LotusFlower size={22} variant="blush" />
        <span className="text-xs uppercase tracking-widest text-pink-500 font-medium font-sans-clean">
          {badge}
        </span>
        <LotusFlower size={22} variant="blush" />
      </motion.div>

      {/* Main Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl text-rose-950 font-normal text-center mb-3 tracking-tight leading-snug"
      >
        {title}
      </motion.h3>

      {/* Pop-Out Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs text-pink-500/90 font-sans-clean flex items-center justify-center gap-1.5 mb-8 text-center select-none"
      >
        <Sparkles size={13} className="text-pink-400" />
        <span>{tapHint}</span>
        <Sparkles size={13} className="text-pink-400" />
      </motion.p>

      {/* Interactive Cards Grid */}
      <div className="w-full space-y-4">
        {items.map((item, index) => {
          const isExpanded = expandedIds.has(item.id);
          const isHighlight = index === items.length - 1; // "Farha deserves the best birthday"

          return (
            <motion.div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 22,
                mass: 0.8,
              }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleExpand(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleExpand(item.id);
                }
              }}
              className={`touch-manipulation select-none relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden active:scale-[0.98] ${
                isHighlight
                  ? 'glass-pink-strong border border-pink-300 shadow-lg shadow-pink-400/20 ring-1 ring-pink-300/40'
                  : isExpanded
                  ? 'glass-pink-strong border border-pink-300 shadow-md shadow-pink-300/25'
                  : 'glass-pink border border-pink-200/80 shadow-sm hover:shadow-md hover:border-pink-300'
              }`}
            >
              {/* Card Header / Teaser */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 shadow-sm transition-transform duration-300 ${
                      isHighlight
                        ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white'
                        : isExpanded
                        ? 'bg-pink-100 text-pink-600 scale-105'
                        : 'bg-white/80 border border-pink-100'
                    }`}
                  >
                    <span>{item.emoji}</span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-pink-500/90 font-sans-clean block">
                      {item.tag}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl text-rose-950 font-normal mt-0.5">
                      {item.teaser}
                    </h4>
                  </div>
                </div>

                <div className="shrink-0 text-pink-400">
                  {isExpanded ? <ChevronUp size={20} className="text-pink-500" /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Expandable Reveal Body (Pops Out Automatically on Scroll) */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, scale: 0.95 }}
                    animate={{ height: 'auto', opacity: 1, scale: 1 }}
                    exit={{ height: 0, opacity: 0, scale: 0.95 }}
                    transition={{
                      type: 'spring',
                      stiffness: 240,
                      damping: 24,
                      mass: 0.8,
                    }}
                    className="overflow-hidden border-t border-pink-200/60 bg-gradient-to-b from-white/50 to-pink-50/40 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.08, duration: 0.35 }}
                      className="p-5 pt-4"
                    >
                      <p className="font-sans-clean text-base text-rose-900 leading-relaxed font-normal">
                        {item.reveal}
                      </p>
                      {item.id === 'tl-1' && (
                        <div className="mt-3.5 pt-3 border-t border-pink-200/50 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-pink-100/90 text-pink-800 border border-pink-300/80 shadow-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 ring-1 ring-pink-300" />
                            1. Pink 🌸
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100/90 text-purple-800 border border-purple-300/80 shadow-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-1 ring-purple-300" />
                            2. Purple 💜
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-sky-100/90 text-sky-800 border border-sky-300/80 shadow-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-1 ring-sky-300" />
                            3. Blue 💙
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 shadow-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-emerald-300" />
                            4. Green 💚
                          </span>
                        </div>
                      )}
                      <div className="mt-3 flex items-center justify-end gap-1.5 text-pink-500 text-xs">
                        <Heart size={12} className="fill-pink-400 text-pink-400 animate-pulse" />
                        <span className="font-medium text-[11px] tracking-wide">Farha Special</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
