import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { ClickHereHint } from './ClickHereHint';

interface KeepsakeThoughtProps {
  title: string;
  teaser: string;
  openButtonText: string;
  lines: string[];
  finalQuote: string;
  language?: 'ar' | 'en';
}

export const KeepsakeThought: React.FC<KeepsakeThoughtProps> = ({
  title,
  teaser,
  openButtonText,
  lines,
  finalQuote,
  language = 'en',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Revealed line count: reveals in pairs (2 at a time) or can be incremented
  const [visibleCount, setVisibleCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // When user opens the thought, start revealing the first pair immediately
  const handleOpen = () => {
    setIsOpen(true);
    setVisibleCount(2);
  };

  // Timer to slowly reveal 1-2 lines at a time with a calm, peaceful cadence
  useEffect(() => {
    if (!isOpen || isFinished) return;

    if (visibleCount >= lines.length) {
      const timer = setTimeout(() => {
        setIsFinished(true);
      }, 900);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 2, lines.length));
    }, 2800);

    return () => clearTimeout(timer);
  }, [isOpen, visibleCount, lines.length, isFinished]);

  // Optional manual advance for Farha if she wants to read the next lines immediately
  const handleAdvance = () => {
    if (visibleCount < lines.length) {
      setVisibleCount((prev) => Math.min(prev + 2, lines.length));
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85dvh] py-20 sm:py-28 px-4 max-w-xl mx-auto flex flex-col items-center justify-center text-center select-none overflow-hidden"
    >
      {/* 🌸 Warm glowing ambient background aura */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div
          className="w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-gradient-to-tr from-pink-200/40 via-rose-100/45 to-amber-100/35 blur-3xl opacity-75 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>

      {/* ✨ Slowly floating subtle pink petals and tiny stars */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Floating petal 1 */}
        <motion.div
          animate={{
            y: [-10, 25, -10],
            x: [-8, 12, -8],
            rotate: [0, 20, 0],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-8 text-rose-300/60"
        >
          <LotusFlower size={20} variant="soft-pink" />
        </motion.div>

        {/* Floating petal 2 */}
        <motion.div
          animate={{
            y: [15, -20, 15],
            x: [10, -10, 10],
            rotate: [15, -15, 15],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-24 right-10 text-pink-300/50"
        >
          <LotusFlower size={18} variant="white" />
        </motion.div>

        {/* Floating petal 3 (bottom left) */}
        <motion.div
          animate={{
            y: [-15, 18, -15],
            x: [-6, 8, -6],
            rotate: [-10, 15, -10],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className="absolute bottom-16 left-12 text-rose-300/50"
        >
          <LotusFlower size={16} variant="soft-pink" />
        </motion.div>

        {/* Tiny twinkling star 1 */}
        <motion.div
          animate={{
            scale: [0.8, 1.25, 0.8],
            opacity: [0.3, 0.75, 0.3],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-16 text-amber-300/70"
        >
          <Star className="w-3.5 h-3.5 fill-amber-200" />
        </motion.div>

        {/* Tiny twinkling star 2 */}
        <motion.div
          animate={{
            scale: [1, 0.7, 1],
            opacity: [0.4, 0.85, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-1/3 left-10 text-pink-300/70"
        >
          <Star className="w-3 h-3 fill-pink-200" />
        </motion.div>
      </div>

      {/* Subtle Lotus Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-3"
      >
        <LotusFlower size={20} variant="soft-pink" />
        <span className="text-xs uppercase tracking-widest text-pink-600/90 font-medium font-sans-clean">
          {title}
        </span>
        <LotusFlower size={20} variant="soft-pink" />
      </motion.div>

      {/* Main Section Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-2xl sm:text-3xl lg:text-4xl text-rose-950 font-normal mb-6 tracking-tight leading-snug"
      >
        {title}
      </motion.h3>

      {/* Initial Teaser & Open Button (Before Opening) */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center max-w-md mx-auto"
          >
            {/* Soft nostalgic teaser */}
            <p className="text-lg sm:text-xl text-rose-800/90 font-serif italic mb-8 leading-relaxed px-4">
              "{teaser}"
            </p>

            {/* Glowing button to open this little thought */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              className="min-h-[48px] px-7 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white font-sans-clean text-sm sm:text-base font-medium shadow-[0_8px_20px_rgba(244,114,182,0.35)] hover:shadow-[0_10px_25px_rgba(244,114,182,0.45)] transition-all cursor-pointer flex items-center gap-2 touch-manipulation pointer-events-auto active:scale-95 [-webkit-tap-highlight-color:transparent]"
            >
              <span>{openButtonText}</span>
              <Heart className="w-4 h-4 fill-white/80 text-white" />
            </motion.button>
            <ClickHereHint onClick={handleOpen} language={language} />
          </motion.div>
        ) : (
          /* Revealed Thought Card with Slow Progressive Lines */
          <motion.div
            key="open"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative rounded-3xl p-6 sm:p-10 text-start bg-white/70 backdrop-blur-md border border-pink-200/80 shadow-[0_15px_35px_rgba(251,207,232,0.45)]"
          >
            {/* Subtle corner lotus accents */}
            <div className="absolute top-4 right-4 text-pink-300/40 pointer-events-none">
              <LotusFlower size={18} variant="soft-pink" />
            </div>
            <div className="absolute top-4 left-4 text-pink-300/40 pointer-events-none">
              <LotusFlower size={18} variant="soft-pink" />
            </div>

            {/* Message lines container */}
            <div className="space-y-4 sm:space-y-5 text-rose-950 font-serif leading-relaxed text-base sm:text-lg">
              {lines.slice(0, visibleCount).map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  className={`transition-colors ${
                    idx >= lines.length - 2
                      ? 'font-medium text-rose-800 text-lg sm:text-xl pt-2'
                      : 'text-rose-900/90'
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Reading pace indicator while lines are unveiling */}
            {!isFinished && visibleCount < lines.length && (
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-pink-100/80 text-xs text-rose-500/70 font-sans-clean">
                <span className="flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>...</span>
                </span>
                <button
                  onClick={handleAdvance}
                  className="min-h-[44px] px-3 py-1.5 rounded-full hover:bg-pink-50 text-pink-600 font-medium transition-colors cursor-pointer touch-manipulation active:scale-95"
                >
                  {visibleCount + 2 >= lines.length ? '🌸' : '...'}
                </button>
              </div>
            )}

            {/* ✨ Final Effect: Glowing pink heart + Quote + Settling sparkles */}
            <AnimatePresence>
              {isFinished && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mt-10 pt-8 border-t border-pink-200/70 flex flex-col items-center text-center"
                >
                  {/* Glowing pink heart surrounded by gentle settled sparkles */}
                  <div className="relative mb-5 flex items-center justify-center">
                    {/* Pulsing warm glow halo */}
                    <div className="absolute w-14 h-14 rounded-full bg-pink-400/25 blur-md animate-pulse" />

                    {/* Surrounding tiny sparkles */}
                    <motion.div
                      animate={{
                        scale: [0.9, 1.15, 0.9],
                        rotate: [0, 45, 0],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-2 -left-2 text-pink-400"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </motion.div>

                    <motion.div
                      animate={{
                        scale: [1, 0.85, 1],
                        rotate: [0, -30, 0],
                        opacity: [0.5, 0.85, 0.5],
                      }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute -bottom-1 -right-2 text-rose-400"
                    >
                      <Sparkles className="w-3 h-3" />
                    </motion.div>

                    <motion.div
                      animate={{
                        scale: [0.85, 1.1, 0.85],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute top-0 -right-3 text-pink-300"
                    >
                      <Star className="w-2.5 h-2.5 fill-pink-200" />
                    </motion.div>

                    {/* Small glowing pink heart */}
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shadow-[0_0_15px_rgba(244,114,182,0.45)] border border-pink-200"
                    >
                      <Heart className="w-5 h-5 fill-pink-400 text-pink-500 drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
                    </motion.div>
                  </div>

                  {/* Final quote */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.9 }}
                    className="text-base sm:text-lg font-serif italic text-rose-900/90 leading-relaxed max-w-md px-2"
                  >
                    "{finalQuote}"
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
