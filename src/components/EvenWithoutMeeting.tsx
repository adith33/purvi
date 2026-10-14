import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface EvenWithoutMeetingProps {
  badge: string;
  title: string;
  lines: string[];
  closing: string;
}

export const EvenWithoutMeeting: React.FC<EvenWithoutMeetingProps> = ({
  badge,
  title,
  lines,
  closing,
}) => {
  return (
    <section className="relative min-h-[85dvh] py-16 sm:py-24 px-4 max-w-lg mx-auto flex flex-col items-center justify-center text-center">
      {/* Background Soft Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-pink-300/30 via-rose-200/30 to-pink-200/30 blur-3xl pointer-events-none" />

      {/* Floating Lotus Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-3"
      >
        <LotusFlower size={22} variant="soft-pink" />
        <span className="text-xs uppercase tracking-widest text-pink-500 font-medium font-sans-clean">
          {badge}
        </span>
        <LotusFlower size={22} variant="soft-pink" />
      </motion.div>

      {/* Main Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl text-rose-950 font-normal mb-8 sm:mb-12 tracking-tight leading-snug"
      >
        {title}
      </motion.h3>

      {/* Tender Letter / Emotional Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative p-6 sm:p-10 rounded-3xl glass-pink-strong border border-pink-300/80 shadow-2xl shadow-pink-400/25 space-y-6 text-center mobile-touch-pop select-text"
      >
        {/* Corner Lotus Icon with RTL support */}
        <div className="absolute top-4 ltr:left-4 rtl:right-4 opacity-40">
          <LotusFlower size={20} variant="soft-pink" />
        </div>
        <div className="absolute top-4 ltr:right-4 rtl:left-4 opacity-40">
          <Sparkles size={18} className="text-pink-400" />
        </div>

        {/* Lines revealed slowly */}
        <div className="space-y-4">
          {lines.map((line, index) => {
            const isHighlight =
              index === lines.length - 2 || index === lines.length - 1; // "you became my bestfriend" / "glad our paths crossed"
            const isTransition = line.includes('…') && line.length < 20;

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-30px', once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`leading-relaxed ${
                  isHighlight
                    ? 'font-display text-xl sm:text-2xl text-rose-950 font-normal pt-2'
                    : isTransition
                    ? 'font-display text-lg text-pink-600 font-normal italic'
                    : 'font-sans-clean text-base sm:text-lg text-rose-900/90 font-light'
                }`}
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* Bottom Closing Affirmation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="pt-6 border-t border-pink-200/70 flex flex-col items-center justify-center gap-2"
        >
          <div className="p-2 rounded-full bg-pink-100/90 text-pink-500 mb-1">
            <Heart size={18} className="fill-pink-400 text-pink-400" />
          </div>
          <p className="font-handwriting text-2xl text-rose-900 font-bold">
            {closing}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
