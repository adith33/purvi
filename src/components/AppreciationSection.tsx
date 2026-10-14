import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface CardItem {
  id: string;
  text: string;
  extra?: string;
}

interface AppreciationSectionProps {
  title: string;
  cards: CardItem[];
  badge?: string;
  tapToRevealHint?: string;
}

export const AppreciationSection: React.FC<AppreciationSectionProps> = ({
  title,
  cards,
  badge = 'From the Heart',
  tapToRevealHint = 'Tap any card to reveal a note from the heart 💗',
}) => {
  // Automatically pop out / expand cards as they scroll into view
  const [activeCardIds, setActiveCardIds] = useState<Set<string>>(() => new Set());

  const toggleCard = (id: string) => {
    setActiveCardIds((prev) => {
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
    <section className="relative min-h-[85dvh] py-20 px-4 max-w-md mx-auto flex flex-col items-center">
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
        className="font-display text-3xl sm:text-4xl text-rose-950 font-normal text-center mb-2 tracking-tight leading-snug"
      >
        {title}
      </motion.h3>

      {/* Pop-out hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs text-pink-500/90 font-sans-clean mb-8 text-center flex items-center justify-center gap-1.5 select-none"
      >
        <Sparkles size={12} className="text-pink-400" />
        <span>{tapToRevealHint}</span>
        <Sparkles size={12} className="text-pink-400" />
      </motion.p>

      {/* Cards Stack */}
      <div className="w-full space-y-4">
        {cards.map((card, index) => {
          const isHighlight = index === cards.length - 1; // "And simply… you being Farha. 🌷"
          const isExpanded = activeCardIds.has(card.id);

          return (
            <motion.div
              key={card.id}
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
              onClick={() => toggleCard(card.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleCard(card.id);
                }
              }}
              className={`touch-manipulation select-none relative p-5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.98] ${
                isHighlight
                  ? 'glass-pink-strong border-pink-300/90 shadow-xl shadow-pink-400/25 ring-1 ring-pink-300/50'
                  : isExpanded
                  ? 'glass-pink-strong border-pink-300 shadow-md shadow-pink-300/25'
                  : 'glass-pink hover:border-pink-300 shadow-md shadow-pink-200/20'
              }`}
            >
              {/* Subtle background glow for highlight */}
              {isHighlight && (
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-300/30 to-rose-200/30 blur-md pointer-events-none" />
              )}

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isHighlight
                        ? 'bg-pink-500 text-white shadow-sm shadow-pink-400/50'
                        : isExpanded
                        ? 'bg-pink-100 text-pink-600 scale-105'
                        : 'bg-pink-100/90 text-pink-500'
                    }`}
                  >
                    {isHighlight ? (
                      <LotusFlower size={18} variant="white" />
                    ) : (
                      <Heart size={14} className="fill-pink-400 text-pink-400" />
                    )}
                  </div>

                  <p
                    className={`font-sans-clean text-base sm:text-lg leading-relaxed ${
                      isHighlight
                        ? 'font-medium text-rose-950'
                        : 'text-rose-900 font-normal'
                    }`}
                  >
                    {card.text}
                  </p>
                </div>

                <div className="shrink-0 text-pink-300">
                  {card.extra ? (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-pink-500' : ''
                      }`}
                    />
                  ) : (
                    <Sparkles size={16} />
                  )}
                </div>
              </div>

              {/* Expandable heartfelt extra note popping out automatically */}
              <AnimatePresence>
                {isExpanded && card.extra && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{
                      type: 'spring',
                      stiffness: 240,
                      damping: 24,
                      mass: 0.8,
                    }}
                    className="overflow-hidden pt-3.5 mt-3.5 border-t border-pink-200/70"
                  >
                    <motion.p
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.08, duration: 0.35 }}
                      className="font-sans-clean text-sm sm:text-base text-rose-800 font-normal leading-relaxed"
                    >
                      {card.extra}
                    </motion.p>
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
